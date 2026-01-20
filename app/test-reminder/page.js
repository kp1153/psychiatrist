'use client'
import { useState } from 'react'

export default function TestReminderPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const triggerReminder = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/reminder')
      const data = await res.json()
      setResult(data)
    } catch (error) {
      setResult({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Test Reminder System</h1>
        
        <button 
          onClick={triggerReminder}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Reminders Now'}
        </button>

        {result && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h2 className="font-bold text-xl mb-4">Result:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </main>
  )
}