import data from "../../data.json";

export const getEvents = () => data.events;

export const getCategories = () => data.categories;

export const getEventById = (eventId: string) => {
  return data.events.find((event) => event.id === eventId);
};

export const getEventsByMonth = (year: number, month: number) => {
  return data.events.filter((event) => {
    const eventDate = new Date(event.startDateTime);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
};

export const getUpcomingEvents = () => {
  const now = new Date();
  return data.events
    .filter((event) => new Date(event.startDateTime) >= now)
    .sort(
      (a, b) =>
        new Date(a.startDateTime).getTime() -
        new Date(b.startDateTime).getTime()
    );
};
