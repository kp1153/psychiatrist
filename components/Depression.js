"use client";
import React from "react";

export default function Depression() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* हेडिंग */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
            😔 डिप्रेशन (Depression)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            अवसाद एक गंभीर मानसिक स्वास्थ्य समस्या है जो आपकी भावनाओं, सोच और
            दैनिक गतिविधियों को प्रभावित करती है।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* लक्षण */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-600">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
              <span className="mr-2">🔍</span> मुख्य लक्षण
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>लगातार उदासी और खालीपन का एहसास</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>किसी भी काम में रुचि या खुशी न मिलना</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>नींद में परेशानी (बहुत कम या बहुत ज्यादा सोना)</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>थकान और ऊर्जा की कमी</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>भूख में बदलाव (कम या ज्यादा खाना)</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>खुद को दोषी या बेकार समझना</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>ध्यान केंद्रित करने में कठिनाई</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                <span>मृत्यु या आत्महत्या के विचार</span>
              </li>
            </ul>
          </div>

          {/* हमारा उपचार */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <span className="mr-2">💊</span> हमारा उपचार
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>साइकोथेरेपी</strong> - व्यक्तिगत परामर्श और CBT
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>दवा प्रबंधन</strong> - एंटीडिप्रेसेंट्स की सही खुराक
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>ब्रेन पोलराइजेशन थेरेपी</strong> - उन्नत उपचार
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>TDCS ब्रेन स्टिमुलेशन</strong> - नवीनतम तकनीक
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>लाइफस्टाइल काउंसलिंग</strong> - जीवनशैली में सुधार
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>फैमिली थेरेपी</strong> - परिवार का सहयोग
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-700">
                <strong className="text-green-700">नोट:</strong> डिप्रेशन पूरी
                तरह से इलाज योग्य है। सही समय पर उपचार से आप सामान्य जीवन जी
                सकते हैं।
              </p>
            </div>
          </div>
        </div>

        {/* CTA बटन */}
        <div className="text-center mt-10">
          <a
            href="tel:9450016305"
            className="inline-block bg-indigo-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            📞 डिप्रेशन के इलाज के लिए संपर्क करें
          </a>
        </div>
      </div>
    </section>
  );
}
