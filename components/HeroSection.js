"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const images = ["/1.jpg", "/2.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="relative w-full max-w-3xl mx-auto h-64 md:h-96 mb-10 rounded-lg overflow-hidden shadow-2xl">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="text-center bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            डॉ. आर.के. कुशवाहा
          </h3>
          <p className="text-xl text-indigo-700 font-semibold mb-4">
            न्यूरो-साइकियाट्रिस्ट (मानसिक रोग विशेषज्ञ)
          </p>
          <a
            href="tel:8789482183"
            className="inline-block bg-green-600 text-white font-bold text-xl px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            📞 8789482183
          </a>
        </div>
      </div>
    </section>
  );
}