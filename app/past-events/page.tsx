import type { Metadata } from "next";
import Image from "next/image";
import { getPastEvents, getPartners, urlFor } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Past Events",
  description:
    "Browse photos and highlights from past TSU Community Farm events, and meet the partner organizations who help make it all possible.",
};

export default async function PastEventsPage() {
  let pastEvents: any[] = [];
  let partners: any[] = [];
  try {
    [pastEvents, partners] = await Promise.all([getPastEvents(), getPartners()]);
  } catch {
    // CMS not configured yet
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 bg-[#2D5016] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Past Events</h1>
          <p className="text-xl text-green-100 max-w-xl mx-auto">
            A look back at the moments that made our community.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-[#2D5016] mb-10">Photo Gallery</h2>

          {pastEvents.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {pastEvents.flatMap((event: any) =>
                (event.images || []).map((img: any, idx: number) => (
                  <div
                    key={`${event._id}-${idx}`}
                    className="break-inside-avoid rounded-xl overflow-hidden relative"
                  >
                    <Image
                      src={urlFor(img).width(600).url()}
                      alt={`${event.title} - photo ${idx + 1}`}
                      width={600}
                      height={400}
                      className="w-full object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#e8e0d4]">
              <p className="text-3xl mb-3">📸</p>
              <p className="font-display text-xl text-[#2D5016] font-semibold mb-2">
                Photos Coming Soon
              </p>
              <p className="text-[#3E2723]">
                Past event photos will be added here. Follow{" "}
                <a
                  href="https://instagram.com/tsufarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4713B] underline"
                >
                  @tsufarm
                </a>{" "}
                for updates.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Event Highlights */}
      {pastEvents.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-[#2D5016] mb-10">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event: any) => (
                <div
                  key={event._id}
                  className="bg-[#FAF6F0] rounded-2xl overflow-hidden border border-[#e8e0d4]"
                >
                  {event.images?.[0] && (
                    <div className="relative aspect-video">
                      <Image
                        src={urlFor(event.images[0]).width(600).height(340).url()}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs text-[#C4713B] font-semibold mb-1">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="font-display text-xl font-bold text-[#2D5016] mb-2">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-sm text-[#3E2723] line-clamp-3 leading-relaxed">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-[#2D5016] mb-4">Our Partners</h2>
          <p className="text-[#3E2723] mb-12 text-lg">
            We&apos;re proud to work with organizations that share our vision for community and growth.
          </p>

          {partners.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner: any) => (
                <div key={partner._id} className="flex flex-col items-center gap-2">
                  {partner.logo ? (
                    <div className="w-32 h-20 relative">
                      <Image
                        src={urlFor(partner.logo).width(256).height(160).url()}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="128px"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-20 bg-white rounded-xl flex items-center justify-center border border-[#e8e0d4]">
                      <span className="text-sm font-semibold text-[#2D5016]">{partner.name}</span>
                    </div>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#C4713B] hover:underline"
                    >
                      {partner.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 border border-[#e8e0d4]">
              <p className="text-[#3E2723]">
                Partner organizations will be listed here. Interested in partnering with us?{" "}
                <a href="/contact" className="text-[#C4713B] underline">
                  Get in touch.
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
