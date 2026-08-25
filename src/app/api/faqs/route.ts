import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import { mockFAQs } from '../../../data/mockData';

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(mockFAQs);
    }
    const { rows } = await query('SELECT * FROM faqs ORDER BY id ASC');
    return NextResponse.json(rows);
  } catch (err: any) {
    console.error('Database connection failed, falling back to mock FAQs:', err.message);
    return NextResponse.json(mockFAQs);
  }
}
