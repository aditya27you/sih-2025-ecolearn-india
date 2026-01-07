import api from '../utils/api';
import type { LeaderboardEntry } from '../data/leaderboardData';

export const leaderboardService = {
  /**
   * Get leaderboard data
   * @param filter 'national' or 'school'
   * @param schoolId optional school ID
   */
  getLeaderboard: async (filter: 'national' | 'school' = 'national', schoolId?: string): Promise<LeaderboardEntry[]> => {
    const params = new URLSearchParams();
    params.append('filter', filter);
    if (schoolId) params.append('schoolId', schoolId);

    const response = await api.get<LeaderboardEntry[]>(`/leaderboard?${params.toString()}`);
    return response.data;
  }
};
