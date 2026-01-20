export async function sendWhatsAppReminder(phone, patientName, appointmentDate) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  
  if (!accessToken || !phoneNumberId) {
    console.log('WhatsApp credentials missing')
    return { success: false, error: 'Credentials missing' }
  }

  // Phone format: 91 + 10 digits (remove +, spaces)
  const formattedPhone = phone.replace(/[^0-9]/g, '')
  
  const message = `नमस्ते ${patientName},

आपकी अगली appointment Dr. RK Kushwaha के साथ:
📅 ${new Date(appointmentDate).toLocaleString('hi-IN')}

कृपया समय पर पहुंचें।

📞 Contact: 878 948 2183
📍 Lucknow, UP`

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: formattedPhone,
          type: 'text',
          text: { body: message }
        })
      }
    )

    const data = await response.json()
    
    if (response.ok) {
      return { success: true, messageId: data.messages[0].id }
    } else {
      return { success: false, error: data.error }
    }
  } catch (error) {
    return { success: false, error: error.message }
  }
}