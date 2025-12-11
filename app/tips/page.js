"use client";
import React from "react";
import {
  Lightbulb,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Brain,
  Heart,
  Moon,
  Sun,
} from "lucide-react";

export default function TipsPage() {
  // यहाँ आप अपना real data भरेंगे
  const dailyTips = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "",
      description: "",
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "",
      description: "",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "",
      description: "",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "",
      description: "",
    },
  ];

  const familyGuide = [
    {
      title: "",
      points: ["", "", "", ""],
    },
    {
      title: "",
      points: ["", "", "", ""],
    },
  ];

  const dosAndDonts = [
    {
      condition: "",
      dos: ["", "", ""],
      donts: ["", "", ""],
    },
    {
      condition: "",
      dos: ["", "", ""],
      donts: ["", "", ""],
    },
    {
      condition: "",
      dos: ["", "", ""],
      donts: ["", "", ""],
    },
  ];

  const mythsVsFacts = [
    {
      myth: "",
      fact: "",
    },
    {
      myth: "",
      fact: "",
    },
    {
      myth: "",
      fact: "",
    },
    {
      myth: "",
      fact: "",
    },
    {
      myth: "",
      fact: "",
    },
  ];

  const selfCareTips = [
    {
      title: "",
      technique: "",
      steps: ["", "", ""],
    },
    {
      title: "",
      technique: "",
      steps: ["", "", ""],
    },
    {
      title: "",
      technique: "",
      steps: ["", "", ""],
    },
  ];

  const whenToSeekHelp = ["", "", "", "", ""];

  return (
    <main className="bg-gradient-to-br from-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Lightbulb className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            मानसिक स्वास्थ्य टिप्स
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            रोजमर्रा की जिंदगी में मानसिक स्वास्थ्य को बेहतर बनाने के लिए
            व्यावहारिक सुझाव
          </p>
        </div>
      </section>

      {/* Daily Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            🌅 दैनिक मानसिक स्वास्थ्य टिप्स
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {dailyTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4 text-green-600">
                  {tip.icon}
                  <h3 className="text-lg font-bold ml-3 text-gray-800">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Users className="w-10 h-10 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              परिवार के लिए गाइड
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {familyGuide.map((guide, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {guide.title}
                </h3>
                <ul className="space-y-3">
                  {guide.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <AlertCircle className="w-10 h-10 text-orange-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              क्या करें और क्या न करें
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dosAndDonts.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
                  <h3 className="text-xl font-bold text-center">
                    {item.condition}
                  </h3>
                </div>
                <div className="p-6">
                  {/* Do's */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-green-700 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      करें ✓
                    </h4>
                    <ul className="space-y-2">
                      {item.dos.map((doItem, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-700">{doItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Don'ts */}
                  <div>
                    <h4 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                      <XCircle className="w-5 h-5 mr-2" />न करें ✗
                    </h4>
                    <ul className="space-y-2">
                      {item.donts.map((dontItem, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-red-600 mr-2">•</span>
                          <span className="text-gray-700">{dontItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths vs Facts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            🔍 मिथक vs सच्चाई
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            मानसिक स्वास्थ्य के बारे में फैली गलतफहमियों को दूर करें
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {mythsVsFacts.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Myth */}
                  <div className="bg-white bg-opacity-70 rounded-lg p-4">
                    <div className="flex items-start mb-2">
                      <XCircle className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
                      <h3 className="font-bold text-red-700">मिथक (Myth)</h3>
                    </div>
                    <p className="text-gray-700">{item.myth}</p>
                  </div>
                  {/* Fact */}
                  <div className="bg-white bg-opacity-70 rounded-lg p-4">
                    <div className="flex items-start mb-2">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                      <h3 className="font-bold text-green-700">
                        सच्चाई (Fact)
                      </h3>
                    </div>
                    <p className="text-gray-700">{item.fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Care Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Heart className="w-10 h-10 text-pink-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              स्वयं की देखभाल (Self-Care)
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {selfCareTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-pink-600 font-semibold mb-4">
                  {tip.technique}
                </p>
                <ol className="space-y-2">
                  {tip.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-pink-100 text-pink-600 rounded-full mr-2 flex-shrink-0 font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700 mt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Seek Help Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <AlertCircle className="w-12 h-12 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                कब तुरंत डॉक्टर से संपर्क करें?
              </h2>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <ul className="space-y-4">
                {whenToSeekHelp.map((sign, index) => (
                  <li key={index} className="flex items-start text-lg">
                    <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <a
                  href="tel:9450016305"
                  className="inline-block bg-white text-red-600 font-bold text-xl py-4 px-10 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                >
                  📞 तुरंत संपर्क करें: 9450016305
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto">
            <strong>नोट:</strong> यह टिप्स सामान्य जानकारी के लिए हैं। गंभीर
            मानसिक स्वास्थ्य समस्याओं के लिए कृपया योग्य मनोचिकित्सक से परामर्श
            लें। बिना डॉक्टर की सलाह के कोई भी दवा शुरू या बंद न करें।
          </p>
        </div>
      </section>
    </main>
  );
}
