import { DeadlineInfo, RTIStatus, UrgencyLevel } from './types';

export const deadlineService = {
  calculateDeadline(submittedDate: string, status: RTIStatus): DeadlineInfo {
    const STATUTORY_LIMIT_DAYS = 30;
    
    // Parse submission date
    const subDate = new Date(submittedDate);
    const expected = new Date(subDate);
    expected.setDate(expected.getDate() + STATUTORY_LIMIT_DAYS);

    const now = new Date('2026-08-25'); // Anchored demo date
    const diffTime = expected.getTime() - now.getTime();
    const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let urgency: UrgencyLevel = 'normal';
    let statusLabel = `${daysRemaining} days remaining`;

    if (status === 'Response Received' || status === 'Completed' || status === 'FAA Decision Received') {
      urgency = 'completed';
      statusLabel = 'Response provided';
    } else if (daysRemaining <= 0) {
      urgency = 'overdue';
      statusLabel = 'Statutory 30 days exceeded (Deemed Refusal)';
    } else if (daysRemaining <= 7) {
      urgency = 'due-soon';
      statusLabel = `Due in ${daysRemaining} days`;
    }

    const expectedDateStr = expected.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    return {
      expectedDate: expectedDateStr,
      daysRemaining: Math.max(0, daysRemaining),
      urgency,
      statusLabel,
      statutoryLimitDays: STATUTORY_LIMIT_DAYS
    };
  }
};
