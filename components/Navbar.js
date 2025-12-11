// app/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "होम", href: "/" },
    { name: "कैसे करते हैं इलाज", href: "/approach" },
    { name: "टिप्स", href: "/tips" },
    { name: "मरीजों की जबानी", href: "/marij-ki-jabani" },
    { name: "ऑनलाइन परामर्श", href: "/online-consultation" },
    { name: "भुगतान करें", href: "/payment" },
  ];

  return (
    <nav className="bg-[#006680] py-4 shadow-md">
      <div className="container mx-auto px-4">
        {/* DESKTOP */}
        <div className="hidden md:block text-center">
          {/* क्लीनिक का नाम */}
          <h1 className="text-4xl font-bold text-white mb-1">नवचेतना</h1>
          <p className="text-lg text-yellow-200 mb-1">
            न्यूरो-साइकियाट्री सेंटर
          </p>
          <p className="text-sm text-white/90 mb-4 italic">
            वाराणसी और आसपास के जिलों के मानसिक रोगियों के लिए अपनत्व से भरा नाम
          </p>

          {/* Navigation Links */}
          <div className="flex justify-center items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-300 font-medium transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            {/* क्लीनिक का नाम (Mobile) */}
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold text-white">नवचेतना</span>
              <span className="text-xs text-yellow-200">
                न्यूरो-साइकियाट्री सेंटर
              </span>
            </Link>

            {/* हैमबर्गर बटन */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-[#005266] focus:outline-none"
              aria-label="मेन्यू टॉगल करें"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="mt-3 pb-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:bg-[#005266] font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
