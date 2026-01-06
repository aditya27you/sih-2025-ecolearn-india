export type SubmissionStatus = 'pending' | 'approved' | 'rejected';

export interface ChallengeSubmission {
  id: string;
  challengeId: string | number;
  challengeTitle: string;
  description: string;
  imageUrl: string;
  status: SubmissionStatus;
  submittedAt: string;
  points: number;
}
