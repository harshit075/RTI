import { RTIApplication, DashboardStats, RTIStatus } from './types';
import { seedRTIs } from './seedData';

const RTIS_STORAGE_KEY = 'rti_citizen_applications';

export const rtiService = {
  async getRTIs(filter?: { status?: string; search?: string }): Promise<RTIApplication[]> {
    let rtis = [...seedRTIs];
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(RTIS_STORAGE_KEY);
        if (stored) {
          rtis = JSON.parse(stored);
        } else {
          localStorage.setItem(RTIS_STORAGE_KEY, JSON.stringify(seedRTIs));
        }
      } catch (e) {}
    }

    if (filter?.status && filter.status !== 'All') {
      if (filter.status === 'Active') {
        rtis = rtis.filter(r => r.status === 'Submitted' || r.status === 'Response Pending' || r.status === 'Processing');
      } else if (filter.status === 'Awaiting Response') {
        rtis = rtis.filter(r => r.status === 'Response Pending' || r.status === 'Processing');
      } else if (filter.status === 'Response Received') {
        rtis = rtis.filter(r => r.status === 'Response Received');
      } else if (filter.status === 'Action Required') {
        rtis = rtis.filter(r => r.status === 'Action Required');
      } else if (filter.status === 'Appeals') {
        rtis = rtis.filter(r => r.status === 'First Appeal Filed' || r.status === 'Second Appeal Filed');
      } else if (filter.status === 'Completed') {
        rtis = rtis.filter(r => r.status === 'Completed' || r.status === 'FAA Decision Received');
      }
    }

    if (filter?.search) {
      const q = filter.search.toLowerCase();
      rtis = rtis.filter(r => 
        r.title.toLowerCase().includes(q) || 
        r.subject.toLowerCase().includes(q) || 
        r.registrationNumber.toLowerCase().includes(q)
      );
    }

    return rtis;
  },

  async getRTIById(id: string): Promise<RTIApplication | null> {
    const list = await this.getRTIs();
    return list.find(r => r.id === id || r.registrationNumber === id) || null;
  },

  async createRTI(data: Partial<RTIApplication>): Promise<RTIApplication> {
    const list = await this.getRTIs();
    const randNum = Math.floor(100000 + Math.random() * 900000);
    const newApp: RTIApplication = {
      id: `rti-${Date.now()}`,
      title: data.title || 'Right to Information Application',
      authorityId: data.authorityId || 'morth',
      authorityName: data.authorityName || 'Central Public Authority',
      subject: data.subject || 'Inquiry under Section 6(1) of RTI Act 2005',
      questions: data.questions || ['Please provide certified records regarding this subject matter.'],
      submittedDate: new Date().toISOString().substring(0, 10),
      expectedDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10),
      status: 'Submitted',
      paymentStatus: 'Success',
      registrationNumber: `RTI-2026-${randNum}`,
      answeredCount: 0,
      totalQuestions: data.questions?.length || 1,
      ...data
    } as RTIApplication;

    const updatedList = [newApp, ...list];
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(RTIS_STORAGE_KEY, JSON.stringify(updatedList));
      } catch (e) {}
    }
    return newApp;
  },

  async updateRTI(id: string, patch: Partial<RTIApplication>): Promise<RTIApplication> {
    const list = await this.getRTIs();
    let updatedApp: RTIApplication | null = null;
    const updatedList = list.map(r => {
      if (r.id === id || r.registrationNumber === id) {
        updatedApp = { ...r, ...patch };
        return updatedApp;
      }
      return r;
    });

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(RTIS_STORAGE_KEY, JSON.stringify(updatedList));
      } catch (e) {}
    }
    return updatedApp || (patch as RTIApplication);
  },

  async getDashboardStatistics(): Promise<DashboardStats> {
    const list = await this.getRTIs();
    const active = list.filter(r => r.status === 'Submitted' || r.status === 'Response Pending' || r.status === 'Processing').length;
    const actionRequired = list.filter(r => r.status === 'Action Required').length;
    const awaitingResponse = list.filter(r => r.status === 'Response Pending' || r.status === 'Processing').length;
    const completed = list.filter(r => r.status === 'Completed' || r.status === 'FAA Decision Received' || r.status === 'Response Received').length;

    return {
      activeCount: active,
      actionRequiredCount: actionRequired || (list.some(r => r.status === 'Action Required') ? 1 : 0),
      awaitingResponseCount: awaitingResponse,
      completedCount: completed,
      totalApplications: list.length
    };
  },

  async resetToSeedData(): Promise<void> {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(RTIS_STORAGE_KEY, JSON.stringify(seedRTIs));
      } catch (e) {}
    }
  }
};
