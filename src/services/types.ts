export type AuthorityLevel = 'Central' | 'State';

export interface Authority {
  id: string;
  name: string;
  department: string;
  ministry: string;
  level: AuthorityLevel;
  cpioName: string;
  cpioDesignation: string;
  cpioAddress: string;
  faaName: string;
  faaDesignation: string;
  faaAddress: string;
  website: string;
  description: string;
}

export type RTIStatus = 
  | 'Draft' 
  | 'Processing' 
  | 'Submitted' 
  | 'Response Pending' 
  | 'Response Received' 
  | 'Action Required' 
  | 'First Appeal Filed' 
  | 'FAA Decision Received' 
  | 'Second Appeal Filed'
  | 'Completed'
  | 'Returned'
  | 'Transferred'
  | 'Additional Fee Due'
  | 'Document Required';

export type PaymentStatus = 'Pending' | 'Success' | 'Failed';

export interface QuestionBreakdownItem {
  question: string;
  status: 'Answered' | 'Partially Answered' | 'Needs Review';
  note: string;
  sourceDoc?: string;
  sourcePage?: number;
}

export interface RemarkMilestone {
  date: string;
  status: RTIStatus;
  remark: string;
  officer: string;
}

export interface RTIApplication {
  id: string;
  title: string;
  authorityId: string;
  authorityName?: string;
  subject: string;
  questions: string[];
  submittedDate: string;
  expectedDate: string;
  status: RTIStatus;
  paymentId?: string;
  paymentStatus: PaymentStatus;
  registrationNumber: string;
  responseDocumentUrl?: string;
  responseDate?: string;
  responseSummary?: string;
  answeredCount: number;
  totalQuestions: number;
  appealReason?: string;
  appealDate?: string;
  notes?: string;
  secondAppealReason?: string;
  secondAppealDate?: string;
  secondAppealText?: string;
  secondAppealRegNo?: string;
  questionBreakdowns?: QuestionBreakdownItem[];
  aiAnalysis?: string;
  
  // Widen data model for missing features
  parentId?: string;
  childRegistrations?: string[];
  remarksTrail?: RemarkMilestone[];
  additionalFeeAmount?: number;
  additionalFeeReason?: string;
  additionalFeeStatus?: 'Pending' | 'Paid';
  requiredDocDescription?: string;
  transferredToAuthority?: string;
  transferredRegNo?: string;
  supportingDocName?: string;
  supportingDocSize?: string;

  // Demographic & BPL fields
  applicantName?: string;
  applicantEmail?: string;
  applicantPhone?: string;
  gender?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  pinCode?: string;
  stateName?: string;
  areaStatus?: string;
  educationLevel?: string;
  educationQual?: string;
  phoneNo?: string;
  isIndianCitizen?: boolean;
  bplStatus?: boolean;
  bplCardNo?: string;
  bplYear?: string;
  bplAuthority?: string;
}

export type TimelineEventStatus = 'completed' | 'current' | 'upcoming';
export type TimelineEventType = 
  | 'DRAFT_CREATED'
  | 'SUBMITTED'
  | 'PAYMENT_CONFIRMED'
  | 'ACKNOWLEDGED'
  | 'CPIO_ASSIGNED'
  | 'RESPONSE_UPLOADED'
  | 'ANALYSIS_READY'
  | 'FIRST_APPEAL_FILED'
  | 'SECOND_APPEAL_FILED'
  | 'FINAL_DECISION';

export interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  title: string;
  description: string;
  date: string;
  status: TimelineEventStatus;
  iconName?: string;
}

export type UrgencyLevel = 'normal' | 'due-soon' | 'overdue' | 'completed';

export interface DeadlineInfo {
  expectedDate: string;
  daysRemaining: number;
  urgency: UrgencyLevel;
  statusLabel: string;
  statutoryLimitDays: number;
}

export type DocumentType = 'application' | 'receipt' | 'response' | 'appeal' | 'acknowledgment';

export interface DocumentItem {
  id: string;
  title: string;
  fileName: string;
  fileSize: string;
  date: string;
  type: DocumentType;
  rtiRegNo: string;
  authorityName: string;
  previewContent: string;
  downloadUrl?: string;
}

export type NotificationType = 'alert' | 'update' | 'deadline' | 'info';

export interface NotificationItem {
  id: string;
  title: string;
  time: string;
  type: NotificationType;
  read: boolean;
  rtiId?: string;
  actionUrl?: string;
}

export interface UserPreferences {
  language: 'en' | 'hi';
  lowBandwidth: boolean;
  textSize: 'normal' | 'large';
  highContrast: boolean;
  reducedMotion: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  location: string;
  accountType: 'Citizen' | 'Legal Representative';
  isVerified: boolean;
  joinedDate: string;
  preferences: UserPreferences;
}

export interface FirstAppealRequest {
  rtiId: string;
  reason: string;
  petitionText: string;
  appellantName: string;
}

export interface SecondAppealRequest {
  rtiId: string;
  reason: string;
  petitionText: string;
  appellantName: string;
}

export interface ResponseAnalysis {
  rtiId: string;
  answeredCount: number;
  partialCount: number;
  needsReviewCount: number;
  scorePercentage: number;
  summary: string;
  breakdown: QuestionBreakdownItem[];
  suggestedAction?: string;
}

export interface AuthoritySuggestionResult {
  suggestedAuthority: Authority | null;
  confidence: number;
  reason: string;
  jurisdictionLevel: AuthorityLevel;
  alternativeAuthorities: Array<{
    authority: Authority;
    confidence: number;
  }>;
}

export interface SearchResultItem {
  id: string;
  title: string;
  snippet: string;
  category: string;
  sourceType: 'Official Source' | 'ParDarshi Guide' | 'Statutory Rule';
  sourceName: string;
  url?: string;
  date?: string;
}

export interface DashboardStats {
  activeCount: number;
  actionRequiredCount: number;
  awaitingResponseCount: number;
  completedCount: number;
  totalApplications: number;
}
