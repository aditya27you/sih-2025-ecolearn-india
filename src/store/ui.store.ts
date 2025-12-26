import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  theme: 'ecolearn-light'; 
  toggleSidebar: () => void;
  setTheme: (theme: 'ecolearn-light') => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  theme: 'ecolearn-light',
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setTheme: (theme) => set({ theme }),
}));
