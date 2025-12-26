# Quickstart: Frontend Development

**Feature**: `001-frontend-setup`
**Last Updated**: 2025-12-26

## Prerequisites

- Node.js v22 (LTS)
- npm v10+

## Setup & Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   - Access at `http://localhost:5173`

3. **Run Tests**:
   ```bash
   npm run test
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

- **Components**: Located in `src/components`. Use Atomic Design (Atoms, Molecules, Organisms).
- **Pages**: Located in `src/pages`. Corresponds to routes.
- **Styling**: Use TailwindCSS utility classes. DaisyUI components are available.
  - Example: `<button className="btn btn-primary">Action</button>`
- **State**: Global state in `src/store` (Zustand). Server state uses React Query (future).

## Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts Vite dev server |
| `npm run build` | Compiles for production |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build locally |

## Development Guidelines

1. **Strict Types**: No `any`. Define interfaces in component files or `src/types`.
2. **Mobile First**: Write mobile styles first, then use `md:`, `lg:` prefixes.
3. **Accessibility**: Ensure all interactive elements have labels and focus states.
