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
      <section className="relative py-24 px-4 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/farmteam.jpg"
            alt="The TSU Community Farm team"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#2D5016]/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
            Meet the Team
          </h1>
          <p className="text-xl text-green-100 max-w-xl mx-auto">
          
          </p>
        </div>
      </section>

      {/* Team Photo Feature */}
      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/farmteam.jpg"
                alt="TSU Community Farm team at the farm entrance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-[#2D5016] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-[#3E2723] leading-relaxed">
                <p>
                  TSU Community Farm is powered by a passionate group of students, faculty,
                  community leaders, and volunteers who believe in the power of growing food
                  together.
                </p>
                <p>
                  From tending the garden beds to running the Saturday Farmer&apos;s Stand, our
                  team shows up week after week to build something meaningful in the heart of
                  Houston&apos;s Third Ward.
                </p>
                <p>
                  We come from different backgrounds and bring different skills, but we share
                  one common mission: Our mission is to grow for the third ward community by
                  the community and create lasting change through sustainable agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members (from CMS) */}
      {team.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-[#2D5016] text-center mb-12">
              Our People
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member: any) => (
                <div key={member._id} className="bg-[#FAF6F0] rounded-2xl p-6 shadow-sm text-center border border-[#e8e0d4]">
                  {member.photo && (
                    <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src={urlFor(member.photo).width(200).height(200).url()}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-[#2D5016]">{member.name}</h3>
                  {member.role && (
                    <p className="text-[#C4713B] font-medium text-sm mt-1">{member.role}</p>
                  )}
                  {member.bio && (
                    <p className="text-[#3E2723] text-sm mt-3 leading-relaxed">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Get Involved CTA */}
      <section className="py-20 px-4 bg-[#2D5016] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Want to Get Involved?</h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed">
            Our team grows every season. Whether you want to volunteer, partner, or simply
            show up and dig in, there&apos;s a place for you at TSU Community Farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="px-8 py-4 rounded-full bg-[#D4A843] text-[#3E2723] font-semibold hover:bg-[#e0bc6a] transition-colors text-base"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white/20 text-white font-semibold border border-white/40 hover:bg-white/30 transition-colors text-base backdrop-blur-sm"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
