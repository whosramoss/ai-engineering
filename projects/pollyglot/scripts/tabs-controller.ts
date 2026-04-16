export class TabsController {
  private triggers!: NodeListOf<HTMLElement>
  private panels!: NodeListOf<HTMLElement>

  init(): void {
    this.triggers = document.querySelectorAll(
      ".tab-trigger",
    ) as NodeListOf<HTMLElement>
    this.panels = document.querySelectorAll(
      ".tab-panel",
    ) as NodeListOf<HTMLElement>

    for (const trigger of this.triggers) {
      trigger.addEventListener("click", () => {
        const nextTab =
          trigger.getAttribute("data-tab") ?? trigger.dataset.tab ?? ""
        this.setActiveTab(nextTab)
        window.location.hash = nextTab
      })
    }

    this.setActiveTab(window.location.hash === "#chat" ? "chat" : "index")
  }

  setActiveTab(tabId: string): void {
    for (const trigger of this.triggers) {
      const isActive = trigger.dataset.tab === tabId
      trigger.setAttribute("aria-selected", String(isActive))
      trigger.classList.toggle("bg-white", isActive)
      trigger.classList.toggle("text-black", isActive)
      trigger.classList.toggle("bg-transparent", !isActive)
      trigger.classList.toggle("text-white", !isActive)
    }

    for (const panel of this.panels) {
      const isActive = panel.dataset.panel === tabId
      panel.classList.toggle("tab-panel--inactive", !isActive)
      panel.setAttribute("aria-hidden", String(!isActive))
    }
  }
}
