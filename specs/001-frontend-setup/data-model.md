# Data Model: Initial Frontend Setup & Architecture

**Feature**: `001-frontend-setup`
**Date**: 2025-12-26

## Entities

> Note: As this is a pure frontend setup feature, "Entities" here refer to TypeScript interfaces for configuration and core app state, rather than database models.

### 1. ThemeConfig
Represents the visual design tokens for the application.

```typescript
// src/types/theme.ts

export interface ColorPalette {
  primary: string;   // Emerald Green
  secondary: string; // Ocean Teal
  accent: string;    // Coral Orange
  base100: string;   // Background
  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface TypographyConfig {
  fontFamily: {
    sans: string[]; // Nunito
    heading: string[]; // Poppins
  };
}
```

### 2. RouteConfig
Defines the structure of application navigation.

```typescript
// src/router.tsx (Conceptual Type)

export type AppRoute = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: AppRoute[];
};

// Routes List
// / -> Home
// /dashboard -> Dashboard
// /modules -> Modules
// * -> NotFound
```

## Global State (Zustand)

### 1. UIStore
Manages global UI state like sidebar visibility or theme preference (if togglable).

```typescript
// src/store/ui.store.ts

interface UIState {
  isSidebarOpen: boolean;
  theme: 'ecolearn-light'; // Only one theme for MVP, but good to type it
  toggleSidebar: () => void;
  setTheme: (theme: 'ecolearn-light') => void;
}
```

## Validation Schemas (Zod)

*No validation schemas required for initial setup phase.*
