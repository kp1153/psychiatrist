"use client";
import React from "react";

export default function Depression() {
  return (
    <>
      {/* Part 1 - परिचय और लक्षण */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
              😔 डिप्रेशन (Depression)
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              अवसाद एक गंभीर मानसिक स्वास्थ्य समस्या है जो आपकी भावनाओं, सोच और
              दैनिक गतिविधियों को प्रभावित करती है।
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">🧠</span> डिप्रेशन क्या है?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                डिप्रेशन (अवसाद) एक सामान्य लेकिन गंभीर मानसिक स्वास्थ्य स्थिति है जो आपके महसूस करने, सोचने और दैनिक गतिविधियों को संभालने के तरीके को नकारात्मक रूप से प्रभावित करती है। यह सिर्फ उदासी या "बुरे मूड" से अलग है।
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                डिप्रेशन में व्यक्ति को लगातार उदासी, निराशा और जीवन में रुचि की कमी महसूस होती है। यह काम, रिश्तों और शारीरिक स्वास्थ्य को प्रभावित कर सकता है।
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> मुख्य लक्षण
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-indigo-600 mb-4">भावनात्मक लक्षण:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>लगातार उदासी और खालीपन का एहसास</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>निराशा और बेबसी की भावना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>किसी भी काम में रुचि या खुशी न मिलना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>खुद को दोषी या बेकार समझना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>चिड़चिड़ापन और गुस्सा</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-rose-600 mb-4">शारीरिक लक्षण:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>नींद में परेशानी (अनिद्रा या अत्यधिक नींद)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>थकान और ऊर्जा की कमी</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>भूख में बदलाव (कम या ज्यादा खाना)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>सिरदर्द, शरीर में दर्द</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>पाचन संबंधी समस्याएं</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">मानसिक लक्षण:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>ध्यान केंद्रित करने में कठिनाई</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>निर्णय लेने में परेशानी</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>याददाश्त में समस्या</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>नकारात्मक विचार</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-red-600 mb-4">गंभीर लक्षण:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">मृत्यु के विचार</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">आत्महत्या की योजना या प्रयास</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">खुद को नुकसान पहुंचाने की सोच</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-300">
                <p className="text-sm text-gray-800">
                  <strong className="text-red-700">⚠️ तुरंत सहायता लें:</strong> यदि आप या कोई आपका परिचित आत्महत्या के बारे में सोच रहा है, तो तुरंत डॉक्टर से संपर्क करें या आपातकालीन हेल्पलाइन पर कॉल करें।
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">📋</span> डिप्रेशन के प्रकार
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-800 mb-2">1. मेजर डिप्रेसिव डिसऑर्डर (MDD)</h4>
                  <p className="text-gray-700">गंभीर अवसाद जो दैनिक जीवन को पूरी तरह प्रभावित करता है</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-bold text-purple-800 mb-2">2. परसिस्टेंट डिप्रेसिव डिसऑर्डर (Dysthymia)</h4>
                  <p className="text-gray-700">दीर्घकालिक (2 साल या अधिक) लेकिन कम तीव्र अवसाद</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-600">
                  <h4 className="font-bold text-pink-800 mb-2">3. पोस्टपार्टम डिप्रेशन</h4>
                  <p className="text-gray-700">प्रसव के बाद महिलाओं में होने वाला अवसाद</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-600">
                  <h4 className="font-bold text-teal-800 mb-2">4. सीजनल एफेक्टिव डिसऑर्डर (SAD)</h4>
                  <p className="text-gray-700">मौसम के अनुसार होने वाला अवसाद (आमतौर पर सर्दियों में)</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-bold text-orange-800 mb-2">5. बाइपोलर डिप्रेशन</h4>
                  <p className="text-gray-700">बाइपोलर डिसऑर्डर का हिस्सा, जहां अवसाद और उन्माद दोनों होते हैं</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2 - उपचार और सहायता */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-600">
              <h3 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                <span className="mr-3">💊</span> हमारा व्यापक उपचार
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">🗣️</span> साइकोथेरेपी (मनोचिकित्सा)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>संज्ञानात्मक व्यवहार थेरेपी (CBT)</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>इंटरपर्सनल थेरेपी (IPT)</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>व्यक्तिगत परामर्श सत्र</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>समूह थेरेपी</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">💊</span> दवा प्रबंधन
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>एंटीडिप्रेसेंट दवाएं (SSRI, SNRI)</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>व्यक्तिगत खुराक समायोजन</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>दुष्प्रभावों की निगरानी</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>नियमित फॉलो-अप</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">⚡</span> ब्रेन स्टिमुलेशन थेरेपी
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>TDCS (ट्रांसक्रेनियल डायरेक्ट करेंट स्टिमुलेशन)</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>ब्रेन पोलराइजेशन थेरेपी</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>दवा-मुक्त उपचार विकल्प</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>उन्नत तकनीकी समाधान</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">👨‍👩‍👧‍👦</span> पारिवारिक और जीवनशैली सहायता
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>फैमिली थेरेपी और परामर्श</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>लाइफस्टाइल काउंसलिंग</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>पोषण और व्यायाम मार्गदर्शन</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>तनाव प्रबंधन तकनीक</span></li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-green-100 rounded-lg border border-green-300">
                <p className="text-gray-800">
                  <strong className="text-green-700">💚 हमारा वादा:</strong> डिप्रेशन पूरी तरह से इलाज योग्य है। सही समय पर उपचार और उचित देखभाल से आप सामान्य और खुशहाल जीवन जी सकते हैं। हम आपकी पूरी यात्रा में आपके साथ हैं।
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🌟</span> स्व-देखभाल और सहायक सुझाव
              </h3>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">🏃‍♂️ शारीरिक गतिविधि</h4>
                  <p className="text-sm text-gray-700">नियमित व्यायाम और योग से मूड बेहतर होता है</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">😴 नींद की आदतें</h4>
                  <p className="text-sm text-gray-700">नियमित नींद का समय बनाए रखें</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">🥗 स्वस्थ भोजन</h4>
                  <p className="text-sm text-gray-700">पौष्टिक और संतुलित आहार लें</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">👥 सामाजिक संपर्क</h4>
                  <p className="text-sm text-gray-700">प्रियजनों के साथ जुड़े रहें</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">🧘‍♀️ ध्यान और विश्राम</h4>
                  <p className="text-sm text-gray-700">मेडिटेशन और माइंडफुलनेस का अभ्यास करें</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">🎯 छोटे लक्ष्य</h4>
                  <p className="text-sm text-gray-700">प्रतिदिन छोटे, प्राप्त करने योग्य लक्ष्य रखें</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">🆘</span> कब तुरंत मदद लें?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-red-600 mr-2 text-xl">⚠️</span>
                    <span>आत्महत्या के विचार या योजना</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-red-600 mr-2 text-xl">⚠️</span>
                    <span>खुद को या दूसरों को नुकसान पहुंचाने की सोच</span>
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-orange-600 mr-2 text-xl">⚠️</span>
                    <span>दैनिक कार्य करने में पूर्ण असमर्थता</span>
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-orange-600 mr-2 text-xl">⚠️</span>
                    <span>लक्षणों का 2 सप्ताह से अधिक समय तक रहना</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">✨</span> आशा की किरण
              </h3>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-800 mb-4 italic">
                  "डिप्रेशन से उबरना मुश्किल लग सकता है, लेकिन यह संभव है। हजारों लोगों ने सही उपचार से अपना जीवन वापस पाया है।"
                </p>
                <p className="text-gray-700 font-semibold">
                  सही समय पर मदद लेना ताकत की निशानी है, कमजोरी की नहीं।
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl shadow-2xl p-8 inline-block">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  क्या आप या आपका कोई प्रियजन डिप्रेशन से जूझ रहा है?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  हम यहां मदद के लिए हैं। हमारे विशेषज्ञ मानसिक स्वास्थ्य पेशेवर आपको सही उपचार और समर्थन प्रदान करेंगे।
                </p>
                <a
                  href="tel:8789482183"
                  className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:from-green-700 hover:to-teal-700 transition duration-300 transform hover:scale-105"
                >
                  📞 अभी संपर्क करें: 878 948 2183
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  24/7 परामर्श उपलब्ध • गोपनीयता सुनिश्चित • पेशेवर देखभाल
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}