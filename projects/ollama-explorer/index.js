import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as OllamaController from "./ollama/OllamaController.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/models", OllamaController.getModels);
app.post("/api/chat", OllamaController.postChat);
app.post("/api/generate", OllamaController.postGenerate);
app.post("/api/embed", OllamaController.postEmbed);
app.post("/api/chat/stream", OllamaController.postChatStream);

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
