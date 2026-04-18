"use client";

import { motion } from "framer-motion";

const cards = [
  {
    label: "01",
    title: "Discover",
    description:
      "Learn how urban agriculture turns vacant lots into living classrooms, from seed selection to harvest, right in the heart of Houston.",
  },
  {
    label: "02",
    title: "Connect",
    description:
      "Build lasting relationships with neighbors, TSU students, and community partners through shared work, shared meals, and shared purpose.",
  },
  {
    label: "03",
    title: "Grow",
    description:
      "Develop skills, deepen roots, and expand access to fresh produce and green space, for the Third Ward and beyond.",
  },
];

export default function MissionCards() {
  return (
    <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#0A0A0A]" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
              Our Mission
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-6">
            A community farm built on three commitments.
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg leading-relaxed max-w-2xl">
            Founded in 2024, TSU Community Farm grows fresh food for the Third Ward to
            reduce food insecurity in our community, one harvest, one neighbor, and one
            Saturday at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#E7E5E4]">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`py-10 pr-0 md:pr-8 ${
                i > 0 ? "md:pl-8 md:border-l md:border-[#E7E5E4]" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-[#E7E5E4]" : ""}`}
            >
              <span className="block font-mono text-[11px] tracking-widest text-[#A8A29E] mb-6">
                {card.label}
              </span>
              <h3 className="font-display text-2xl font-medium text-[#0A0A0A] mb-4 tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="text-[#57534E] leading-relaxed text-[15px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
