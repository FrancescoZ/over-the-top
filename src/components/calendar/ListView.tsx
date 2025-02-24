import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import EventModal from "../events/EventModal";
import { useState } from "react";

interface Event {
  id: string;
  title: string;
  startDateTime: string;
  location: string;
  instructor: string;
  capacity: number;
  currentParticipants: number;
  price: number;
}

interface ListViewProps {
  events: Event[];
}

const ListView = ({ events }: ListViewProps) => {
  const { t, i18n } = useTranslation();
  const dateLocale = i18n.language === "it" ? it : undefined;

  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>{t("calendar.event.date")}</Th>
            <Th>{t("calendar.event.time")}</Th>
            <Th>{t("calendar.event.location")}</Th>
            <Th>{t("calendar.event.instructor")}</Th>
            <Th>{t("calendar.event.capacity")}</Th>
            <Th>{t("calendar.event.price")}</Th>
            <Th>{t("calendar.event.status")}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {events.map((event) => {
            const startDate = new Date(event.startDateTime);
            const spotsLeft = event.capacity - event.currentParticipants;
            const isSoldOut = spotsLeft === 0;

            return (
              <Tr
                key={event.id}
                onClick={() => handleEventClick(event)}
                cursor="pointer"
                _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
              >
                <Td>{format(startDate, "PPP", { locale: dateLocale })}</Td>
                <Td>{format(startDate, "p", { locale: dateLocale })}</Td>
                <Td>{event.location}</Td>
                <Td>{event.instructor}</Td>
                <Td>
                  {event.currentParticipants} / {event.capacity}
                </Td>
                <Td>${event.price}</Td>
                <Td>
                  <Badge
                    colorScheme={
                      isSoldOut ? "red" : spotsLeft <= 5 ? "yellow" : "green"
                    }
                    borderRadius="full"
                    px={3}
                    py={1}
                  >
                    {isSoldOut
                      ? t("calendar.event.spots.full")
                      : spotsLeft <= 5
                      ? t("calendar.event.spots.left", { count: spotsLeft })
                      : t("calendar.event.spots.available", {
                          count: spotsLeft,
                        })}
                  </Badge>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

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
