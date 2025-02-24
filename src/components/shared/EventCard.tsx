import { Event } from "../../types/event";

interface EventCardProps {
  event: Event;
  compact?: boolean;
}

const EventCard = ({ event, compact = false }: EventCardProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg 
                   transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        {!compact && (
          <span
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full 
                         text-sm"
          >
            {event.category}
          </span>
        )}
      </div>

      <div className="space-y-2 text-gray-600">
        <p>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        {!compact && (
          <>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p className="mt-4">{event.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;
