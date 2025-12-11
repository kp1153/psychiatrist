"use client";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            नवचेतना न्यूरो-साइकियाट्री सेंटर
          </h1>
          <p className="text-xl text-gray-700">
            न्यूरो-साइकियाट्रिस्ट (मानसिक रोग विशेषज्ञ)
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative overflow-hidden rounded-lg shadow-2xl"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/y3UdfELsgLY"
                title="Doctor Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/api/placeholder/400/500"
              alt="क्लिनिक जानकारी"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/api/placeholder/400/500"
              alt="उपलब्ध सुविधाएं"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/api/placeholder/400/500"
              alt="न्यूरोसाइकियाट्रिक रोगों के लक्षण"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Address & Contact */}
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <p className="text-xl text-gray-800 mb-4">
            बी-२९, भुवननगर (उत्सव वाटिका के पास)
            <br />
            अर्दली बाजार, वाराणसी
          </p>
          <a
            href="tel:9450016305"
            className="inline-block bg-green-600 text-white font-bold text-xl px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            📞 9450016305
          </a>
        </div>
      </div>
    </section>
  );
}
