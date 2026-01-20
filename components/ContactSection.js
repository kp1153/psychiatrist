import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    { icon: Phone, label: "फोन", value: "878 948 2183", href: "tel:+918789482183" },
    { icon: Mail, label: "ईमेल", value: "drkushwaha077@gmail.com", href: "mailto:drkushwaha077@gmail.com" },
    { icon: MapPin, label: "पता", value: "लखनऊ, उत्तर प्रदेश", href: null }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
          संपर्क करें
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
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
    </section>
  );
};

export default ContactSection;