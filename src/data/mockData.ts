export interface Authority {
  id: string;
  name: string;
  department: string;
  ministry: string;
  level: 'Central' | 'State';
  cpioName: string;
  cpioDesignation: string;
  cpioAddress: string;
  faaName: string;
  faaDesignation: string;
  faaAddress: string;
  website: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'Basics' | 'Fees' | 'Process' | 'Appeals' | 'Exemptions';
  citation: string;
}

export interface QuestionBreakdown {
  question: string;
  status: 'Answered' | 'Partially Answered' | 'Needs Review';
  note: string;
}

export interface RTIApplication {
  id: string;
  title: string;
  authorityId: string;
  subject: string;
  questions: string[];
  submittedDate: string;
  expectedDate: string;
  status: 'Draft' | 'Processing' | 'Submitted' | 'Response Pending' | 'Response Received' | 'Action Required' | 'First Appeal Filed' | 'FAA Decision Received' | 'Second Appeal Filed';
  paymentId?: string;
  paymentStatus: 'Pending' | 'Success' | 'Failed';
  registrationNumber?: string;
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
  questionBreakdowns?: QuestionBreakdown[];
  aiAnalysis?: string;
}

export interface DemoUser {
  name: string;
  email: string;
  mobile: string;
  location: string;
  accountType: string;
  isDemo: boolean;
  avatarUrl?: string;
  joinedDate: string;
}

export const defaultDemoUser: DemoUser = {
  name: 'Aarav Sharma',
  email: 'aarav.sharma.demo@example.com',
  mobile: '+91 90000 00000',
  location: 'Jaipur, Rajasthan',
  accountType: 'Citizen',
  isDemo: true,
  joinedDate: 'August 2026'
};

export interface MockDocument {
  id: string;
  title: string;
  fileName: string;
  fileSize: string;
  date: string;
  type: 'application' | 'receipt' | 'response' | 'appeal' | 'acknowledgment';
  rtiRegNo: string;
  authorityName: string;
  previewContent: string;
}

