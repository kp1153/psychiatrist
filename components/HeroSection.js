 "use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const images = ["/1.jpg", "/2.jpg"];

  // Calculate years of experience automatically
  const getExperience = () => {
    const startYear = 2016; // DPM completion year
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Doctor Info */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-700 mb-3">
                डॉ. आर.के. कुशवाहा
              </h1>
              <p className="text-lg text-indigo-700 font-semibold mb-2">
                {getExperience()}+ वर्षों का अनुभव | CIP Ranchi से प्रशिक्षित
              </p>
              <p className="text-base text-gray-600 font-medium mb-6">
                हजारों मरीजों का सफल इलाज
              </p>

              {/* Qualifications */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🎓</span>
                  <span className="text-gray-700">MBBS</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🎓</span>
                  <span className="text-gray-700">
                    DPM (2016) - Central Institute of Psychiatry, Ranchi
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🎓</span>
                  <span className="text-gray-700">DNB (Psychiatry)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🏥</span>
                  <span className="text-gray-700">
                    Ex-Consultant Psychiatrist, Divisional District Hospital
                    Varanasi
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">📍</span>
                  <span className="text-gray-700 font-semibold">
                    लखनऊ, उत्तर प्रदेश
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="order-1 md:order-2">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Dr RK Kushwaha ${idx + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    idx === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}