import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTeamMembers, urlFor } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the people behind TSU Community Farm - the dedicated team growing community, fresh food, and opportunity in Houston's Third Ward.",
};

export default async function MeetTheTeamPage() {
  let team: any[] = [];
  try {
    team = await getTeamMembers();
  } catch {
    // CMS not configured yet
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-32 px-5 sm:px-8 lg:px-12 text-white overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0">
          <Image
            src="/images/farmteam.jpg"
            alt="The TSU Community Farm team"
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
                The team
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.02] tracking-[-0.035em]">
              The people<br />behind the soil.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
              Students, faculty, neighbors, and volunteers who show up Saturday after Saturday.
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo Feature */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F4]">
                <Image
                  src="/images/farmteam.jpg"
                  alt="TSU Community Farm team at the farm entrance"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                />
              </div>
              <p className="mt-3 text-xs font-mono tracking-wider text-[#78716C]">
                FARM TEAM / 2024
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#0A0A0A]" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                  Who we are
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#0A0A0A] leading-[1.05] tracking-[-0.03em] mb-8">
                A coalition of hands<br />and ideas.
              </h2>
              <div className="space-y-5 text-[#292524] leading-relaxed text-[17px]">
                <p>
                  TSU Community Farm is powered by students, faculty, community leaders, and
                  volunteers who believe in the power of growing food together.
                </p>
                <p>
                  From tending garden beds to running the Saturday Farmer&apos;s Stand, our team
                  shows up week after week to build something meaningful in the heart of
                  Houston&apos;s Third Ward.
                </p>
                <p>
                  We come from different backgrounds and bring different skills, but we share
                  one mission: <span className="text-[#0A0A0A] font-medium">to grow for the Third Ward, by the Third Ward</span>, creating
                  lasting change through sustainable agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members (from CMS) */}
      {team.length > 0 && (
        <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9] border-y border-[#E7E5E4]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                Our people
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-14">
              Meet the crew.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

      {/* Get Involved CTA */}
      <section className="py-28 px-5 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                Join us
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-[-0.03em] mb-5">
              The team grows every season.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              Whether you want to volunteer, partner, or simply show up and dig in, there&apos;s
              a place for you at the farm.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-white text-[#0A0A0A] text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Volunteer
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-white/10 border border-white/25 text-white text-sm font-medium hover:bg-white/15 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
