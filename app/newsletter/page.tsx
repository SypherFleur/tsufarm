import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Sign up for the TSU Community Farm newsletter for event updates, farm news, and community stories.",
};

export default function NewsletterPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
                Newsletter · Monthly
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.02] tracking-[-0.035em]">
              Seasonal dispatches<br />from the field.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
              Event updates, farm news, and community stories, delivered to your inbox.
              No spam, just what&apos;s growing.
            </p>
            <div className="max-w-md">
              <NewsletterForm variant="dark" />
            </div>
            <p className="mt-3 text-xs text-white/40">
              We&apos;ll never share your email.
            </p>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                What to expect
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em]">
              Three things, monthly.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#E7E5E4]">
            {[
              {
                n: "01",
                title: "Event announcements",
                text: "Be the first to know about upcoming events, programs, and seasonal happenings at the farm.",
              },
              {
                n: "02",
                title: "Farm news",
                text: "What's growing this month, behind-the-scenes stories, and small updates from the crew.",
              },
              {
                n: "03",
                title: "Community stories",
                text: "Highlights from volunteers, partners, and neighbors who are growing alongside us.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`py-10 pr-0 md:pr-8 ${
                  i > 0 ? "md:pl-8 md:border-l md:border-[#E7E5E4]" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-[#E7E5E4]" : ""}`}
              >
                <span className="block font-mono text-[11px] tracking-widest text-[#A8A29E] mb-6">
                  {item.n}
                </span>
                <h3 className="font-display text-2xl font-medium text-[#0A0A0A] mb-4 tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-[#57534E] leading-relaxed text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
