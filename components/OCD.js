"use client";
import React from "react";

export default function OCD() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            🔁 ऑब्सेसिव कंपल्सिव डिसऑर्डर (OCD)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            OCD में बार-बार आने वाले अनचाहे विचार (Obsessions) और उन्हें दूर
            करने के लिए दोहराए जाने वाले कार्य (Compulsions) होते हैं।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600">
            <h3 className="text-2xl font-bold text-teal-700 mb-4 flex items-center">
              <span className="mr-2">🔍</span> मुख्य लक्षण
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2 font-bold">•</span>
                <span>बार-बार आने वाले अनचाहे विचार</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2 font-bold">•</span>
                <span>बार-बार हाथ धोना या साफ-सफाई करना</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2 font-bold">•</span>
                <span>चीजों को बार-बार चेक करना (दरवाजा, गैस, स्विच)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2 font-bold">•</span>
                <span>चीजों को व्यवस्थित रखने की जरूरत</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2 font-bold">•</span>
                <span>गिनती या दोहराव का व्यवहार</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2 font-bold">•</span>
                <span>अत्यधिक चिंता और तनाव</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2 font-bold">•</span>
                <span>दैनिक कार्यों में बाधा</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2 font-bold">•</span>
                <span>इन कार्यों को न करने पर बेचैनी</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <span className="mr-2">💊</span> हमारा उपचार
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>CBT (Cognitive Behavioral Therapy)</strong> - विचार
                  परिवर्तन
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>ERP (Exposure Response Prevention)</strong> - विशेष
                  थेरेपी
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>दवा प्रबंधन</strong> - SSRI दवाएं
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>ब्रेन फीडबैक थेरेपी</strong> - मानसिक नियंत्रण
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>TDCS थेरेपी</strong> - ब्रेन स्टिमुलेशन
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>परिवार शिक्षा</strong> - परिवार का सहयोग
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-700">
                <strong className="text-green-700">नोट:</strong> OCD का उपचार
                संभव है। CBT और दवाओं से 70-80% मरीजों में सुधार होता है।
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:9450016305"
            className="inline-block bg-teal-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
          >
            📞 OCD के इलाज के लिए संपर्क करें
          </a>
        </div>
      </div>
    </section>
  );
}
