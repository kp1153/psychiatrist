"use client";
import React from "react";

export default function Anxiety() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            😰 एंग्जायटी (Anxiety Disorder)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            चिंता विकार में अत्यधिक घबराहट, भय और बेचैनी होती है जो दैनिक जीवन
            को प्रभावित करती है।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
              <span className="mr-2">🔍</span> मुख्य लक्षण
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span>अत्यधिक चिंता और घबराहट</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span>बेचैनी और तनाव महसूस होना</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span>दिल की धड़कन तेज होना</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span>सांस लेने में तकलीफ</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span>पसीना आना और कंपकंपी</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span>नींद में परेशानी</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span>ध्यान केंद्रित करने में कठिनाई</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span>पेट में गड़बड़ी या चक्कर आना</span>
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
                  <strong>काउंसलिंग व साइकोथेरेपी</strong> - CBT और DBT
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>दवा प्रबंधन</strong> - एंटी-एंग्जायटी दवाएं
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>ब्रेन फीडबैक थेरेपी</strong> - तनाव कम करने के लिए
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>रिलैक्सेशन तकनीक</strong> - ध्यान और योग
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>ब्रेन पोलराइजेशन</strong> - उन्नत थेरेपी
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>स्ट्रेस मैनेजमेंट</strong> - जीवनशैली परिवर्तन
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-700">
                <strong className="text-green-700">नोट:</strong> सही उपचार से
                एंग्जायटी को नियंत्रित किया जा सकता है और आप शांत जीवन जी सकते
                हैं।
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:9450016305"
            className="inline-block bg-orange-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105"
          >
            📞 एंग्जायटी के इलाज के लिए संपर्क करें
          </a>
        </div>
      </div>
    </section>
  );
}
