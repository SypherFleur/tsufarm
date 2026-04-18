import Image from "next/image";

const partners = [
  {
    name: "Friends of Columbia Tap",
    logo: "/images/partners/friends-columbia-tap.png",
  },
  {
    name: "Black United Fund of Texas, Inc.",
    logo: "/images/partners/buf-texas.png",
  },
  {
    name: "Harlem River Farms",
    logo: "/images/partners/harlem-river-farms.png",
  },
  {
    name: "Sanctuary Gardens",
    logo: "/images/partners/sanctuary-gardens.png",
  },
];

export default function PartnersBar() {
  return (
    <section className="py-14 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9] border-y border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[11px] font-semibold tracking-[0.18em] uppercase text-[#78716C] mb-8">
          Trusted partners & collaborators
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center flex-shrink-0">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={72}
                className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                style={{ height: "64px", width: "auto", maxWidth: "180px" }}
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
