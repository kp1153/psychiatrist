'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
})

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      const data = await client.fetch(`
        *[_type == "appointment"] | order(appointmentDate desc) {
          _id,
          appointmentDate,
          status,
          reminderSent,
          patient->{name, phone, age}
        }
      `)
      setAppointments(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, newStatus) => {
    try {
      await client.patch(id).set({ status: newStatus }).commit()
      fetchAppointments()
    } catch (error) {
      alert('Error updating status')
    }
  }

  if (loading) return <div className="text-center py-20">Loading...</div>

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Appointments</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left">Patient</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Date & Time</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Reminder</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt._id} className="border-t">
                  <td className="px-6 py-4">{apt.patient?.name}</td>
                  <td className="px-6 py-4">{apt.patient?.phone}</td>
                  <td className="px-6 py-4">
                    {new Date(apt.appointmentDate).toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      apt.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      apt.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {apt.reminderSent ? '✅ Sent' : '❌ Pending'}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      value={apt.status}
                      onChange={(e) => updateStatus(apt._id, e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}