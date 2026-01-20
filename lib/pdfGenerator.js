import jsPDF from 'jspdf'

export function generatePrescriptionPDF(data) {
  const doc = new jsPDF()
  
  // Header
  doc.setFontSize(20)
  doc.text('Dr. RK Kushwaha', 105, 20, { align: 'center' })
  doc.setFontSize(12)
  doc.text('MBBS, DPM (2016) CIP Ranchi, DNB', 105, 28, { align: 'center' })
  doc.text('Ex Consultant Psychiatrist, DDH Varanasi', 105, 35, { align: 'center' })
  doc.text('10+ Years Experience', 105, 42, { align: 'center' })
  doc.text('Contact: 878 948 2183', 105, 49, { align: 'center' })
  
  doc.line(20, 55, 190, 55)
  
  // Patient Details
  doc.setFontSize(14)
  doc.text('Patient Details:', 20, 65)
  doc.setFontSize(11)
  doc.text(`Name: ${data.patient.name}`, 20, 73)
  doc.text(`Age: ${data.patient.age}`, 20, 80)
  doc.text(`Gender: ${data.patient.gender}`, 20, 87)
  doc.text(`Phone: ${data.patient.phone}`, 20, 94)
  doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 150, 73)
  
  // Diagnosis
  doc.setFontSize(14)
  doc.text('Diagnosis:', 20, 105)
  doc.setFontSize(11)
  doc.text(data.diagnosis, 20, 113)
  
  // Medicines
  doc.setFontSize(14)
  doc.text('Medicines:', 20, 125)
  doc.setFontSize(10)
  let y = 133
  data.medicines.forEach((med, i) => {
    doc.text(`${i + 1}. ${med.name}`, 25, y)
    doc.text(`   Dosage: ${med.dosage} | Frequency: ${med.frequency} | Duration: ${med.duration}`, 25, y + 5)
    y += 12
  })
  
  // Instructions
  y += 5
  doc.setFontSize(14)
  doc.text('Instructions:', 20, y)
  doc.setFontSize(11)
  doc.text(data.instructions || 'N/A', 20, y + 8, { maxWidth: 170 })
  
  // Next Appointment
  if (data.nextAppointment) {
    y += 25
    doc.setFontSize(14)
    doc.text('Next Appointment:', 20, y)
    doc.setFontSize(11)
    doc.text(new Date(data.nextAppointment).toLocaleString('en-IN'), 20, y + 8)
  }
  
  // Footer
  doc.setFontSize(10)
  doc.text('Dr. RK Kushwaha', 150, 270)
  doc.line(150, 272, 190, 272)
  
  return doc
}