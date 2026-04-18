import type { Metadata } from "next";
import Image from "next/image";
import { getTeamMembers } from "@/sanity/client";
import { urlFor } from "@/sanity/client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TSU Community Farm's story, mission, and the team behind Houston's community agricultural initiative at Texas Southern University.",
};

export default async function AboutPage() {
  let team: any[] = [];
  try {
    team = await getTeamMembers();
  } catch {
    // CMS not configured yet
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-32 px-5 sm:px-8 lg:px-12 text-white overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0">
          <Image
            src="/images/worker.jpg"
            alt="Volunteer working at TSU Community Farm"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            style={{ filter: "saturate(0.9) contrast(1.03)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/50 to-[#0A0A0A]/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
                Our story
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.02] tracking-[-0.035em]">
              Rooted in the Third Ward.<br />Built for everyone.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
              Born from a vision of community, sustainability, and shared growth, a working
              farm at Texas Southern University, by and for the neighborhood it calls home.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#0A0A0A]" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                  01 / Origin
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-8">
                How it all began.
              </h2>
              <div className="space-y-5 text-[#292524] leading-relaxed text-[17px]">
                <p>
                  Founded in 2024, TSU Community Farm emerged from a simple but powerful belief:
                  communities grow strongest when they grow together. Nestled at 3216 Blodgett
                  in Houston&apos;s Third Ward, the farm sits at the intersection of history,
                  resilience, and renewal.
                </p>
                <p>
                  We began by growing food for pantries in the Third Ward to help fight food
                  insecurity. Today, that effort has grown into a community hub that fosters
                  sustainable agriculture, research, and connection, serving our neighbors while
                  building something that reaches far beyond.
                </p>
              </div>
              <blockquote className="mt-10 pl-6 border-l-2 border-[#0A0A0A]">
                <p className="font-display text-2xl sm:text-3xl font-medium text-[#0A0A0A] leading-[1.2] tracking-[-0.02em]">
                  &ldquo;We believe in building a healthier, more connected future, not just through
                  what came before us, but through what we are creating together right now.&rdquo;
                </p>
              </blockquote>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F4]">
                <Image
                  src="/images/community-group.jpg"
                  alt="Community volunteers gathered at TSU Community Farm"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                />
              </div>
              <p className="mt-3 text-xs font-mono tracking-wider text-[#78716C]">
                FIELD PHOTOGRAPHY / 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9] border-y border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                02 / Mission
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-5">
              We grow for the Third Ward, by the Third Ward.
            </h2>
            <p className="text-[#57534E] text-base sm:text-lg leading-relaxed">
              Three focus areas guide every Saturday, every season, every program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#E7E5E4]">
            {[
              {
                n: "01",
                title: "Education",
                text: "Hands-on learning about sustainable agriculture, food systems, and environmental stewardship for all ages.",
              },
              {
                n: "02",
                title: "Fresh Produce",
                text: "Expanding access to fresh, locally-grown vegetables and fruit for the entire Third Ward community.",
              },
              {
                n: "03",
                title: "Volunteer Work",
                text: "Creating meaningful ways for individuals and organizations to give back and grow together on the land.",
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
                <h3 className="font-display text-2xl font-medium text-[#0A0A0A] mb-4 tracking-[-0.02em]">{item.title}</h3>
                <p className="text-[#57534E] leading-relaxed text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (conditional) */}
      {team.length > 0 && (
        <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                Our team
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-14">
              The people behind the farm.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member: any) => (
                <div key={member._id} className="border-t border-[#0A0A0A] pt-6">
                  {member.photo && (
                    <div className="relative w-full aspect-square overflow-hidden mb-5 bg-[#F5F5F4]">
                      <Image
                        src={urlFor(member.photo).width(400).height(400).url()}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ filter: "saturate(0.92) contrast(1.03)" }}
                      />
                    </div>
                  )}
                  <h3 className="font-display text-xl font-medium text-[#0A0A0A] tracking-[-0.02em]">{member.name}</h3>
                  {member.role && (
                    <p className="text-[#78716C] text-[13px] font-medium mt-1">{member.role}</p>
                  )}
                  {member.bio && (
                    <p className="text-[#57534E] text-sm mt-3 leading-relaxed">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9] border-t border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#0A0A0A]" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
              Gallery
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-14">
            The farm in pictures.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { src: "/images/tilling.jpg", alt: "Volunteers tilling garden beds at golden hour" },
              { src: "/images/community-group.jpg", alt: "Large volunteer group at TSU Farm" },
              { src: "/images/farmteam.jpg", alt: "Farm team at the entrance gate" },
              { src: "/images/sign-woman.jpg", alt: "Community member with fresh produce from the farm" },
              { src: "/images/gardener.jpg", alt: "Gardener tending the farm" },
              { src: "/images/worker.jpg", alt: "Volunteer working the garden beds" },
            ].map(({ src, alt }) => (
              <div key={src} className="aspect-square relative overflow-hidden bg-[#F5F5F4]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-[700ms] ease-out"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
