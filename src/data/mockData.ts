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

export interface RTIApplication {
  id: string;
  title: string;
  authorityId: string;
  subject: string;
  questions: string[];
  submittedDate: string;
  expectedDate: string;
  status: 'Draft' | 'Processing' | 'Submitted' | 'Response Pending' | 'Response Received' | 'First Appeal Filed' | 'FAA Decision Received' | 'Second Appeal Filed';
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
}

export const mockAuthorities: Authority[] = [
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
    id: 'passport',
    name: 'Consular, Passport & Visa (CPV) Division',
    department: 'Passport Seva Project',
    ministry: 'Ministry of External Affairs',
    level: 'Central',
    cpioName: 'Shri Vikram Dev',
    cpioDesignation: 'Under Secretary & CPIO',
    cpioAddress: 'Patiala House Annexe, Tilak Marg, New Delhi - 110001',
    faaName: 'Smt. Priya Nair',
    faaDesignation: 'Joint Secretary & First Appellate Authority',
    faaAddress: 'Patiala House Annexe, Tilak Marg, New Delhi - 110001',
    website: 'https://passportindia.gov.in',
    description: 'Handles passport issuance delays, renewal grievances, visa cell processing, and consular affairs.'
  },
  {
    id: 'morth',
    name: 'National Highways Authority of India (NHAI)',
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
    id: 'ugc',
    name: 'University Grants Commission (UGC)',
    department: 'UGC Secretariat',
    ministry: 'Ministry of Education',
    level: 'Central',
    cpioName: 'Dr. Shakeel Ahmad',
    cpioDesignation: 'Joint Secretary & CPIO',
    cpioAddress: 'Bahadur Shah Zafar Marg, New Delhi - 110002',
    faaName: 'Prof. Manish Joshi',
    faaDesignation: 'Secretary & First Appellate Authority',
    faaAddress: 'Bahadur Shah Zafar Marg, New Delhi - 110002',
    website: 'https://ugc.gov.in',
    description: 'Regulates higher education, distributes university research grants, and verifies degrees/accreditations.'
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
    status: 'Response Received',
    paymentStatus: 'Success',
    registrationNumber: 'MORLY/R/2026/05931',
    responseDocumentUrl: '/docs/response_morly_05931.pdf',
    responseDate: '2026-08-10',
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
    id: 'disc-aadhaar',
    title: 'Aadhaar Biometric Verification Audit Statement — 2025',
    category: 'Circulars & Audits',
    ministry: 'Ministry of Electronics and Information Technology',
    source: 'UIDAI Documentation (Official Source)',
    url: 'https://uidai.gov.in',
    snippet: 'Audits the technical logs, error margins, updates rate, and security verification standards of biometric systems used for Aadhaar.',
    keywords: ['aadhaar', 'biometric', 'uidai', 'fingerprint', 'enrolment']
  },
  {
    id: 'disc-road',
    title: 'Jaipur Division Road Construction & Pothole Audit Report',
    category: 'Municipal Expenditures',
    ministry: 'Ministry of Road Transport and Highways',
    source: 'NHAI Project Registry (Official Source)',
    url: 'https://morth.nic.in',
    snippet: 'Public safety audit assessing pavement quality, maintenance budgets, contractor details, and repair logs for major division routes.',
    keywords: ['road', 'construction', 'repair', 'pothole', 'highway', 'street', 'municipality']
  }
];

export const mockTemplates: RtiTemplate[] = [
  {
    id: 'temp-exam',
    title: 'Exam Marks & Recruitment Cut-offs Query',
    category: 'Government Jobs & Exams',
    description: 'Use this template when requesting your marked sheet, recruitment cut-off metrics, or exam selection delays.',
    subject: 'Request for recruitment cut-off details and individual marks sheet',
    questions: [
      'Provide a copy of the official answer key and marked evaluation sheet for my candidate roll number.',
      'Specify the category-wise cut-off marks (Gen, OBC, SC, ST) applied for selection in this examination.',
      'State the total number of vacancies filled and those remaining vacant for each category in this recruitment cycle.',
      'Provide copies of all internal notifications regarding the scheduling and delay of the final interview list.'
    ]
  },
  {
    id: 'temp-road',
    title: 'Road Paving & Maintenance Works',
    category: 'Municipal Services',
    description: 'Use this template to request budgets, work orders, safety logs, and contractor agreements for local road repairs.',
    subject: 'Request for sanctioned work orders and budgets for road maintenance',
    questions: [
      'Provide the copy of the approved work order and contractor agreement for the road project.',
      'State the total funds sanctioned, funds released to date, and amount billed by the contractor for this project.',
      'Provide the pavement quality check report and safety completion audit certificate issued for this road.',
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
