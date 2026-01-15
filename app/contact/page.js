import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    { icon: Phone, label: "फोन", value: "878 948 2183", href: "tel:+918789482183" },
    { icon: Mail, label: "ईमेल", value: "drkushwaha077@gmail.com", href: "mailto:drkushwaha077@gmail.com" },
    { icon: MapPin, label: "पता", value: "लखनऊ रेलवे स्टेशन के निकट उत्तर प्रदेश", href: null }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="bg-teal-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">संपर्क करें</h1>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <div key={i} className="flex items-center gap-4 pb-6 border-b last:border-0 last:pb-0">
              <Icon className="w-8 h-8 text-teal-700 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{label}</h3>
                {href ? (
                  <a href={href} className="text-teal-600 hover:text-teal-800 transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-gray-700">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}