export const mockDocuments: MockDocument[] = [
  {
    id: 'doc-1',
    title: 'Formal RTI Application Petition',
    fileName: 'RTI_Application_RTI-2026-001245.pdf',
    fileSize: '142 KB',
    date: '12 Aug 2026',
    type: 'application',
    rtiRegNo: 'RTI-2026-001245',
    authorityName: 'Jaipur Greater Municipal Corporation / MoRTH',
    previewContent: `RIGHT TO INFORMATION APPLICATION (Section 6(1), RTI Act 2005)
Registration No: RTI-2026-001245
Filing Date: 12 August 2026

Applicant: Aarav Sharma (Citizen of India)
Public Authority: Urban Development / Municipal Works Division

Subject: Request for Sanction Orders, Contractor Work Orders, and Quality Inspection Audits for Road Construction in Ward 42, Jaipur.

Information Requested:
1. Provide the sanctioned financial budget and source of funding for Ward 42 road works.
2. Provide the disbursement ledger and tranches released to date.
3. Provide itemized expenditures on asphalt, leveling, and drainage.
4. Provide the certified contract agreement and work order #JPR/RD/2024/098.
5. Provide copies of the final completion certificate, quality assurance test report, and structural safety audit.`
  },
  {
    id: 'doc-2',
    title: 'Statutory ₹10 Payment Receipt',
    fileName: 'Payment_Receipt_TXN-001245.pdf',
    fileSize: '88 KB',
    date: '12 Aug 2026',
    type: 'receipt',
    rtiRegNo: 'RTI-2026-001245',
    authorityName: 'Government of India — Central Payment Gateway',
    previewContent: `GOVERNMENT OF INDIA — RTI PAYMENT RECEIPT
Transaction Reference: DEMO-TXN-2026-001245
Gateway: Bharatkosh / UPI Integrated Gateway
Payer Name: Aarav Sharma
Fee Amount: ₹10.00 (Indian Rupees Ten Only)
Payment Status: SUCCESS (Simulated Demo Environment)
Application Ref: RTI-2026-001245
Statutory Section: Rule 3, RTI (Regulation of Fee and Cost) Rules, 2012`
  },
  {
    id: 'doc-3',
    title: 'Official CPIO Response & Disclosure Letter',
    fileName: 'CPIO_Response_Letter_Ward42.pdf',
    fileSize: '310 KB',
    date: '24 Aug 2026',
    type: 'response',
    rtiRegNo: 'RTI-2026-001245',
    authorityName: 'Central Public Information Office (CPIO)',
    previewContent: `OFFICE OF THE CENTRAL PUBLIC INFORMATION OFFICER
Dispatch Ref: CPIO/DISC/2026/08/1194
Date: 24 August 2026

To,
Shri Aarav Sharma, Jaipur, Rajasthan

Subject: Response to RTI Request No. RTI-2026-001245

Sir/Madam,
With reference to your RTI application, the point-wise information is furnished below:
1. Sanctioned Budget: ₹1,42,50,000 sanctioned under Urban Infrastructure Fund (Copy enclosed).
2. Funds Released: ₹1,18,00,000 released in 3 tranches to contractor.
3. Expenditure Ledger: Enclosed in Annexure-A (Bitumen & surfacing vouchers).
4. Work Order: Certified copy of Work Order #JPR/RD/2024/098 enclosed in Annexure-B.
5. Inspection & Completion Audit: Records under compilation by engineering wing.

First Appellate Authority:
Shri Arvind Singh, Chief General Manager (Appeals)`
  },
  {
    id: 'doc-4',
    title: 'Hospital Equipment Procurement Inquiry Application',
    fileName: 'RTI_Application_RTI-2026-001355.pdf',
    fileSize: '128 KB',
    date: '20 Jul 2026',
    type: 'application',
    rtiRegNo: 'RTI-2026-001355',
    authorityName: 'Ministry of Health & Family Welfare',
    previewContent: `RIGHT TO INFORMATION REQUEST
Registration No: RTI-2026-001355
Filing Date: 20 July 2026

Applicant: Aarav Sharma
Subject: Diagnostic Equipment (MRI/CT) Procurement & Maintenance Logs

Questions:
1. Sanctioned budget and purchase invoice copies for MRI and CT scanners.
2. Annual Maintenance Contract (AMC) agreements for 2024-2026.
3. Breakdown / downtime logs showing days machines remained unserviceable.
4. Patient grievance registers regarding non-functional diagnostic units.`
  },
  {
    id: 'doc-5',
    title: 'First Appeal Petition under Section 19(1)',
    fileName: 'First_Appeal_Draft_FAA-DEMO-00421.pdf',
    fileSize: '165 KB',
    date: '25 Aug 2026',
    type: 'appeal',
    rtiRegNo: 'RTI-2026-001355',
    authorityName: 'First Appellate Authority (FAA)',
    previewContent: `BEFORE THE FIRST APPELLATE AUTHORITY (Under Section 19(1) RTI Act 2005)
Appeal Case No: FAA-DEMO-2026-00421
Date: 25 August 2026

Appellant: Aarav Sharma
Respondent: CPIO, Public Health Procurement Wing

Grounds of Appeal:
1. The CPIO wrongfully withheld equipment breakdown logs citing Section 8(1)(d).
2. Uptime of critical hospital machinery directly concerns public healthcare delivery.
3. Prayer: Direct the CPIO to furnish complete unredacted AMC service logs within 15 days.`
  }
];

export interface MockNotification {
  id: string;
  title: string;
  time: string;
  type: 'alert' | 'update' | 'deadline' | 'info';
  read: boolean;
  rtiId?: string;
}

