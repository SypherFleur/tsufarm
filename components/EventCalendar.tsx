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

const typePill: Record<string, string> = {
  stand: "bg-[#1F3A0F]",
  special: "bg-[#0A0A0A]",
  "org-visit": "bg-[#B85C2C]",
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
      <div className="bg-white border border-[#E7E5E4] overflow-hidden mb-14 rounded-md">
        {/* Month navigation */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E7E5E4]">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-[#FAFAF9] rounded-md transition-colors border border-transparent hover:border-[#E7E5E4]"
            aria-label="Previous month"
          >
            <svg className="w-4 h-4 text-[#0A0A0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#78716C]">Schedule</p>
            <h2 className="font-display text-xl font-medium text-[#0A0A0A] tracking-[-0.02em] mt-0.5">
              {monthNames[currentMonth]} <span className="tabular">{currentYear}</span>
            </h2>
          </div>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-[#FAFAF9] rounded-md transition-colors border border-transparent hover:border-[#E7E5E4]"
            aria-label="Next month"
          >
            <svg className="w-4 h-4 text-[#0A0A0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-[#E7E5E4] bg-[#FAFAF9]">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
            <div key={d} className="py-2.5 text-center text-[10px] font-semibold text-[#78716C] uppercase tracking-[0.12em]">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar cells */}
        <div className="grid grid-cols-7">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[90px] border-r border-b border-[#F5F5F4] last:border-r-0" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayEvents = eventsByDay[day] || [];
            const isToday =
              day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear();
            const isSaturday = new Date(currentYear, currentMonth, day).getDay() === 6;
            const inSaturdayRange =
              (currentYear === 2025 && currentMonth === 11) ||
              (currentYear === 2026 && currentMonth <= 3);
            const showSaturdayDot = isSaturday && inSaturdayRange;

            const isApr11_2026 = currentYear === 2026 && currentMonth === 3 && day === 11;

            return (
              <div
                key={day}
                className={`min-h-[90px] p-2 border-r border-b border-[#F5F5F4] last:border-r-0 ${
                  isToday ? "bg-[#FAFAF9]" : ""
                }`}
              >
                <span
                  className={`text-[13px] font-medium inline-flex w-6 h-6 items-center justify-center rounded-full tabular ${
                    isToday
                      ? "bg-[#0A0A0A] text-white"
                      : "text-[#0A0A0A]"
                  }`}
                >
                  {day}
                </span>
                <div className="mt-1 space-y-1">
                  {isApr11_2026 && (
                    <>
                      <span className="block w-full text-left text-[10px] px-1.5 py-0.5 rounded-sm truncate text-white font-medium tracking-[0.02em] bg-[#B85C2C]">
                        Org Visit
                      </span>
                      <span className="block w-full text-left text-[10px] px-1.5 py-0.5 rounded-sm truncate text-white font-medium tracking-[0.02em] bg-[#1F3A0F]">
                        Farmer&apos;s Stand
                      </span>
                    </>
                  )}
                  {dayEvents.slice(0, isApr11_2026 ? 0 : 2).map((event) => (
                    <button
                      key={event._id}
                      onClick={() => setSelectedEvent(event)}
                      className={`w-full text-left text-[10px] px-1.5 py-0.5 rounded-sm truncate text-white font-medium tracking-[0.02em] ${
                        typePill[event.type] || "bg-[#78716C]"
                      }`}
                      title={event.title}
                    >
                      {event.title}
                    </button>
                  ))}
                  {!isApr11_2026 && dayEvents.length > 2 && (
                    <p className="text-[10px] text-[#78716C] px-1 font-mono">+{dayEvents.length - 2}</p>
                  )}
                </div>
                {showSaturdayDot && (
                  <div className="flex gap-1 mt-1 px-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F3A0F] inline-block" title="Farmer's Stand" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/60 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white border border-[#E7E5E4] rounded-md max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="pr-4">
                <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#78716C] mb-2">
                  Event Details
                </p>
                <h3 className="font-display text-2xl font-medium text-[#0A0A0A] tracking-[-0.02em]">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1.5 hover:bg-[#FAFAF9] rounded-md text-[#57534E]"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <dl className="space-y-3 text-sm border-t border-[#E7E5E4] pt-5">
              <div className="flex gap-6">
                <dt className="w-20 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#78716C] pt-0.5">Date</dt>
                <dd className="flex-1 text-[#0A0A0A] tabular">
                  {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                    weekday: "long", year: "numeric", month: "long", day: "numeric",
                  })}
                </dd>
              </div>
              {selectedEvent.time && (
                <div className="flex gap-6">
                  <dt className="w-20 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#78716C] pt-0.5">Time</dt>
                  <dd className="flex-1 text-[#0A0A0A] tabular">{selectedEvent.time}</dd>
                </div>
              )}
              {selectedEvent.location && (
                <div className="flex gap-6">
                  <dt className="w-20 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#78716C] pt-0.5">Where</dt>
                  <dd className="flex-1 text-[#0A0A0A]">{selectedEvent.location}</dd>
                </div>
              )}
              {selectedEvent.description && (
                <div className="pt-3 border-t border-[#E7E5E4]">
                  <p className="text-[#57534E] leading-relaxed">{selectedEvent.description}</p>
                </div>
              )}
            </dl>
          </div>
        </div>
      )}

      {/* List view */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#0A0A0A]" />
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#57534E]">
            Upcoming
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#0A0A0A] tracking-[-0.03em] mb-8">
          All scheduled events
        </h2>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#E7E5E4] p-10 text-center rounded-md">
            <span className="block font-mono text-[11px] tracking-widest text-[#78716C] mb-3">
              / EMPTY
            </span>
            <p className="font-display text-xl text-[#0A0A0A] font-medium mb-2 tracking-[-0.02em]">
              No events scheduled yet
            </p>
            <p className="text-[#57534E] text-sm leading-relaxed">
              Events will appear here once added. Check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
