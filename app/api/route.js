 import { auth } from '@clerk/nextjs/server';
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await req.json();

  try {
    const appointment = await client.create({
      _type: 'appointment',
      patientName: data.patientName,
      patientEmail: data.patientEmail,
      patientPhone: data.patientPhone,
      preferredDate: data.preferredDate,
      notes: data.notes,
      status: 'requested',
    });

    return NextResponse.json({ success: true, appointment });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
  }
}

export async function GET(req) {
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const appointments = await client.fetch(
      `*[_type == "appointment"] | order(_createdAt desc)`
    );

    return NextResponse.json({ appointments });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}