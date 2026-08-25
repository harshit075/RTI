import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Ensure notes column exists
    await query('ALTER TABLE rtis ADD COLUMN IF NOT EXISTS notes TEXT;', []);
    
    // Dynamically build SET query fields based on body params
    const fields: string[] = [];
    const values: any[] = [];
    let index = 1;

    // Map frontend keys to database columns
    const keyMap: Record<string, string> = {
      status: 'status',
      appealReason: 'appeal_reason',
      appealDate: 'appeal_date',
      registrationNumber: 'registration_number',
      responseDate: 'response_date',
      responseSummary: 'response_summary',
      answeredCount: 'answered_count',
      totalQuestions: 'total_questions',
      paymentStatus: 'payment_status',
      paymentId: 'payment_id',
      notes: 'notes'
    };

    for (const [key, val] of Object.entries(body)) {
      const dbCol = keyMap[key];
      if (dbCol) {
        fields.push(`${dbCol} = $${index}`);
        values.push(val);
        index++;
      }
    }

    if (fields.length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }

    values.push(id);
    const sql = `
      UPDATE rtis
      SET ${fields.join(', ')}
      WHERE id = $${index}
      RETURNING *
    `;

    const { rows } = await query(sql, values);
    if (rows.length === 0) {
      return NextResponse.json({ error: 'RTI not found' }, { status: 404 });
    }

    const r = rows[0];
    const updated = {
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
    };

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
