"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Team", href: "/meet-the-team" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const onDark = isHome && !scrolled;

  const headerBg = onDark
    ? "bg-transparent"
    : "bg-white/90 backdrop-blur-md border-b border-[#E7E5E4]";

  const linkColor = onDark ? "text-white/85 hover:text-white" : "text-[#292524] hover:text-[#0A0A0A]";
  const brandColor = onDark ? "text-white" : "text-[#0A0A0A]";
  const activeColor = onDark ? "text-white" : "text-[#0A0A0A]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/logo.png"
              alt="TSU Community Farm"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className={`text-[13px] font-semibold tracking-tight transition-colors ${brandColor}`}>
              TSU Community Farm
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.slice(1, -1).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-tight transition-colors ${
                    isActive ? activeColor : linkColor
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/get-involved"
              className={`ml-2 inline-flex items-center h-9 px-4 rounded-md text-[13px] font-medium transition-colors ${
                onDark
                  ? "bg-white text-[#0A0A0A] hover:bg-white/90"
                  : "bg-[#0A0A0A] text-white hover:bg-[#292524]"
              }`}
            >
              Volunteer
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${brandColor}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E7E5E4] px-5 py-5">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2.5 rounded-md text-sm font-medium text-[#292524] hover:bg-[#FAFAF9] transition-colors ${
                  pathname === link.href ? "bg-[#F5F5F4] text-[#0A0A0A]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="mt-3 inline-flex items-center justify-center h-10 px-4 rounded-md bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#292524] transition-colors"
            >
              Volunteer
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
