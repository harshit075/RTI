const fs = require('fs');
const path = require('path');
const { Pool } = require('@neondatabase/serverless');

// Load environment variables from .env.local manually
const envPath = path.join(__dirname, '..', '..', '.env.local');
let databaseUrl = '';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/DATABASE_URL=["']?([^"'\r\n]+)["']?/);
  if (match) {
    databaseUrl = match[1];
  }
}

if (!databaseUrl) {
  console.error('Error: DATABASE_URL not found in .env.local');
  process.exit(1);
}

const pool = new Pool({
  connectionString: databaseUrl,
});

const mockAuthorities = [
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
  }
];

const mockFAQs = [
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
    answer: 'For Central Government departments, the fee is ₹10. For Below Poverty Line (BPL) citizens, the fee is completely waived, provided they upload a copy of your BPL card/certificate.',
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
  }
];

const initialRTIs = [
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

async function seed() {
  try {
    console.log('Seeding database tables...');
    
    // Create Authorities table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS authorities (
        id TEXT PRIMARY KEY,
        name TEXT,
        department TEXT,
        ministry TEXT,
        level TEXT,
        cpio_name TEXT,
        cpio_designation TEXT,
        cpio_address TEXT,
        faa_name TEXT,
        faa_designation TEXT,
        faa_address TEXT,
        website TEXT,
        description TEXT
      );
    `);
    console.log('Created table authorities.');

    // Create FAQs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS faqs (
        id TEXT PRIMARY KEY,
        question TEXT,
        answer TEXT,
        category TEXT,
        citation TEXT
      );
    `);
    console.log('Created table faqs.');

    // Create RTIs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS rtis (
        id TEXT PRIMARY KEY,
        title TEXT,
        authority_id TEXT,
        subject TEXT,
        questions TEXT[],
        submitted_date TEXT,
        expected_date TEXT,
        status TEXT,
        payment_id TEXT,
        payment_status TEXT,
        registration_number TEXT,
        response_document_url TEXT,
        response_date TEXT,
        response_summary TEXT,
        answered_count INTEGER,
        total_questions INTEGER,
        appeal_reason TEXT,
        appeal_date TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Created table rtis.');

    // Clear old tables
    await pool.query('TRUNCATE authorities, faqs, rtis CASCADE;');
    console.log('Truncated existing tables.');

    // Seed Authorities
    for (const auth of mockAuthorities) {
      await pool.query(`
        INSERT INTO authorities (id, name, department, ministry, level, cpio_name, cpio_designation, cpio_address, faa_name, faa_designation, faa_address, website, description)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      `, [
        auth.id, auth.name, auth.department, auth.ministry, auth.level,
        auth.cpioName, auth.cpioDesignation, auth.cpioAddress,
        auth.faaName, auth.faaDesignation, auth.faaAddress,
        auth.website, auth.description
      ]);
    }
    console.log(`Seeded ${mockAuthorities.length} authorities.`);

    // Seed FAQs
    for (const faq of mockFAQs) {
      await pool.query(`
        INSERT INTO faqs (id, question, answer, category, citation)
        VALUES ($1, $2, $3, $4, $5)
      `, [faq.id, faq.question, faq.answer, faq.category, faq.citation]);
    }
    console.log(`Seeded ${mockFAQs.length} FAQs.`);

    // Seed RTIs
    for (const rti of initialRTIs) {
      await pool.query(`
        INSERT INTO rtis (id, title, authority_id, subject, questions, submitted_date, expected_date, status, payment_status, registration_number, response_document_url, response_date, response_summary, answered_count, total_questions)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      `, [
        rti.id, rti.title, rti.authorityId, rti.subject, rti.questions,
        rti.submittedDate, rti.expectedDate, rti.status, rti.paymentStatus,
        rti.registrationNumber, rti.responseDocumentUrl, rti.responseDate,
        rti.responseSummary, rti.answeredCount, rti.totalQuestions
      ]);
    }
    console.log(`Seeded ${initialRTIs.length} initial RTIs.`);

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seed();
