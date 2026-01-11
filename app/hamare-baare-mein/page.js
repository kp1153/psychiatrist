"use client";

export default function HamareBaareMein() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">हमारे बारे में</h1>
          <p className="text-xl">आरके कुशवाहा न्यूरो-साइकियाट्री सेंटर</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            स्वागत है आरके कुशवाहा न्यूरो-साइकियाट्री सेंटर में
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            आरके कुशवाहा न्यूरो-साइकियाट्री सेंटर लखनऊ में स्थित एक आधुनिक मानसिक
            स्वास्थ्य केंद्र है। हम मानसिक स्वास्थ्य की समस्याओं के लिए विशेषज्ञ
            चिकित्सा और उपचार प्रदान करते हैं।
          </p>
          <p className="text-gray-700 leading-relaxed">
            हमारा उद्देश्य रोगियों को उच्च गुणवत्ता की मानसिक स्वास्थ्य सेवाएं
            प्रदान करना है, जिसमें आधुनिक तकनीक और पारंपरिक चिकित्सा पद्धतियों
            का संयोजन शामिल है।
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              हमारा उद्देश्य
            </h3>
            <p className="text-gray-700 leading-relaxed">
              मानसिक स्वास्थ्य के क्षेत्र में सर्वोत्तम चिकित्सा सेवाएं प्रदान
              करना और समाज में मानसिक स्वास्थ्य के प्रति जागरूकता बढ़ाना।
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              हमारी दृष्टि
            </h3>
            <p className="text-gray-700 leading-relaxed">
              एक ऐसा समाज बनाना जहां मानसिक स्वास्थ्य को उतना ही महत्व दिया जाए
              जितना शारीरिक स्वास्थ्य को।
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            हमें क्यों चुनें?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "अनुभवी और योग्य विशेषज्ञ",
              "आधुनिक उपचार तकनीक",
              "व्यक्तिगत देखभाल और ध्यान",
              "गोपनीयता की पूर्ण सुरक्षा",
              "किफायती उपचार खर्च",
              "सप्ताह के सभी दिन उपलब्ध",
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
