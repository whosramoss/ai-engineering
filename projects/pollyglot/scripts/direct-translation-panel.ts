import { BasePanel } from "./base-panel"
import { UI_TEXT } from "./ui-text"
import type { TranslatorService } from "./translator-service"

export class DirectTranslationPanel extends BasePanel {
  private readonly inputElement: HTMLTextAreaElement
  private readonly buttonElement: HTMLButtonElement
  private readonly errorElement: HTMLElement
  private readonly resultElement: HTMLElement
  private readonly languageInputName = "index-lang"

  constructor(translatorService: TranslatorService) {
    super(translatorService)
    this.inputElement = document.querySelector("#index-input")!
    this.buttonElement = document.querySelector("#index-translate")!
    this.errorElement = document.querySelector("#index-error")!
    this.resultElement = document.querySelector("#index-result")!
  }

  init(): void {
    this.buttonElement.addEventListener("click", () => {
      void this.handleTranslate()
    })
  }

  private resetResultSelection(): void {
    this.resultElement.innerHTML = `
    <legend class="mb-1 text-neutral-300">Select a language</legend>
    <select
      id="index-lang"
      name="index-lang"
      class="language-select"
      aria-label="Target language for translation"
    >
      <option value="">Choose a language…</option>
      <option value="Portuguese">Portuguese</option>
      <option value="English">English</option>
      <option value="French">French</option>
    </select>
  `
  }

  private renderTranslation(translation: string): void {
    this.resultElement.innerHTML = `<p class="rounded-lg border border-white/20 bg-white/10 p-3 text-sm">${translation}</p>`
  }

  private resetPanel(): void {
    this.resetResultSelection()
    this.setError(this.errorElement)
    this.inputElement.value = ""
    this.buttonElement.textContent = UI_TEXT.translate
  }

  private validateInput(input: string, language: string): boolean {
    if (!input) {
      this.setError(this.errorElement, UI_TEXT.indexMissingInput)
      return false
    }

    if (!language) {
      this.setError(this.errorElement, UI_TEXT.missingLanguage)
      return false
    }

    return true
  }

  private async handleTranslate(): Promise<void> {
    if (this.buttonElement.textContent === UI_TEXT.startOver) {
      this.resetPanel()
      return
    }

    const input = this.inputElement.value.trim()
    const language = this.getSelectedLanguage(this.languageInputName)
    if (!this.validateInput(input, language)) return

    this.buttonElement.textContent = UI_TEXT.translating

    try {
      const translatedText = await this.translatorService.translate(
        input,
        language,
      )
      this.renderTranslation(translatedText)
      this.setError(this.errorElement)
      this.buttonElement.textContent = UI_TEXT.startOver
    } catch {
      this.setError(this.errorElement, UI_TEXT.genericError)
      this.buttonElement.textContent = UI_TEXT.translate
    }
  }
}
