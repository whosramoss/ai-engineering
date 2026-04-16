import OpenAI from "openai"

export class TranslatorService {
  private readonly client: OpenAI

  constructor() {
    const apiKey =
      import.meta.env.VITE_OPENAI_API_KEY ??
      (typeof process !== "undefined" ? process.env.OPENAI_API_KEY : undefined)

    this.client = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    })
  }

  async translate(input: string, language: string): Promise<string> {
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are a contextual translator. Reply with only the translated text.",
      },
      {
        role: "user",
        content: `"${input}" in ${language}`,
      },
    ]

    const response = await this.client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    })

    const text = response.choices[0]?.message?.content
    if (text == null) {
      throw new Error("Empty translation response")
    }
    return text
  }
}
