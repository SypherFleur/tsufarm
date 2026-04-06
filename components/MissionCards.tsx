"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "🔍",
    title: "Discover",
    description:
      "Explore the wonders of urban agriculture and learn how food grows from seed to harvest right here in Houston.",
  },
  {
    icon: "🤝",
    title: "Connect",
    description:
      "Build lasting bonds with your neighbors, TSU students, and community members around shared meals and shared work.",
  },
  {
    icon: "🌱",
    title: "Grow",
    description:
      "Develop skills, deepen roots, and help us expand access to fresh produce and green spaces for everyone.",
  },
];

export default function MissionCards() {
  return (
    <section className="py-20 px-4 bg-[#FAF6F0]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl font-bold text-[#2D5016] mb-4">Our Mission</h2>
          <p className="text-lg text-[#3E2723] max-w-2xl mx-auto">
            Founded in 2024, TSU Community Farm is a space where students, neighbors, and dreamers
            come together to cultivate food, community, and connection at Texas Southern University.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e0d4] hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-display text-2xl font-bold text-[#2D5016] mb-3">{card.title}</h3>
              <p className="text-[#3E2723] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
