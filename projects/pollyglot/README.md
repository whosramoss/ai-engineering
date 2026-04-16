# Pollyglot

Pollyglot is a small, browser-based translator powered by the OpenAI API. It provides two modes—**Direct** translation and a simple **Chat**-style conversation—inside a single page with a minimal black-and-white gradient UI.

## Features

- **Direct translation** — Enter text, choose a target language from a dropdown, and receive a single translated result. After a successful translation you can use **Start Over** to reset the form and language selector.
- **Chat mode** — Send messages in a scrollable feed; each message is followed by the model’s translation in the selected language, similar to a lightweight chat UI.
- **Languages** — Portuguese, English, and French (target language only; the model infers the source language from your input).
- **Responsive layout** — Centered card layout with tabs, built with Tailwind CSS utility classes and a few custom component classes in `style/index.css`.

## Prerequisites

- **Node.js** (current LTS recommended) and npm.
- An **OpenAI API key** with access to chat completions.

## Getting started

### 1. Install dependencies

From the project directory:

```bash
npm install
```

### 2. Configure the API key

The app reads the key from Vite’s environment (recommended):

1. Create a `.env` file in the project root (do not commit it).
2. Add:

   ```env
   VITE_OPENAI_API_KEY=sk-...
   ```

At build time, Vite exposes only variables prefixed with `VITE_` to client code. The translator service also falls back to `process.env.OPENAI_API_KEY` when running in contexts where Node defines it, but for normal `npm run dev` / `npm run build` usage, **`VITE_OPENAI_API_KEY` is the right variable**.

### 3. Run the app

```bash
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`). Use **Direct** and **Chat** tabs to switch modes.

### 4. Production build

```bash
npm run build
npm run preview
```

`build` outputs static assets to `dist/`. `preview` serves that folder locally for a quick production check.

## npm scripts

| Script                      | Description                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `npm run dev` / `npm start` | Start Vite in development mode with HMR.                                                                        |
| `npm run build`             | Bundle for production with Vite (transpiles TypeScript via esbuild; run `typecheck` for full `tsc` validation). |
| `npm run preview`           | Serve the production build locally.                                                                             |
| `npm run typecheck`         | Run `tsc --noEmit` for strict type checking without emitting files.                                             |

## Project structure

```text
pollyglot/
├── index.html              # Entry page: tabs, Direct + Chat UI, script entry
├── vite.config.js          # Vite + Tailwind plugin
├── tsconfig.json           # TypeScript compiler options
├── vite-env.d.ts           # Vite / import.meta.env typings
├── package.json
├── style/
│   └── index.css           # Tailwind import, @apply helpers, tab-panel visibility
└── scripts/
    ├── index.ts            # PollyglotApp bootstrap; wires tabs + panels
    ├── tabs-controller.ts  # Tab triggers, hash (#chat), panel visibility
    ├── translator-service.ts # OpenAI client and translate()
    ├── base-panel.ts       # Shared DOM helpers for panels
    ├── direct-translation-panel.ts
    ├── chat-translation-panel.ts
    └── ui-text.ts          # User-visible English strings
```

## Architecture (overview)

- **`PollyglotApp`** (`index.ts`) initializes the tab controller first so switching **Direct** / **Chat** works even if translator initialization fails. Translator and both panels are constructed inside a `try/catch` so a bad or missing key does not break tab navigation.
- **`TranslatorService`** wraps `openai.chat.completions.create` with a short system prompt asking for **only** the translated text, and a user message in the form `"<text>" in <Language>`.
- **`DirectTranslationPanel`** manages the `#index-result` region: it replaces content with the translation output, and **Start Over** restores the language `<select>` markup (same options as in `index.html`).
- **`ChatTranslationPanel`** appends user and assistant (translation) bubbles to `#chat-feed`.
- **`TabsController`** toggles the class `tab-panel--inactive` and `aria-hidden` for accessibility; inactive panels use `display: none !important` via `style/index.css`.

## Security and limitations

- The OpenAI client is configured with **`dangerouslyAllowBrowser: true`**, so the API key is usable from browser-side JavaScript. **Anyone with access to the running app or built assets can potentially extract a `VITE_*` key** embedded in the client bundle. For real production deployments, prefer a **backend proxy** that holds the secret and calls OpenAI server-side.
- The model and prompt are simple; quality and safety depend on OpenAI’s API behavior and your account settings.

## Type checking

```bash
npm run typecheck
```

Use this in CI or before releases to catch type errors without relying only on the bundler.
