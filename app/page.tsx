import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/sanity/client";
import MissionCards from "@/components/MissionCards";
import EventCard from "@/components/EventCard";
import NewsletterForm from "@/components/NewsletterForm";
import HomeHero from "@/components/HomeHero";
import PartnersBar from "@/components/PartnersBar";

export const metadata: Metadata = {
  title: "TSU Community Farm",
  description:
    "TSU Community Farm - Discover. Connect. Grow. A community agricultural initiative at Texas Southern University, Houston, TX.",
};

export default async function HomePage() {
  let upcomingEvents: any[] = [];
  try {
    upcomingEvents = await getUpcomingEvents(3);
  } catch {
    // CMS not yet configured - show empty state
  }

  return (
    <>
      {/* Hero */}
      <HomeHero />

      {/* Partners Bar */}
      <PartnersBar />

      {/* Mission Snapshot */}
      <MissionCards />

      {/* Upcoming Events */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9] border-t border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#0A0A0A]" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                  Events
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5">
                What&apos;s coming up at the farm.
              </h2>
              <p className="text-[#57534E] text-base sm:text-lg leading-relaxed">
                Join us for weekly Farmer&apos;s Stands, seasonal programs, and organization visits.
              </p>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center h-11 px-5 rounded-md border border-[#0A0A0A] text-[#0A0A0A] text-sm font-medium hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              View full calendar
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#E7E5E4] p-12 rounded-md">
              <div className="max-w-xl">
                <span className="block font-mono text-[11px] tracking-widest text-[#78716C] mb-4">
                  / RECURRING
                </span>
                <p className="font-display text-2xl sm:text-3xl text-[#0A0A0A] font-medium mb-4 tracking-[-0.025em] leading-[1.1]">
                  Farmer&apos;s Stand, every Saturday, 9 AM – 12 PM.
                </p>
                <p className="text-[#57534E] mb-6 leading-relaxed">
                  Fresh produce from the farm, open to the whole community. More programming
                  will appear here as it&apos;s scheduled.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center text-sm font-medium text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors"
                >
                  See the full calendar →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Photo Strip */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#0A0A0A]" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                  Field notes
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em]">
                Life at the farm.
              </h2>
            </div>
            <Link
              href="/past-events"
              className="text-sm font-medium text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors"
            >
              Browse the archive →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {[
              { src: "/images/tilling.jpg", alt: "Volunteers tilling the farm beds" },
              { src: "/images/community-group.jpg", alt: "Community group at TSU Farm" },
              { src: "/images/farmteam.jpg", alt: "Farm team by the entrance sign" },
              { src: "/images/sign-woman.jpg", alt: "Community member with fresh produce" },
              { src: "/images/gardener.jpg", alt: "Gardener tending the farm" },
            ].map((photo) => (
              <div
                key={photo.src}
                className="aspect-square overflow-hidden bg-[#F5F5F4] relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-[700ms] ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Banner */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                Newsletter
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-[-0.03em] mb-5">
              Seasonal dispatches from the field.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              Event announcements, community stories, and what&apos;s growing this week,
              delivered to your inbox. No spam, ever.
            </p>
          </div>
          <div className="md:col-span-5">
            <NewsletterForm variant="dark" />
            <p className="mt-3 text-xs text-white/40">
              We&apos;ll never share your email.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
