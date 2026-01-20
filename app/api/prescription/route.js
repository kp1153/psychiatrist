import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function POST(request) {
  try {
    const data = await request.json()
    const { patient, diagnosis, medicines, instructions, nextAppointment } = data

    // Patient create/find
    const patientDoc = await client.create({
      _type: 'patient',
      name: patient.name,
      age: parseInt(patient.age),
      phone: patient.phone,
      gender: patient.gender,
    })

    // Prescription create
    const prescription = await client.create({
      _type: 'prescription',
      patient: { _type: 'reference', _ref: patientDoc._id },
      date: new Date().toISOString(),
      diagnosis,
      medicines,
      instructions,
      nextAppointment: nextAppointment || null,
    })

    // Appointment create (agar date hai)
    if (nextAppointment) {
      await client.create({
        _type: 'appointment',
        patient: { _type: 'reference', _ref: patientDoc._id },
        prescription: { _type: 'reference', _ref: prescription._id },
        appointmentDate: nextAppointment,
        status: 'Scheduled',
        reminderSent: false,
      })
    }

    return Response.json({ success: true, prescriptionId: prescription._id })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}