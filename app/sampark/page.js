"use client";

export default function Sampark() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">संपर्क करें</h1>
          <p className="text-xl">हम आपकी सेवा के लिए तैयार हैं</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Contact Info Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            नवचेतना न्यूरो-साइकियाट्री सेंटर
          </h2>

          {/* Address */}
          <div className="mb-6 p-6 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <span className="text-3xl mr-4">📍</span>
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">पता</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  बी-२९, भुवननगर
                  <br />
                  (उत्सव वाटिका के पास)
                  <br />
                  अर्दली बाजार, वाराणसी
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6 p-6 bg-green-50 rounded-lg">
            <div className="flex items-start">
              <span className="text-3xl mr-4">📞</span>
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  फोन नंबर
                </h3>
                <a
                  href="tel:9450016305"
                  className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  ९४५००१६३०५
                </a>
                <p className="text-gray-600 mt-2">कॉल करने के लिए क्लिक करें</p>
              </div>
            </div>
          </div>

          {/* Timing */}
          <div className="mb-6 p-6 bg-yellow-50 rounded-lg">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🕐</span>
              <div>
                <h3 className="text-xl font-bold text-yellow-700 mb-2">समय</h3>
                <p className="text-gray-800 text-lg">
                  <span className="font-semibold">रविवार - शनिवार</span>
                  <br />
                  (मेडिकल खुला रहेगा)
                  <br />
                  रात्रि ८ बजे तक
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a
            href="tel:9450016305"
            className="bg-green-600 text-white p-6 rounded-lg text-center hover:bg-green-700 transition-colors shadow-lg"
          >
            <span className="text-4xl mb-3 block">📞</span>
            <span className="text-xl font-bold">अभी कॉल करें</span>
          </a>
          <a
            href="https://wa.me/919450016305"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-6 rounded-lg text-center hover:bg-blue-700 transition-colors shadow-lg"
          >
            <span className="text-4xl mb-3 block">💬</span>
            <span className="text-xl font-bold">WhatsApp करें</span>
          </a>
        </div>

        {/* Map or Directions */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            कैसे पहुंचें?
          </h3>
          <div className="text-gray-700 text-center">
            <p className="mb-3 text-lg">
              <span className="font-semibold">उत्सव वाटिका के पास</span>
              <br />
              अर्दली बाजार, वाराणसी
            </p>
            <p className="text-gray-600">
              आसानी से पहुंचने योग्य स्थान
              <br />
              सभी प्रमुख परिवहन साधनों से जुड़ा हुआ
            </p>
          </div>
        </div>

        {/* Emergency Note */}
        <div className="bg-red-100 border-l-4 border-red-600 p-6 mt-8 rounded">
          <p className="text-red-900 font-semibold text-center">
            ⚠️ आपातकालीन स्थिति में तुरंत संपर्क करें:{" "}
            <span className="text-xl">९४५००१६३०५</span>
          </p>
        </div>
      </div>
    </div>
  );
}
