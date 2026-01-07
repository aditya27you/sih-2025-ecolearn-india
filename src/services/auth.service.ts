import api from '../utils/api';
import type { User } from '../types/user';

export interface AuthResponse {
  user: User;
  token: string;
}

/**
 * Auth Service
 * All methods now connect to the backend endpoints defined in backend-spec.md
 */
export const authService = {
  /**
   * Login user
   */
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', { 
      email, 
      password 
    });
    return response.data;
  },

  /**
   * Register a new student
   */
  register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/register', { 
      name, 
      email, 
      password 
    });
    return response.data;
  },

  /**
   * Get current user profile (for session persistence)
   */
  getMe: async (): Promise<{ user: User }> => {
    const response = await api.get<{ user: User }>('/auth/me');
    return response.data;
  },

  /**
   * Logout (Inform backend if necessary, otherwise local cleanup is handled in stores)
   */
  logout: async (): Promise<void> => {
    // Optional: await api.post('/auth/logout');
  }
};