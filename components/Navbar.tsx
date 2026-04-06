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
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
  { label: "Support Us", href: "/support" },
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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg = isHome
    ? scrolled
      ? "bg-[#FAF6F0] shadow-sm"
      : "bg-transparent"
    : "bg-[#FAF6F0] shadow-sm";

  const linkColor = isHome && !scrolled ? "text-white" : "text-[#3E2723]";
  const logoColor = isHome && !scrolled ? "text-white" : "text-[#2D5016]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="TSU Community Farm"
              width={52}
              height={52}
              className="rounded-full"
            />
            <span className={`font-display text-lg font-bold tracking-tight transition-colors ${logoColor}`}>
              TSU Community Farm
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.slice(1, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#C4713B] ${linkColor} ${
                  pathname === link.href ? "border-b-2 border-[#C4713B]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="ml-2 px-4 py-2 rounded-full bg-[#C4713B] text-white text-sm font-semibold hover:bg-[#d4855a] transition-colors"
            >
              Volunteer
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${linkColor}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-t border-[#e8e0d4] px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium text-[#3E2723] hover:bg-[#f0e8dc] transition-colors ${
                  pathname === link.href ? "bg-[#f0e8dc] text-[#C4713B]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="mt-2 px-4 py-2 rounded-full bg-[#C4713B] text-white text-sm font-semibold text-center hover:bg-[#d4855a] transition-colors"
            >
              Volunteer Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
