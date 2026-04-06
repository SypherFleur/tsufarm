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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-4xl font-bold text-[#2D5016]">Upcoming Events</h2>
              <p className="text-[#3E2723] mt-2">Join us at the farm. Everyone is welcome.</p>
            </div>
            <Link
              href="/events"
              className="hidden sm:inline-flex text-sm font-semibold text-[#C4713B] hover:underline underline-offset-4"
            >
              View Full Calendar →
            </Link>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-[#FAF6F0] rounded-2xl p-10 text-center">
              <p className="text-3xl mb-3">🗓️</p>
              <p className="font-display text-xl text-[#2D5016] font-semibold mb-2">
                Events Coming Soon
              </p>
              <p className="text-[#3E2723] mb-4">
                We host a Farmer&apos;s Stand every <strong>Saturday 9AM–12PM</strong>.
              </p>
              <Link
                href="/events"
                className="text-sm text-[#C4713B] font-semibold hover:underline underline-offset-4"
              >
                Check the full calendar →
              </Link>
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link href="/events" className="text-sm font-semibold text-[#C4713B] hover:underline underline-offset-4">
              View Full Calendar →
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="py-16 px-4 bg-[#FAF6F0] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[#2D5016] mb-8 text-center">
            Life at the Farm
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { src: "/images/tilling.jpg", alt: "Volunteers tilling the farm beds" },
              { src: "/images/community-group.jpg", alt: "Community group at TSU Farm" },
              { src: "/images/farmteam.jpg", alt: "Farm team by the entrance sign" },
              { src: "/images/sign-woman.jpg", alt: "Community member with fresh produce" },
              { src: "/images/gardener.jpg", alt: "Gardener tending the farm" },
            ].map((photo) => (
              <div
                key={photo.src}
                className="aspect-square rounded-xl overflow-hidden bg-[#e8e0d4] relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Banner */}
      <section className="py-20 px-4 bg-[#2D5016] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Stay Rooted With Us</h2>
          <p className="text-green-100 mb-8 text-lg">
            Join the TSU Community Farm mailing list for event updates, farm news, and community
            stories.
          </p>
          <NewsletterForm variant="dark" className="max-w-md mx-auto" />
        </div>
      </section>
    </>
  );
}
