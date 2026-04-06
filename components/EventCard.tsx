import Link from "next/link";

interface Event {
  _id: string;
  title: string;
  date: string;
  time?: string;
  type: "stand" | "special" | "org-visit";
  description?: string;
  location?: string;
}

const typeColors: Record<string, string> = {
  stand: "bg-[#2D5016] text-white",
  special: "bg-[#D4A843] text-[#3E2723]",
  "org-visit": "bg-[#C4713B] text-white",
};

const typeLabels: Record<string, string> = {
  stand: "Farmer's Stand",
  special: "Special Event",
  "org-visit": "Org Visit",
};

export default function EventCard({ event }: { event: Event }) {
  const date = new Date(event.date);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e0d4] hover:shadow-md transition-shadow flex gap-5">
      {/* Date block */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center bg-[#FAF6F0] rounded-xl w-16 h-16">
        <span className="text-xs font-semibold text-[#C4713B] uppercase tracking-wide">{month}</span>
        <span className="font-display text-2xl font-bold text-[#2D5016]">{day}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-lg font-semibold text-[#2D5016] leading-snug">
            {event.title}
          </h3>
          <span
            className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${typeColors[event.type] || "bg-gray-200"}`}
          >
            {typeLabels[event.type] || event.type}
          </span>
        </div>
        {event.time && (
          <p className="text-sm text-[#C4713B] font-medium mb-1">{event.time}</p>
        )}
        {event.location && (
          <p className="text-sm text-[#3E2723]/70">{event.location}</p>
        )}
        {event.description && (
          <p className="text-sm text-[#3E2723] mt-2 line-clamp-2">{event.description}</p>
        )}
      </div>
    </div>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e0d4] flex gap-5 animate-pulse">
      <div className="w-16 h-16 bg-[#e8e0d4] rounded-xl flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-5 bg-[#e8e0d4] rounded w-3/4" />
        <div className="h-4 bg-[#e8e0d4] rounded w-1/4" />
        <div className="h-4 bg-[#e8e0d4] rounded w-1/2" />
      </div>
    </div>
  );
}
