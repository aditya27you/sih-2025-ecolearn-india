import type { ChallengeSubmission } from './submission';

export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  schoolId?: string;
  schoolName?: string;
  grade?: number;
  ecoPoints: number;
  streak: number;
  avatar?: string;
  submissions?: ChallengeSubmission[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
