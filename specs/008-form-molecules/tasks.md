---
description: "Tasks for Form Molecules"
---

# Tasks: Form Molecules

**Input**: Design documents from `/specs/008-form-molecules/`
**Prerequisites**: plan.md, spec.md, Form Atoms (Input, Button)

## Phase 1: Setup

- [x] T001 Verify `src/components/molecules/FormField` exists
- [x] T002 Create directory `src/components/molecules/SearchBar`

## Phase 2: User Story 1 - FormField Molecule (Priority: P1)

**Goal**: Combine label, input, and error into a single component.

- [x] T003 [US1] Implement FormField component in `src/components/molecules/FormField/FormField.tsx`
- [x] T004 [US1] Export FormField from `src/components/molecules/FormField/index.ts`
- [x] T005 [US1] Create unit tests for FormField in `src/components/molecules/FormField/FormField.test.tsx`

## Phase 3: User Story 2 - SearchBar Molecule (Priority: P2)

**Goal**: Implement a reusable search input with action buttons.

- [x] T006 [US2] Implement SearchBar component in `src/components/molecules/SearchBar/SearchBar.tsx`
- [x] T007 [US2] Export SearchBar from `src/components/molecules/SearchBar/index.ts`
- [x] T008 [US2] Create unit tests for SearchBar in `src/components/molecules/SearchBar/SearchBar.test.tsx`

## Phase 4: Integration & Polish

- [x] T009 Update placeholder components to use FormField where appropriate
- [x] T010 Run build and lint
