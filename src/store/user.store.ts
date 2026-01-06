import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { User, AuthState } from '../types/user';
import type { ChallengeSubmission } from '../types/submission';

interface UserActions {
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  updateUser: (userData: Partial<User>) => void;
  addPoints: (points: number) => void;
  updateStreak: (streak: number) => void;
  addSubmission: (submission: ChallengeSubmission) => void;
}

type UserStore = AuthState & UserActions;

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      // Initial State
      user: null,
      token: null,
      isAuthenticated: false,

      // Actions
      setAuth: (user, token) => 
        set({ 
          user: { ...user, submissions: [] }, 
          token, 
          isAuthenticated: true 
        }),

      clearAuth: () => 
        set({ 
          user: null, 
          token: null, 
          isAuthenticated: false 
        }),

      updateUser: (userData) => 
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null
        })),

      addPoints: (points) => 
        set((state) => ({
          user: state.user 
            ? { ...state.user, ecoPoints: state.user.ecoPoints + points } 
            : null
        })),

      updateStreak: (streak) => 
        set((state) => ({
          user: state.user ? { ...state.user, streak } : null
        })),

      addSubmission: (submission) =>
        set((state) => ({
          user: state.user 
            ? { ...state.user, submissions: [submission, ...(state.user.submissions || [])] }
            : null
        })),
    }),
    {
      name: 'ecolearn-user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
