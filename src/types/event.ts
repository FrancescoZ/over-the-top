export type EventCategory = 'competition' | 'training' | 'workshop';

export interface Event {
  id: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
  description: string;
  image: string;
  category: string;
  capacity: number;
  currentParticipants: number;
  price: number;
  instructor: string;
  requirements?: string[];
}

export const getEventsByMonth = (events: Event[], month: string) => {
  return events.filter((event) => event.startDateTime.startsWith(month));
};

export const getEventsByCategory = (events: Event[], category: EventCategory | 'all') => {
  return category === 'all' ? events : events.filter((event) => event.category === category);
};

export const isEventFull = (event: Event) => {
  return (
    event.capacity !== undefined &&
    event.currentParticipants !== undefined &&
    event.currentParticipants >= event.capacity
  );
};

export const getAvailableSpots = (event: Event) => {
  if (event.capacity === undefined || event.currentParticipants === undefined) {
    return 'Unlimited';
  }
  return Math.max(0, event.capacity - event.currentParticipants);
};

export const formatEventDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getCategoryColor = (category: EventCategory) => {
  const colors = {
    competition: 'red',
    training: 'green',
    workshop: 'purple',
  };
  return colors[category];
};
