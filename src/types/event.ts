import { placeholderImages } from "../utils/imageUtils";

export type EventCategory = "competition" | "training" | "workshop";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: EventCategory;
  capacity?: number;
  currentParticipants?: number;
  price?: number;
  instructor?: string;
  requirements?: string[];
  imageUrl?: string;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Spring Agility Championship",
    date: "2024-04-15",
    time: "09:00",
    location: "Main Arena",
    description:
      "Annual spring agility competition for all levels. Join us for a day of excitement and friendly competition.",
    category: "competition",
    capacity: 50,
    currentParticipants: 35,
    price: 75,
    requirements: [
      "Dog must be at least 1 year old",
      "Basic agility training completed",
    ],
    imageUrl: placeholderImages.events,
  },
  {
    id: "2",
    title: "Beginner Training Workshop",
    date: "2024-04-22",
    time: "10:30",
    location: "Training Hall A",
    description:
      "Perfect for new dog owners. Learn the basics of dog training and behavior management.",
    category: "workshop",
    capacity: 20,
    currentParticipants: 12,
    price: 45,
    instructor: "Sarah Johnson",
    requirements: ["Dogs must be vaccinated", "Bring treats and a clicker"],
    imageUrl: placeholderImages.events,
  },
  {
    id: "3",
    title: "Advanced Handling Techniques",
    date: "2024-04-29",
    time: "14:00",
    location: "Outdoor Training Field",
    description:
      "Advanced training session focusing on precise handling and communication with your dog.",
    category: "training",
    capacity: 15,
    currentParticipants: 8,
    price: 60,
    instructor: "Mike Peterson",
    requirements: [
      "Previous training experience required",
      "Dogs must know basic commands",
    ],
    imageUrl: placeholderImages.events,
  },
  {
    id: "4",
    title: "Puppy Socialization Class",
    date: "2024-05-05",
    time: "11:00",
    location: "Indoor Training Hall",
    description:
      "Early socialization is crucial for puppies. Join our structured play and learning session.",
    category: "training",
    capacity: 12,
    currentParticipants: 6,
    price: 35,
    instructor: "Emma White",
    requirements: [
      "Puppies 8-16 weeks old",
      "First round of vaccinations completed",
    ],
    imageUrl: placeholderImages.events,
  },
  {
    id: "5",
    title: "Summer Agility Competition",
    date: "2024-06-10",
    time: "08:30",
    location: "Main Arena",
    description:
      "Summer championship event featuring multiple agility courses and difficulty levels.",
    category: "competition",
    capacity: 60,
    currentParticipants: 45,
    price: 85,
    requirements: [
      "Competition experience required",
      "Health certificate needed",
    ],
    imageUrl: placeholderImages.events,
  },
];

export const getEventsByMonth = (events: Event[], month: string) => {
  return events.filter((event) => event.date.startsWith(month));
};

export const getEventsByCategory = (
  events: Event[],
  category: EventCategory | "all"
) => {
  return category === "all"
    ? events
    : events.filter((event) => event.category === category);
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
    return "Unlimited";
  }
  return Math.max(0, event.capacity - event.currentParticipants);
};

export const formatEventDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getCategoryColor = (category: EventCategory) => {
  const colors = {
    competition: "red",
    training: "green",
    workshop: "purple",
  };
  return colors[category];
};
