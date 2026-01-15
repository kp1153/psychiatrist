import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { client } from '@/sanity/lib/client';

// GET - Fetch appointments
export async function GET(req) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = req.nextUrl.searchParams;
    const role = searchParams.get('role');

    let query = '';
    
    if (role === 'doctor') {
      query = `*[_type == "appointment"] | order(_createdAt desc) {
        _id,
        patientName,
        patientEmail,
        patientPhone,
        issueDescription,
        status,
        appointmentDate,
        appointmentTime,
        _createdAt
      }`;
    } else {
      query = `*[_type == "appointment" && userId == $userId] | order(_createdAt desc) {
        _id,
        patientName,
        patientEmail,
        patientPhone,
        issueDescription,
        status,
        appointmentDate,
        appointmentTime,
        _createdAt
      }`;
    }

    const appointments = await client.fetch(query, { userId });
    
    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}

// POST - Create new appointment
export async function POST(req) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    console.log('📥 मिला डेटा:', body);
    
    const { patientName, patientPhone, notes, issueDescription } = body;
    const finalDescription = issueDescription || notes;
    
    console.log('✅ Fields:', { patientName, patientPhone, finalDescription });

    if (!patientName || !patientEmail || !patientPhone || !finalDescription) {
      console.log('❌ Validation failed');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const newAppointment = {
      _type: 'appointment',
      userId,
      patientName,
      patientEmail,
      patientPhone,
      issueDescription: finalDescription,
      status: 'pending',
      _createdAt: new Date().toISOString(),
    };

    console.log('💾 Saving to Sanity:', newAppointment);
    const result = await client.create(newAppointment);
    console.log('✅ Saved successfully:', result._id);
    
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('❌ Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}