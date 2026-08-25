import { User, UserPreferences } from './types';
import { seedUser } from './seedData';

const USER_STORAGE_KEY = 'rti_citizen_user';

export const authService = {
  async getCurrentUser(): Promise<User> {
    if (typeof window === 'undefined') return seedUser;
    try {
      const stored = localStorage.getItem(USER_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Failed to retrieve user from storage:', e);
    }
    return seedUser;
  },

  async login(identifier: string, password?: string): Promise<User> {
    // Simulated realistic authentication
    const user: User = {
      ...seedUser,
      email: identifier.includes('@') ? identifier : seedUser.email,
      name: identifier.includes('@') ? (identifier.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase())) : seedUser.name
    };
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      } catch (e) {}
    }
    return user;
  },

  async signup(data: { name: string; email: string; mobile: string }): Promise<User> {
    const newUser: User = {
      ...seedUser,
      id: `usr-${Date.now()}`,
      name: data.name || 'New Citizen',
      email: data.email,
      mobile: data.mobile || '+91 98765 43210',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      } catch (e) {}
    }
    return newUser;
  },

  async logout(): Promise<void> {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(USER_STORAGE_KEY);
      } catch (e) {}
    }
  },

  async updatePreferences(patch: Partial<UserPreferences>): Promise<UserPreferences> {
    const user = await this.getCurrentUser();
    const updatedPreferences = { ...user.preferences, ...patch };
    const updatedUser = { ...user, preferences: updatedPreferences };
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
      } catch (e) {}
    }
    return updatedPreferences;
  },

  async updateProfile(patch: Partial<User>): Promise<User> {
    const user = await this.getCurrentUser();
    const updatedUser = { ...user, ...patch };
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
      } catch (e) {}
    }
    return updatedUser;
  }
};
