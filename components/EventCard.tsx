interface Event {
  _id: string;
  title: string;
  date: string;
  time?: string;
  type: "stand" | "special" | "org-visit";
  description?: string;
  location?: string;
}

const typeStyles: Record<string, string> = {
  stand: "bg-[#1F3A0F] text-white",
  special: "bg-[#0A0A0A] text-white",
  "org-visit": "bg-[#B85C2C] text-white",
};

const typeLabels: Record<string, string> = {
  stand: "Farmer's Stand",
  special: "Special Event",
  "org-visit": "Org Visit",
};

export default function EventCard({ event }: { event: Event }) {
  const date = new Date(event.date);
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = date.getDate();

  return (
    <article className="group bg-white border border-[#E7E5E4] hover:border-[#0A0A0A] transition-colors duration-200 flex gap-5 p-6">
      {/* Date block */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center bg-[#FAFAF9] border border-[#E7E5E4] w-16 h-16 rounded-sm">
        <span className="text-[10px] font-semibold tracking-[0.12em] text-[#78716C]">{month}</span>
        <span className="font-display text-2xl font-medium text-[#0A0A0A] tabular leading-none mt-0.5">{day}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-display text-[17px] font-medium text-[#0A0A0A] leading-snug tracking-[-0.02em]">
            {event.title}
          </h3>
          <span
            className={`flex-shrink-0 text-[10px] font-semibold tracking-[0.08em] uppercase px-2 py-1 rounded-sm ${typeStyles[event.type] || "bg-[#292524] text-white"}`}
          >
            {typeLabels[event.type] || event.type}
          </span>
        </div>
        {event.time && (
          <p className="text-[13px] text-[#57534E] font-medium mb-0.5 tabular">{event.time}</p>
        )}
        {event.location && (
          <p className="text-[13px] text-[#78716C]">{event.location}</p>
        )}
        {event.description && (
          <p className="text-[13px] text-[#57534E] mt-2 line-clamp-2 leading-relaxed">{event.description}</p>
        )}
      </div>
    </article>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="bg-white border border-[#E7E5E4] p-6 flex gap-5 animate-pulse">
      <div className="w-16 h-16 bg-[#F5F5F4] rounded-sm flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-5 bg-[#F5F5F4] rounded-sm w-3/4" />
        <div className="h-4 bg-[#F5F5F4] rounded-sm w-1/4" />
        <div className="h-4 bg-[#F5F5F4] rounded-sm w-1/2" />
      </div>
    </div>
  );
}
