"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Team", href: "/meet-the-team" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
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
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        {/* Top: large mark */}
        <div className="pb-14 border-b border-white/10">
          <div className="flex items-start justify-between gap-10 flex-wrap">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/images/logo.png"
                  alt="TSU Community Farm"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <p className="font-display text-lg font-medium tracking-tight">TSU Community Farm</p>
              </div>
              <p className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.03em] leading-[1.1] text-white mb-4">
                Discover.<br />
                Connect.<br />
                Grow.
              </p>
            </div>

            <div className="max-w-md w-full sm:w-auto">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50 mb-3">
                Newsletter
              </p>
              <p className="text-sm text-white/70 mb-4 max-w-xs leading-relaxed">
                Seasonal dispatches from the farm. No spam, just what&apos;s growing.
              </p>
              {status === "success" ? (
                <p className="text-sm text-white font-medium">You&apos;re subscribed.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="flex-1 h-10 px-3.5 rounded-md bg-white/10 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-10 px-4 rounded-md bg-white text-[#0A0A0A] text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-60"
                  >
                    {status === "loading" ? "…" : "Subscribe"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="mt-2 text-xs text-red-300">Something went wrong. Try again.</p>
              )}
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50 mb-4">
              Visit
            </p>
            <address className="not-italic text-sm text-white/80 space-y-1.5 leading-relaxed">
              <p>3216 Blodgett Street</p>
              <p>Houston, TX</p>
              <p className="text-white/50 mt-2">Farmer&apos;s Stand · Saturdays 9 AM – 12 PM</p>
              <a
                href="https://maps.app.goo.gl/av9cUHyXnpRVQbCA9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-white hover:text-white/70 underline underline-offset-4 decoration-white/30"
              >
                Open in Google Maps ↗
              </a>
            </address>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50 mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50 mb-4">
              Reach us
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:Tsucommunityfarm@gmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Tsucommunityfarm@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/tsufarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Instagram · @tsufarm
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-white/40 tabular">
            © 2024–{new Date().getFullYear()} TSU Community Farm. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Texas Southern University · Houston, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