export const mockNotifications: MockNotification[] = [
  {
    id: 'notif-1',
    title: 'Official CPIO response letter received for RTI-2026-001245 (Ward 42 Road Construction).',
    time: '2 hours ago',
    type: 'update',
    read: false,
    rtiId: 'rti-road-jaipur-1245'
  },
  {
    id: 'notif-2',
    title: 'Action Required: Incomplete response on RTI-2026-001355. Review First Appeal grounds.',
    time: '5 hours ago',
    type: 'alert',
    read: false,
    rtiId: 'rti-hospital-1355'
  },
  {
    id: 'notif-3',
    title: 'Payment of ₹10 successfully confirmed for Application RTI-2026-001312.',
    time: 'Yesterday',
    type: 'info',
    read: false,
    rtiId: 'rti-school-1312'
  },
  {
    id: 'notif-4',
    title: 'CPIO assigned: Department of Education acknowledged Government Schools Vacancy inquiry.',
    time: '3 days ago',
    type: 'update',
    read: true,
    rtiId: 'rti-school-1312'
  },
  {
    id: 'notif-5',
    title: 'Welcome to RTI Saathi! Your citizen workspace is configured and ready.',
    time: '5 days ago',
    type: 'info',
    read: true
  }
];

export const mockAuthorities: Authority[] = [
  {
    id: 'morth',
    name: 'National Highways Authority of India (NHAI) / MoRTH',
    department: 'NHAI Project Implementation Unit',
    ministry: 'Ministry of Road Transport and Highways',
    level: 'Central',
    cpioName: 'Shri Manoj Pandey',
    cpioDesignation: 'General Manager (Tech) & CPIO',
    cpioAddress: 'G-5 & 6, Sector-10, Dwarka, New Delhi - 110075',
    faaName: 'Shri Arvind Singh',
    faaDesignation: 'Chief General Manager & First Appellate Authority',
    faaAddress: 'G-5 & 6, Sector-10, Dwarka, New Delhi - 110075',
    website: 'https://nhai.gov.in',
    description: 'Manages national highway development, toll contracts, bypass roads, village road links, and highway expansion budgets.'
  },
  {
    id: 'ugc',
    name: 'University Grants Commission (UGC) / Dept of Education',
    department: 'Department of School Education & Literacy',
    ministry: 'Ministry of Education',
    level: 'Central',
    cpioName: 'Dr. Shakeel Ahmad',
    cpioDesignation: 'Joint Secretary & CPIO',
    cpioAddress: 'Bahadur Shah Zafar Marg, New Delhi - 110002',
    faaName: 'Prof. Manish Joshi',
    faaDesignation: 'Secretary & First Appellate Authority',
    faaAddress: 'Bahadur Shah Zafar Marg, New Delhi - 110002',
    website: 'https://ugc.gov.in',
    description: 'Regulates education standards, school faculty sanctioned posts, university research grants, and public institutional audits.'
  },
  {
    id: 'passport',
    name: 'Consular, Passport & Visa (CPV) Division',
    department: 'Passport Seva Project',
    ministry: 'Ministry of External Affairs',
    level: 'Central',
    cpioName: 'Shri Vikram Dev',
    cpioDesignation: 'Under Secretary & CPIO',
    cpioAddress: 'Patiala House Annexe, Tilak Marg, New Delhi - 110001',
    faaName: 'Dr. Sumit Seth',
    faaDesignation: 'Joint Secretary (CPV) & First Appellate Authority',
    faaAddress: 'Patiala House Annexe, Tilak Marg, New Delhi - 110001',
    website: 'https://passportindia.gov.in',
    description: 'Handles passport issuance, police verification inquiries, biometric delays, and consular records.'
  },
  {
    id: 'railways',
    name: 'Railway Board',
    department: 'RTI Cell, Railway Board',
    ministry: 'Ministry of Railways',
    level: 'Central',
    cpioName: 'Shri R. K. Saxena',
    cpioDesignation: 'Joint Director & CPIO',
    cpioAddress: 'Room No. 5, Ground Floor, Rail Bhawan, Raisina Road, New Delhi - 110001',
    faaName: 'Shri Sanjay Prasad',
    faaDesignation: 'Executive Director & First Appellate Authority',
    faaAddress: 'Rail Bhawan, Raisina Road, New Delhi - 110001',
    website: 'https://indianrailways.gov.in',
    description: 'Coordinates policymaking, project tenders, operations, recruitment, and safety across India\'s railway network.'
  },
  {
    id: 'uidai',
    name: 'Unique Identification Authority of India (UIDAI)',
    department: 'UIDAI Headquarters',
    ministry: 'Ministry of Electronics and Information Technology',
    level: 'Central',
    cpioName: 'Shri Amit Kumar',
    cpioDesignation: 'Deputy Director & CPIO',
    cpioAddress: 'UIDAI HQ, Bangla Sahib Road, Behind Kali Mandir, Gole Market, New Delhi - 110001',
    faaName: 'Smt. Geeta Rani',
    faaDesignation: 'Director & First Appellate Authority',
    faaAddress: 'UIDAI HQ, Bangla Sahib Road, Gole Market, New Delhi - 110001',
    website: 'https://uidai.gov.in',
    description: 'Responsible for Aadhaar enrolment, authentication, card distribution, and data security.'
  },
  {
    id: 'epfo',
    name: 'Employees\' Provident Fund Organisation (EPFO)',
    department: 'EPFO Head Office',
    ministry: 'Ministry of Labour & Employment',
    level: 'Central',
    cpioName: 'Shri Pradeep Kumar',
    cpioDesignation: 'Regional PF Commissioner-II',
    cpioAddress: 'Bhavishya Nidhi Bhawan, 14, Bhikaiji Cama Place, New Delhi - 110066',
    faaName: 'Shri Rajesh Bansal',
    faaDesignation: 'Additional Central PF Commissioner',
    faaAddress: 'Bhavishya Nidhi Bhawan, 14, Bhikaiji Cama Place, New Delhi - 110066',
    website: 'https://epfindia.gov.in',
    description: 'Manages member contributions, provident fund claim settlements, pensions, and EPF interest status.'
  },
  {
    id: 'djb',
    name: 'Delhi Jal Board (DJB)',
    department: 'Water Billing & Distribution Division',
    ministry: 'Government of NCT of Delhi',
    level: 'State',
    cpioName: 'Shri Ramesh Chand',
    cpioDesignation: 'Assistant Commissioner & CPIO',
    cpioAddress: 'Varunalaya Phase-II, Karol Bagh, New Delhi - 110005',
    faaName: 'Shri K. C. Sharma',
    faaDesignation: 'Member (Administration) & First Appellate Authority',
    faaAddress: 'Varunalaya Phase-II, Karol Bagh, New Delhi - 110005',
    website: 'https://rtionline.delhi.gov.in/',
    description: 'Responsible for potable water supply, sewage systems, and billing disputes in Delhi.'
  },
  {
    id: 'uppolice',
    name: 'Uttar Pradesh Police Headquarters',
    department: 'Public Grievance Cell',
    ministry: 'Home Department, Government of Uttar Pradesh',
    level: 'State',
    cpioName: 'Shri Akhilesh Prasad',
    cpioDesignation: 'Superintendent of Police & CPIO',
    cpioAddress: 'Signature Building, Gomti Nagar Extension, Lucknow, UP - 226002',
    faaName: 'Shri R. K. Vishwakarma',
    faaDesignation: 'Additional Director General & FAA',
    faaAddress: 'Signature Building, Gomti Nagar Extension, Lucknow, UP - 226002',
    website: 'https://rtionline.up.gov.in/',
    description: 'Responsible for law enforcement, crime investigation, and local police station queries in Uttar Pradesh.'
  },
  {
    id: 'bbmp',
    name: 'Bruhat Bengaluru Mahanagara Palike (BBMP)',
    department: 'Revenue & Public Works Division',
    ministry: 'Urban Development, Government of Karnataka',
    level: 'State',
    cpioName: 'Smt. Lakshmi Devi',
    cpioDesignation: 'Joint Commissioner & CPIO',
    cpioAddress: 'BBMP Head Office, Hudson Circle, Bengaluru, Karnataka - 560002',
    faaName: 'Shri Tushar Giri Nath',
    faaDesignation: 'Chief Commissioner & FAA',
    faaAddress: 'BBMP Head Office, Bengaluru, Karnataka - 560002',
    website: 'https://rtionline.karnataka.gov.in/',
    description: 'Responsible for civic administration, city roads, property tax, and municipal infrastructure in Bengaluru.'
  }
];

