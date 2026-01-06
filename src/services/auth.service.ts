import type { User, UserRole } from '../types/user';

export interface AuthResponse {
  user: User;
  token: string;
}

// Mock delay to simulate network request
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    await delay(1000);
    
    // For demo purposes: success if password isn't 'error'
    if (password === 'error') {
      throw new Error('Invalid credentials');
    }

    return {
      token: 'mock-jwt-token',
      user: {
        id: '1',
        name: 'Eco Student',
        email,
        role: 'student' as UserRole,
        ecoPoints: 150,
        streak: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EcoStudent'
      }
    };
  },

  register: async (name: string, email: string, _password: string): Promise<AuthResponse> => {
    await delay(1000);
    
    return {
      token: 'mock-jwt-token',
      user: {
        id: '2',
        name,
        email,
        role: 'student' as UserRole,
        ecoPoints: 0,
        streak: 0,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
      }
    };
  },

  logout: async (): Promise<void> => {
    await delay(500);
  }
};
