---
Last Updated: April 2026
Total Agents: 8+
---

#  Frontend AI Agents

> **Professional AI agents for modern frontend development with React, Angular, Vue, and CSS frameworks.**

A comprehensive collection of specialized AI agents designed to assist with professional frontend development across multiple frameworks and technologies. Each agent is an expert in their specific domain, ensuring high-quality, maintainable, and performant code.

##  Table of Contents

- [Overview](#-overview)
- [Agent Categories](#-agent-categories)
- [Quick Start](#-quick-start)
- [Framework Agents](#-framework-agents)
- [Styling Agents](#-styling-agents)
- [Implementation Workflow](#-implementation-workflow)
- [Best Practices](#-best-practices)
- [IDE Integration](#-ide-integration)

---

##  Overview

This collection provides specialized AI agents for:

- **React Development**: Architecture, components, state management
- **Angular Development**: Modular architecture, services, RxJS
- **Vue Development**: Composition API, components, Pinia
- **CSS/Styling**: Tailwind CSS, CSS Modules, Styled Components
- **TypeScript**: Type-safe frontend development
- **Testing**: Jest, Testing Library, E2E testing
- **Build Tools**: Vite, Webpack configuration
- **Performance**: Optimization and profiling

---

##  Agent Categories

### ️ Architecture (3 agents)

- **react-architect** - React application architecture and project structure
- **angular-architect** - Angular modular architecture
- **vue-architect** - Vue 3 Composition API architecture

###  Components (3 agents)

- **react-component-designer** - React component design and patterns
- **angular-component-designer** - Angular component best practices
- **vue-component-designer** - Vue component composition

###  State Management (3 agents)

- **react-state-manager** - React state (Zustand, Jotai, Redux Toolkit)
- **angular-state-manager** - NgRx and RxJS patterns
- **vue-state-manager** - Pinia and Composition API state

###  Styling (3 agents)

- **tailwind-specialist** - Tailwind CSS utility-first design
- **css-modules-specialist** - Component-scoped CSS Modules
- **styled-components-specialist** - CSS-in-JS with styled-components

###  Build & Tools (2 agents)

- **vite-specialist** - Vite configuration and optimization
- **typescript-specialist** - TypeScript best practices

###  Testing (2 agents)

- **frontend-tester** - Unit and integration testing
- **e2e-tester** - End-to-end testing with Playwright/Cypress

###  Performance (2 agents)

- **frontend-performance-optimizer** - Performance optimization
- **bundle-analyzer** - Bundle size analysis and optimization

---

##  Quick Start

### Choose Your Framework

#### React Stack

```
1. react-architect → Design application structure
2. react-component-designer → Build components
3. react-state-manager → Implement state management
4. tailwind-specialist → Style your app
5. frontend-tester → Write tests
```

#### Angular Stack

```
1. angular-architect → Design module structure
2. angular-component-designer → Build components
3. angular-state-manager → Implement NgRx
4. css-modules-specialist → Style components
5. frontend-tester → Write tests
```

#### Vue Stack

```
1. vue-architect → Design Composition API structure
2. vue-component-designer → Build components
3. vue-state-manager → Implement Pinia
4. tailwind-specialist → Style your app
5. frontend-tester → Write tests
```

---

## ️ React Agents

### react-architect

**Location**: [frontend-ai-agents/architecture/react-architect.md](architecture/react-architect.md)

Expert React architect for:

- Application architecture design
- Project structure (feature-based, layer-based)
- State management strategy
- Component organization
- Code splitting and lazy loading
- Performance optimization strategy

**When to use**: Starting new React projects, making architectural decisions, reorganizing structure

### react-component-designer

**Location**: [frontend-ai-agents/components/react-component-designer.md](components/react-component-designer.md)

Expert React component designer for:

- Reusable component design
- Accessibility (WCAG 2.1 AA)
- Performance optimization (memoization)
- TypeScript integration
- Component patterns (compound, render props, custom hooks)
- Testing strategies

**When to use**: Designing or implementing React components

### react-state-manager

**Location**: [frontend-ai-agents/state-management/react-state-manager.md](state-management/react-state-manager.md)

Expert React state management for:

- Built-in React state (useState, useReducer, Context)
- External state libraries (Zustand, Jotai, Redux Toolkit)
- Server state management (TanStack Query)
- Performance optimization
- State architecture patterns

**When to use**: Implementing global state, server state, or complex state logic

---

##  Styling Agents

### tailwind-specialist

**Location**: [frontend-ai-agents/styling/tailwind-specialist.md](styling/tailwind-specialist.md)

Expert Tailwind CSS specialist for:

- Utility-first design
- Responsive mobile-first layouts
- Design system integration
- Component variants (CVA)
- Performance optimization
- Accessibility

**When to use**: Implementing UI with Tailwind CSS

### css-modules-specialist

**Location**: [frontend-ai-agents/styling/css-modules-specialist.md](styling/css-modules-specialist.md)

Expert CSS Modules specialist for:

- Component-scoped styling
- Modern CSS features (Grid, Flexbox, Custom Properties)
- TypeScript integration
- Responsive design
- Performance optimization

**When to use**: Implementing CSS Modules in your project

---

##  Implementation Workflow

### For New React Application

```
Phase 1: Architecture
├─ 1. Use react-architect to design structure
├─ 2. Choose state management strategy
└─ 3. Plan component hierarchy

Phase 2: Development
├─ 1. Use react-component-designer for components
├─ 2. Use react-state-manager for global state
├─ 3. Use tailwind-specialist for styling
└─ 4. Use typescript-specialist for type safety

Phase 3: Optimization
├─ 1. Use frontend-performance-optimizer
├─ 2. Implement code splitting
└─ 3. Optimize bundle size

Phase 4: Quality
├─ 1. Use frontend-tester for unit tests
├─ 2. Use e2e-tester for E2E tests
└─ 3. Perform accessibility audit
```

### For New Angular Application

```
Phase 1: Architecture
├─ 1. Use angular-architect to design modules
├─ 2. Plan NgRx store structure
└─ 3. Design service layer

Phase 2: Development
├─ 1. Use angular-component-designer
├─ 2. Use angular-state-manager for NgRx
├─ 3. Use css-modules-specialist for styling
└─ 4. Implement services and guards

Phase 3: Quality
├─ 1. Use frontend-tester for specs
└─ 2. Use e2e-tester for E2E tests
```

### For New Vue Application

```
Phase 1: Architecture
├─ 1. Use vue-architect for Composition API
├─ 2. Plan Pinia store structure
└─ 3. Design component structure

Phase 2: Development
├─ 1. Use vue-component-designer
├─ 2. Use vue-state-manager for Pinia
├─ 3. Use tailwind-specialist for styling
└─ 4. Implement composables

Phase 3: Quality
├─ 1. Use frontend-tester for tests
└─ 2. Use e2e-tester for E2E tests
```

---

##  Best Practices

### Component Design

- Keep components small and focused (single responsibility)
- Use TypeScript for type safety
- Ensure accessibility (WCAG 2.1 AA minimum)
- Write tests for critical components
- Optimize performance (memoization when needed)
- Document complex components

### State Management

- Start simple (built-in state)
- Use TanStack Query for server state
- Add external state only when needed
- Keep state close to where it's used
- Optimize selectors and re-renders

### Styling

- Follow mobile-first responsive design
- Use consistent design tokens
- Ensure proper focus states
- Maintain color contrast (WCAG AA)
- Optimize CSS bundle size

### Performance

- Implement code splitting
- Lazy load heavy components
- Use virtual scrolling for large lists
- Optimize images and assets
- Monitor bundle size regularly

### Testing

- Write tests for critical paths
- Test user interactions, not implementation
- Use Testing Library best practices
- Implement E2E tests for critical flows
- Maintain high test coverage

---

## ️ IDE Integration

### Using with Cursor

```
@frontend-ai-agents/architecture/react-architect.md design React app structure
@frontend-ai-agents/styling/tailwind-specialist.md implement button component
```

### Using with GitHub Copilot

Add to `.vscode/settings.json`:

```json
{
  "github.copilot.advanced": {
    "instructionsFile": "frontend-ai-agents/.github/copilot-instructions.md"
  }
}
```

### Using with Claude (Web/API)

Copy the relevant agent's markdown content into your conversation for context.

---

##  Technology Stack Recommendations

### React Recommended Stack

```yaml
Build Tool: Vite or Next.js
Router: React Router v6 or TanStack Router
State: Built-in + TanStack Query + Zustand
Styling: Tailwind CSS or CSS Modules
Forms: React Hook Form + Zod
Testing: Vitest + Testing Library + Playwright
UI: shadcn/ui or Radix UI
```

### Angular Recommended Stack

```yaml
Build Tool: Angular CLI
State: NgRx or Signals (Angular 16+)
Styling: CSS Modules or Angular Material
Forms: Reactive Forms
Testing: Jasmine + Karma + Protractor
UI: Angular Material
```

### Vue Recommended Stack

```yaml
Build Tool: Vite
Router: Vue Router
State: Pinia
Styling: Tailwind CSS
Forms: VeeValidate + Yup
Testing: Vitest + Vue Test Utils + Playwright
UI: Vuetify or PrimeVue
```

---

##  Learning Path

### For React Developers

1. **Beginner**
   - Start with react-architect to understand structure
   - Learn component design with react-component-designer
   - Master built-in state management

2. **Intermediate**
   - Implement global state with react-state-manager
   - Learn Tailwind CSS with tailwind-specialist
   - Write tests with frontend-tester

3. **Advanced**
   - Optimize performance
   - Implement complex state patterns
   - Build design systems

### For Angular Developers

1. **Beginner**
   - Understand modules with angular-architect
   - Learn component basics
   - Master dependency injection

2. **Intermediate**
   - Implement NgRx with angular-state-manager
   - Master RxJS operators
   - Write comprehensive tests

3. **Advanced**
   - Optimize change detection
   - Build reusable libraries
   - Implement micro-frontends

---

##  Project Status

| Framework   | Agents | Status         | Last Updated |
| ----------- | ------ | -------------- | ------------ |
| React       | 3      |  Complete    | October 2025 |
| Angular     | 3      |  In Progress | October 2025 |
| Vue         | 3      |  In Progress | October 2025 |
| Styling     | 3      |  Complete    | October 2025 |
| Testing     | 2      |  In Progress | October 2025 |
| Build Tools | 2      |  In Progress | October 2025 |

**Total Agents**: 8+ (with more being added)

---

##  Key Principles

### React Agents

-  Modern React patterns (hooks, concurrent features)
-  Type safety with TypeScript
-  Accessibility first
-  Performance optimization
-  Testing best practices

### Styling Agents

-  Utility-first or component-scoped
-  Responsive design (mobile-first)
-  Design system integration
-  Accessibility compliance
-  Performance optimization

### Testing Agents

-  Test user behavior, not implementation
-  High coverage for critical paths
-  Fast and reliable tests
-  E2E tests for critical flows

---

##  Support

For issues, questions, or suggestions:

- Reference the specific agent by name
- Include your framework and version
- Provide context and use case

---

##  Contributing

To add or improve agents:

1. Follow the established structure (frontmatter + markdown)
2. Include practical examples
3. Maintain consistency with existing agents
4. Update this README with new agents
5. Test all examples

---

**Last Updated**: October 2025
**Status**:  Complete (Core agents) /  Expanding
**Model**: Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

---

**Author**: Gabriel Rocha
**Email**: gscrweb@gmail.com
**License**: MIT
