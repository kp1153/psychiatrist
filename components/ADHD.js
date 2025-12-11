"use client";
import React from "react";

export default function ADHD() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            ⚡ ADHD (Attention Deficit Hyperactivity Disorder)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ADHD में ध्यान केंद्रित करने में कठिनाई, अतिसक्रियता और आवेगपूर्ण
            व्यवहार होता है। यह मुख्यतः बच्चों में देखा जाता है।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <span className="mr-2">🔍</span> मुख्य लक्षण
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span>ध्यान केंद्रित करने में कठिनाई</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span>अत्यधिक गतिविधि और बेचैनी</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span>आवेगपूर्ण निर्णय और व्यवहार</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span>कार्यों को पूरा न कर पाना</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span>भूलने की समस्या और असंगठित रहना</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span>एक जगह बैठने में परेशानी</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span>बातों को बीच में काटना</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span>पढ़ाई और स्कूल में समस्याएं</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-600">
            <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center">
              <span className="mr-2">💊</span> हमारा उपचार
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>व्यवहार थेरेपी</strong> - बच्चों के लिए विशेष
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>दवा प्रबंधन</strong> - ध्यान बढ़ाने वाली दवाएं
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>ब्रेन फीडबैक थेरेपी</strong> - फोकस सुधार
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>TDCS ब्रेन स्टिमुलेशन</strong> - एकाग्रता बढ़ाना
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>पेरेंट ट्रेनिंग</strong> - माता-पिता को गाइड
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>स्कूल सहयोग</strong> - शिक्षकों के साथ समन्वय
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
              <p className="text-sm text-gray-700">
                <strong className="text-pink-700">नोट:</strong> सही उपचार से
                ADHD वाले बच्चे सामान्य जीवन जी सकते हैं और अच्छा प्रदर्शन कर
                सकते हैं।
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:9450016305"
            className="inline-block bg-green-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            📞 ADHD के इलाज के लिए संपर्क करें
          </a>
        </div>
      </div>
    </section>
  );
}
