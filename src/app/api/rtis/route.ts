import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import { inMemoryRtis } from '../../../data/mockData';

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(inMemoryRtis);
    }
    // Ensure columns exist
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS notes TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS second_appeal_reason TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS second_appeal_date TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS second_appeal_text TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS second_appeal_reg_no TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS parent_id TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS child_registrations TEXT[];', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS remarks_trail JSONB;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS additional_fee_amount INT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS additional_fee_reason TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS additional_fee_status TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS required_doc_description TEXT;', []);
    
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
      notes: r.notes,
      secondAppealReason: r.second_appeal_reason,
      secondAppealDate: r.second_appeal_date,
      secondAppealText: r.second_appeal_text,
      secondAppealRegNo: r.second_appeal_reg_no,
      parentId: r.parent_id,
      childRegistrations: r.child_registrations,
      remarksTrail: r.remarks_trail,
      additionalFeeAmount: r.additional_fee_amount,
      additionalFeeReason: r.additional_fee_reason,
      additionalFeeStatus: r.additional_fee_status,
      requiredDocDescription: r.required_doc_description
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
      responseSummary, answeredCount, totalQuestions, paymentId, notes,
      secondAppealReason, secondAppealDate, secondAppealText, secondAppealRegNo,
      parentId, childRegistrations, remarksTrail, additionalFeeAmount, additionalFeeReason,
      additionalFeeStatus, requiredDocDescription
    } = body;

    // Ensure columns exist
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS notes TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS second_appeal_reason TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS second_appeal_date TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS second_appeal_text TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS second_appeal_reg_no TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS parent_id TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS child_registrations TEXT[];', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS remarks_trail JSONB;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS additional_fee_amount INT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS additional_fee_reason TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS additional_fee_status TEXT;', []);
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS required_doc_description TEXT;', []);

    const sql = `
      INSERT INTO rtis (
        id, title, authority_id, subject, questions, submitted_date, expected_date,
        status, payment_status, registration_number, response_document_url, response_date,
        response_summary, answered_count, total_questions, payment_id, notes,
        second_appeal_reason, second_appeal_date, second_appeal_text, second_appeal_reg_no,
        parent_id, child_registrations, remarks_trail, additional_fee_amount, additional_fee_reason,
        additional_fee_status, required_doc_description
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)
      RETURNING *
    `;

    const values = [
      id, title, authorityId, subject, questions, submittedDate, expectedDate,
      status, paymentStatus, registrationNumber, responseDocumentUrl, responseDate,
      responseSummary, answeredCount, totalQuestions, paymentId || null, notes || '',
      secondAppealReason || null, secondAppealDate || null, secondAppealText || null, secondAppealRegNo || null,
      parentId || null, childRegistrations || null, remarksTrail ? JSON.stringify(remarksTrail) : null,
      additionalFeeAmount || null, additionalFeeReason || null, additionalFeeStatus || null, requiredDocDescription || null
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
      notes: r.notes,
      secondAppealReason: r.second_appeal_reason,
      secondAppealDate: r.second_appeal_date,
      secondAppealText: r.second_appeal_text,
      secondAppealRegNo: r.second_appeal_reg_no,
      parentId: r.parent_id,
      childRegistrations: r.child_registrations,
      remarksTrail: r.remarks_trail,
      additionalFeeAmount: r.additional_fee_amount,
      additionalFeeReason: r.additional_fee_reason,
      additionalFeeStatus: r.additional_fee_status,
      requiredDocDescription: r.required_doc_description
    };

    return NextResponse.json(created);
  } catch (err: any) {
    console.error('Database connection failed, falling back to saving in-memory:', err.message);
    inMemoryRtis.unshift(body);
    return NextResponse.json(body);
  }
}
