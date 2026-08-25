import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import { inMemoryRtis } from '../../../data/mockData';

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(inMemoryRtis);
    }
    // Ensure notes column exists
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS notes TEXT;', []);
    
    const { rows } = await query('SELECT * FROM rtis ORDER BY created_at DESC');
    const mapped = rows.map((r: any) => ({
      id: r.id,
      title: r.title,
      authorityId: r.authority_id,
      subject: r.subject,
      questions: r.questions,
      submittedDate: r.submitted_date,
      expectedDate: r.expected_date,
      status: r.status,
      paymentId: r.payment_id,
      paymentStatus: r.payment_status,
      registrationNumber: r.registration_number,
      responseDocumentUrl: r.response_document_url,
      responseDate: r.response_date,
      responseSummary: r.response_summary,
      answeredCount: r.answered_count,
      totalQuestions: r.total_questions,
      appealReason: r.appeal_reason,
      appealDate: r.appeal_date,
      notes: r.notes
    }));
    return NextResponse.json(mapped);
  } catch (err: any) {
    console.error('Database connection failed, falling back to in-memory RTIs:', err.message);
    return NextResponse.json(inMemoryRtis);
  }
}

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch (e) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  try {
    if (!process.env.DATABASE_URL) {
      inMemoryRtis.unshift(body);
      return NextResponse.json(body);
    }

    const {
      id, title, authorityId, subject, questions, submittedDate, expectedDate,
      status, paymentStatus, registrationNumber, responseDocumentUrl, responseDate,
      responseSummary, answeredCount, totalQuestions, paymentId, notes
    } = body;

    // Ensure notes column exists
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS notes TEXT;', []);

    const sql = `
      INSERT INTO rtis (
        id, title, authority_id, subject, questions, submitted_date, expected_date,
        status, payment_status, registration_number, response_document_url, response_date,
        response_summary, answered_count, total_questions, payment_id, notes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
      RETURNING *
    `;

    const values = [
      id, title, authorityId, subject, questions, submittedDate, expectedDate,
      status, paymentStatus, registrationNumber, responseDocumentUrl, responseDate,
      responseSummary, answeredCount, totalQuestions, paymentId || null, notes || ''
    ];

    const { rows } = await query(sql, values);
    const r = rows[0];
    const created = {
      id: r.id,
      title: r.title,
      authorityId: r.authority_id,
      subject: r.subject,
      questions: r.questions,
      submittedDate: r.submitted_date,
      expectedDate: r.expected_date,
      status: r.status,
      paymentId: r.payment_id,
      paymentStatus: r.payment_status,
      registrationNumber: r.registration_number,
      responseDocumentUrl: r.response_document_url,
      responseDate: r.response_date,
      responseSummary: r.response_summary,
      answeredCount: r.answered_count,
      totalQuestions: r.total_questions,
      notes: r.notes
    };

    return NextResponse.json(created);
  } catch (err: any) {
    console.error('Database connection failed, falling back to saving in-memory:', err.message);
    inMemoryRtis.unshift(body);
    return NextResponse.json(body);
  }
}
