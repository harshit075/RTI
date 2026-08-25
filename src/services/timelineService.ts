import { RTIApplication, TimelineEvent } from './types';

export const timelineService = {
  async getTimelineEvents(application: RTIApplication): Promise<TimelineEvent[]> {
    const events: TimelineEvent[] = [
      {
        id: 'evt-draft',
        type: 'DRAFT_CREATED',
        title: 'Application Drafted',
        description: 'Questions formulated with statutory formatting and validated against Section 8.',
        date: application.submittedDate,
        status: 'completed'
      },
      {
        id: 'evt-submitted',
        type: 'SUBMITTED',
        title: 'Application Submitted',
        description: `Registered with Reference ID ${application.registrationNumber}.`,
        date: application.submittedDate,
        status: 'completed'
      },
      {
        id: 'evt-payment',
        type: 'PAYMENT_CONFIRMED',
        title: 'Payment Confirmed',
        description: 'Statutory ₹10 RTI application fee confirmed via Bharatkosh Gateway.',
        date: application.submittedDate,
        status: application.paymentStatus === 'Success' ? 'completed' : 'current'
      },
      {
        id: 'evt-assigned',
        type: 'CPIO_ASSIGNED',
        title: 'Assigned to Information Officer (CPIO)',
        description: `Forwarded to designated CPIO at ${application.authorityName || 'Public Authority'}.`,
        date: application.submittedDate,
        status: 'completed'
      }
    ];

    if (application.status === 'Response Received' || application.status === 'Action Required' || application.status === 'First Appeal Filed' || application.status === 'Second Appeal Filed') {
      events.push({
        id: 'evt-response',
        type: 'RESPONSE_UPLOADED',
        title: 'Official CPIO Response Letter Furnished',
        description: application.responseSummary || 'The Public Authority uploaded official disclosure letters and project documents.',
        date: application.responseDate || application.expectedDate,
        status: 'completed'
      });
      events.push({
        id: 'evt-analysis',
        type: 'ANALYSIS_READY',
        title: 'Response Verification Complete',
        description: `Verified ${application.answeredCount} of ${application.totalQuestions} questions furnished.`,
        date: application.responseDate || application.expectedDate,
        status: 'completed'
      });
    } else {
      events.push({
        id: 'evt-pending-response',
        type: 'RESPONSE_UPLOADED',
        title: 'Awaiting CPIO Response',
        description: `Statutory 30-day decision deadline: ${application.expectedDate}.`,
        date: application.expectedDate,
        status: 'current'
      });
    }

    if (application.status === 'First Appeal Filed' || application.status === 'Second Appeal Filed') {
      events.push({
        id: 'evt-appeal-1',
        type: 'FIRST_APPEAL_FILED',
        title: 'First Appeal Petition Filed (Section 19(1))',
        description: application.appealReason || 'Escalated to First Appellate Authority (FAA) due to incomplete records.',
        date: application.appealDate || '2026-08-25',
        status: 'completed'
      });
    }

    if (application.status === 'Second Appeal Filed') {
      events.push({
        id: 'evt-appeal-2',
        type: 'SECOND_APPEAL_FILED',
        title: 'Second Appeal Registered with CIC (Section 19(3))',
        description: application.secondAppealReason || 'Central Information Commission (CIC) appeal active.',
        date: application.secondAppealDate || '2026-08-25',
        status: 'completed'
      });
    }

    return events;
  }
};
