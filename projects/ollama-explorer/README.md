# Ollama Explorer

Web interface to explore different scenarios with local models via [Ollama](https://ollama.com).

## Prerequisites

1. [Ollama](https://ollama.com/download) installed and running
2. At least one model pulled, for example:

```bash
ollama pull mistral
```

## Installation

```bash
npm install
```

## Usage

### Simple mode (recommended)

Starts the Express server that serves the interface and APIs:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### Development mode (Vite + hot reload)

In two terminals:

```bash
# Terminal 1 — backend
npm run dev:server

# Terminal 2 — frontend with /api proxy
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Available scenarios

| Scenario       | Description                                    |
|----------------|------------------------------------------------|
| **Chat**       | Conversation with messages and system prompt   |
| **Generate**   | Simple completion via `ollama.generate`        |
| **Streaming**  | Token-by-token response in real time           |
| **Embeddings** | Converts text into a numeric vector            |
| **Models**     | Lists locally installed models                 |

## API

| Method | Route              | Description            |
|--------|--------------------|------------------------|
| GET    | `/api/models`      | List models            |
| POST   | `/api/chat`        | Chat completion        |
| POST   | `/api/generate`    | Text generation        |
| POST   | `/api/chat/stream` | Chat with SSE streaming|
| POST   | `/api/embed`       | Generate embeddings    |
