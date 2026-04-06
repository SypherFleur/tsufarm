import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Help TSU Community Farm grow. Donate, volunteer, shop the Farmer's Stand, or partner with us to expand access to fresh food in Houston.",
};

export default function SupportPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 bg-[#2D5016] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Help Us Grow</h1>
          <p className="text-xl text-green-100 max-w-xl mx-auto">
            Every dollar, every hour, every shared post makes a difference. Here&apos;s how you can
            support TSU Community Farm.
          </p>
        </div>
      </section>

      {/* Donation */}
      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-[#2D5016] mb-6">Make a Donation</h2>
          <p className="text-lg text-[#3E2723] max-w-2xl mx-auto mb-10 leading-relaxed">
            Your support helps us buy seeds and tools, maintain the farm, expand our programs, and
            keep fresh produce accessible to the whole community. Every contribution, big or small,
            goes directly into the farm.
          </p>

          <div className="bg-white rounded-2xl p-10 border border-[#e8e0d4] shadow-sm max-w-md mx-auto">
            <p className="text-5xl mb-4">🌱</p>
            <h3 className="font-display text-2xl font-bold text-[#2D5016] mb-3">
              Donation Coming Soon
            </h3>
            <p className="text-[#3E2723] mb-6">
              We&apos;re setting up our donation portal. In the meantime, reach out to us directly
              to contribute.
            </p>
            <a
              href="mailto:Tsucommunityfarm@gmail.com?subject=Donation Inquiry"
              className="inline-block px-8 py-3 rounded-full bg-[#2D5016] text-white font-semibold hover:bg-[#3d6b1f] transition-colors"
            >
              Contact Us to Donate
            </a>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-[#2D5016] text-center mb-12">
            Other Ways to Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🙌",
                title: "Volunteer",
                text: "Spend a Saturday morning with us. Your time and energy are the farm's greatest resource.",
                link: "/get-involved",
                cta: "Volunteer Now",
              },
              {
                icon: "📢",
                title: "Spread the Word",
                text: "Follow us on Instagram, share our posts, and tell a friend about the farm. Community starts with connection.",
                link: "https://instagram.com/tsufarm",
                cta: "Follow @tsufarm",
                external: true,
              },
              {
                icon: "🛒",
                title: "Shop the Stand",
                text: "Visit our Farmer's Stand every Saturday 9AM–12PM at 3216 Blodgett. Buy fresh, support local.",
                link: "/events",
                cta: "See Events",
              },
              {
                icon: "🤝",
                title: "Partner With Us",
                text: "Organizations, businesses, and institutions. Let's grow something together.",
                link: "/contact",
                cta: "Get in Touch",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF6F0] rounded-2xl p-6 border border-[#e8e0d4] flex flex-col"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-[#2D5016] mb-2">{item.title}</h3>
                <p className="text-[#3E2723] text-sm leading-relaxed flex-1 mb-5">{item.text}</p>
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#C4713B] hover:underline underline-offset-4"
                  >
                    {item.cta} →
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="text-sm font-semibold text-[#C4713B] hover:underline underline-offset-4"
                  >
                    {item.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
