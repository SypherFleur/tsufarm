import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TSU Community Farm. Email Tsucommunityfarm@gmail.com, find us at 3216 Blodgett Houston TX, or send us a message.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 bg-[#2D5016] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-xl mx-auto">
            Have questions or want to get involved? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info + map */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#2D5016] mb-6">Find Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-[#2D5016]">Address</p>
                    <p className="text-[#3E2723]">3216 Blodgett, Houston, TX</p>
                    <a
                      href="https://maps.app.goo.gl/av9cUHyXnpRVQbCA9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#C4713B] hover:underline"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">✉️</span>
                  <div>
                    <p className="font-semibold text-[#2D5016]">Email</p>
                    <a
                      href="mailto:Tsucommunityfarm@gmail.com"
                      className="text-[#3E2723] hover:text-[#C4713B] transition-colors"
                    >
                      Tsucommunityfarm@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">📸</span>
                  <div>
                    <p className="font-semibold text-[#2D5016]">Instagram</p>
                    <a
                      href="https://instagram.com/tsufarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3E2723] hover:text-[#C4713B] transition-colors"
                    >
                      @tsufarm
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">🗓️</span>
                  <div>
                    <p className="font-semibold text-[#2D5016]">Farmer&apos;s Stand</p>
                    <p className="text-[#3E2723]">Every Saturday 9AM–12PM</p>
                  </div>
                </div>
              </div>
            </div>

            <MapEmbed />
          </div>

          {/* Contact form */}
          <div>
            <h2 className="font-display text-3xl font-bold text-[#2D5016] mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
