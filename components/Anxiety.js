"use client";
import React from "react";

export default function Anxiety() {
  return (
    <>
      {/* Part 1 - परिचय और लक्षण */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
              😰 एंग्जायटी डिसऑर्डर (Anxiety Disorder)
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              चिंता विकार में अत्यधिक घबराहट, भय और बेचैनी होती है जो दैनिक जीवन को प्रभावित करती है।
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* एंग्जायटी क्या है */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                <span className="mr-3">🧠</span> एंग्जायटी डिसऑर्डर क्या है?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                एंग्जायटी डिसऑर्डर एक मानसिक स्वास्थ्य स्थिति है जिसमें व्यक्ति को अत्यधिक चिंता, घबराहट और भय महसूस होता है। यह सामान्य तनाव से अलग है - यह लगातार बना रहता है और दैनिक गतिविधियों को प्रभावित करता है।
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                एंग्जायटी में व्यक्ति को अत्यधिक चिंता, पैनिक अटैक, और शारीरिक लक्षण जैसे तेज धड़कन और सांस लेने में तकलीफ हो सकती है। यह काम, रिश्तों और सामाजिक जीवन को गंभीर रूप से प्रभावित कर सकता है।
              </p>
            </div>

            {/* मुख्य लक्षण */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-orange-600">
              <h3 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> मुख्य लक्षण
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* मानसिक लक्षण */}
                <div>
                  <h4 className="text-xl font-semibold text-orange-600 mb-4">मानसिक लक्षण:</h4>
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
                      <span>अत्यधिक डर या आशंका</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>ध्यान केंद्रित करने में कठिनाई</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>चिड़चिड़ापन और गुस्सा</span>
                    </li>
                  </ul>
                </div>

                {/* शारीरिक लक्षण */}
                <div>
                  <h4 className="text-xl font-semibold text-rose-600 mb-4">शारीरिक लक्षण:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>दिल की धड़कन तेज होना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>सांस लेने में तकलीफ या घुटन महसूस होना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>पसीना आना और कंपकंपी</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>मांसपेशियों में तनाव</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>पेट में गड़बड़ी या मतली</span>
                    </li>
                  </ul>
                </div>

                {/* व्यवहारिक लक्षण */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">व्यवहारिक लक्षण:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>नींद में परेशानी (अनिद्रा)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>सामाजिक स्थितियों से बचना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>निर्णय लेने में परेशानी</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>काम या स्कूल में प्रदर्शन में कमी</span>
                    </li>
                  </ul>
                </div>

                {/* पैनिक अटैक के लक्षण */}
                <div>
                  <h4 className="text-xl font-semibold text-red-600 mb-4">पैनिक अटैक के लक्षण:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">अचानक तीव्र भय या आतंक</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">चक्कर आना या बेहोशी महसूस होना</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">मरने का डर या नियंत्रण खोने का डर</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
                <p className="text-sm text-gray-800">
                  <strong className="text-orange-700">💡 ध्यान दें:</strong> यदि ये लक्षण लगातार बने रहते हैं और आपके दैनिक जीवन को प्रभावित कर रहे हैं, तो पेशेवर मदद लेना महत्वपूर्ण है।
                </p>
              </div>
            </div>

            {/* एंग्जायटी के प्रकार */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                <span className="mr-3">📋</span> एंग्जायटी के प्रकार
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                  <h4 className="font-bold text-yellow-800 mb-2">1. जेनरलाइज्ड एंग्जायटी डिसऑर्डर (GAD)</h4>
                  <p className="text-gray-700">विभिन्न चीजों के बारे में अत्यधिक और लगातार चिंता</p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-bold text-orange-800 mb-2">2. पैनिक डिसऑर्डर</h4>
                  <p className="text-gray-700">अचानक और तीव्र भय के दौरे (पैनिक अटैक)</p>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-800 mb-2">3. सोशल एंग्जायटी डिसऑर्डर</h4>
                  <p className="text-gray-700">सामाजिक स्थितियों में तीव्र भय और शर्मिंदगी</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-bold text-purple-800 mb-2">4. विशिष्ट फोबिया</h4>
                  <p className="text-gray-700">किसी विशेष वस्तु या स्थिति का तीव्र भय</p>
                </div>

                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-600">
                  <h4 className="font-bold text-pink-800 mb-2">5. ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD)</h4>
                  <p className="text-gray-700">बार-बार आने वाले विचार और दोहराव वाले व्यवहार</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-800 mb-2">6. पोस्ट-ट्रॉमैटिक स्ट्रेस डिसऑर्डर (PTSD)</h4>
                  <p className="text-gray-700">किसी दर्दनाक घटना के बाद होने वाली चिंता</p>
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
                    <span className="mr-2">🗣️</span> साइकोथेरेपी और काउंसलिंग
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>संज्ञानात्मक व्यवहार थेरेपी (CBT)</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>डायलेक्टिकल बिहेवियर थेरेपी (DBT)</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>एक्सपोजर थेरेपी</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>माइंडफुलनेस-बेस्ड थेरेपी</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">💊</span> दवा प्रबंधन
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>एंटी-एंग्जायटी दवाएं</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>SSRI/SNRI एंटीडिप्रेसेंट</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>बीटा-ब्लॉकर्स (शारीरिक लक्षणों के लिए)</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>नियमित मॉनिटरिंग और समायोजन</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">⚡</span> उन्नत थेरेपी तकनीक
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>ब्रेन फीडबैक थेरेपी (Neurofeedback)</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>TDCS ब्रेन स्टिमुलेशन</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>ब्रेन पोलराइजेशन थेरेपी</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>बायोफीडबैक तकनीक</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">🧘‍♀️</span> रिलैक्सेशन और स्ट्रेस मैनेजमेंट
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>ध्यान और माइंडफुलनेस</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>योग और श्वास व्यायाम</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>प्रोग्रेसिव मसल रिलैक्सेशन</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>जीवनशैली परिवर्तन और स्ट्रेस मैनेजमेंट</span></li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-green-100 rounded-lg border border-green-300">
                <p className="text-gray-800">
                  <strong className="text-green-700">💚 हमारा वादा:</strong> सही उपचार से एंग्जायटी को प्रभावी रूप से नियंत्रित किया जा सकता है। अधिकांश लोग थेरेपी और उचित देखभाल से शांत और खुशहाल जीवन जी सकते हैं।
                </p>
              </div>
            </div>

            {/* स्व-देखभाल टिप्स */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🌟</span> स्व-देखभाल और सहायक सुझाव
              </h3>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">🏃‍♂️ नियमित व्यायाम</h4>
                  <p className="text-sm text-gray-700">शारीरिक गतिविधि चिंता को कम करने में मदद करती है</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">😴 पर्याप्त नींद</h4>
                  <p className="text-sm text-gray-700">7-9 घंटे की गुणवत्ता वाली नींद लें</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">☕ कैफीन कम करें</h4>
                  <p className="text-sm text-gray-700">कॉफी और एनर्जी ड्रिंक्स सीमित करें</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">🧘‍♀️ प्रतिदिन ध्यान</h4>
                  <p className="text-sm text-gray-700">10-15 मिनट का माइंडफुलनेस अभ्यास</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">🚫 शराब से बचें</h4>
                  <p className="text-sm text-gray-700">अल्कोहल चिंता को बढ़ा सकता है</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">👥 सामाजिक जुड़ाव</h4>
                  <p className="text-sm text-gray-700">प्रियजनों के साथ समय बिताएं</p>
                </div>
              </div>
            </div>

            {/* कारण और ट्रिगर्स */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> एंग्जायटी के कारण और ट्रिगर्स
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-3">जैविक कारण:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="mr-2">•</span><span>आनुवंशिक प्रवृत्ति</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>मस्तिष्क रसायन में असंतुलन</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>हार्मोनल परिवर्तन</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-3">पर्यावरणीय कारण:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="mr-2">•</span><span>लंबे समय तक तनाव</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>दर्दनाक अनुभव</span></li>
                    <li className="flex items-start"><span className="mr-2">•</span><span>जीवन में बड़े बदलाव</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* सफलता की कहानियां */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-orange-800 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">✨</span> आशा और पुनर्प्राप्ति
              </h3>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-800 mb-4 italic">
                  "एंग्जायटी से उबरना संभव है। सही उपचार और समर्थन के साथ, हजारों लोग अपनी चिंता को नियंत्रित करना सीख चुके हैं और पूर्ण जीवन जी रहे हैं।"
                </p>
                <p className="text-gray-700 font-semibold">
                  मदद मांगना कमजोरी नहीं, बल्कि साहस का प्रतीक है।
                </p>
              </div>
            </div>

            {/* CTA बटन */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-2xl p-8 inline-block">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  क्या आप एंग्जायटी से परेशान हैं?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  हम यहां आपकी मदद के लिए हैं। हमारे विशेषज्ञ मानसिक स्वास्थ्य पेशेवर आपको प्रभावी उपचार और समर्थन प्रदान करेंगे।
                </p>
                <a
                  href="tel:8789482183"
                  className="inline-block bg-gradient-to-r from-orange-600 to-yellow-600 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:from-orange-700 hover:to-yellow-700 transition duration-300 transform hover:scale-105"
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