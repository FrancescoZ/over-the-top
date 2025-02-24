import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Event } from '../../types/event';
import EventModal from '../events/EventModal';
import { useState } from 'react';

interface ListViewProps {
  events: Event[];
}

const ListView = ({ events }: ListViewProps) => {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Mobile card view for each event
  const EventCard = ({ event }: { event: Event }) => (
    <Box
      p={4}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="sm"
      borderWidth="1px"
      onClick={() => handleEventClick(event)}
      cursor="pointer"
      _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
    >
      <VStack align="stretch" spacing={3}>
        <Text fontWeight="bold" fontSize="lg">
          {event.title}
        </Text>

        <HStack justify="space-between">
          <Text fontSize="sm" color="gray.500">
            {format(new Date(event.startDateTime), 'PPP')}
          </Text>
          <Badge colorScheme="blue">{format(new Date(event.startDateTime), 'p')}</Badge>
        </HStack>

        <HStack justify="space-between">
          <Text fontSize="sm">{event.location}</Text>
          <Text fontSize="sm" fontWeight="bold">
            ${event.price}
          </Text>
        </HStack>

        <HStack justify="space-between">
          <Text fontSize="sm">{event.instructor}</Text>
          <Text fontSize="sm">
            {event.currentParticipants}/{event.capacity}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );

  return (
    <Box width="100%" overflowX="hidden">
      {/* Desktop view */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>{t('calendar.event.date')}</Th>
              <Th>{t('calendar.event.time')}</Th>
              <Th>{t('calendar.event.title')}</Th>
              <Th>{t('calendar.event.location')}</Th>
              <Th>{t('calendar.event.instructor')}</Th>
              <Th isNumeric>{t('calendar.event.capacity')}</Th>
              <Th isNumeric>{t('calendar.event.price')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {events.map((event: Event) => (
              <Tr
                key={event.id}
                onClick={() => handleEventClick(event)}
                cursor="pointer"
                _hover={{ bg: 'gray.50', _dark: { bg: 'gray.700' } }}
              >
                <Td>{format(new Date(event.startDateTime), 'PP')}</Td>
                <Td>{format(new Date(event.startDateTime), 'p')}</Td>
                <Td>{event.title}</Td>
                <Td>{event.location}</Td>
                <Td>{event.instructor}</Td>
                <Td isNumeric>
                  {event.currentParticipants}/{event.capacity}
                </Td>
                <Td isNumeric>${event.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Mobile view */}
      <VStack display={{ base: 'flex', md: 'none' }} spacing={4} align="stretch" px={4} pb={4}>
        {events.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </VStack>

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

export default ListView;
