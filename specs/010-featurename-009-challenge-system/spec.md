# Feature Specification: Eco-Challenge System

**Feature Branch**: `009-challenge-system`  
**Created**: 2025-12-27  
**Status**: Draft  
**Input**: PRD sections on "Real-World Eco-Challenge System"

## User Scenarios & Testing

### User Story 1 - Browse Challenges (Priority: P1)
As a student, I want to browse a library of eco-challenges so that I can find practical ways to help the environment.

**Independent Test**: Render the Challenges page and verify that a grid of challenge cards is displayed with title, difficulty, and points.

---

### User Story 2 - Challenge Details (Priority: P1)
As a student, I want to see the specific requirements and rewards for a challenge so that I know what I need to do to complete it.

**Independent Test**: Click on a challenge card and verify that a detail view (modal or page) displays the full description and requirements.

---

### User Story 3 - Submit Challenge (Priority: P2)
As a student, I want to upload a photo as proof of my completed challenge so that I can earn eco-points.

**Independent Test**: Complete the submission form with a photo and verify that it is "Pending Approval".

## Requirements

- **FR-001**: System MUST provide a `ChallengesPage` at `/challenges`.
- **FR-002**: System MUST display challenges in a grid using `ChallengeCard` molecules.
- **FR-003**: System MUST provide a `ChallengeDetail` view for each challenge.
- **FR-004**: System MUST include a `ChallengeSubmission` form with photo upload capability.
- **FR-005**: Challenges MUST have metadata: title, description, points (10-150), and difficulty (Easy, Medium, Hard).

## Success Criteria

- **SC-001**: User can navigate to `/challenges` and see at least 3-5 sample challenges.
- **SC-002**: The submission flow captures a photo and description.