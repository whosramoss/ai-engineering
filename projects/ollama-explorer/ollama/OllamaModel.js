import ollama from "ollama";

export const DEFAULT_MODEL = "mistral";

function withSystem(messages, system) {
  if (!system) return messages;
  return [{ role: "system", content: system }, ...messages];
}

export async function listModels() {
  const { models } = await ollama.list();
  return models.map((m) => ({
    name: m.name,
    size: m.size,
    modified: m.modified_at,
  }));
}

export async function chat({ model = DEFAULT_MODEL, messages, system }) {
  const response = await ollama.chat({
    model,
    messages: withSystem(messages, system),
    stream: false,
  });

  return {
    content: response.message.content,
    model: response.model,
    totalDuration: response.total_duration,
  };
}

export async function generate({ model = DEFAULT_MODEL, prompt, system }) {
  const response = await ollama.generate({
    model,
    prompt,
    system,
    stream: false,
  });

  return {
    content: response.response,
    model: response.model,
    totalDuration: response.total_duration,
  };
}

export async function embed({ model = DEFAULT_MODEL, input }) {
  const response = await ollama.embed({ model, input });

  return {
    embeddings: response.embeddings,
    dimensions: response.embeddings[0]?.length ?? 0,
    model: response.model,
  };
}

export async function *chatStream({ model = DEFAULT_MODEL, messages, system }) {
  const stream = await ollama.chat({
    model,
    messages: withSystem(messages, system),
    stream: true,
  });

  for await (const chunk of stream) {
    const token = chunk.message?.content ?? "";
    if (token) yield token;
  }
}
