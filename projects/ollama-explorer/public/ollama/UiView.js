export class UiView {
  constructor() {
    this.modelSelect = document.getElementById("model");
    this.statusEl = document.getElementById("status");
    this.responseEl = document.getElementById("response");

    this.panels = {
      chat: document.getElementById("panel-chat"),
      generate: document.getElementById("panel-generate"),
      stream: document.getElementById("panel-stream"),
      embed: document.getElementById("panel-embed"),
      models: document.getElementById("panel-models"),
    };
  }

  getModel() {
    return this.modelSelect.value;
  }

  setStatus(text, type = "") {
    this.statusEl.textContent = text;
    this.statusEl.className = `status ${type}`;
  }

  setResponse(content) {
    this.responseEl.textContent =
      typeof content === "string" ? content : JSON.stringify(content, null, 2);
  }

  setLoading(isLoading) {
    document.querySelectorAll(".btn-primary").forEach((btn) => {
      btn.disabled = isLoading;
    });
  }

  renderModels(models) {
    this.modelSelect.innerHTML = models.length
      ? models.map((m) => `<option value="${m.name}">${m.name}</option>`).join("")
      : '<option value="mistral">mistral (default)</option>';
  }

  switchScenario(scenario) {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.scenario === scenario);
    });

    Object.entries(this.panels).forEach(([name, panel]) => {
      panel.classList.toggle("active", name === scenario);
    });
  }

  getValue(id) {
    return document.getElementById(id).value.trim();
  }

  bindTabSwitch(handler) {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => handler(tab.dataset.scenario));
    });
  }

  bindRefreshModels(handler) {
    document.getElementById("refresh-models").addEventListener("click", handler);
  }

  bindAction(id, handler) {
    document.getElementById(id).addEventListener("click", handler);
  }
}
