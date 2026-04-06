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
      <section className="relative py-24 px-4 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/worker.jpg"
            alt="Volunteer working at TSU Community Farm"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#2D5016]/75" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 drop-shadow-lg">Our Story</h1>
          <p className="text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">
            Born from a vision of community, sustainability, and shared growth, rooted in the heart
            of Third Ward.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#2D5016] mb-6">
                How It All Began
              </h2>
              <div className="space-y-4 text-[#3E2723] leading-relaxed">
                <p>
                  Founded in 2024, TSU Community Farm emerged from a simple but powerful belief:
                  that communities grow strongest when they grow together. Nestled at 3216 Blodgett
                  in Houston&apos;s Third Ward, the farm sits at the intersection of history,
                  resilience, and renewal.
                </p>
                <p>
                We began by growing food for pantries in the Third Ward to help fight food insecurity. Today, that effort has grown into a community hub that fosters sustainable agriculture, research, and connection, serving our neighbors while building something that reaches far beyond our community.
                </p>
                <p className="italic text-[#2D5016] font-medium text-lg border-l-4 border-[#C4713B] pl-4">
                  &quot;We believe in building a healthier, more connected future — not just through
                  what came before us, but through what we are creating together right now.&quot;
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/community-group.jpg"
                alt="Community volunteers gathered at TSU Community Farm"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-[#2D5016] mb-6">Our Mission</h2>
          <p className="text-xl text-[#3E2723] mb-12 max-w-2xl mx-auto leading-relaxed text-center">
            We grow for the Third Ward community, by the community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                icon: "📚",
                text: "Hands-on learning about sustainable agriculture, food systems, and environmental stewardship.",
              },
              {
                title: "Fresh Produce",
                icon: "🥬",
                text: "Expanding access to fresh, locally grown vegetables and fruits for the entire community.",
              },
              {
                title: "Volunteer Opportunities",
                icon: "🙌",
                text: "Creating meaningful ways for individuals and organizations to give back and grow together.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAF6F0] rounded-2xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-[#2D5016] mb-3">{item.title}</h3>
                <p className="text-[#3E2723] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (conditional) */}
      {team.length > 0 && (
        <section className="py-20 px-4 bg-[#FAF6F0]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-[#2D5016] text-center mb-12">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member: any) => (
                <div key={member._id} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  {member.photo && (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src={urlFor(member.photo).width(200).height(200).url()}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="96px"
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

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-[#2D5016] text-center mb-12">
            The Farm in Pictures
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/tilling.jpg", alt: "Volunteers tilling garden beds at golden hour" },
              { src: "/images/community-group.jpg", alt: "Large volunteer group at TSU Farm" },
              { src: "/images/farmteam.jpg", alt: "Farm team at the entrance gate" },
              { src: "/images/sign-woman.jpg", alt: "Community member with fresh produce from the farm" },
              { src: "/images/gardener.jpg", alt: "Gardener tending the farm" },
              { src: "/images/worker.jpg", alt: "Volunteer working the garden beds" },
            ].map(({ src, alt }) => (
              <div key={src} className="aspect-square relative rounded-xl overflow-hidden bg-[#e8e0d4]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
