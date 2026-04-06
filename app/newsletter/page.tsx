import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Sign up for the TSU Community Farm newsletter for event updates, farm news, and community stories.",
};

export default function NewsletterPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-4 bg-[#2D5016] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-5xl mb-6">🌾</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">Stay Rooted With Us</h1>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Join the TSU Community Farm mailing list for event updates, farm news, and community
            stories. No spam, just good things growing.
          </p>
          <NewsletterForm variant="dark" className="max-w-md mx-auto" />
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-[#2D5016] text-center mb-12">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📅",
                title: "Event Announcements",
                text: "Be the first to know about upcoming events, special programs, and seasonal activities at the farm.",
              },
              {
                icon: "🌿",
                title: "Farm News",
                text: "Seasonal updates, what's growing in the garden, and behind-the-scenes stories from the farm.",
              },
              {
                icon: "🏘️",
                title: "Community Stories",
                text: "Highlights from volunteers, partners, and community members who are growing alongside us.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e0d4] text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-[#2D5016] mb-3">{item.title}</h3>
                <p className="text-[#3E2723] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm text-[#3E2723]/60">
            
          </p>
        </div>
      </section>
    </div>
  );
}
