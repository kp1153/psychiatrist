"use client";
import React from "react";

export default function OCD() {
  return (
    <>
      {/* Part 1 - परिचय और लक्षण */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
              🔁 ऑब्सेसिव कंपल्सिव डिसऑर्डर (OCD)
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              OCD में बार-बार आने वाले अनचाहे विचार (Obsessions) और उन्हें दूर करने के लिए दोहराए जाने वाले कार्य (Compulsions) होते हैं।
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* OCD क्या है */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🧠</span> OCD क्या है?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                ऑब्सेसिव कंपल्सिव डिसऑर्डर (OCD) एक मानसिक स्वास्थ्य स्थिति है जिसमें व्यक्ति को बार-बार आने वाले अनचाहे विचार (Obsessions) होते हैं, जो चिंता और तनाव पैदा करते हैं। इन विचारों को दूर करने के लिए व्यक्ति दोहराव वाले कार्य (Compulsions) करता है।
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                OCD सिर्फ साफ-सफाई की आदत नहीं है - यह एक गंभीर स्थिति है जो दैनिक जीवन को बुरी तरह प्रभावित कर सकती है। सही उपचार से इसे नियंत्रित किया जा सकता है।
              </p>
            </div>

            {/* Obsessions और Compulsions */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-teal-600">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> मुख्य लक्षण
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Obsessions (जुनूनी विचार) */}
                <div className="p-5 bg-teal-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
                    <span className="mr-2">💭</span> Obsessions (जुनूनी विचार)
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>संक्रमण या गंदगी का अत्यधिक डर</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>चीजों के व्यवस्थित न होने की चिंता</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>किसी को नुकसान पहुंचाने के अनचाहे विचार</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>धार्मिक या यौन संबंधी अवांछित विचार</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>चीजें खो जाने या फेंक देने का डर</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 font-bold">•</span>
                      <span>सममिति और परफेक्शन की आवश्यकता</span>
                    </li>
                  </ul>
                </div>

                {/* Compulsions (दोहराव वाले कार्य) */}
                <div className="p-5 bg-cyan-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center">
                    <span className="mr-2">🔄</span> Compulsions (दोहराव वाले कार्य)
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2 font-bold">•</span>
                      <span>बार-बार हाथ धोना या नहाना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2 font-bold">•</span>
                      <span>दरवाजे, ताले, गैस की बार-बार जांच</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2 font-bold">•</span>
                      <span>चीजों को बार-बार गिनना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2 font-bold">•</span>
                      <span>चीजों को सटीक क्रम में रखना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2 font-bold">•</span>
                      <span>शब्दों या प्रार्थनाओं को दोहराना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2 font-bold">•</span>
                      <span>अनावश्यक चीजें इकट्ठा करना (Hoarding)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* अन्य लक्षण */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">मानसिक और भावनात्मक लक्षण:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>अत्यधिक चिंता और तनाव</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>दोषी या शर्मिंदा महसूस करना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>ध्यान केंद्रित करने में कठिनाई</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>निराशा और अवसाद</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-rose-600 mb-4">दैनिक जीवन पर प्रभाव:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>दैनिक कार्यों में बाधा (घंटों बर्बाद होना)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>सामाजिक और पारिवारिक रिश्तों में समस्या</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>काम या स्कूल में प्रदर्शन में कमी</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>शारीरिक समस्याएं (त्वचा की क्षति, थकान)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-teal-50 rounded-lg border-2 border-teal-300">
                <p className="text-sm text-gray-800">
                  <strong className="text-teal-700">💡 महत्वपूर्ण:</strong> OCD के लक्षण व्यक्ति को पता होते हैं कि वे अतार्किक हैं, लेकिन वे उन्हें नियंत्रित नहीं कर पाते। यही इसे सामान्य आदतों से अलग बनाता है।
                </p>
              </div>
            </div>

            {/* OCD के प्रकार */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">📋</span> OCD के सामान्य प्रकार
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-800 mb-2">1. Contamination OCD (संदूषण का डर)</h4>
                  <p className="text-gray-700">गंदगी, कीटाणुओं या बीमारी का अत्यधिक डर और बार-बार सफाई</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-bold text-purple-800 mb-2">2. Checking OCD (जांच करना)</h4>
                  <p className="text-gray-700">दरवाजे, ताले, उपकरण आदि की बार-बार जांच करना</p>
                </div>

                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-600">
                  <h4 className="font-bold text-pink-800 mb-2">3. Symmetry and Ordering (सममिति और व्यवस्था)</h4>
                  <p className="text-gray-700">चीजों को एक विशेष क्रम या तरीके से रखने की जरूरत</p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold text-green-800 mb-2">4. Intrusive Thoughts (घुसपैठिये विचार)</h4>
                  <p className="text-gray-700">हिंसक, यौन या धार्मिक अवांछित विचार</p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-bold text-orange-800 mb-2">5. Hoarding (जमा करना)</h4>
                  <p className="text-gray-700">अनावश्यक चीजों को फेंकने में असमर्थता</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2 - उपचार और सहायता */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-600">
              <h3 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                <span className="mr-3">💊</span> हमारा साक्ष्य-आधारित उपचार
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">🎯</span> ERP - सबसे प्रभावी थेरेपी
                  </h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    <strong>Exposure and Response Prevention (ERP)</strong> OCD के लिए गोल्ड स्टैंडर्ड उपचार है।
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>डर की स्थितियों का धीरे-धीरे सामना</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>दोहराव वाले कार्यों को रोकना सीखना</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>चिंता को कम करने की रणनीति</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>70-80% सफलता दर</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">🗣️</span> संज्ञानात्मक व्यवहार थेरेपी (CBT)
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>विचार पैटर्न की पहचान और बदलाव</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>अतार्किक विश्वासों को चुनौती देना</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>कोपिंग स्ट्रेटेजी विकसित करना</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>दीर्घकालिक परिणाम</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">💊</span> दवा प्रबंधन
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>SSRI एंटीडिप्रेसेंट (सबसे प्रभावी)</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>क्लोमीप्रामाइन (गंभीर मामलों में)</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>व्यक्तिगत खुराक और समायोजन</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>साइड इफेक्ट्स की निगरानी</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">⚡</span> उन्नत तकनीकी उपचार
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>TDCS ब्रेन स्टिमुलेशन थेरेपी</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>न्यूरोफीडबैक / ब्रेन फीडबैक</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>ब्रेन पोलराइजेशन तकनीक</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>दवा-प्रतिरोधी मामलों के लिए</span></li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-teal-50 rounded-lg mb-6">
                <h4 className="font-bold text-teal-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">👨‍👩‍👧‍👦</span> पारिवारिक और सहायक उपचार
                </h4>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>परिवार शिक्षा और परामर्श</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>सपोर्ट ग्रुप और समुदाय</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>स्ट्रेस मैनेजमेंट तकनीक</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>माइंडफुलनेस और रिलैक्सेशन</span></li>
                </ul>
              </div>

              <div className="p-5 bg-green-100 rounded-lg border border-green-300">
                <p className="text-gray-800">
                  <strong className="text-green-700">💚 उपचार की सफलता:</strong> सही उपचार से 70-80% मरीजों में महत्वपूर्ण सुधार होता है। ERP थेरेपी और दवाओं का संयोजन सबसे प्रभावी होता है। अधिकांश लोग सामान्य जीवन जी सकते हैं।
                </p>
              </div>
            </div>

            {/* स्व-देखभाल टिप्स */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🌟</span> स्व-देखभाल और कोपिंग रणनीतियां
              </h3>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">📝 विचार डायरी</h4>
                  <p className="text-sm text-gray-700">अपने जुनूनी विचारों और ट्रिगर्स को ट्रैक करें</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">🧘‍♀️ तनाव कम करें</h4>
                  <p className="text-sm text-gray-700">ध्यान, योग और गहरी सांस लेने का अभ्यास</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">😴 पर्याप्त नींद</h4>
                  <p className="text-sm text-gray-700">नियमित नींद की दिनचर्या बनाए रखें</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">🏃‍♂️ नियमित व्यायाम</h4>
                  <p className="text-sm text-gray-700">चिंता को कम करने के लिए रोजाना व्यायाम करें</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">🚫 ट्रिगर्स से बचें</h4>
                  <p className="text-sm text-gray-700">शुरुआत में अनावश्यक ट्रिगर्स को पहचानें और कम करें</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">👥 सपोर्ट नेटवर्क</h4>
                  <p className="text-sm text-gray-700">परिवार, दोस्तों और सपोर्ट ग्रुप से जुड़े रहें</p>
                </div>
              </div>
            </div>

            {/* परिवार के लिए सलाह */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">👪</span> परिवार के सदस्यों के लिए सलाह
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-indigo-600 mr-2 text-xl">✓</span>
                    <span><strong>धैर्य रखें:</strong> OCD एक मेडिकल स्थिति है, जिद नहीं</span>
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-indigo-600 mr-2 text-xl">✓</span>
                    <span><strong>रस्मों में शामिल न हों:</strong> दोहराव वाले कार्यों को प्रोत्साहित न करें</span>
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-indigo-600 mr-2 text-xl">✓</span>
                    <span><strong>सकारात्मक रहें:</strong> छोटी प्रगति को पहचानें और प्रोत्साहित करें</span>
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-indigo-600 mr-2 text-xl">✓</span>
                    <span><strong>शिक्षित बनें:</strong> OCD के बारे में जानें और समझें</span>
                  </p>
                </div>
              </div>
            </div>

            {/* सफलता की कहानियां */}
            <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-800 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">✨</span> पुनर्प्राप्ति संभव है
              </h3>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-800 mb-4 italic">
                  "OCD एक चुनौतीपूर्ण स्थिति हो सकती है, लेकिन सही उपचार और समर्थन के साथ, आप इसे नियंत्रित कर सकते हैं और पूर्ण जीवन जी सकते हैं।"
                </p>
                <p className="text-gray-700 font-semibold">
                  हजारों लोगों ने ERP और CBT से अपने लक्षणों को सफलतापूर्वक प्रबंधित किया है।
                </p>
              </div>
            </div>

            {/* CTA बटन */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-2xl p-8 inline-block">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  क्या आप OCD से परेशान हैं?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  हम यहां आपकी मदद के लिए हैं। हमारे विशेषज्ञ मानसिक स्वास्थ्य पेशेवर आपको साक्ष्य-आधारित ERP थेरेपी और व्यापक उपचार प्रदान करेंगे।
                </p>
                <a
                  href="tel:8789482183"
                  className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:from-teal-700 hover:to-cyan-700 transition duration-300 transform hover:scale-105"
                >
                  📞 अभी संपर्क करें: 878 948 2183
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  24/7 परामर्श उपलब्ध • ERP विशेषज्ञ • गोपनीयता सुनिश्चित
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}