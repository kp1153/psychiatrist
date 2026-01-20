import { createClient } from '@sanity/client'
import { sendWhatsAppReminder } from '@/lib/whatsappService'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function GET() {
  try {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    const appointments = await client.fetch(`
      *[_type == "appointment" && 
        appointmentDate >= now() && 
        appointmentDate <= $tomorrow && 
        reminderSent == false &&
        status == "Scheduled"] {
        _id,
        appointmentDate,
        patient->{name, phone}
      }
    `, { tomorrow: tomorrow.toISOString() })

    const results = []
    
    for (const apt of appointments) {
      const whatsappResult = await sendWhatsAppReminder(
        apt.patient.phone,
        apt.patient.name,
        apt.appointmentDate
      )
      
      if (whatsappResult.success) {
        await client.patch(apt._id).set({ reminderSent: true }).commit()
        results.push({ phone: apt.patient.phone, sent: true })
      } else {
        results.push({ phone: apt.patient.phone, sent: false, error: whatsappResult.error })
      }
    }

    return Response.json({ success: true, sent: results.length, results })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}