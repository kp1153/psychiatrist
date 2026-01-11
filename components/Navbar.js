"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "होम", href: "/" },
    { name: "ब्लॉग", href: "/blog" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-teal-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden lg:block">
          {/* Top Section - Doctor Info */}
          <div className="text-center py-4 border-b border-teal-600">
            <h1 className="text-2xl font-bold text-white mb-1">
              डॉ. आर.के. कुशवाहा
            </h1>
            <p className="text-teal-100 text-sm">
              न्यूरो-साइकियाट्रिस्ट (मानसिक रोग विशेषज्ञ)
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center py-3 gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-teal-200 font-medium transition-colors px-3 py-2 rounded ${
                  isActive(item.href) ? "bg-teal-600" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <a
              href="tel:8789482183"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              📞 परामर्श बुक करें
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold text-white">
                डॉ. आर.के. कुशवाहा
              </span>
              <span className="text-xs text-teal-200">
                न्यूरो-साइकियाट्रिस्ट
              </span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-teal-600 focus:outline-none"
              aria-label="Toggle menu"
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="pb-4 overflow-x-auto">
              <div className="flex gap-3 pb-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`whitespace-nowrap px-4 py-2 rounded-md text-white hover:bg-teal-600 font-medium ${
                      isActive(item.href) ? "bg-teal-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <a
                href="tel:8789482183"
                className="block mt-3 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                📞 परामर्श बुक करें
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;