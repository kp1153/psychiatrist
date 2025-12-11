"use client";
import React from "react";

export default function Schizophrenia() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            🧩 स्किजोफ्रेनिया (Schizophrenia)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            स्किजोफ्रेनिया एक गंभीर मानसिक विकार है जिसमें वास्तविकता से संपर्क
            टूट जाता है और सोच, भावनाएं व व्यवहार प्रभावित होते हैं।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
              <span className="mr-2">🔍</span> मुख्य लक्षण
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>भ्रम (Delusions) - गलत विश्वास</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>
                  मतिभ्रम (Hallucinations) - आवाजें सुनना, चीजें देखना
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>असंगत बोलना और सोचना</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>असामान्य व्यवहार या हलचल</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>भावनाओं में कमी (Flat affect)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>सामाजिक अलगाव और अकेलापन</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>स्वयं की देखभाल में कमी</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span>ध्यान और याददाश्त की समस्या</span>
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
                  <strong>एंटीसाइकोटिक दवाएं</strong> - लक्षण नियंत्रण
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>साइकोथेरेपी</strong> - व्यक्तिगत और समूह थेरेपी
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>TDCS ब्रेन स्टिमुलेशन</strong> - मानसिक कार्य सुधार
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>सामाजिक कौशल प्रशिक्षण</strong> - पुनर्वास
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>परिवार शिक्षा और समर्थन</strong> - परिवार की भागीदारी
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>
                  <strong>नियमित मॉनिटरिंग</strong> - दीर्घकालिक देखभाल
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-700">
                <strong className="text-green-700">नोट:</strong> समय पर इलाज और
                नियमित दवा से स्किजोफ्रेनिया के मरीज सामान्य जीवन जी सकते हैं।
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:9450016305"
            className="inline-block bg-red-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
          >
            📞 स्किजोफ्रेनिया के इलाज के लिए संपर्क करें
          </a>
        </div>
      </div>
    </section>
  );
}
