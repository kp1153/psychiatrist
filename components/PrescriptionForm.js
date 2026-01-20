'use client'
import { useState } from 'react'
import { generatePrescriptionPDF } from '@/lib/pdfGenerator'

export default function PrescriptionForm() {
  const [patient, setPatient] = useState({ name: '', age: '', phone: '', gender: 'Male' })
  const [diagnosis, setDiagnosis] = useState('')
  const [medicines, setMedicines] = useState([{ name: '', dosage: '', frequency: '', duration: '' }])
  const [instructions, setInstructions] = useState('')
  const [nextAppointment, setNextAppointment] = useState('')
  const [loading, setLoading] = useState(false)

  const addMedicine = () => {
    setMedicines([...medicines, { name: '', dosage: '', frequency: '', duration: '' }])
  }

  const updateMedicine = (index, field, value) => {
    const updated = [...medicines]
    updated[index][field] = value
    setMedicines(updated)
  }

  const removeMedicine = (index) => {
    setMedicines(medicines.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = { patient, diagnosis, medicines, instructions, nextAppointment }

    try {
      // Save to Sanity
      const res = await fetch('/api/prescription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      const result = await res.json()
      
      if (result.success) {
        // Generate PDF
        const pdf = generatePrescriptionPDF(formData)
        pdf.save(`Prescription_${patient.name}_${Date.now()}.pdf`)
        
        alert('Prescription created successfully!')
        // Reset form
        setPatient({ name: '', age: '', phone: '', gender: 'Male' })
        setDiagnosis('')
        setMedicines([{ name: '', dosage: '', frequency: '', duration: '' }])
        setInstructions('')
        setNextAppointment('')
      }
    } catch (error) {
      alert('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Create Prescription</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Patient Name" value={patient.name} onChange={(e) => setPatient({...patient, name: e.target.value})} className="border p-2 rounded" required />
        <input type="number" placeholder="Age" value={patient.age} onChange={(e) => setPatient({...patient, age: e.target.value})} className="border p-2 rounded" required />
        <input type="tel" placeholder="Phone" value={patient.phone} onChange={(e) => setPatient({...patient, phone: e.target.value})} className="border p-2 rounded" required />
        <select value={patient.gender} onChange={(e) => setPatient({...patient, gender: e.target.value})}