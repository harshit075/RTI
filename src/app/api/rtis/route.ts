import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function GET() {
  try {
    const { rows } = await query('SELECT * FROM rtis ORDER BY created_at DESC');
    const mapped = rows.map(r => ({
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
      appealDate: r.appeal_date
    }));
    return NextResponse.json(mapped);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      id, title, authorityId, subject, questions, submittedDate, expectedDate,
      status, paymentStatus, registrationNumber, responseDocumentUrl, responseDate,
      responseSummary, answeredCount, totalQuestions, paymentId
    } = body;

    const sql = `
      INSERT INTO rtis (
        id, title, authority_id, subject, questions, submitted_date, expected_date,
        status, payment_status, registration_number, response_document_url, response_date,
        response_summary, answered_count, total_questions, payment_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING *
    `;

    const values = [
      id, title, authorityId, subject, questions, submittedDate, expectedDate,
      status, paymentStatus, registrationNumber, responseDocumentUrl, responseDate,
      responseSummary, answeredCount, totalQuestions, paymentId || null
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
      totalQuestions: r.total_questions
    };

    return NextResponse.json(created);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
