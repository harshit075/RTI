import { RTIApplication, ResponseAnalysis, AuthoritySuggestionResult } from './types';
import { authorityService } from './authorityService';

export const aiService = {
  async suggestAuthority(query: string, location?: string): Promise<AuthoritySuggestionResult> {
    return authorityService.searchAuthorities(query, location);
  },

  async draftQuestions(intent: string, context?: { location?: string; timeFrom?: string; timeTo?: string }): Promise<string[]> {
    const loc = context?.location || 'the specified jurisdiction';
    const from = context?.timeFrom || 'the last 3 financial years';
    const to = context?.timeTo || 'the present date';

    if (intent.toLowerCase().includes('road') || intent.toLowerCase().includes('construction')) {
      return [
        `Provide certified copies of the administrative and financial sanctions issued for road development in ${loc} from ${from} to ${to}.`,
        `State the total funds sanctioned, amount released to date, and actual itemized expenditures incurred on asphalt, leveling, and drainage.`,
        `Provide certified copies of the contract agreement, successful bidder work order, and contractor guarantee bond.`,
        `Provide copies of all quality control test reports, bitumen thickness audits, and safety inspection certificates recorded by the supervising engineer.`,
        `Specify the designated defect liability warranty period during which the contractor is legally required to repair damages at their own cost.`
      ];
    }

    if (intent.toLowerCase().includes('school') || intent.toLowerCase().includes('teacher') || intent.toLowerCase().includes('vacancy')) {
      return [
        `Provide the total number of sanctioned teaching and non-teaching posts across public secondary institutions in ${loc}.`,
        `Specify the current vacancy count for faculty, TGT, and PGT teachers as of the current academic session.`,
        `State if any requisition has been submitted to the Staff Selection Board / Recruitment Commission for filling these vacant posts.`,
        `Provide certified copies of guidelines regarding student-to-teacher ratio compliance.`
      ];
    }

    return [
      `Provide certified copies of all official records, sanction orders, and file notes concerning: "${intent}".`,
      `State the total public funds allocated, released, and disbursed on this matter between ${from} and ${to}.`,
      `Provide copies of all inspection reports, internal correspondence, and decisions recorded by competent authorities.`,
      `Specify the designated officer responsible for execution and citizen grievance redressal.`
    ];
  },

  async checkSection8Compliance(questions: string[]): Promise<{ score: number; issues: string[]; suggestions: string[] }> {
    const text = questions.join(' ').toLowerCase();
    const issues: string[] = [];
    const suggestions: string[] = [];
    let score = 95;

    if (text.includes('why') || text.includes('kyun')) {
      score -= 20;
      issues.push('Philosophical "Why" question detected. Under Section 2(f), RTIs cover only pre-existing material records, not reasons or justifications.');
      suggestions.push('Rephrase questions to ask for "copies of file notes, rules, and minutes of meetings containing reasons recorded".');
    }

    if (text.includes('secret') || text.includes('cabinet') || text.includes('military') || text.includes('intelligence')) {
      score -= 30;
      issues.push('Potential Section 8(1)(a) national security or cabinet papers exemption clause triggered.');
      suggestions.push('Narrow the request to public expenditure, statistical summaries, or disclosable administrative sanctions.');
    }

    return {
      score: Math.max(20, score),
      issues,
      suggestions
    };
  },

  async analyzeResponse(rti: RTIApplication): Promise<ResponseAnalysis> {
    const answeredCount = rti.answeredCount || 3;
    const total = rti.totalQuestions || 5;
    const partialCount = 1;
    const needsReviewCount = Math.max(0, total - answeredCount - partialCount);
    const scorePercentage = Math.round((answeredCount / total) * 100);

    const breakdown = rti.questionBreakdowns || rti.questions.map((q, idx) => ({
      question: q,
      status: (idx < answeredCount ? 'Answered' : idx === answeredCount ? 'Partially Answered' : 'Needs Review') as any,
      note: idx < answeredCount 
        ? 'Disclosed in official response documentation.' 
        : idx === answeredCount 
        ? 'Vouchers provided but expenditure breakdown table omitted.' 
        : 'Record not furnished; declared under compilation without Section 8 exemption citation.'
    }));

    return {
      rtiId: rti.id,
      answeredCount,
      partialCount,
      needsReviewCount,
      scorePercentage,
      summary: rti.aiAnalysis || `${answeredCount} of ${total} questions answered. Question #${total} regarding inspection certificates appears omitted without statutory exemption.`,
      breakdown,
      suggestedAction: needsReviewCount > 0 ? 'File First Appeal under Section 19(1)' : undefined
    };
  }
};
