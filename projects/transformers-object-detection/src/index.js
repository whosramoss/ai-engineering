import { pipeline } from "@huggingface/transformers";

class BoundingBoxRenderer {
  constructor(container) {
    this.container = container;
  }

  clear() {
    this.container
      .querySelectorAll(".bounding-box")
      .forEach((box) => box.remove());
  }

  randomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
    );
  }

  draw(detectedObject) {
    const { score, label, box } = detectedObject;
    const { xmin, ymin, xmax, ymax } = box;
    const color = this.randomColor();

    const boxElement = document.createElement("div");
    boxElement.className = "bounding-box";
    Object.assign(boxElement.style, {
      borderColor: color,
      left: 100 * xmin + "%",
      top: 100 * ymin + "%",
      width: 100 * (xmax - xmin) + "%",
      height: 100 * (ymax - ymin) + "%",
    });

    const labelElement = document.createElement("span");
    labelElement.textContent = `${label}: ${Math.floor(score * 100)}%`;
    labelElement.className = "bounding-box-label";
    labelElement.style.backgroundColor = color;

    boxElement.appendChild(labelElement);
    this.container.appendChild(boxElement);
  }

  drawAll(detectedObjects) {
    this.clear();
    for (const detectedObject of detectedObjects) {
      this.draw(detectedObject);
    }
  }
}

class ObjectDetectorApp {
  constructor() {
    this.statusEl = document.getElementById("status");
    this.imageEl = document.getElementById("image");
    this.detectButton = document.getElementById("detect-objects");
    this.imageContainer = document.getElementById("image-container");
    this.renderer = new BoundingBoxRenderer(this.imageContainer);
    this.detector = null;
  }

  setStatus(text, state = "default") {
    this.statusEl.textContent = text;
    this.statusEl.dataset.state = state;
  }

  bindEvents() {
    this.detectButton.addEventListener("click", () => this.detectAndDraw());
  }

  async init() {
    this.setStatus("Loading model...", "loading");
    this.detector = await pipeline("object-detection");
    this.detectButton.disabled = false;
    this.bindEvents();
    this.setStatus("Ready", "ready");
  }

  async detectAndDraw() {
    this.detectButton.disabled = true;
    this.setStatus("Detecting...", "loading");

    const detectedObjects = await this.detector(this.imageEl.src, {
      threshold: 0.95,
      percentage: true,
    });

    this.setStatus("Drawing...", "loading");
    this.renderer.drawAll(detectedObjects);
    this.setStatus("Done!", "done");
    this.detectButton.disabled = false;
  }
}

const app = new ObjectDetectorApp();
await app.init();
