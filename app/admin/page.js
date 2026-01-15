import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import AppointmentActions from '@/components/AppointmentActions';

export default async function AdminPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/');
  }

  const user = await currentUser();
  const isDoctor = user?.emailAddresses[0]?.emailAddress === 'drkushwaha077@gmail.com';

  if (!isDoctor) {
    redirect('/dashboard');
  }

  const appointments = await client.fetch(
    `*[_type == "appointment"] | order(_createdAt desc)`
  );

  const requestedAppointments = appointments.filter(apt => apt.status === 'requested');
  const confirmedAppointments = appointments.filter(apt => apt.status === 'confirmed');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">डॉक्टर एडमिन पैनल</h1>
        <p className="mb-8">स्वागत है, Dr. {user?.firstName}!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">नई रिक्वेस्ट</h2>
            <p className="text-3xl font-bold text-orange-600">{requestedAppointments.length}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Confirmed</h2>
            <p className="text-3xl font-bold text-green-600">{confirmedAppointments.length}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">कुल अपॉइंटमेंट</h2>
            <p className="text-3xl font-bold text-teal-600">{appointments.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">सभी अपॉइंटमेंट</h2>
          <div className="space-y-4">
            {appointments.map((apt) => (
              <div key={apt._id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{apt.patientName}</h3>
                    <p className="text-sm text-gray-600">📞 {apt.patientPhone}</p>
                    <p className="text-sm text-gray-600">📧 {apt.patientEmail}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm text-white ${
                    apt.status === 'requested' ? 'bg-orange-500' :
                    apt.status === 'slot_given' ? 'bg-blue-500' :
                    apt.status === 'confirmed' ? 'bg-green-500' :
                    'bg-gray-500'
                  }`}>
                    {apt.status}
                  </span>
                </div>
                
                <p className="text-sm mb-2"><strong>पसंदीदा तारीख:</strong> {new Date(apt.preferredDate).toLocaleDateString('hi-IN')}</p>
                {apt.confirmedDateTime && (
                  <p className="text-sm mb-2 text-green-600"><strong>Confirmed Time:</strong> {new Date(apt.confirmedDateTime).toLocaleString('hi-IN')}</p>
                )}
                <p className="text-sm text-gray-700 mb-3"><strong>समस्या:</strong> {apt.notes}</p>
                
                <AppointmentActions appointmentId={apt._id} currentStatus={apt.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}