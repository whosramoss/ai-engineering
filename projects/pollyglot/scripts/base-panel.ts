import type { TranslatorService } from "./translator-service"

export abstract class BasePanel {
  protected constructor(protected readonly translatorService: TranslatorService) {}

  protected getSelectedLanguage(selectName: string): string {
    const select = document.querySelector<HTMLSelectElement>(
      `select[name="${selectName}"]`,
    )
    const value = select?.value?.trim()
    return value ?? ""
  }

  protected setError(errorElement: HTMLElement, message = ""): void {
    errorElement.textContent = message
  }
}
