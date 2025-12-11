"use client";
import React from "react";

export default function BipolarDisorder() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            🔄 बाइपोलर डिसऑर्डर (Bipolar Disorder)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            बाइपोलर डिसऑर्डर में मूड में अत्यधिक बदलाव होते हैं - कभी बहुत खुशी
            (मेनिया) तो कभी गहरा अवसाद।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="mr-2">🔍</span> मुख्य लक्षण
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>मूड में अचानक और तीव्र बदलाव</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>मेनिया: अत्यधिक ऊर्जा, बहुत कम नींद की जरूरत</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>बहुत तेज बोलना और विचारों का तेजी से आना</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>जोखिम भरे व्यवहार (ज्यादा खर्च, लापरवाही)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>डिप्रेशन: गहरी उदासी और निराशा</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>चिड़चिड़ापन और गुस्सा</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>ध्यान केंद्रित करने में कठिनाई</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>सामाजिक और काम में समस्याएं</span>
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
                  <strong>मूड स्टेबलाइजर्स</strong> - दवाओं से मूड संतुलन
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>साइकोथेरेपी</strong> - CBT और परिवार थेरेपी
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>ब्रेन पोलराइजेशन थेरेपी</strong> - मूड स्थिरता के लिए
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>TDCS थेरेपी</strong> - मानसिक संतुलन
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>लाइफस्टाइल मैनेजमेंट</strong> - नींद और दिनचर्या
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>नियमित निगरानी</strong> - लंबी अवधि की देखभाल
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-700">
                <strong className="text-green-700">नोट:</strong> बाइपोलर
                डिसऑर्डर को सही दवा और थेरेपी से नियंत्रित किया जा सकता है।
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:9450016305"
            className="inline-block bg-purple-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
          >
            📞 बाइपोलर के इलाज के लिए संपर्क करें
          </a>
        </div>
      </div>
    </section>
  );
}