export const mockFAQs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Who is eligible to file an RTI?',
    answer: 'Any citizen of India is eligible to file a Right to Information request. Organizations, corporations, or non-citizens are not legally covered under Section 3 of the RTI Act, though individuals representing them may file in their own name.',
    category: 'Basics',
    citation: 'RTI Act 2005, Section 3'
  },
  {
    id: 'faq-2',
    question: 'What is the application fee for filing an RTI?',
    answer: 'For Central Government departments, the fee is ₹10. For Below Poverty Line (BPL) citizens, the fee is completely waived, provided they upload a copy of their BPL card/certificate.',
    category: 'Fees',
    citation: 'RTI Rules 2012, Rule 3 & 4'
  },
  {
    id: 'faq-3',
    question: 'What are the response time limits under the RTI Act?',
    answer: 'An Information Officer (CPIO) must respond within 30 days from the date of receipt. If the request concerns the life or liberty of a person, the response must be provided within 48 hours.',
    category: 'Process',
    citation: 'RTI Act 2005, Section 7(1)'
  },
  {
    id: 'faq-4',
    question: 'When can I file a First Appeal?',
    answer: 'You can file a First Appeal if: 1. No response is received within the 30-day deadline, 2. The response is incomplete or incorrect, or 3. Your request was unreasonably rejected. The appeal must be filed within 30 days of the response date (or from when the deadline passed).',
    category: 'Appeals',
    citation: 'RTI Act 2005, Section 19(1)'
  },
  {
    id: 'faq-5',
    question: 'What information cannot be disclosed?',
    answer: 'Information affecting national sovereignty, security, strategic/economic interests, trade secrets, intellectual property, information received in confidence from a foreign government, or personal information with no public interest is exempt under Section 8(1).',
    category: 'Exemptions',
    citation: 'RTI Act 2005, Section 8(1)'
  },
  {
    id: 'faq-6',
    question: 'How do I file a Second Appeal or Complaint?',
    answer: 'If you are unsatisfied with the First Appellate Authority\'s (FAA) decision or they fail to respond within 45 days, you can file a Second Appeal or Complaint under Section 19(3) directly with the Central Information Commission (CIC) at cic.gov.in. This must be filed within 90 days of the decision.',
    category: 'Appeals',
    citation: 'RTI Act 2005, Section 19(3)'
  },
  {
    id: 'faq-7',
    question: 'What if my payment was deducted but registration failed?',
    answer: 'Use the "Payment Reconciliation" page. Enter your transaction ID or Bank UTR. The portal queries the bank network ledger to reconcile payment statuses within 24 hours, registering and dispatching your application once verified.',
    category: 'Fees',
    citation: 'DoPT Guidelines'
  },
  {
    id: 'faq-8',
    question: 'What happens if 30 days pass with no response from the CPIO?',
    answer: 'Under Section 7(2) of the RTI Act, if the CPIO fails to reply within 30 days, it is deemed a refusal. You are entitled to file a First Appeal immediately on our portal without paying any appeal fees. The senior FAA officer must decide the appeal within 30 to 45 days.',
    category: 'Appeals',
    citation: 'RTI Act 2005, Section 7(2) & 19(1)'
  }
];

