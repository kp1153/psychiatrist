import React from "react";
import { Brain, AlertCircle, Heart, Phone } from "lucide-react";

export default function PTSD() {
  const symptoms = [
    "दर्दनाक घटना की बार-बार याद आना",
    "बुरे सपने और फ्लैशबैक",
    "उन चीजों से बचना जो घटना की याद दिलाती हैं",
    "नकारात्मक विचार और भावनाएं",
    "आसानी से चौंक जाना",
    "हमेशा सतर्क रहना (Hypervigilance)",
    "नींद में परेशानी",
    "एकाग्रता में कमी",
  ];

  const treatments = [
    "Cognitive Behavioral Therapy (CBT)",
    "Eye Movement Desensitization and Reprocessing (EMDR)",
    "Exposure Therapy",
    "Medications (Antidepressants)",
    "Group Therapy",
    "Mindfulness और Relaxation Techniques",
  ];

  return (
    <section
      id="ptsd"
      className="py-20 bg-gradient-to-br from-red-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Post-Traumatic Stress Disorder (PTSD)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              किसी दर्दनाक घटना के बाद विकसित होने वाला मानसिक स्वास्थ्य विकार
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Brain className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  मुख्य लक्षण
                </h3>
              </div>
              <ul className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  उपचार के विकल्प
                </h3>
              </div>
              <ul className="space-y-3">
                {treatments.map((treatment, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">PTSD से उबरना संभव है</h3>
            <p className="text-lg mb-6 opacity-90">
              सही उपचार और समर्थन के साथ बेहतर जीवन जी सकते हैं
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              अभी परामर्श लें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
