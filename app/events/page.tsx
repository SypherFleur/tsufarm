import type { Metadata } from "next";
import { getAllUpcomingEvents } from "@/sanity/client";
import EventCalendar from "@/components/EventCalendar";

export const metadata: Metadata = {
  title: "Events",
  description:
    "View upcoming events at TSU Community Farm including our weekly Farmer's Stand every Saturday 9AM–12PM at 3216 Blodgett, Houston, TX.",
};

export default async function EventsPage() {
  let events: any[] = [];
  try {
    events = await getAllUpcomingEvents();
  } catch {
    // CMS not configured yet
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-5 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
                Events · 2025 / 2026
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-[1.02] tracking-[-0.035em]">
              The farm calendar.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
              Our Farmer&apos;s Stand runs every <span className="text-white font-medium">Saturday, 9 AM – 12 PM</span>{" "}
              at 3216 Blodgett. Special events and organization visits are listed below.
            </p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-6 px-5 sm:px-8 lg:px-12 bg-white border-b border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-x-8 gap-y-3 items-center">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
            Legend
          </span>
          <div className="flex items-center gap-2.5 text-[13px]">
            <span className="w-2 h-2 rounded-full bg-[#1F3A0F] inline-block" />
            <span className="text-[#292524]">Farmer&apos;s Stand</span>
          </div>
          <div className="flex items-center gap-2.5 text-[13px]">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A] inline-block" />
            <span className="text-[#292524]">Special Event</span>
          </div>
          <div className="flex items-center gap-2.5 text-[13px]">
            <span className="w-2 h-2 rounded-full bg-[#B85C2C] inline-block" />
            <span className="text-[#292524]">Organization Visit</span>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <EventCalendar events={events} />
        </div>
      </section>
    </div>
  );
}