export const initialRTIs: RTIApplication[] = [
  {
    id: 'rti-road-jaipur-1245',
    title: 'Road Construction Expenditure — Ward 42, Jaipur',
    authorityId: 'morth',
    subject: 'Sanctioned funds, contractor tenders, work orders, and safety audits for Ward 42 road works in Jaipur',
    questions: [
      'Provide the total sanctioned financial amount and source of funding for the road construction project in Ward 42, Jaipur.',
      'Provide the exact amount released to date and payment disbursement ledger for this road stretch.',
      'Provide the itemized expenditure incurred on bitumen, road leveling, drainage construction, and street lighting.',
      'Provide certified copies of the contract agreement, successful bidder tender award, and work order issued to the executing agency.',
      'Provide copies of the final completion certificate, quality assurance audit report, and structural inspection notes issued by the municipal engineer.'
    ],
    submittedDate: '2026-08-12',
    expectedDate: '2026-09-11',
    status: 'Response Received',
    paymentStatus: 'Success',
    paymentId: 'DEMO-TXN-2026-001245',
    registrationNumber: 'RTI-2026-001245',
    responseDocumentUrl: '/docs/CPIO_Response_Letter_Ward42.pdf',
    responseDate: '2026-08-24',
    responseSummary: 'The Public Authority provided the sanctioned budget (₹1.42 Cr) and contractor work order. However, Question 5 regarding completion inspection reports and defect liability logs was left unanswered without statutory justification.',
    answeredCount: 3,
    totalQuestions: 5,
    questionBreakdowns: [
      {
        question: 'Provide the total sanctioned financial amount and source of funding for the road construction project in Ward 42, Jaipur.',
        status: 'Answered',
        note: 'Sanction order dated 14/01/2024 (Sanctioned Amount: ₹1,42,50,000) attached in document disclosure.'
      },
      {
        question: 'Provide the exact amount released to date and payment disbursement ledger for this road stretch.',
        status: 'Answered',
        note: 'Disbursement register showing ₹1,18,00,000 released in 3 tranches provided in Annexure-A.'
      },
      {
        question: 'Provide the itemized expenditure incurred on bitumen, road leveling, drainage construction, and street lighting.',
        status: 'Partially Answered',
        note: 'Bitumen and asphalt bills provided; drainage expenditure vouchers omitted.'
      },
      {
        question: 'Provide certified copies of the contract agreement, successful bidder tender award, and work order issued to the executing agency.',
        status: 'Answered',
        note: 'Work order copy #JPR/RD/2024/098 provided in Annexure-B.'
      },
      {
        question: 'Provide copies of the final completion certificate, quality assurance audit report, and structural inspection notes issued by the municipal engineer.',
        status: 'Needs Review',
        note: 'Inspection report and structural audit were not provided. CPIO stated "Records under compilation".'
      }
    ],
    aiAnalysis: 'Question 5 does not appear to have a corresponding document or clear response. Under Section 7(1) of the RTI Act, withholding inspection records without citing Section 8 exemptions is invalid. Strong legal grounds exist to file a First Appeal under Section 19(1).'
  },
  {
    id: 'rti-school-1312',
    title: 'Recruitment and Vacancy Information in Government Schools',
    authorityId: 'ugc',
    subject: 'Sanctioned teaching posts, vacancy figures, and teacher recruitment status for public secondary schools',
    questions: [
      'Provide the total number of sanctioned teaching and non-teaching posts across Government Model Secondary Schools.',
      'Specify the current vacancy count for TGT and PGT faculty as on 1st August 2026.',
      'State if any requisition has been submitted to the Staff Selection Board / Recruitment Commission for filling these vacant posts.',
      'Provide the certified copies of guidelines regarding student-to-teacher ratio compliance.'
    ],
    submittedDate: '2026-08-18',
    expectedDate: '2026-09-17',
    status: 'Response Pending',
    paymentStatus: 'Success',
    paymentId: 'DEMO-TXN-2026-001312',
    registrationNumber: 'RTI-2026-001312',
    answeredCount: 0,
    totalQuestions: 4
  },
  {
    id: 'rti-hospital-1355',
    title: 'Government Hospital Equipment Procurement',
    authorityId: 'morth',
    subject: 'Procurement tenders, AMC maintenance logs, and operational status of MRI and CT scan machinery at district hospital',
    questions: [
      'Provide the sanctioned budget and purchase invoice copies for MRI and CT scanners installed at the District Civil Hospital.',
      'Provide the annual maintenance contract (AMC) agreement and service logs for the past 24 months.',
      'Specify the number of days the MRI machine remained non-operational / out of order during 2025-2026.',
      'Provide copies of complaints lodged by patients regarding diagnostic machine downtime.'
    ],
    submittedDate: '2026-07-20',
    expectedDate: '2026-08-19',
    status: 'Action Required',
    paymentStatus: 'Success',
    paymentId: 'DEMO-TXN-2026-001355',
    registrationNumber: 'RTI-2026-001355',
    responseDate: '2026-08-18',
    responseSummary: 'The CPIO furnished vendor invoice receipts but denied equipment downtime logs and maintenance reports citing commercial confidentiality.',
    answeredCount: 1,
    totalQuestions: 4,
    questionBreakdowns: [
      {
        question: 'Provide the sanctioned budget and purchase invoice copies for MRI and CT scanners installed at the District Civil Hospital.',
        status: 'Answered',
        note: 'Purchase bills and capital asset entries provided.'
      },
      {
        question: 'Provide the annual maintenance contract (AMC) agreement and service logs for the past 24 months.',
        status: 'Needs Review',
        note: 'Denied citing commercial confidentiality.'
      },
      {
        question: 'Specify the number of days the MRI machine remained non-operational / out of order during 2025-2026.',
        status: 'Needs Review',
        note: 'Log sheet declared unavailable.'
      },
      {
        question: 'Provide copies of complaints lodged by patients regarding diagnostic machine downtime.',
        status: 'Partially Answered',
        note: 'Summary count provided without complaint register copies.'
      }
    ],
    aiAnalysis: 'CPIO denied breakdown logs citing commercial confidence under Section 8(1)(d). However, diagnostic machinery uptime at a public hospital impacts citizen healthcare rights. Filing a First Appeal with the First Appellate Authority (FAA) is strongly recommended.'
  },
  {
    id: 'rti-passport-101',
    title: 'Passport Delay Inquiry',
    authorityId: 'passport',
    subject: 'Reason for delay in issuing passport for Application File No. DL2068472910',
    questions: [
      'Provide the dates on which verification requests were sent to the local police station.',
      'Specify the date on which the police verification report was received by the Passport Office.',
      'Provide copies of all internal notes/remarks recorded by verification officers regarding this application.',
      'State the official reasons and rules under which the passport has not been dispatched yet.'
    ],
    submittedDate: '2026-08-01',
    expectedDate: '2026-08-31',
    status: 'Response Pending',
    paymentStatus: 'Success',
    paymentId: 'DEMO-TXN-2026-000101',
    registrationNumber: 'MEXTA/R/2026/08492',
    answeredCount: 0,
    totalQuestions: 4
  },
  {
    id: 'rti-railways-204',
    title: 'Railway Platform Upgrades Tender',
    authorityId: 'railways',
    subject: 'Details of tender and work orders for escalators at Jaipur Junction',
    questions: [
      'Provide copies of the tender notice and successful bidder details for work order JPR-ESC-2025.',
      'State the total funds sanctioned, released, and actually spent on this escalator installation project.',
      'Provide copies of the completion certificate and inspection report issued by the safety auditor.'
    ],
    submittedDate: '2026-07-15',
    expectedDate: '2026-08-14',
    status: 'First Appeal Filed',
    paymentStatus: 'Success',
    paymentId: 'DEMO-TXN-2026-000204',
    registrationNumber: 'MORLY/R/2026/05931',
    responseDocumentUrl: '/docs/response_morly_05931.pdf',
    responseDate: '2026-08-10',
    appealDate: '2026-08-15',
    appealReason: 'Incomplete information regarding safety certificates and structural audit.',
    responseSummary: 'The CPIO supplied the tender order copy and expenditure breakdown. However, the completion audit and inspection notes were declared unavailable due to audit delays.',
    answeredCount: 2,
    totalQuestions: 3
  }
];

