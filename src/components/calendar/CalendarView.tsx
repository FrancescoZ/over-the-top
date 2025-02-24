import { Box, Grid, Text, HStack, Button, VStack, useColorModeValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns';
import { it } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import EventModal from '../events/EventModal';
import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
  description: string;
  category: string;
  capacity: number;
  currentParticipants: number;
  price: number;
  instructor: string;
  requirements?: string[];
}

interface CalendarViewProps {
  events: Event[];
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

const CalendarView = ({ events, currentDate, onDateChange }: CalendarViewProps) => {
  const { i18n } = useTranslation();
  const dateLocale = i18n.language === 'it' ? it : undefined;
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });

  const cellBg = useColorModeValue('white', 'gray.700');
  const todayBg = useColorModeValue('blue.50', 'blue.900');
  const eventBg = useColorModeValue('blue.500', 'blue.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const handlePrevMonth = () => {
    onDateChange(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    onDateChange(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleToday = () => {
    onDateChange(new Date());
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <Box>
      <HStack justify="space-between" mb={4}>
        <HStack>
          <Button onClick={handlePrevMonth} size="sm">
            <ChevronLeftIcon />
          </Button>
          <Text fontSize="xl" fontWeight="bold">
            {format(currentDate, 'MMMM yyyy', { locale: dateLocale })}
          </Text>
          <Button onClick={handleNextMonth} size="sm">
            <ChevronRightIcon />
          </Button>
        </HStack>
        <Button onClick={handleToday} size="sm" colorScheme="blue">
          Today
        </Button>
      </HStack>

      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <Box key={day} p={2} textAlign="center" fontWeight="bold">
            {day}
          </Box>
        ))}

        {days.map((day) => {
          const dayEvents = events.filter((event) => isSameDay(new Date(event.startDateTime), day));

          return (
            <Box
              key={day.toISOString()}
              p={2}
              bg={isToday(day) ? todayBg : cellBg}
              borderRadius="md"
              border="1px"
              borderColor={borderColor}
              opacity={isSameMonth(day, currentDate) ? 1 : 0.5}
            >
              <Text textAlign="center" mb={2}>
                {format(day, 'd')}
              </Text>
              <VStack spacing={1} align="stretch">
                {dayEvents.map((event) => (
                  <Box
                    key={event.id}
                    bg={eventBg}
                    color="white"
                    p={1}
                    borderRadius="sm"
                    fontSize="xs"
                    noOfLines={1}
                    cursor="pointer"
                    onClick={() => handleEventClick(event)}
                    _hover={{ opacity: 0.8 }}
                  >
                    {event.title}
                  </Box>
                ))}
              </VStack>
            </Box>
          );
        })}
      </Grid>

      {selectedEvent && (
        <EventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          event={selectedEvent}
        />
      )}
    </Box>
  );
};

export default CalendarView;
