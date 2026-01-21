"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
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
  { name: "स्किज़ोफ्रेनिया", id: "schizophrenia" },
  { name: "OCD", id: "ocd" },
  { name: "ADHD", id: "adhd" },
  { name: "PTSD", id: "ptsd" },
  { name: "नशामुक्ति", id: "addiction" },
  { name: "यौन स्वास्थ्य", id: "sexual-dysfunction" },
  { name: "पर्चा बनाएं", href: "/prescription" },
  { name: "अपॉइंटमेंट", href: "/appointments" },
  { name: "संपर्क करें", href: "/contact" },
  { name: "ब्लॉग", href: "/blog" },
  { name: "डैशबोर्ड", href: "/dashboard" },
];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter((item) => item.id)
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section.element &&
          section.element.offsetTop <= scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <>
    <nav className="bg-teal-700 shadow-md">
        <style dangerouslySetInnerHTML={{__html: `
          .menu-scroll::-webkit-scrollbar { height: 8px; }
          .menu-scroll::-webkit-scrollbar-track { background: #0f766e; }
          .menu-scroll::-webkit-scrollbar-thumb { background: #14b8a6; border-radius: 6px; }
          .menu-scroll::-webkit-scrollbar-thumb:hover { background: #5eead4; }
        `}} />
        
        <div className="max-w-7xl mx-auto px-4">

          {/* Header – gap increased between name & designation */}
          <div className="text-center pt-6 pb-2">
            <h1 className="text-2xl font-bold text-white mb-3">
              डॉ. आर.के. कुशवाहा
            </h1>
            <p className="text-teal-100 text-sm">
              न्यूरो-साइकियाट्रिस्ट (मानसिक रोग विशेषज्ञ)
            </p>
          </div>

          {/* Auth + hamburger (mobile only) */}
          <div className="flex justify-end items-center py-2">
            <div className="flex items-center gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-white text-teal-700 px-4 py-1.5 rounded-md text-sm font-semibold">
                    लॉगिन
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white hover:bg-teal-600 md:hidden"
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

          {/* Menu – gap reduced */}
          <div
            className={`
              pt-1 pb-2
              ${isMenuOpen ? "block" : "hidden"}
              md:block
            `}
          >
       <div
<div className="flex flex-nowrap w-full justify-between overflow-x-auto pb-2 menu-scroll gap-2">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      text-white text-center font-medium rounded-md whitespace-nowrap
                      px-3 py-2 text-sm
                      xl:px-1 xl:py-1 xl:text-[11px]
                      hover:bg-teal-600
                      ${
                        isActive(item.href)
                          ? "bg-teal-600 ring-1 ring-white"
                          : ""
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-white text-center font-medium rounded-md whitespace-nowrap
                      px-3 py-2 text-sm
                      xl:px-1 xl:py-1 xl:text-[11px]
                      hover:bg-teal-600
                      ${
                        activeSection === item.id
                          ? "bg-teal-600 ring-1 ring-yellow-400"
                          : ""
                      }
                    `}
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>

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