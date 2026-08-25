import { Authority, AuthoritySuggestionResult } from './types';
import { seedAuthorities } from './seedData';

export const authorityService = {
  async getAuthorities(filter?: { level?: string; query?: string }): Promise<Authority[]> {
    let list = [...seedAuthorities];
    if (filter?.level && filter.level !== 'All') {
      list = list.filter(a => a.level === filter.level);
    }
    if (filter?.query) {
      const q = filter.query.toLowerCase();
      list = list.filter(a => 
        a.name.toLowerCase().includes(q) ||
        a.department.toLowerCase().includes(q) ||
        a.ministry.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
      );
    }
    return list;
  },

  async getAuthorityById(id: string): Promise<Authority | null> {
    const list = await this.getAuthorities();
    return list.find(a => a.id === id) || null;
  },

  async searchAuthorities(query: string, location?: string): Promise<AuthoritySuggestionResult> {
    const q = query.toLowerCase();
    const loc = (location || '').toLowerCase();

    // Smart semantic rule heuristics
    if (q.includes('road') || q.includes('highway') || q.includes('pothole') || q.includes('construction') || q.includes('ward 42')) {
      return {
        suggestedAuthority: seedAuthorities.find(a => a.id === 'morth') || seedAuthorities[0],
        confidence: 94,
        reason: 'The inquiry pertains to highway development, civic road contracts, and infrastructure expenditure.',
        jurisdictionLevel: 'Central',
        alternativeAuthorities: [
          { authority: seedAuthorities.find(a => a.id === 'djb') || seedAuthorities[0], confidence: 68 }
        ]
      };
    }

    if (q.includes('school') || q.includes('teacher') || q.includes('recruitment') || q.includes('vacancy') || q.includes('college') || q.includes('exam')) {
      return {
        suggestedAuthority: seedAuthorities.find(a => a.id === 'ugc') || seedAuthorities[1],
        confidence: 96,
        reason: 'The inquiry concerns educational grants, teaching faculty sanctioned strength, and public school compliance.',
        jurisdictionLevel: 'Central',
        alternativeAuthorities: []
      };
    }

    if (q.includes('passport') || q.includes('visa') || q.includes('embassy') || q.includes('consular')) {
      return {
        suggestedAuthority: seedAuthorities.find(a => a.id === 'passport') || seedAuthorities[2],
        confidence: 98,
        reason: 'The request relates directly to consular services, passport processing, and police verification reports.',
        jurisdictionLevel: 'Central',
        alternativeAuthorities: []
      };
    }

    if (q.includes('railway') || q.includes('train') || q.includes('station') || q.includes('escalator') || q.includes('ticket')) {
      return {
        suggestedAuthority: seedAuthorities.find(a => a.id === 'railways') || seedAuthorities[3],
        confidence: 95,
        reason: 'The request concerns railway station modernization, platform facilities, and train operations.',
        jurisdictionLevel: 'Central',
        alternativeAuthorities: []
      };
    }

    if (q.includes('aadhaar') || q.includes('uidai') || q.includes('biometric')) {
      return {
        suggestedAuthority: seedAuthorities.find(a => a.id === 'uidai') || seedAuthorities[4],
        confidence: 99,
        reason: 'Concerns unique identification, Aadhaar updates, and biometric authentication standards.',
        jurisdictionLevel: 'Central',
        alternativeAuthorities: []
      };
    }

    // Default fallback
    return {
      suggestedAuthority: seedAuthorities[0],
      confidence: 82,
      reason: 'General public records request mapped to standard central administrative authority.',
      jurisdictionLevel: 'Central',
      alternativeAuthorities: [
        { authority: seedAuthorities[1], confidence: 64 },
        { authority: seedAuthorities[2], confidence: 58 }
      ]
    };
  }
};
