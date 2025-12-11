"use client";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Doctor Image */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <img src="/psychiatrist.jpeg" alt="Doctor" className="shadow-2xl" />
          </div>
        </div>

        {/* Doctor Degrees */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            डॉ. अखिलेश पाण्डेय
          </h2>
          <p className="text-xl text-indigo-700 font-semibold">
            MBBS, MD (Psychiatry)
          </p>
          <p className="text-lg text-gray-600 mt-2">
            बनारस हिन्दू विश्वविद्यालय (BHU)
          </p>
          <p className="text-lg text-gray-600">
            न्यूरो-साइकियाट्रिस्ट (मानसिक रोग विशेषज्ञ)
          </p>
        </div>

        {/* Clinic Address */}
        <div className="text-center mb-10 bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            नवचेतना न्यूरो-साइकियाट्री सेंटर
          </h3>
          <p className="text-lg text-gray-700 mb-3">
            बी-२९, भुवननगर (उत्सव वाटिका के पास)
            <br />
            अर्दली बाजार, वाराणसी
          </p>
          <a
            href="tel:9450016305"
            className="inline-block bg-green-600 text-white font-bold text-xl px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            📞 9450016305
          </a>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-lg overflow-hidden shadow-2xl bg-black"
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
      </div>
    </section>
  );
}
