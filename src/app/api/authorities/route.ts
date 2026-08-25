import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function GET() {
  try {
    const { rows } = await query('SELECT * FROM authorities ORDER BY name ASC');
    const mapped = rows.map(r => ({
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
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
