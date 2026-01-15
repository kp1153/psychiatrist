import { auth } from '@clerk/nextjs/server';
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function PATCH(req, context) {
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug } = context.params;
  const data = await req.json();

  try {
    const updateData = {
      status: data.status,
    };

    if (data.confirmedDateTime) {
      updateData.confirmedDateTime = data.confirmedDateTime;
    }

    const appointment = await client
      .patch(slug)
      .set(updateData)
      .commit();

    return NextResponse.json({ success: true, appointment });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update appointment' }, { status: 500 });
  }
}