import * as ApiModel from "./ApiModel.js";
import { UiView } from "./UiView.js";

export class AppController {
  constructor() {
    this.view = new UiView();
  }

  init() {
    this.view.bindTabSwitch((scenario) => this.view.switchScenario(scenario));
    this.view.bindRefreshModels(() => this.loadModels());
    this.view.bindAction("btn-chat", () => this.handleChat());
    this.view.bindAction("btn-generate", () => this.handleGenerate());
    this.view.bindAction("btn-stream", () => this.handleStream());
    this.view.bindAction("btn-embed", () => this.handleEmbed());
    this.view.bindAction("btn-models", () => this.handleListModels());

    this.loadModels();
  }

  async loadModels() {
    this.view.setStatus("Loading models...", "loading");

    try {
      const models = await ApiModel.fetchModels();
      this.view.renderModels(models);
      this.view.setStatus(`${models.length} model(s) found`, "success");
    } catch (error) {
      this.view.setStatus(error.message, "error");
    }
  }

  async handleChat() {
    const content = this.view.getValue("chat-input");
    const system = this.view.getValue("chat-system");

    if (!content) return this.view.setStatus("Enter a message.", "error");

    this.view.setLoading(true);
    this.view.setStatus("Sending chat...", "loading");
    this.view.setResponse("");

    try {
      const data = await ApiModel.sendChat({
        model: this.view.getModel(),
        messages: [{ role: "user", content }],
        system: system || undefined,
      });

      this.view.setResponse(data.content);
      this.view.setStatus(`Completed in ${(data.totalDuration / 1e9).toFixed(2)}s`, "success");
    } catch (error) {
      this.view.setResponse(error.message);
      this.view.setStatus("Error", "error");
    } finally {
      this.view.setLoading(false);
    }
  }

  async handleGenerate() {
    const prompt = this.view.getValue("generate-prompt");
    const system = this.view.getValue("generate-system");

    if (!prompt) return this.view.setStatus("Enter a prompt.", "error");

    this.view.setLoading(true);
    this.view.setStatus("Generating text...", "loading");
    this.view.setResponse("");

    try {
      const data = await ApiModel.sendGenerate({
        model: this.view.getModel(),
        prompt,
        system: system || undefined,
      });

      this.view.setResponse(data.content);
      this.view.setStatus(`Completed in ${(data.totalDuration / 1e9).toFixed(2)}s`, "success");
    } catch (error) {
      this.view.setResponse(error.message);
      this.view.setStatus("Error", "error");
    } finally {
      this.view.setLoading(false);
    }
  }

  async handleStream() {
    const content = this.view.getValue("stream-input");
    const system = this.view.getValue("stream-system");

    if (!content) return this.view.setStatus("Enter a message.", "error");

    this.view.setLoading(true);
    this.view.setStatus("Streaming...", "loading");
    this.view.setResponse("");

    try {
      let fullText = "";

      for await (const token of ApiModel.streamChat({
        model: this.view.getModel(),
        messages: [{ role: "user", content }],
        system: system || undefined,
      })) {
        fullText += token;
        this.view.setResponse(fullText);
      }

      this.view.setStatus("Streaming complete", "success");
    } catch (error) {
      this.view.setResponse(error.message);
      this.view.setStatus("Error", "error");
    } finally {
      this.view.setLoading(false);
    }
  }

  async handleEmbed() {
    const input = this.view.getValue("embed-input");

    if (!input) return this.view.setStatus("Enter some text.", "error");

    this.view.setLoading(true);
    this.view.setStatus("Generating embedding...", "loading");
    this.view.setResponse("");

    try {
      const data = await ApiModel.sendEmbed({
        model: this.view.getModel(),
        input,
      });

      const preview = data.embeddings[0]?.slice(0, 8).map((n) => n.toFixed(6));
      this.view.setResponse({
        dimensions: data.dimensions,
        model: data.model,
        preview: `[${preview?.join(", ")}, ...]`,
        note: "Showing only the first 8 values of the vector.",
      });
      this.view.setStatus(`${data.dimensions} dimensions`, "success");
    } catch (error) {
      this.view.setResponse(error.message);
      this.view.setStatus("Error", "error");
    } finally {
      this.view.setLoading(false);
    }
  }

  async handleListModels() {
    this.view.setLoading(true);
    this.view.setStatus("Listing models...", "loading");

    try {
      const models = await ApiModel.fetchModels();
      this.view.setResponse(
        models.length ? models : "No models installed. Run: ollama pull mistral"
      );
      this.view.setStatus(`${models.length} model(s)`, "success");
    } catch (error) {
      this.view.setResponse(error.message);
      this.view.setStatus("Error", "error");
    } finally {
      this.view.setLoading(false);
    }
  }
}
