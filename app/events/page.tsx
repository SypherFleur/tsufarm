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
      <section className="py-20 px-4 bg-[#2D5016] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Events Calendar</h1>
          <p className="text-xl text-green-100 max-w-xl mx-auto">
            Come visit! Our Farmer&apos;s Stand runs every <strong>Saturday 9AM–12PM</strong> at
            3216 Blodgett, Houston, TX.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="py-4 px-4 bg-white border-b border-[#e8e0d4]">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-[#2D5016] inline-block" />
            <span className="text-[#3E2723]">Farmer&apos;s Stand</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-[#D4A843] inline-block" />
            <span className="text-[#3E2723]">Special Event</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-[#C4713B] inline-block" />
            <span className="text-[#3E2723]">Organization Visit</span>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-12 px-4 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto">
          <EventCalendar events={events} />
        </div>
      </section>
    </div>
  );
}
