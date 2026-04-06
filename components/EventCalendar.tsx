"use client";

import { useState } from "react";
import EventCard from "./EventCard";

interface Event {
  _id: string;
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  type: "stand" | "special" | "org-visit";
  description?: string;
  location?: string;
}

interface Props {
  events: Event[];
}

const typeColors: Record<string, string> = {
  stand: "bg-[#2D5016]",
  special: "bg-[#D4A843]",
  "org-visit": "bg-[#C4713B]",
};

export default function EventCalendar({ events }: Props) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const eventsThisMonth = events.filter((e) => {
    const d = new Date(e.date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  const eventsByDay: Record<number, Event[]> = {};
  eventsThisMonth.forEach((e) => {
    const day = new Date(e.date).getDate();
    if (!eventsByDay[day]) eventsByDay[day] = [];
    eventsByDay[day].push(e);
  });

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear((y) => y - 1); }
    else setCurrentMonth((m) => m - 1);
  }

  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear((y) => y + 1); }
    else setCurrentMonth((m) => m + 1);
  }

  return (
    <div>
      {/* Calendar grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#e8e0d4] overflow-hidden mb-10">
        {/* Month navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e0d4]">
          <button onClick={prevMonth} className="p-2 hover:bg-[#FAF6F0] rounded-lg transition-colors">
            <svg className="w-5 h-5 text-[#3E2723]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="font-display text-xl font-bold text-[#2D5016]">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button onClick={nextMonth} className="p-2 hover:bg-[#FAF6F0] rounded-lg transition-colors">
            <svg className="w-5 h-5 text-[#3E2723]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-[#e8e0d4]">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
            <div key={d} className="py-2 text-center text-xs font-semibold text-[#3E2723]/50 uppercase tracking-wide">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar cells */}
        <div className="grid grid-cols-7">
          {/* Empty cells before first day */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[80px] border-r border-b border-[#f0e8dc] last:border-r-0" />
          ))}

          {/* Day cells */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayEvents = eventsByDay[day] || [];
            const isToday =
              day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear();
            // Green Saturday dot: only Dec 2025 – Apr 2026
            const isSaturday = new Date(currentYear, currentMonth, day).getDay() === 6;
            const inSaturdayRange =
              (currentYear === 2025 && currentMonth === 11) ||
              (currentYear === 2026 && currentMonth <= 3);
            const showSaturdayDot = isSaturday && inSaturdayRange;

            // Hardcoded Apr 11 2026 events (Organization Visit + Farmer's Stand)
            const isApr11_2026 = currentYear === 2026 && currentMonth === 3 && day === 11;

            return (
              <div
                key={day}
                className={`min-h-[80px] p-1.5 border-r border-b border-[#f0e8dc] last:border-r-0 ${
                  isToday ? "bg-[#FAF6F0]" : ""
                }`}
              >
                <span
                  className={`text-sm font-medium inline-flex w-7 h-7 items-center justify-center rounded-full ${
                    isToday
                      ? "bg-[#2D5016] text-white"
                      : "text-[#3E2723]"
                  }`}
                >
                  {day}
                </span>
                <div className="mt-1 space-y-0.5">
                  {isApr11_2026 && (
                    <>
                      <span className="block w-full text-left text-xs px-1.5 py-0.5 rounded truncate text-white font-medium bg-[#C4713B]">
                        Organization Visit
                      </span>
                      <span className="block w-full text-left text-xs px-1.5 py-0.5 rounded truncate text-white font-medium bg-[#2D5016]">
                        Farmer&apos;s Stand
                      </span>
                    </>
                  )}
                  {dayEvents.slice(0, isApr11_2026 ? 0 : 2).map((event) => (
                    <button
                      key={event._id}
                      onClick={() => setSelectedEvent(event)}
                      className={`w-full text-left text-xs px-1.5 py-0.5 rounded truncate text-white font-medium ${
                        typeColors[event.type] || "bg-gray-400"
                      }`}
                      title={event.title}
                    >
                      {event.title}
                    </button>
                  ))}
                  {!isApr11_2026 && dayEvents.length > 2 && (
                    <p className="text-xs text-[#3E2723]/50 px-1">+{dayEvents.length - 2} more</p>
                  )}
                </div>
                {showSaturdayDot && (
                  <div className="flex gap-1 mt-1 px-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#2D5016] inline-block" title="Farmer's Stand" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event detail modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-2xl font-bold text-[#2D5016] pr-4">
                {selectedEvent.title}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1.5 hover:bg-[#FAF6F0] rounded-lg text-[#3E2723]/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-2 text-sm text-[#3E2723]">
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                  weekday: "long", year: "numeric", month: "long", day: "numeric",
                })}
              </p>
              {selectedEvent.time && (
                <p><span className="font-semibold">Time:</span> {selectedEvent.time}</p>
              )}
              {selectedEvent.location && (
                <p><span className="font-semibold">Location:</span> {selectedEvent.location}</p>
              )}
              {selectedEvent.description && (
                <p className="mt-3 leading-relaxed">{selectedEvent.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* List view */}
      <div>
        <h2 className="font-display text-3xl font-bold text-[#2D5016] mb-6">Upcoming Events</h2>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#e8e0d4]">
            <p className="text-3xl mb-3">🌱</p>
            <p className="font-display text-xl text-[#2D5016] font-semibold mb-2">
              No events yet
            </p>
            <p className="text-[#3E2723]">
              Events will appear here once added to the CMS. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
