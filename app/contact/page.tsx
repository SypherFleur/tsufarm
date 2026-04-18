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
      <section className="py-24 px-5 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
                Contact
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.02] tracking-[-0.035em]">
              Let&apos;s grow something together.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
              Questions, partnerships, press, all welcome. We read every message and get
              back to you within a few days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact info + map */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#0A0A0A]" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                  Find us
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-10">
                On the ground.<br />In the inbox.
              </h2>

              <dl className="divide-y divide-[#E7E5E4] border-y border-[#E7E5E4]">
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#78716C] pt-1">Address</dt>
                  <dd className="col-span-2 text-[#0A0A0A]">
                    <p>3216 Blodgett, Houston, TX</p>
                    <a
                      href="https://maps.app.goo.gl/av9cUHyXnpRVQbCA9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors"
                    >
                      Open in Google Maps ↗
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#78716C] pt-1">Email</dt>
                  <dd className="col-span-2">
                    <a
                      href="mailto:Tsucommunityfarm@gmail.com"
                      className="text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors"
                    >
                      Tsucommunityfarm@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#78716C] pt-1">Instagram</dt>
                  <dd className="col-span-2">
                    <a
                      href="https://instagram.com/tsufarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A0A0A] underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#0A0A0A] transition-colors"
                    >
                      @tsufarm
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#78716C] pt-1">Hours</dt>
                  <dd className="col-span-2 text-[#0A0A0A] tabular">
                    Saturdays, 9:00 – 12:00
                    <p className="text-[13px] text-[#78716C] mt-1">Farmer&apos;s Stand</p>
                  </dd>
                </div>
              </dl>
            </div>

            <MapEmbed />
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[#E7E5E4]">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#0A0A0A]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
                Send a message
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-10">
              We&apos;ll write back.
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
