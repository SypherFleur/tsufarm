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
      <section className="py-24 px-5 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
                Archive
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.02] tracking-[-0.035em]">
              A look back.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
              Moments and milestones from seasons at the farm, the gatherings, the harvests,
              the partners who made them possible.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#0A0A0A]" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
              01 / Gallery
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-14">
            Photo archive.
          </h2>

          {pastEvents.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
              {pastEvents.flatMap((event: any) =>
                (event.images || []).map((img: any, idx: number) => (
                  <div
                    key={`${event._id}-${idx}`}
                    className="break-inside-avoid overflow-hidden relative bg-[#F5F5F4]"
                  >
                    <Image
                      src={urlFor(img).width(600).url()}
                      alt={`${event.title} - photo ${idx + 1}`}
                      width={600}
                      height={400}
                      className="w-full object-cover hover:scale-[1.03] transition-transform duration-[700ms] ease-out"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      style={{ filter: "saturate(0.92) contrast(1.03)" }}
                    />
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="bg-[#FAFAF9] border border-[#E7E5E4] p-12 max-w-3xl">
              <span className="block font-mono text-[11px] tracking-widest text-[#78716C] mb-4">
                / COMING SOON
              </span>
              <p className="font-display text-2xl font-medium text-[#0A0A0A] tracking-[-0.02em] mb-3">
                Photos are on the way.
              </p>
              <p className="text-[#57534E] leading-relaxed">
                Past event photos will be added here. Follow{" "}
                <a
                  href="https://instagram.com/tsufarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors"
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
        <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9] border-t border-[#E7E5E4]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                02 / Highlights
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-14">
              Event highlights.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event: any) => (
                <article
                  key={event._id}
                  className="bg-white border border-[#E7E5E4] overflow-hidden"
                >
                  {event.images?.[0] && (
                    <div className="relative aspect-video bg-[#F5F5F4]">
                      <Image
                        src={urlFor(event.images[0]).width(600).height(340).url()}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ filter: "saturate(0.92) contrast(1.03)" }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-[11px] font-mono tracking-widest text-[#78716C] mb-3 tabular">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }).toUpperCase()}
                    </p>
                    <h3 className="font-display text-xl font-medium text-[#0A0A0A] tracking-[-0.02em] mb-2">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-sm text-[#57534E] line-clamp-3 leading-relaxed">
                        {event.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                Partners
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5">
              The organizations<br />that help us grow.
            </h2>
            <p className="text-[#57534E] text-base sm:text-lg leading-relaxed">
              We&apos;re proud to work with partners who share our vision for community and growth.
            </p>
          </div>

          {partners.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 border-t border-[#E7E5E4] pt-12">
              {partners.map((partner: any) => (
                <div key={partner._id} className="flex flex-col items-start gap-3">
                  {partner.logo ? (
                    <div className="w-full h-20 relative">
                      <Image
                        src={urlFor(partner.logo).width(256).height(160).url()}
                        alt={partner.name}
                        fill
                        className="object-contain object-left grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        sizes="128px"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-20 bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center">
                      <span className="text-sm font-medium text-[#0A0A0A]">{partner.name}</span>
                    </div>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#57534E] hover:text-[#0A0A0A] transition-colors underline underline-offset-4 decoration-[#E7E5E4]"
                    >
                      {partner.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-[#E7E5E4] bg-[#FAFAF9] p-10 max-w-3xl">
              <p className="text-[#57534E] leading-relaxed">
                Partner organizations will be listed here. Interested in partnering with us?{" "}
                <a href="/contact" className="text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A]">
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
