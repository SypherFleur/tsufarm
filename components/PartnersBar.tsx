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
    <section className="py-8 px-4 bg-white border-b border-[#e8e0d4]">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#3E2723]/50 mb-6">
          Organizations We&apos;ve Worked With &amp; Supported
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center flex-shrink-0">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={88}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                style={{ height: "88px", width: "auto", maxWidth: "200px" }}
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
