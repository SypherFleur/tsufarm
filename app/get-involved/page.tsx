import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer at TSU Community Farm, schedule a group visit, or get involved with our community. No experience needed, just show up.",
};

const faq = [
  {
    q: "Do I need farming experience to volunteer?",
    a: "Not at all. We welcome everyone regardless of experience. We'll teach you everything you need to know right here on the farm.",
  },
  {
    q: "What age can volunteer?",
    a: "Volunteers of all ages are welcome. Children under 12 should be accompanied by a parent or guardian.",
  },
  {
    q: "What should I wear and bring?",
    a: "Wear comfortable, weather-appropriate clothes you don't mind getting dirty. Closed-toe shoes required. We supply gloves and tools, just bring water and your energy.",
  },
  {
    q: "When do volunteer shifts happen?",
    a: "Our main volunteer opportunity is Saturday mornings, 9 AM – 12 PM during the Farmer's Stand. Additional shifts may be available, sign up and we'll reach out.",
  },
  {
    q: "Can organizations bring groups?",
    a: "Yes. We love group visits from schools, nonprofits, and community organizations. Planning is flexible, contact us to schedule.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-32 px-5 sm:px-8 lg:px-12 text-white overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0">
          <Image
            src="/images/tilling.jpg"
            alt="Volunteers working at TSU Community Farm"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            style={{ filter: "saturate(0.9) contrast(1.03)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/50 to-[#0A0A0A]/85" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
                Get involved
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.02] tracking-[-0.035em]">
              Show up. Dig in.<br />Help Third Ward grow.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
              No experience needed, only a willingness to work with your hands and connect
              with your neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#0A0A0A]" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                  01 / Volunteer
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-6">
                Saturdays at the farm.
              </h2>
              <div className="space-y-5 text-[#292524] leading-relaxed text-[17px]">
                <p>
                  Volunteering at TSU Community Farm is a chance to connect with the land, with
                  your community, and with yourself. Every Saturday morning, we gather to tend
                  crops, run the Farmer&apos;s Stand, and build something together.
                </p>
                <p>
                  Whether you can give one Saturday or every weekend, we&apos;re grateful for every
                  pair of hands.
                </p>
              </div>

              <dl className="mt-10 border-y border-[#E7E5E4] divide-y divide-[#E7E5E4]">
                {[
                  { k: "When", v: "Saturdays, 9 AM – 12 PM" },
                  { k: "Where", v: "3216 Blodgett, Houston, TX" },
                  { k: "Dress", v: "Clothes you can dirty, closed-toe shoes" },
                  { k: "Provided", v: "Gloves, tools, and guidance" },
                ].map((item) => (
                  <div key={item.k} className="grid grid-cols-3 gap-4 py-4">
                    <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#78716C] pt-0.5">
                      {item.k}
                    </dt>
                    <dd className="col-span-2 text-[#0A0A0A]">{item.v}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="/contact"
                className="mt-10 inline-flex items-center h-12 px-6 rounded-md bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#292524] transition-colors"
              >
                Sign up to volunteer
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="md:col-span-6 space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F4]">
                <Image
                  src="/images/community-group.jpg"
                  alt="Community volunteers at TSU Farm"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                />
              </div>
              <div className="border border-[#E7E5E4] bg-[#FAFAF9] p-8">
                <span className="block font-mono text-[11px] tracking-widest text-[#78716C] mb-4">
                  / WHAT TO EXPECT
                </span>
                <h3 className="font-display text-2xl font-medium text-[#0A0A0A] tracking-[-0.02em] mb-5">
                  A typical Saturday.
                </h3>
                <ol className="space-y-4">
                  {[
                    "Arrive, meet the team, hear the day's plan",
                    "Work in the garden: plant, weed, water, harvest",
                    "Help set up and run the Farmer's Stand",
                    "Connect with neighbors and fellow volunteers",
                    "Leave knowing you helped something grow",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 font-mono text-[11px] tracking-widest text-[#A8A29E] pt-0.5 tabular">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[#292524] leading-relaxed text-[15px]">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9] border-y border-[#E7E5E4]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                02 / Group visits
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5">
              Organizations & groups.
            </h2>
            <p className="text-[#57534E] text-base sm:text-lg leading-relaxed">
              Schools, nonprofits, faith communities, and corporate groups are all welcome.
            </p>
          </div>
          <div className="bg-white border border-[#E7E5E4] p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display text-2xl font-medium text-[#0A0A0A] tracking-[-0.02em] mb-5">
                  Plan a visit
                </h3>
                <div className="space-y-4 text-[#292524] text-[15px] leading-relaxed">
                  <p>
                    Group visits are a great way to bring your community to the farm for a
                    hands-on experience. We&apos;ve hosted schools, church groups, nonprofits,
                    and more.
                  </p>
                  <p>
                    Planning is coordinated directly with our team, we&apos;ll work with your
                    schedule, group size, and goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center md:border-l md:border-[#E7E5E4] md:pl-12">
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#78716C] mb-2">
                  Book a visit
                </p>
                <p className="text-[#57534E] text-sm mb-5 leading-relaxed">
                  Email us with your group size and preferred dates.
                </p>
                <a
                  href="mailto:Tsucommunityfarm@gmail.com?subject=Organization Booking"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#292524] transition-colors"
                >
                  Email to book
                </a>
                <p className="mt-3 text-xs text-[#78716C] tabular">
                  Tsucommunityfarm@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#0A0A0A]" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
              FAQ
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-14">
            Frequently asked.
          </h2>
          <div className="border-t border-[#E7E5E4]">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-b border-[#E7E5E4]"
              >
                <summary className="py-6 font-display text-lg sm:text-xl font-medium text-[#0A0A0A] cursor-pointer list-none flex items-center justify-between gap-4 tracking-[-0.02em] hover:text-[#292524] transition-colors">
                  <span>{item.q}</span>
                  <svg
                    className="w-4 h-4 text-[#78716C] flex-shrink-0 group-open:rotate-45 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.75}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="pb-6 text-[#57534E] leading-relaxed text-[15px] max-w-2xl">
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
