import { NotificationItem } from './types';
import { seedNotifications } from './seedData';

const NOTIFICATIONS_STORAGE_KEY = 'rti_citizen_notifications';

export const notificationService = {
  async getNotifications(): Promise<NotificationItem[]> {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
        if (stored) return JSON.parse(stored);
        localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(seedNotifications));
      } catch (e) {}
    }
    return [...seedNotifications];
  },

  async markAsRead(id: string): Promise<void> {
    const list = await this.getNotifications();
    const updated = list.map(n => n.id === id ? { ...n, read: true } : n);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {}
    }
  },

  async markAllAsRead(): Promise<void> {
    const list = await this.getNotifications();
    const updated = list.map(n => ({ ...n, read: true }));
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {}
    }
  },

  async addNotification(title: string, type: 'alert' | 'update' | 'deadline' | 'info', rtiId?: string): Promise<NotificationItem> {
    const list = await this.getNotifications();
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title,
      time: 'Just now',
      type,
      read: false,
      rtiId
    };
    const updated = [newNotif, ...list];
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {}
    }
    return newNotif;
  }
};
