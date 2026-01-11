"use client";
import React from "react";

export default function PTSD() {
  return (
    <>
      {/* Part 1 - परिचय और लक्षण */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
              ⚠️ पोस्ट-ट्रॉमैटिक स्ट्रेस डिसऑर्डर (PTSD)
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              किसी दर्दनाक या भयावह घटना के बाद विकसित होने वाला मानसिक स्वास्थ्य विकार
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* PTSD क्या है */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <span className="mr-3">🧠</span> PTSD क्या है?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                पोस्ट-ट्रॉमैटिक स्ट्रेस डिसऑर्डर (PTSD) एक मानसिक स्वास्थ्य स्थिति है जो किसी भयावह घटना का अनुभव करने या देखने के बाद विकसित हो सकती है। इसमें व्यक्ति को उस घटना की बार-बार याद आती है, बुरे सपने आते हैं और गंभीर चिंता होती है।
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                PTSD युद्ध के अनुभवों, प्राकृतिक आपदाओं, दुर्घटनाओं, हिंसा, यौन शोषण या किसी भी जीवन-घातक स्थिति के बाद हो सकता है। यह सिर्फ सैनिकों तक सीमित नहीं है - कोई भी इससे प्रभावित हो सकता है।
              </p>
            </div>

            {/* मुख्य लक्षण */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-600">
              <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> PTSD के मुख्य लक्षण
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Re-experiencing लक्षण */}
                <div>
                  <h4 className="text-xl font-semibold text-red-600 mb-4">
                    1. पुनः अनुभव (Re-experiencing):
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>दर्दनाक घटना की बार-बार याद आना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>भयावह सपने और दुःस्वप्न</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>फ्लैशबैक - ऐसा लगना जैसे घटना फिर से हो रही है</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>घटना की याद आने पर तीव्र भावनात्मक या शारीरिक प्रतिक्रिया</span>
                    </li>
                  </ul>
                </div>

                {/* Avoidance लक्षण */}
                <div>
                  <h4 className="text-xl font-semibold text-orange-600 mb-4">
                    2. बचाव (Avoidance):
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>उन चीजों से बचना जो घटना की याद दिलाती हैं</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>उन स्थानों या लोगों से बचना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>घटना के बारे में बात करने से बचना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>घटना के कुछ हिस्सों को याद न कर पाना</span>
                    </li>
                  </ul>
                </div>

                {/* नकारात्मक विचार और मूड */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">
                    3. नकारात्मक विचार और मूड:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>अपने या दूसरों के बारे में नकारात्मक विश्वास</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>लगातार डर, क्रोध, अपराधबोध या शर्म</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>खुशी महसूस करने में कठिनाई</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>प्रियजनों से भावनात्मक रूप से दूर महसूस करना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>गतिविधियों में रुचि की कमी</span>
                    </li>
                  </ul>
                </div>

                {/* Hyperarousal लक्षण */}
                <div>
                  <h4 className="text-xl font-semibold text-rose-600 mb-4">
                    4. अत्यधिक सतर्कता (Hyperarousal):
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>आसानी से चौंक जाना या डर जाना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>हमेशा खतरे के लिए सतर्क रहना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>नींद में परेशानी</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>ध्यान केंद्रित करने में कठिनाई</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>चिड़चिड़ापन या गुस्से का प्रकोप</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>खतरनाक या आत्म-विनाशकारी व्यवहार</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-300">
                <p className="text-sm text-gray-800">
                  <strong className="text-red-700">💡 महत्वपूर्ण:</strong> PTSD के लक्षण दर्दनाक घटना के तुरंत बाद या कई महीनों/वर्षों बाद भी शुरू हो सकते हैं। यदि लक्षण एक महीने से अधिक समय तक बने रहते हैं, तो पेशेवर मदद लेना आवश्यक है।
                </p>
              </div>
            </div>

            {/* PTSD के कारण */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <span className="mr-3">⚡</span> PTSD किन घटनाओं से हो सकता है?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-800 mb-2">युद्ध और सैन्य अनुभव</h4>
                  <p className="text-gray-700 text-sm">युद्ध, आतंकवाद, या सैन्य संघर्ष</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">शारीरिक या यौन हिंसा</h4>
                  <p className="text-gray-700 text-sm">बलात्कार, घरेलू हिंसा, शारीरिक हमला</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-800 mb-2">गंभीर दुर्घटनाएं</h4>
                  <p className="text-gray-700 text-sm">कार दुर्घटना, विमान दुर्घटना, ट्रेन हादसा</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">प्राकृतिक आपदाएं</h4>
                  <p className="text-gray-700 text-sm">भूकंप, बाढ़, तूफान, आग</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">गंभीर चिकित्सा घटनाएं</h4>
                  <p className="text-gray-700 text-sm">जीवन-घातक बीमारी, ICU में रहना</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">प्रियजन की अचानक मृत्यु</h4>
                  <p className="text-gray-700 text-sm">दर्दनाक परिस्थितियों में मृत्यु देखना</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">बचपन में दुर्व्यवहार</h4>
                  <p className="text-gray-700 text-sm">शारीरिक, यौन या भावनात्मक दुर्व्यवहार</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">अन्य दर्दनाक घटनाएं</h4>
                  <p className="text-gray-700 text-sm">अपहरण, डकैती, गवाह के रूप में हिंसा देखना</p>
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
                <span className="mr-3">💊</span> PTSD के लिए प्रभावी उपचार
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">🎯</span> ट्रॉमा-फोकस्ड थेरेपी
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Prolonged Exposure (PE):</strong> सुरक्षित वातावरण में दर्दनाक यादों का सामना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Cognitive Processing Therapy (CPT):</strong> दर्दनाक घटना के बारे में सोच बदलना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>ट्रॉमा-फोकस्ड CBT</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">👁️</span> EMDR थेरेपी
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Eye Movement Desensitization and Reprocessing (EMDR)</strong> - PTSD के लिए अत्यधिक प्रभावी
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>दर्दनाक यादों को प्रोसेस करने में मदद</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>द्विपक्षीय उत्तेजना (आंखों की गति, ध्वनि)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>80-90% रोगियों में सुधार</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">💊</span> दवा उपचार
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>SSRI एंटीडिप्रेसेंट (Sertraline, Paroxetine)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>SNRI दवाएं (Venlafaxine)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>नींद की दवाएं (यदि आवश्यक हो)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>व्यक्तिगत खुराक और निगरानी</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">👥</span> समूह और सहायक थेरेपी
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>ग्रुप थेरेपी - समान अनुभव वाले लोगों से जुड़ना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>फैमिली थेरेपी - परिवार का समर्थन</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>सपोर्ट ग्रुप्स</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>पीयर सपोर्ट प्रोग्राम</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-teal-50 rounded-lg mb-6">
                <h4 className="font-bold text-teal-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">⚡</span> अतिरिक्त उपचार विकल्प
                </h4>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>माइंडफुलनेस-बेस्ड स्ट्रेस रिडक्शन (MBSR)</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>योग और ध्यान</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>TDCS ब्रेन स्टिमुलेशन</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>न्यूरोफीडबैक थेरेपी</span></li>
                </ul>
              </div>

              <div className="p-5 bg-green-100 rounded-lg border border-green-300">
                <p className="text-gray-800">
                  <strong className="text-green-700">💚 उपचार की सफलता:</strong> PTSD पूरी तरह से इलाज योग्य है। सही उपचार से 60-80% रोगियों में महत्वपूर्ण सुधार होता है। EMDR और Prolonged Exposure सबसे प्रभावी थेरेपी हैं।
                </p>
              </div>
            </div>

            {/* स्व-देखभाल रणनीतियां */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🌟</span> स्व-देखभाल और कोपिंग रणनीतियां
              </h3>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">🧘‍♀️ ग्राउंडिंग तकनीक</h4>
                  <p className="text-sm text-gray-700">5-4-3-2-1 तकनीक से वर्तमान में लौटें</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">😴 नींद की दिनचर्या</h4>
                  <p className="text-sm text-gray-700">नियमित नींद का समय और सोने की रस्में</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">🏃‍♂️ शारीरिक गतिविधि</h4>
                  <p className="text-sm text-gray-700">रोजाना 30 मिनट व्यायाम या टहलना</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">📝 जर्नलिंग</h4>
                  <p className="text-sm text-gray-700">भावनाओं और विचारों को लिखना</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">🚫 ट्रिगर्स प्रबंधन</h4>
                  <p className="text-sm text-gray-700">ट्रिगर्स को पहचानें और कोपिंग प्लान बनाएं</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">👥 सामाजिक संपर्क</h4>
                  <p className="text-sm text-gray-700">विश्वसनीय लोगों के साथ समय बिताएं</p>
                </div>
              </div>
            </div>

            {/* कब तुरंत मदद लें */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-600">
              <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <span className="mr-3">🚨</span> कब तुरंत मदद लें?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-red-600 mr-2 text-xl">⚠️</span>
                    <span>आत्महत्या या खुद को नुकसान पहुंचाने के विचार</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-red-600 mr-2 text-xl">⚠️</span>
                    <span>दूसरों को नुकसान पहुंचाने के विचार</span>
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-orange-600 mr-2 text-xl">⚠️</span>
                    <span>गंभीर फ्लैशबैक जो दैनिक कार्य को असंभव बनाते हैं</span>
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-orange-600 mr-2 text-xl">⚠️</span>
                    <span>शराब या नशीले पदार्थों का दुरुपयोग</span>
                  </p>
                </div>
              </div>
            </div>

            {/* आशा और पुनर्प्राप्ति */}
            <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-red-800 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">✨</span> PTSD से उबरना पूरी तरह संभव है
              </h3>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-800 mb-4 italic">
                  "दर्दनाक अनुभव आपको परिभाषित नहीं करते। सही उपचार, समर्थन और समय के साथ, आप फिर से पूर्ण और अर्थपूर्ण जीवन जी सकते हैं।"
                </p>
                <p className="text-gray-700 font-semibold">
                  लाखों लोगों ने PTSD से उबरकर खुशहाल जीवन प्राप्त किया है। आप भी कर सकते हैं।
                </p>
              </div>
            </div>

            {/* CTA बटन */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-2xl p-8 inline-block">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  क्या आप या आपका कोई प्रियजन PTSD से जूझ रहा है?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  हम यहां आपकी मदद के लिए हैं। हमारे ट्रॉमा विशेषज्ञ मानसिक स्वास्थ्य पेशेवर EMDR, CPT और अन्य साक्ष्य-आधारित उपचार प्रदान करते हैं।
                </p>
                <a
                  href="tel:8789482183"
                  className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:from-red-700 hover:to-orange-700 transition duration-300 transform hover:scale-105"
                >
                  📞 अभी संपर्क करें: 878 948 2183
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  24/7 परामर्श उपलब्ध • ट्रॉमा विशेषज्ञ • गोपनीय सहायता
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}