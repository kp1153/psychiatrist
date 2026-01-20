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
      const res = await fetch('/api/prescription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      const result = await res.json()
      
      if (result.success) {
        const pdf = generatePrescriptionPDF(formData)
        pdf.save(`Prescription_${patient.name}_${Date.now()}.pdf`)
        
        alert('Prescription created successfully!')
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
        <select value={patient.gender} onChange={(e) => setPatient({...patient, gender: e.target.value})} className="border p-2 rounded">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <textarea placeholder="Diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} className="border p-2 rounded w-full" rows="3" required />

      <div className="space-y-3">
        <h3 className="font-semibold">Medicines</h3>
        {medicines.map((med, index) => (
          <div key={index} className="grid grid-cols-5 gap-2">
            <input type="text" placeholder="Medicine Name" value={med.name} onChange={(e) => updateMedicine(index, 'name', e.target.value)} className="border p-2 rounded" required />
            <input type="text" placeholder="Dosage" value={med.dosage} onChange={(e) => updateMedicine(index, 'dosage', e.target.value)} className="border p-2 rounded" required />
            <input type="text" placeholder="Frequency" value={med.frequency} onChange={(e) => updateMedicine(index, 'frequency', e.target.value)} className="border p-2 rounded" required />
            <input type="text" placeholder="Duration" value={med.duration} onChange={(e) => updateMedicine(index, 'duration', e.target.value)} className="border p-2 rounded" required />
            <button type="button" onClick={() => removeMedicine(index)} className="bg-red-500 text-white px-3 rounded">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addMedicine} className="bg-blue-500 text-white px-4 py-2 rounded">Add Medicine</button>
      </div>

      <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} className="border p-2 rounded w-full" rows="3" />
      
      <input type="datetime-local" value={nextAppointment} onChange={(e) => setNextAppointment(e.target.value)} className="border p-2 rounded w-full" />

      <button type="submit" disabled={loading} className="bg-green-600 text-white px-6 py-3 rounded font-semibold w-full">
        {loading ? 'Creating...' : 'Generate Prescription'}
      </button>
    </form>
  )
}