"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const navItems = [
    { name: "होम", id: "hero" },
    { name: "अनिद्रा", id: "insomnia" },
    { name: "माइग्रेन", id: "migraine" },
    { name: "मिर्गी", id: "epilepsy" },
    { name: "अवसाद", id: "depression" },
    { name: "चिंता", id: "anxiety" },
    { name: "बाइपोलर", id: "bipolar" },
    { name: "सिज़ोफ्रेनिया", id: "schizophrenia" },
    { name: "OCD", id: "ocd" },
    { name: "ADHD", id: "adhd" },
    { name: "PTSD", id: "ptsd" },
    { name: "नशामुक्ति", id: "addiction" },
    { name: "यौन स्वास्थ्य", id: "sexual-dysfunction" },
    { name: "संपर्क करें", href: "/contact" },
    { name: "ब्लॉग", href: "/blog" },
    { name: "डैशबोर्ड", href: "/dashboard" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => item.id)
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id)
        }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    if (pathname === "/") {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <>
      <nav className="bg-teal-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-4 border-b border-teal-600">
            <h1 className="text-2xl font-bold text-white mb-1">
              डॉ. आर.के. कुशवाहा
            </h1>
            <p className="text-teal-100 text-sm">
              न्यूरो-साइकियाट्रिस्ट (मानसिक रोग विशेषज्ञ)
            </p>
          </div>

          <div className="flex justify-between items-center py-3">
            <span className="text-white font-semibold">विषय सूची</span>

            <div className="flex items-center gap-3">
              {/* Clerk Auth Buttons */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-white text-teal-700 px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-teal-50 transition-colors">
                    लॉगिन
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white hover:bg-teal-600 focus:outline-none transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
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
          </div>

          {isMenuOpen && (
            <div className="pb-4 border-t border-teal-600 pt-3 animate-fadeIn">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-3">
                {navItems.map((item) => (
                  item.href ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-center px-3 py-2 rounded-md text-white hover:bg-teal-600 font-medium transition-colors ${isActive(item.href) ? "bg-teal-600 ring-2 ring-white" : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-center px-3 py-2 rounded-md text-white hover:bg-teal-600 font-medium transition-colors ${activeSection === item.id ? "bg-teal-600 ring-2 ring-yellow-400" : ""
                        }`}
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </div>
              <SignedIn>
                <Link
                  href="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-teal-600 text-white font-semibold px-6 py-2 rounded-md mb-2 hover:bg-teal-500 transition-colors"
                >
                  📊 मेरा डैशबोर्ड
                </Link>
              </SignedIn>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}


                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                📞 ऑनलाइन परामर्श बुक करें
              </button>
            </div>
          )}
        </div>
      </nav>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Navbar;