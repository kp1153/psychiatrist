"use client";
import React from "react";
import {
  Brain,
  Zap,
  Bed,
  Shield,
  Sparkles,
  Microscope,
  Baby,
  Activity,
} from "lucide-react";

export default function ServicesPage() {
  const therapies = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "ब्रेन फीडबैक थेरेपी",
      description: "माइग्रेन, तनाव, कमर व गर्दन दर्द का उपचार",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "इलेक्ट्रोस्लीप थेरेपी",
      description: "अनिद्रा व नींद विकार का प्रभावी समाधान",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "एवर्जन थेरेपी",
      description: "शराब, तंबाकू व नशा उन्मूलन",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "ब्रेन पोलराइजेशन",
      description: "डिप्रेशन, एंग्जायटी का उपचार",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "TDCS ब्रेन स्टिमुलेशन",
      description: "अल्जाइमर, पार्किन्सोनिज्म का उन्नत उपचार",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const diagnostics = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "डिजिटल EEG & ब्रेन मैपिंग",
      description: "मस्तिष्क की विद्युत गतिविधि का विश्लेषण",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "IQ टेस्ट",
      description: "बच्चों की बुद्धि परीक्षण और मूल्यांकन",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "न्यूरोसाइकोलॉजिकल टेस्ट",
      description: "मानसिक क्षमताओं का व्यापक परीक्षण",
    },
  ];

  const childServices = [
    "ऑटिज्म (Autism)",
    "ADHD",
    "सेरिब्रल पैल्सी (Cerebral Palsy)",
    "मंदबुद्धि (Mental Retardation)",
    "लर्निंग डिसेबिलिटी",
    "बिहेवियरल प्रॉब्लम्स",
  ];

  return (
    <main className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            हमारी विशेष सेवाएं
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            आधुनिक तकनीक और अनुभवी विशेषज्ञों द्वारा उन्नत मानसिक स्वास्थ्य
            सेवाएं
          </p>
        </div>

        {/* उन्नत थेरेपी सेवाएं */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            🔬 उन्नत थेरेपी सेवाएं
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((therapy, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}
                >
                  <div className="flex items-center mb-3">
                    {therapy.icon}
                    <h3 className="text-xl font-bold ml-3">{therapy.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{therapy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* जांच सुविधाएं */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            🔍 जांच और निदान सुविधाएं
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {diagnostics.map((diagnostic, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-3 text-blue-600">
                  {diagnostic.icon}
                  <h3 className="text-lg font-bold ml-2">{diagnostic.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {diagnostic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* बच्चों के लिए विशेष */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-6">
              <Baby className="w-12 h-12 mr-3" />
              <h2 className="text-3xl font-bold">बच्चों के लिए विशेष सेवाएं</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {childServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-yellow-300 rounded-full mr-3"></span>
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="tel:9450016305"
                className="inline-block bg-white text-pink-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                📞 अपॉइंटमेंट बुक करें: 9450016305
              </a>
            </div>
          </div>
        </div>

        {/* क्लिनिक जानकारी */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📍 हमारा पता
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>नवचेतना न्यूरो-साइकियाट्री सेंटर</strong>
          </p>
          <p className="text-gray-600 mb-4">
            बी-29, भुनेश्वर नगर (उत्सव वाटिका के पास)
            <br />
            अर्दली बाजार, वाराणसी
          </p>
          <div className="bg-green-50 rounded-lg p-4 inline-block">
            <p className="text-gray-700 font-medium">
              ⏰ <strong>समय:</strong> प्रातः 9 बजे से दोपहर 2 बजे तक
              <br />
              शाम 4 बजे से 8 बजे तक
            </p>
            <p className="text-red-600 font-bold mt-2">
              (रविवार - अवकाश, मेडिकल खुला रहेगा)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
