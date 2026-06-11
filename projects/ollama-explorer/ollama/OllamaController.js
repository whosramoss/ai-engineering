import * as OllamaModel from "./OllamaModel.js";

export async function getModels(_req, res) {
  try {
    const models = await OllamaModel.listModels();
    res.json(models);
  } catch {
    res.status(503).json({
      error: "Ollama unavailable. Make sure it is running at localhost:11434.",
    });
  }
}

export async function postChat(req, res) {
  const { model, messages, system } = req.body;

  if (!messages?.length) {
    return res.status(400).json({ error: "Send at least one message." });
  }

  try {
    const result = await OllamaModel.chat({ model, messages, system });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postGenerate(req, res) {
  const { model, prompt, system } = req.body;

  if (!prompt?.trim()) {
    return res.status(400).json({ error: "Send a prompt." });
  }

  try {
    const result = await OllamaModel.generate({ model, prompt, system });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postEmbed(req, res) {
  const { model, input } = req.body;

  if (!input?.trim()) {
    return res.status(400).json({ error: "Send text to generate embeddings." });
  }

  try {
    const result = await OllamaModel.embed({ model, input });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postChatStream(req, res) {
  const { model, messages, system } = req.body;

  if (!messages?.length) {
    return res.status(400).json({ error: "Send at least one message." });
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    for await (const token of OllamaModel.chatStream({ model, messages, system })) {
      res.write(`data: ${JSON.stringify({ token })}\n\n`);
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
    res.end();
  }
}
