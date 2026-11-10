"use client";

interface Event {
  time: string;
  event: string;
}

interface ScheduleItemProps {
  day: string;
  events: Event[];
}

export default function ScheduleItem({ day, events }: ScheduleItemProps) {
  return (
    <div className="border-b-2 border-brand-neutral/20 flex group hover:bg-brand-neutral/10">
      <div className="flex-shrink-0 w-32 md:w-48 px-6 py-6 flex items-start justify-start border-r-2 border-brand-neutral/20">
        <h3 className="text-xl md:text-2xl font-bold text-white">{day}</h3>
      </div>
      <div className="flex-1 px-6 md:px-8 py-6">
        {events.length > 0 ? (
          <div className="space-y-3">
            {events.map((eventItem, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-3 border-b border-brand-neutral/5 last:border-b-0 last:pb-0"
              >
                <span className="text-lg font-semibold text-white min-w-[140px]">
                  {eventItem.time}
                </span>
                <span className="text-lg text-white/80">{eventItem.event}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-white/60 italic">No scheduled events</p>
        )}
      </div>
    </div>
  );
}