export interface PublicDisclosure {
  id: string;
  title: string;
  category: string;
  ministry: string;
  source: string;
  url: string;
  snippet: string;
  keywords: string[];
}

export interface RtiTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  subject: string;
  questions: string[];
}

export { type GeoLocalBody, type GeoDistrict, type GeoState, geographicHierarchy } from './geoHierarchyData';

export const mockDisclosures: PublicDisclosure[] = [
  {
    id: 'disc-passport',
    title: 'Consular Visa and Passport Dispositions Summary Report — 2025',
    category: 'Annual Reports',
    ministry: 'Ministry of External Affairs',
    source: 'MEA Publications Database (Official Source)',
    url: 'https://passportindia.gov.in',
    snippet: 'This annual report outlines the average processing time, police verification bottlenecks, and dispatch timelines across regional passport offices.',
    keywords: ['passport', 'visa', 'dispatch', 'delay', 'consular']
  },
  {
    id: 'disc-jaipur',
    title: 'Jaipur Junction Escalator Sanctioned Funds & Timelines',
    category: 'Tenders & Projects',
    ministry: 'Ministry of Railways',
    source: 'Indian Railways Portal (Official Source)',
    url: 'https://indianrailways.gov.in',
    snippet: 'Contains detailed project allocations, work orders for escalator upgrades, safety clearances, and contract details for JPR-ESC-2025.',
    keywords: ['railway', 'jaipur', 'escalator', 'jaipur junction', 'station', 'tender']
  },
  {
    id: 'disc-uidai',
    title: 'UIDAI Aadhaar Enrolment & Document Update Guidelines — Section 4 Manual',
    category: 'Proactive Disclosure',
    ministry: 'Ministry of Electronics and Information Technology',
    source: 'UIDAI Official Portal',
    url: 'https://uidai.gov.in',
    snippet: 'Official procedures, grievance turnaround times, and biometric authentication standards under the Aadhaar (Targeted Delivery of Financial Subsidies) Act.',
    keywords: ['aadhaar', 'uidai', 'update', 'address', 'biometric']
  },
  {
    id: 'disc-highway',
    title: 'NHAI Highway Upgrades & Village Road Link Fund Disclosures',
    category: 'Public Works & Roads',
    ministry: 'Ministry of Road Transport and Highways',
    source: 'NHAI Financial Portal',
    url: 'https://nhai.gov.in',
    snippet: 'Discloses sanctioned budgets, contractor agreements, and project milestone reports for national and state highway connective works.',
    keywords: ['highway', 'road', 'morth', 'nhai', 'tender', 'expenditure', 'contractor']
  }
];

