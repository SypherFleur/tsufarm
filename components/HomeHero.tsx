"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - real farm photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/RP2_3696.jpg"
          alt="TSU Community Farm"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2D5016]/65" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
            TSU Community Farm
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-[#D4A843] italic mb-4 drop-shadow">
            Discover. Connect. Grow.
          </p>
          <p className="text-white/80 text-lg mb-10">
            📍 3216 Blodgett, Houston, TX
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="px-8 py-3.5 rounded-full bg-[#D4A843] text-[#3E2723] font-semibold hover:bg-[#e0bc6a] transition-colors text-base"
            >
              Visit Us
            </Link>
            <Link
              href="/get-involved"
              className="px-8 py-3.5 rounded-full bg-[#C4713B] text-white font-semibold hover:bg-[#d4855a] transition-colors text-base"
            >
              Volunteer
            </Link>
            <Link
              href="/newsletter"
              className="px-8 py-3.5 rounded-full bg-white/20 text-white font-semibold border border-white/40 hover:bg-white/30 transition-colors text-base backdrop-blur-sm"
            >
              Join Our Newsletter
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
