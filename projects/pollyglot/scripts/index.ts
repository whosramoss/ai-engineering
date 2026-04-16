import { ChatTranslationPanel } from "./chat-translation-panel"
import { DirectTranslationPanel } from "./direct-translation-panel"
import { TabsController } from "./tabs-controller"
import { TranslatorService } from "./translator-service"

class PollyglotApp {
  private readonly tabsController: TabsController
  private translatorService: TranslatorService | null = null
  private directTranslationPanel: DirectTranslationPanel | null = null
  private chatTranslationPanel: ChatTranslationPanel | null = null

  constructor() {
    this.tabsController = new TabsController()
  }

  init(): void {
    this.tabsController.init()

    try {
      this.translatorService = new TranslatorService()
      this.directTranslationPanel = new DirectTranslationPanel(
        this.translatorService,
      )
      this.chatTranslationPanel = new ChatTranslationPanel(
        this.translatorService,
      )
      this.directTranslationPanel.init()
      this.chatTranslationPanel.init()
    } catch (error) {
      console.error(
        "[Pollyglot] Translator failed to initialize; tabs still work.",
        error,
      )
    }
  }
}

new PollyglotApp().init()
