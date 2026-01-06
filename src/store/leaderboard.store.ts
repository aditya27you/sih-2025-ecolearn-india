import { create } from 'zustand';
import type { LeaderboardEntry } from '@/data/leaderboardData';

// Mock database of students
const MOCK_STUDENTS: LeaderboardEntry[] = [
  { id: 'u1', rank: 0, name: 'Arjun Mehta', school: 'Greenwood High, Pune', points: 1250, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun' },
  { id: 'u2', rank: 0, name: 'Sanya Sharma', school: 'Delhi Public School, Delhi', points: 1180, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya' },
  { id: 'u3', rank: 0, name: 'Rohan Gupta', school: 'Bishop Cottons, Bangalore', points: 1150, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan' },
  { id: 'u4', rank: 0, name: 'Isha Patel', school: 'St. Xaviers, Mumbai', points: 1020, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isha' },
  { id: 'u5', rank: 0, name: 'Karan Singh', school: 'Modern School, Jaipur', points: 980, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan' },
  { id: 'u6', rank: 0, name: 'Ananya Rao', school: 'The Heritage School, Kolkata', points: 950, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya' },
];

interface LeaderboardState {
  leaderboard: LeaderboardEntry[];
  userRank: number;
  filter: 'national' | 'state' | 'school';
  
  // Actions
  setFilter: (filter: 'national' | 'state' | 'school') => void;
  updateLeaderboard: (currentUser: { id: string; name: string; school?: string; points: number; avatar?: string }) => void;
  reset: () => void;
}

export const useLeaderboardStore = create<LeaderboardState>((set) => ({
  leaderboard: [],
  userRank: 0,
  filter: 'national',

  reset: () => set({ leaderboard: [], userRank: 0, filter: 'national' }),

  setFilter: (filter) => set({ filter }),

  updateLeaderboard: (currentUser) => set((state) => {
    // 1. Combine mock students with current user
    let allStudents = [...MOCK_STUDENTS];
    
    // Check if user already exists (simulate backend) or add them
    const existingUserIndex = allStudents.findIndex(s => s.id === currentUser.id);
    if (existingUserIndex >= 0) {
      allStudents[existingUserIndex] = { ...allStudents[existingUserIndex], ...currentUser, rank: 0 };
    } else {
      allStudents.push({ ...currentUser, rank: 0, school: currentUser.school || 'Unknown School' });
    }

    // 2. Sort by points descending
    allStudents.sort((a, b) => b.points - a.points);

    // 3. Assign ranks
    allStudents = allStudents.map((s, index) => ({
      ...s,
      rank: index + 1,
      isCurrentUser: s.id === currentUser.id
    }));

    // 4. Filter logic (Mock)
    let filteredList = [...allStudents];
    if (state.filter === 'school' && currentUser.school) {
        // Mock: just show random subset + user for school filter
        filteredList = allStudents.filter(s => s.isCurrentUser || Math.random() > 0.7); 
    } else if (state.filter === 'state') {
        // Mock: just show random subset + user for state filter
        filteredList = allStudents.filter(s => s.isCurrentUser || Math.random() > 0.4);
    }

    // Re-rank after filtering for the view
    filteredList = filteredList.map((s, index) => ({...s, rank: index + 1}));

    // 5. Find current user's rank in the GLOBAL list (not filtered)
    const globalRank = allStudents.find(s => s.id === currentUser.id)?.rank || 0;

    return { 
      leaderboard: filteredList,
      userRank: globalRank
    };
  }),
}));
