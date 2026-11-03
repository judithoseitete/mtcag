import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="min-w-[70%] bg-brand-gray rounded-lg p-8 md:p-12 h-[400px] md:h-[500px] flex flex-col justify-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {event.title}
      </h3>
      <p className="text-lg md:text-xl text-white/90 mb-4">
        {event.description}
      </p>
      <p className="text-brand-red font-semibold">{event.datetime}</p>
    </div>
  );
}
