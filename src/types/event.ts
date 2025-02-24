import { placeholderImages } from '../utils/imageUtils';

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

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Spring Agility Championship',
    startDateTime: '2024-04-15T09:00',
    endDateTime: '2024-04-15T17:00',
    location: 'Main Arena',
    description:
      'Annual spring agility competition for all levels. Join us for a day of excitement and friendly competition.',
    image: placeholderImages.events,
    category: 'competition',
    capacity: 50,
    currentParticipants: 35,
    price: 75,
    instructor: 'John Doe',
    requirements: ['Dog must be at least 1 year old', 'Basic agility training completed'],
  },
  {
    id: '2',
    title: 'Beginner Training Workshop',
    startDateTime: '2024-04-22T10:30',
    endDateTime: '2024-04-22T12:30',
    location: 'Training Hall A',
    description:
      'Perfect for new dog owners. Learn the basics of dog training and behavior management.',
    image: placeholderImages.events,
    category: 'workshop',
    capacity: 20,
    currentParticipants: 12,
    price: 45,
    instructor: 'Sarah Johnson',
    requirements: ['Dogs must be vaccinated', 'Bring treats and a clicker'],
  },
  {
    id: '3',
    title: 'Advanced Handling Techniques',
    startDateTime: '2024-04-29T14:00',
    endDateTime: '2024-04-29T16:00',
    location: 'Outdoor Training Field',
    description:
      'Advanced training session focusing on precise handling and communication with your dog.',
    image: placeholderImages.events,
    category: 'training',
    capacity: 15,
    currentParticipants: 8,
    price: 60,
    instructor: 'Mike Peterson',
    requirements: ['Previous training experience required', 'Dogs must know basic commands'],
  },
  {
    id: '4',
    title: 'Puppy Socialization Class',
    startDateTime: '2024-05-05T11:00',
    endDateTime: '2024-05-05T13:00',
    location: 'Indoor Training Hall',
    description:
      'Early socialization is crucial for puppies. Join our structured play and learning session.',
    image: placeholderImages.events,
    category: 'training',
    capacity: 12,
    currentParticipants: 6,
    price: 35,
    instructor: 'Emma White',
    requirements: ['Puppies 8-16 weeks old', 'First round of vaccinations completed'],
  },
  {
    id: '5',
    title: 'Summer Agility Competition',
    startDateTime: '2024-06-10T08:30',
    endDateTime: '2024-06-10T17:00',
    location: 'Main Arena',
    description:
      'Summer championship event featuring multiple agility courses and difficulty levels.',
    image: placeholderImages.events,
    category: 'competition',
    capacity: 60,
    currentParticipants: 45,
    price: 85,
    instructor: 'Jane Smith',
    requirements: ['Competition experience required', 'Health certificate needed'],
  },
];

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
