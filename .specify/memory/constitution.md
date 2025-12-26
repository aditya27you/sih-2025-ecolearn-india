<!--
SYNC IMPACT REPORT
Version: 0.1.0 -> 1.0.0 (Initial Ratification)
Modified Principles:
- PRINCIPLE_1: Component-Driven Development (New)
- PRINCIPLE_2: Accessibility-First (New)
- PRINCIPLE_3: Mobile-First Responsive Design (New)
- PRINCIPLE_4: Gamification Integrity (New)
- PRINCIPLE_5: Strict Type Safety (New)
Added Sections:
- Frontend Architecture Standards
- Design System Consistency
- Performance & Optimization
Removed Sections:
- None (Template placeholders replaced)
Templates Requiring Updates:
- .specify/templates/plan-template.md: ✅ Updated to reflect frontend focus
- .specify/templates/spec-template.md: ✅ No specific updates needed for this version
- .specify/templates/tasks-template.md: ✅ No specific updates needed for this version
- .gemini/commands/speckit.constitution.toml: ✅ Checked (no references to update)
Follow-up TODOs:
- None
-->
# EcoLearn India Constitution

## Core Principles

### I. Component-Driven Development
All UI development MUST follow the Atomic Design methodology (Atoms, Molecules, Organisms, Templates, Pages).
- Components MUST be pure, reusable, and isolated.
- Business logic MUST be separated from UI components using custom hooks or services.
- Storybook (or equivalent) SHOULD be used to document and test UI components in isolation.
- **Rationale**: Ensures consistency, reusability, and easier maintenance of the large component library (167+ components).

### II. Accessibility-First
All user interfaces MUST meet WCAG 2.1 AA standards.
- Semantic HTML MUST be used (e.g., `<button>` for actions, `<a>` for navigation).
- All interactive elements MUST be keyboard navigable and have visible focus indicators.
- Color contrast MUST meet the 4.5:1 ratio for normal text.
- ARIA labels MUST be provided where visual context is insufficient.
- **Rationale**: Inclusivity is a core brand value; education must be accessible to all students.

### III. Mobile-First Responsive Design
All layouts and components MUST be designed for mobile screens (375px) first, then scaled up.
- CSS utility classes (TailwindCSS) SHOULD be used for responsive styling.
- Touch targets MUST be at least 44x44px.
- Layouts MUST adapt seamlessly from mobile to tablet (768px) and desktop (1280px+).
- **Rationale**: Many target users (students) will access the platform via smartphones.

### IV. Gamification Integrity
Gamification elements (points, badges, leaderboards) MUST be implemented with fairness and anti-cheat mechanisms.
- Client-side validation is insufficient; critical gamification logic MUST be verified.
- User progress and achievements MUST be persisted reliably.
- **Rationale**: To maintain student motivation and trust in the competitive aspects of the platform.

### V. Strict Type Safety
All code MUST be written in TypeScript with strict mode enabled.
- `any` type usage is explicitly FORBIDDEN unless absolutely necessary and documented.
- Interfaces and Types MUST be defined for all props, state, and API responses.
- Zod schemas MUST be used for runtime validation of external data (forms, APIs).
- **Rationale**: Prevents runtime errors and enhances developer productivity through better tooling support.

## Frontend Architecture Standards

### Tech Stack Compliance
- **Framework**: React 19 + TypeScript 5
- **Build Tool**: Vite 6.x
- **State Management**: Zustand 5.x (global), React Query (server)
- **Styling**: TailwindCSS v4 + DaisyUI v5.5
- **Routing**: React Router v7

### Code Structure
- Directory structure MUST follow the defined feature-based or atomic organization.
- Barrel files (`index.ts`) SHOULD be used to simplify imports, but circular dependencies MUST be avoided.

## Design System Consistency

### Visual Identity
- Usage of the "Vibrant Eco-Energy" color system (Emerald, Ocean Teal, Coral Orange) is MANDATORY.
- Typography MUST use Nunito for body and Poppins for headings.
- Icons MUST use Google Material Symbols (Rounded).

### Component Usage
- DaisyUI components SHOULD be the foundation for UI elements, customized via Tailwind utility classes.
- Hardcoded hex values for colors are FORBIDDEN; use CSS variables or Tailwind theme colors.

## Performance & Optimization

### Metrics
- First Contentful Paint (FCP) MUST be < 1.5s.
- Time to Interactive (TTI) MUST be < 3.5s.
- Lighthouse Accessibility score MUST be >= 90.

### Practices
- Images MUST be lazy-loaded and optimized (WebP/AVIF format).
- Code splitting MUST be implemented for route-level components.
- Expensive computations MUST be memoized (`useMemo`, `useCallback`) where appropriate.

## Governance

### Amendments
- Any changes to this Constitution require a Pull Request with a clear rationale.
- "Core Principles" require unanimous agreement from the technical lead and product owner.
- Other sections require a simple majority approval.

### Compliance
- All Pull Requests MUST be reviewed against this Constitution.
- Automated linting and testing pipelines MUST enforce technical standards (TypeScript, A11y) where possible.
- Design reviews MUST verify adherence to the visual identity and UX principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-26 | **Last Amended**: 2025-12-26