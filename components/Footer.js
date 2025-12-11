"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Center Name */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-green-700">
            नवचेतना न्यूरो-साइकियाट्री सेंटर
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            बी-२९, भुवननगर (उत्सव वाटिका के पास) अर्दली बाजार, वाराणसी
          </p>
          <p className="text-sm text-blue-600 font-semibold mt-2">
            📞 9450016305
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-4 flex-wrap">
          <Link
            href="/hamare-baare-mein"
            className="text-gray-700 hover:text-green-600 font-medium transition-colors"
          >
            हमारे बारे में
          </Link>
          <Link
            href="/suvidhayen"
            className="text-gray-700 hover:text-green-600 font-medium transition-colors"
          >
            सुविधाएं
          </Link>
          <Link
            href="/sampark"
            className="text-gray-700 hover:text-green-600 font-medium transition-colors"
          >
            संपर्क करें
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
          <p>
            © {new Date().getFullYear()} नवचेतना न्यूरो-साइकियाट्री सेंटर।
            सर्वाधिकार सुरक्षित।
          </p>
          <p className="mt-1">
            वेब डेवलपर —{" "}
            <a
              href="https://www.web-developer-kp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 font-medium"
            >
              क्रिएटिव सॉल्यूशंस
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
