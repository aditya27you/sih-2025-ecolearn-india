import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { User, AuthState } from '../types/user';

interface UserActions {
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  updateUser: (userData: Partial<User>) => void;
  addPoints: (points: number) => void;
  updateStreak: (streak: number) => void;
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
          user, 
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
    }),
    {
      name: 'ecolearn-user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
