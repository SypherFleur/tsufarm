"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
  { label: "Support Us", href: "/support" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="bg-[#2D5016] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/images/logo.png"
                alt="TSU Community Farm Logo"
                width={44}
                height={44}
                className="rounded-full"
              />
              <p className="font-display text-2xl font-bold">TSU Community Farm</p>
            </div>
            <p className="text-green-200 text-sm italic mb-4">Discover. Connect. Grow.</p>
            <address className="not-italic text-sm text-green-100 space-y-1">
              <p>3216 Blodgett, Houston, TX</p>
              <a
                href="mailto:Tsucommunityfarm@gmail.com"
                className="block hover:text-[#D4A843] transition-colors"
              >
                Tsucommunityfarm@gmail.com
              </a>
              <a
                href="https://instagram.com/tsufarm"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D4A843] transition-colors"
              >
                @tsufarm on Instagram
              </a>
              <a
                href="https://maps.app.goo.gl/av9cUHyXnpRVQbCA9"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D4A843] transition-colors"
              >
                View on Google Maps ↗
              </a>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-[#D4A843]">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-100 hover:text-[#D4A843] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-2 text-[#D4A843]">Stay Rooted</h3>
            <p className="text-sm text-green-100 mb-4">
              Get farm updates, event news, and community stories.
            </p>
            {status === "success" ? (
              <p className="text-sm text-[#D4A843] font-medium">You&apos;re subscribed! 🌱</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="px-4 py-2 rounded-lg text-sm text-[#3E2723] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 py-2 rounded-lg bg-[#D4A843] text-[#3E2723] text-sm font-semibold hover:bg-[#e0bc6a] transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-red-300">Something went wrong. Try again.</p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-green-700 text-center text-xs text-green-300">
          © 2024–{new Date().getFullYear()} TSU Community Farm. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
