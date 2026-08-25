import { DocumentItem } from './types';
import { seedDocuments } from './seedData';

export const documentService = {
  async getDocuments(rtiId?: string): Promise<DocumentItem[]> {
    if (rtiId) {
      return seedDocuments.filter(d => d.rtiRegNo === rtiId || d.id === rtiId);
    }
    return [...seedDocuments];
  },

  async getDocumentById(id: string): Promise<DocumentItem | null> {
    const list = await this.getDocuments();
    return list.find(d => d.id === id || d.fileName === id) || null;
  }
};
