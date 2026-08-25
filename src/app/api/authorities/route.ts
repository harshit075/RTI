import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import { mockAuthorities } from '../../../data/mockData';

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(mockAuthorities);
    }
    const { rows } = await query('SELECT * FROM authorities ORDER BY name ASC');
    const mapped = rows.map((r: any) => ({
      id: r.id,
      name: r.name,
      department: r.department,
      ministry: r.ministry,
      level: r.level,
      cpioName: r.cpio_name,
      cpioDesignation: r.cpio_designation,
      cpioAddress: r.cpio_address,
      faaName: r.faa_name,
      faaDesignation: r.faa_designation,
      faaAddress: r.faa_address,
      website: r.website,
      description: r.description
    }));
    return NextResponse.json(mapped);
  } catch (err: any) {
    console.error('Database connection failed, falling back to mock authorities:', err.message);
    return NextResponse.json(mockAuthorities);
  }
}
