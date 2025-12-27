---
description: "Tasks for Eco-Challenge System"
---

# Tasks: Eco-Challenge System

**Input**: Design documents from `/specs/010-featurename-009-challenge-system/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup
- [ ] T001 Verify/Create directory structure in `src/components/molecules/ChallengeCard`
- [ ] T002 Verify/Create directory structure in `src/pages/Challenges`

## Phase 2: User Story 1 - Browse Challenges (Priority: P1)
- [ ] T003 [US1] Implement `ChallengeCard` in `src/components/molecules/ChallengeCard/ChallengeCard.tsx`
- [ ] T004 [US1] Create mock challenge data in `src/data/challengesData.ts`
- [ ] T005 [US1] Implement `ChallengesPage` in `src/pages/Challenges/Challenges.tsx`
- [ ] T006 [US1] Add `/challenges` route to `src/router.tsx`

## Phase 3: User Story 2 - Challenge Details (Priority: P1)
- [ ] T007 [US2] Implement `ChallengeDetail` modal/view in `src/components/organisms/ChallengeDetail/ChallengeDetail.tsx`
- [ ] T008 [US2] Integrate detail view with `ChallengeCard` click event

## Phase 4: User Story 3 - Submit Challenge (Priority: P2)
- [ ] T009 [US3] Implement `ChallengeSubmission` form in `src/components/organisms/ChallengeSubmission/ChallengeSubmission.tsx`
- [ ] T010 [US3] Add "Submit" button and navigation logic to `ChallengesPage`
