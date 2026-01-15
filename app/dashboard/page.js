import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { client } from '@/sanity/lib/client';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/');
  }

  const user = await currentUser();
  const isDoctor = user?.emailAddresses[0]?.emailAddress === 'drkushwaha077@gmail.com';

  if (isDoctor) {
    redirect('/admin');
  }

  const userEmail = user?.emailAddresses[0]?.emailAddress;
  const appointments = await client.fetch(
    `*[_type == "appointment" && patientEmail == $email] | order(_createdAt desc)`,
    { email: userEmail }
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">मरीज डैशबोर्ड</h1>
        <p className="mb-8">स्वागत है, {user?.firstName}!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">मेरी अपॉइंटमेंट</h2>
            {appointments.length === 0 ? (
              <p className="text-gray-600">अभी कोई appointment नहीं है</p>
            ) : (
              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div key={apt._id} className="border-l-4 border-teal-600 pl-4 py-3 bg-gray-50 rounded">
                    <p className="font-semibold text-lg">{apt.patientName}</p>
                    <p className="text-sm text-gray-600 mt-1">पसंदीदा तारीख: {new Date(apt.preferredDate).toLocaleDateString('hi-IN')}</p>
                    {apt.confirmedDateTime && (
                      <p className="text-sm text-green-600 font-semibold mt-1">
                        Confirmed: {new Date(apt.confirmedDateTime).toLocaleString('hi-IN')}
                      </p>
                    )}
                    <p className="text-sm mt-2">
                      <span className={`px-3 py-1 rounded-full text-white ${
                        apt.status === 'requested' ? 'bg-orange-500' :
                        apt.status === 'slot_given' ? 'bg-blue-500' :
                        apt.status === 'confirmed' ? 'bg-green-500' :
                        'bg-gray-500'
                      }`}>
                        {apt.status === 'requested' ? 'अनुरोध भेजा गया' :
                         apt.status === 'slot_given' ? 'टाइम स्लॉट मिला' :
                         apt.status === 'confirmed' ? 'Confirmed' :
                         apt.status}
                      </span>
                    </p>
                    {apt.notes && <p className="text-sm text-gray-500 mt-2">नोट्स: {apt.notes}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">मेरी रिपोर्ट्स</h2>
            <p className="text-gray-600">अभी कोई report नहीं है</p>
          </div>
        </div>
      </div>
    </div>
  );
}