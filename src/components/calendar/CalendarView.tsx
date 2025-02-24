import {
  Box,
  Grid,
  Text,
  HStack,
  Button,
  VStack,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
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
    <Box width="100%" overflowX="hidden">
      <HStack
        justify="space-between"
        mb={6}
        flexDir={{ base: 'column', sm: 'row' }}
        spacing={{ base: 4, sm: 2 }}
        w="full"
        px={4}
      >
        <HStack spacing={4} justify="center" w="full">
          <IconButton
            aria-label="Previous month"
            icon={<ChevronLeftIcon />}
            onClick={handlePrevMonth}
            size="md"
          />
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" textAlign="center">
            {format(currentDate, 'MMMM yyyy', { locale: dateLocale })}
          </Text>
          <IconButton
            aria-label="Next month"
            icon={<ChevronRightIcon />}
            onClick={handleNextMonth}
            size="md"
          />
        </HStack>
        <Button onClick={handleToday} size="md" colorScheme="blue" w={{ base: 'full', sm: 'auto' }}>
          Today
        </Button>
      </HStack>

      <Box
        width="100%"
        overflowX="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
        }}
      >
        <Grid templateColumns="repeat(7, minmax(40px, 1fr))" gap={1} width="100%" px={2}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <Box
              key={day}
              p={2}
              textAlign="center"
              fontWeight="bold"
              fontSize={{ base: 'xs', md: 'sm' }}
            >
              {day}
            </Box>
          ))}

          {days.map((day) => {
            const dayEvents = events.filter((event) =>
              isSameDay(new Date(event.startDateTime), day)
            );

            return (
              <Box
                key={day.toISOString()}
                p={1}
                bg={isToday(day) ? todayBg : cellBg}
                borderRadius="md"
                border="1px"
                borderColor={borderColor}
                opacity={isSameMonth(day, currentDate) ? 1 : 0.5}
                minH={{ base: '40px', md: '80px' }}
              >
                <Text textAlign="center" fontSize={{ base: 'xs', md: 'sm' }} mb={1}>
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
      </Box>

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
