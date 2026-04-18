import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Help TSU Community Farm grow. Donate, volunteer, shop the Farmer's Stand, or partner with us to expand access to fresh food in Houston.",
};

export default function SupportPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-5 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
                Support the farm
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.02] tracking-[-0.035em]">
              Every hour, every dollar,<br />every seed grown.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
              The farm runs on the collective effort of neighbors, volunteers, partners,
              and contributors. Here&apos;s how to join them.
            </p>
          </div>
        </div>
      </section>

      {/* Donation */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                01 / Contribute
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5">
              Make a donation.
            </h2>
            <p className="text-[#57534E] leading-relaxed text-[17px]">
              Your support buys seeds and tools, maintains the farm, expands our programs,
              and keeps fresh produce accessible to the whole community. Every contribution,
              however small, goes directly into the soil.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="border border-[#E7E5E4] p-10 bg-[#FAFAF9]">
              <span className="block font-mono text-[11px] tracking-widest text-[#78716C] mb-4">
                / IN DEVELOPMENT
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#0A0A0A] tracking-[-0.025em] leading-[1.15] mb-4">
                Direct donation portal, coming soon.
              </h3>
              <p className="text-[#57534E] text-[15px] leading-relaxed mb-6">
                We&apos;re finalizing our donation infrastructure. In the interim, please reach
                out directly and we&apos;ll coordinate your contribution personally.
              </p>
              <a
                href="mailto:Tsucommunityfarm@gmail.com?subject=Donation Inquiry"
                className="inline-flex items-center h-11 px-5 rounded-md bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#292524] transition-colors"
              >
                Contact us to donate
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9] border-t border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                02 / Other paths in
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em]">
              Four ways to help us grow.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#E7E5E4]">
            {[
              {
                n: "01",
                title: "Volunteer",
                text: "Spend a Saturday morning with us. Your time and energy are the farm's greatest resource.",
                link: "/get-involved",
                cta: "Volunteer",
              },
              {
                n: "02",
                title: "Spread the word",
                text: "Follow us on Instagram, share our posts, and tell a friend. Community starts with connection.",
                link: "https://instagram.com/tsufarm",
                cta: "Follow @tsufarm",
                external: true,
              },
              {
                n: "03",
                title: "Shop the stand",
                text: "Visit every Saturday, 9 AM – 12 PM at 3216 Blodgett. Buy fresh, support local.",
                link: "/events",
                cta: "See events",
              },
              {
                n: "04",
                title: "Partner with us",
                text: "For organizations, businesses, and institutions. Let's grow something together.",
                link: "/contact",
                cta: "Get in touch",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`py-10 px-0 sm:px-6 ${
                  i > 0 ? "sm:border-l sm:border-[#E7E5E4]" : ""
                } ${i > 0 ? "border-t sm:border-t-0 border-[#E7E5E4]" : ""} flex flex-col`}
              >
                <span className="block font-mono text-[11px] tracking-widest text-[#A8A29E] mb-6">
                  {item.n}
                </span>
                <h3 className="font-display text-xl font-medium text-[#0A0A0A] mb-3 tracking-[-0.02em]">{item.title}</h3>
                <p className="text-[#57534E] text-[14px] leading-relaxed flex-1 mb-6">{item.text}</p>
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors self-start"
                  >
                    {item.cta} →
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="text-sm font-medium text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors self-start"
                  >
                    {item.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
