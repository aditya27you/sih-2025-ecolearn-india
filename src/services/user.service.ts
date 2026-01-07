import api from '../utils/api';
import type { User } from '../types/user';

export const userService = {
  /**
   * Update user profile
   */
  updateProfile: async (userData: Partial<User>): Promise<{ user: User }> => {
    const response = await api.patch<{ user: User }>('/auth/profile', userData);
    return response.data;
  },

  /**
   * Get user's challenge submissions
   */
  getSubmissions: async (): Promise<any[]> => {
    const response = await api.get('/challenges/my-submissions');
    return response.data;
  }
};
