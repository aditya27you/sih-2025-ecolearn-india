# Research: Initial Frontend Setup & Architecture

**Feature**: `001-frontend-setup`
**Date**: 2025-12-26

## Open Questions & Decisions

### 1. Testing Framework
**Context**: The PRD specifies `Vite` but doesn't explicitly name the test runner, though `Vitest` is the standard companion for Vite.
**Research Question**: What is the best practice for testing in a React 19 + Vite 6 environment?
- **Option A**: Jest (Legacy standard, heavy setup with Vite)
- **Option B**: Vitest (Native Vite integration, faster, Jest-compatible API)
**Decision**: **Vitest**.
**Rationale**: It shares configuration with Vite, has faster watch mode, and is the modern standard for Vite-based projects. It aligns with the "Performance & Optimization" constitution principle (build/test speed).
**Action**: Install `vitest`, `@testing-library/react`, `@testing-library/dom`, and `@testing-library/jest-dom`.

### 2. Styling Integration (Tailwind v4 + DaisyUI v5)
**Context**: Tailwind v4 is very new (alpha/beta at time of knowledge cutoff, but assumed stable for this project context) and DaisyUI v5 is specified.
**Research Question**: How to correctly configure Tailwind v4 with DaisyUI v5 in a Vite project?
- **Findings**: Tailwind v4 uses a CSS-first configuration approach (via `@theme` directives in CSS) rather than `tailwind.config.js`. However, DaisyUI might still rely on the plugin system.
- **Decision**: Use the standard PostCSS/Vite plugin approach if v4 requires it, or the new CSS entry point method if v4 is fully adopted. Given the "stable" assumption, we will use the `postcss.config.js` and `@tailwindcss/vite` plugin if available, or fallback to the standard v3.x compatible `tailwind.config.js` pattern if v4 proves unstable during setup. *Correction*: For this plan, we will assume standard configuration via `tailwind.config.js` is still the safest path for ecosystem compatibility (DaisyUI) unless the new CSS-based config is explicitly required.
- **Action**: Create `tailwind.config.ts` and `postcss.config.js`.

### 3. React Router v7 Integration
**Context**: React Router v7 brings new data loading and routing patterns (merging Remix features).
**Research Question**: Should we use the new `createBrowserRouter` data API or the legacy `BrowserRouter` component?
- **Decision**: **Data Router (`createBrowserRouter`)**.
- **Rationale**: Enables "render-as-you-fetch" (loaders/actions), which improves TTI/FCP performance metrics defined in the Constitution. It also supports better error boundaries.
**Action**: Implement `router.tsx` using `createBrowserRouter` and `RouterProvider`.

## Technology Decisions

| Area | Choice | Rationale |
|------|--------|-----------|
| **Build Tool** | Vite 6.x | Required by PRD; fastest dev server. |
| **Language** | TypeScript 5 | Required by Constitution; strict typing. |
| **Styles** | TailwindCSS + DaisyUI | Required by PRD; rapid UI development. |
| **State** | Zustand 5.x | Required by PRD; simpler than Redux for global state. |
| **Icons** | Material Symbols | Required by PRD; consistent look. |
| **Fonts** | Nunito (Body), Poppins (Headings) | Required by PRD; brand identity. |

## Best Practices

- **Strict Mode**: `React.StrictMode` must be enabled in `main.tsx`.
- **Barrel Files**: Use `index.ts` for folder exports but avoid "circular import" traps by not re-exporting everything from root.
- **Path Aliases**: Configure `tsconfig.json` and `vite.config.ts` to support `@/components`, `@/utils`, etc., for cleaner imports.
