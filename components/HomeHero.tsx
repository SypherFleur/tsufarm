"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/RP2_3696.jpg"
          alt="TSU Community Farm"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          style={{ filter: "saturate(0.92) contrast(1.03)" }}
        />
      </div>

      {/* Deep gradient for typographic clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/20 to-[#0A0A0A]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-transparent" />

      {/* Content, aligned bottom-left, editorial */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 lg:pb-28 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-white/50" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
              Houston · Third Ward · Est. 2024
            </span>
          </div>

          <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-[-0.035em] mb-6">
            Cultivating community<br />where it grows.
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            A community-run urban farm rooted at Texas Southern University.
            We grow fresh food for the Third Ward, by the Third Ward, working to reduce
            food insecurity one harvest at a time.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center h-11 px-5 rounded-md bg-white text-[#0A0A0A] text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Volunteer with us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center h-11 px-5 rounded-md bg-white/10 backdrop-blur-sm border border-white/25 text-white text-sm font-medium hover:bg-white/15 transition-colors"
            >
              Upcoming events
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center h-11 px-5 rounded-md text-white/80 text-sm font-medium hover:text-white transition-colors"
            >
              Support the farm →
            </Link>
          </div>
        </motion.div>

        {/* Meta strip, aspirational tech-firm detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 lg:mt-24 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl"
        >
          {[
            { k: "01", v: "Location", d: "3216 Blodgett" },
            { k: "02", v: "Open", d: "Sat · 9–12" },
            { k: "03", v: "Founded", d: "2024" },
            { k: "04", v: "Community", d: "Third Ward" },
          ].map((item) => (
            <div key={item.k} className="text-white/80">
              <span className="block text-[11px] font-mono tracking-widest text-white/45 mb-1.5">
                {item.k}
              </span>
              <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/55 mb-1">
                {item.v}
              </span>
              <span className="block text-sm font-medium text-white tabular">
                {item.d}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
