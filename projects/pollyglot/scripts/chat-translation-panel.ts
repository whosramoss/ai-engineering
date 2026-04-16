import { BasePanel } from "./base-panel"
import { UI_TEXT } from "./ui-text"
import type { TranslatorService } from "./translator-service"

export class ChatTranslationPanel extends BasePanel {
  private readonly inputElement: HTMLTextAreaElement
  private readonly buttonElement: HTMLButtonElement
  private readonly errorElement: HTMLElement
  private readonly feedElement: HTMLElement
  private readonly languageInputName = "chat-lang"

  constructor(translatorService: TranslatorService) {
    super(translatorService)
    this.inputElement = document.querySelector("#chat-input")!
    this.buttonElement = document.querySelector("#chat-send")!
    this.errorElement = document.querySelector("#chat-error")!
    this.feedElement = document.querySelector("#chat-feed")!
  }

  init(): void {
    this.buttonElement.addEventListener("click", () => {
      void this.handleSend()
    })
  }

  private appendMessage(text: string, isUserMessage = false): void {
    const messageElement = document.createElement("p")
    messageElement.className = isUserMessage
      ? "ml-auto max-w-[85%] rounded-lg border border-white/20 bg-white px-3 py-2 text-sm text-black"
      : "max-w-[85%] rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white"
    messageElement.textContent = text
    this.feedElement.appendChild(messageElement)
    this.feedElement.scrollTop = this.feedElement.scrollHeight
  }

  private validateInput(input: string, language: string): boolean {
    if (!input) {
      this.setError(this.errorElement, UI_TEXT.chatMissingInput)
      return false
    }

    if (!language) {
      this.setError(this.errorElement, UI_TEXT.missingLanguage)
      return false
    }

    return true
  }

  private async handleSend(): Promise<void> {
    const input = this.inputElement.value.trim()
    const language = this.getSelectedLanguage(this.languageInputName)
    if (!this.validateInput(input, language)) return

    this.setError(this.errorElement)
    this.buttonElement.textContent = UI_TEXT.translating
    this.appendMessage(input, true)

    try {
      const translatedText = await this.translatorService.translate(
        input,
        language,
      )
      this.appendMessage(translatedText, false)
      this.inputElement.value = ""
    } catch {
      this.setError(this.errorElement, UI_TEXT.genericError)
    } finally {
      this.buttonElement.textContent = UI_TEXT.send
    }
  }
}
