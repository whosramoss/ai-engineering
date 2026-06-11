async function request(path, options = {}) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || "Request failed");
  }

  return res;
}

export async function fetchModels() {
  const res = await request("/api/models");
  return res.json();
}

export async function sendChat({ model, messages, system }) {
  const res = await request("/api/chat", {
    method: "POST",
    body: JSON.stringify({ model, messages, system }),
  });
  return res.json();
}

export async function sendGenerate({ model, prompt, system }) {
  const res = await request("/api/generate", {
    method: "POST",
    body: JSON.stringify({ model, prompt, system }),
  });
  return res.json();
}

export async function sendEmbed({ model, input }) {
  const res = await request("/api/embed", {
    method: "POST",
    body: JSON.stringify({ model, input }),
  });
  return res.json();
}

export async function *streamChat({ model, messages, system }) {
  const res = await fetch("/api/chat/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, messages, system }),
  });

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;

      const payload = line.slice(6);
      if (payload === "[DONE]") return;

      const data = JSON.parse(payload);
      if (data.error) throw new Error(data.error);
      if (data.token) yield data.token;
    }
  }
}
