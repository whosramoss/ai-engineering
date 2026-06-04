# Transformers.js — Object Detection

A **browser-based object detection** demo powered by [Transformers.js](https://huggingface.co/docs/transformers.js) from Hugging Face.

## What is Transformers.js?

**Transformers.js** is a JavaScript library that lets you run machine learning models directly in the browser (or in Node.js), without relying on a remote inference server. It uses [ONNX Runtime Web](https://onnxruntime.ai/) to run models converted to the ONNX format with strong performance, including WebGPU support when available.

With it, you can use pre-trained Hugging Face models for tasks such as:

- **Computer vision** — object detection, image classification, segmentation
- **Natural language processing (NLP)** — sentiment analysis, translation, text generation, embeddings
- **Audio** — transcription, audio classification

Models are downloaded on demand and executed locally on the user's device, keeping data on the machine and removing the need for an external inference API.

## What this project does

This app loads an **object-detection** pipeline from Transformers.js, analyzes an image (`road.jpeg`), and draws bounding boxes with a label and confidence score for each detected object — all in real time on the client.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm start
```

Open [http://localhost:5173](http://localhost:5173), wait for the model to load, and click **Detect Objects**.

## Available scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm start`       | Starts Vite in development mode    |
| `npm run dev`     | Alias for `npm start`              |
| `npm run build`   | Builds for production into `dist/` |
| `npm run preview` | Previews the production build      |

## Project structure

```
src/
├── index.html   # Application UI
├── index.js     # Detection logic (OOP)
├── style.css    # Styles
└── road.jpeg    # Sample image
```

## About the course

Project from the Scrimba [AI Engineer Path](https://scrimba.com/the-ai-engineer-path-c02v/~01f/s0ibia5or2/head).
