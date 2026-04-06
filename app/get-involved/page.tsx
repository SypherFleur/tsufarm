import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer at TSU Community Farm, schedule a group visit, or get involved with our community. No experience needed, just show up.",
};

const faq = [
  {
    q: "Do I need farming experience to volunteer?",
    a: "Not at all! We welcome everyone regardless of experience. We'll teach you everything you need to know right here on the farm.",
  },
  {
    q: "What age can volunteer?",
    a: "Volunteers of all ages are welcome. Children under 12 should be accompanied by a parent or guardian.",
  },
  {
    q: "What should I wear and bring?",
    a: "Wear comfortable, weather-appropriate clothes you don't mind getting dirty. Closed-toe shoes required. We'll supply gloves and tools - just bring water and your energy!",
  },
  {
    q: "When do volunteer shifts happen?",
    a: "Our main volunteer opportunity is Saturday mornings 9AM-12PM during the Farmer's Stand. Additional shifts may be available - sign up and we'll reach out.",
  },
  {
    q: "Can organizations bring groups?",
    a: "Yes! We love group visits from schools, nonprofits, and community organizations. Planning is flexible - contact us to schedule.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tilling.jpg"
            alt="Volunteers working at TSU Community Farm"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#2D5016]/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4 drop-shadow-lg">Get Involved</h1>
          <p className="text-xl text-green-100 max-w-xl mx-auto">
            Show up. Get your hands dirty. Help something grow. No experience needed.
          </p>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-4xl font-bold text-[#2D5016] mb-6">
                Volunteer With Us
              </h2>
              <div className="space-y-4 text-[#3E2723] leading-relaxed">
                <p>
                  Volunteering at TSU Community Farm is a chance to connect with the land, with your
                  community, and with yourself. Every Saturday morning, we gather at the farm to
                  tend crops, run the Farmer&apos;s Stand, and build something together.
                </p>
                <p>
                  Whether you can give one Saturday or every weekend, we&apos;re grateful for every
                  pair of hands. Scheduling is flexible - sign up and we&apos;ll work with your
                  availability.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-[#3E2723]">
                  <span className="text-[#2D5016] font-bold">📅</span>
                  <span>Saturdays 9AM-12PM (primary opportunity)</span>
                </div>
                <div className="flex items-center gap-3 text-[#3E2723]">
                  <span className="text-[#2D5016] font-bold">📍</span>
                  <span>3216 Blodgett, Houston, TX</span>
                </div>
                <div className="flex items-center gap-3 text-[#3E2723]">
                  <span className="text-[#2D5016] font-bold">👕</span>
                  <span>Wear clothes you can get dirty, closed-toe shoes</span>
                </div>
                <div className="flex items-center gap-3 text-[#3E2723]">
                  <span className="text-[#2D5016] font-bold">🧤</span>
                  <span>Gloves and tools provided</span>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-8 inline-block px-8 py-4 rounded-full bg-[#C4713B] text-white font-semibold hover:bg-[#d4855a] transition-colors text-base"
              >
                Sign Up to Volunteer →
              </a>
            </div>

            <div className="space-y-6">
              {/* Real photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/community-group.jpg"
                  alt="Community volunteers at TSU Farm"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e0d4]">
                <h3 className="font-display text-2xl font-bold text-[#2D5016] mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: "🌅", text: "Arrive Saturday morning, meet the team and hear the day's plan" },
                    { icon: "🌿", text: "Work in the garden: planting, weeding, watering, harvesting" },
                    { icon: "🛒", text: "Help set up and run the Farmer's Stand" },
                    { icon: "🤝", text: "Connect with neighbors and fellow community members" },
                    { icon: "🌾", text: "Leave knowing you helped something grow" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-xl mt-0.5">{item.icon}</span>
                      <span className="text-[#3E2723] leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-[#2D5016] mb-4">
              Organizations & Group Visits
            </h2>
            <p className="text-lg text-[#3E2723] max-w-2xl mx-auto">
              Schools, nonprofits, faith communities, and corporate groups are all welcome at TSU
              Community Farm.
            </p>
          </div>
          <div className="bg-[#FAF6F0] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#2D5016] mb-4">
                  Plan a Visit
                </h3>
                <div className="space-y-3 text-[#3E2723]">
                  <p>
                    Group visits are a great way to bring your community to the farm for a hands-on
                    experience. We&apos;ve hosted schools, church groups, nonprofits, and more.
                  </p>
                  <p>
                    Planning is flexible and coordinated directly with our team. We&apos;ll work
                    with your schedule, group size, and goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#3E2723] mb-4">
                  To schedule a group visit, reach out directly:
                </p>
                <a
                  href="mailto:Tsucommunityfarm@gmail.com?subject=Organization Booking"
                  className="px-8 py-4 rounded-full bg-[#2D5016] text-white font-semibold hover:bg-[#3d6b1f] transition-colors text-center text-base"
                >
                  Email Us to Book
                </a>
                <p className="mt-3 text-sm text-center text-[#3E2723]/60">
                  Tsucommunityfarm@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-[#2D5016] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl border border-[#e8e0d4] group overflow-hidden"
              >
                <summary className="px-6 py-5 font-semibold text-[#2D5016] cursor-pointer list-none flex items-center justify-between hover:bg-[#FAF6F0] transition-colors">
                  {item.q}
                  <svg
                    className="w-5 h-5 text-[#C4713B] flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-[#3E2723] leading-relaxed border-t border-[#f0e8dc] pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