export const mockTemplates: RtiTemplate[] = [
  {
    id: 'temp-road',
    title: 'Road Construction & Tender Details',
    category: 'Public Works',
    description: 'Inquire about road repair budgets, contractor work orders, bitumen quality tests, and warranty liability periods.',
    subject: 'Request for road construction work order, expenditure records, and quality certificates',
    questions: [
      'Provide certified copies of the administrative approval and financial sanction issued for this road project.',
      'State the sanctioned budget, the amount released so far, and the actual expenditure incurred.',
      'Provide a copy of the contract agreement and work order issued to the winning bidder/contractor.',
      'Provide copies of all quality control test reports and safety certificates recorded during construction.',
      'Specify the official defect liability period during which the contractor is legally liable to repair new damages.'
    ]
  },
  {
    id: 'temp-police',
    title: 'Police Complaint & Investigation Progress',
    category: 'Police & Security Records',
    description: 'Request formal status logs, file notes, and official reports regarding registered FIRs or police complaints.',
    subject: 'Request for investigation progress logs and notes for FIR file',
    questions: [
      'Provide copies of all daily case diary entries and progress reports recorded for this complaint file.',
      'Specify the designations and names of the investigating officers assigned to this file from start to date.',
      'State if any chargesheets or closure reports have been filed before the judicial magistrate. Provide copies if yes.',
      'Provide copies of all disclosable communication sent to senior divisions regarding this case file.'
    ]
  },
  {
    id: 'temp-school',
    title: 'Public School Expenditures & Grants',
    category: 'Education',
    description: 'Check how public schools or government colleges allocate funding, construct infrastructures, and employ staff.',
    subject: 'Request for public fund allocations and structural audits of the school',
    questions: [
      'Provide the details of government grants and funding received by this school during the fiscal years.',
      'Specify the total expenditures incurred on school infrastructure, student mid-day meals, and textbooks.',
      'Provide the safety certificate and structure audit report issued for the school building.',
      'Provide the category-wise list of sanctioned teaching and non-teaching posts, along with current vacancy figures.'
    ]
  }
];

export const inMemoryRtis: RTIApplication[] = [...initialRTIs];
