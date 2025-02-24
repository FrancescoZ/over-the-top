import { useState } from "react";
import {
  Container,
  Heading,
  Box,
  HStack,
  Button,
  Grid,
  Text,
  VStack,
  Flex,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle,
} from "react-icons/fa";
import { getEvents, getCategories } from "../utils/dataUtils";
import { useTranslation } from "react-i18next";
import data from "../../data.json";
import { it } from "date-fns/locale";
import CalendarView from "../components/calendar/CalendarView";
import ListView from "../components/calendar/ListView";

const RaceCalendar = () => {
  const { t, i18n } = useTranslation();
  const { events } = data;
  const dateLocale = i18n.language === "it" ? it : undefined;

  const [viewType, setViewType] = useState<"month" | "list">("month");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const categories = getCategories();
  const allEvents = getEvents();

  // Get the first day of the month and number of days
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const startingDayIndex = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Helper functions
  const isToday = (dayNumber: number) => {
    const today = new Date();
    return (
      dayNumber === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const getEventsForDay = (dayNumber: number) => {
    return allEvents.filter((event) => {
      const eventDate = new Date(event.startDateTime);
      return (
        eventDate.getDate() === dayNumber &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  // Filter events based on category and search
  const filteredEvents = allEvents
    .filter((event) => {
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;
      const matchesSearch = event.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort(
      (a, b) =>
        new Date(a.startDateTime).getTime() -
        new Date(b.startDateTime).getTime()
    );

  // Navigation handlers
  const goToToday = () => setCurrentDate(new Date());
  const goToPreviousMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  const goToNextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );

  const formatEventTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatEventDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      competition: "blue",
      training: "green",
      workshop: "purple",
    };
    return colors[category as keyof typeof colors] || "gray";
  };

  const renderMonthView = () => (
    <Box bg="white" borderRadius="xl" boxShadow="sm" p={6}>
      <Flex justify="space-between" align="center" mb={6}>
        <HStack>
          <IconButton
            aria-label="Previous month"
            icon={<FaChevronLeft />}
            onClick={goToPreviousMonth}
            variant="ghost"
          />
          <IconButton
            aria-label="Next month"
            icon={<FaChevronRight />}
            onClick={goToNextMonth}
            variant="ghost"
          />
          <Button
            size="sm"
            ml={4}
            colorScheme="blue"
            variant="outline"
            onClick={goToToday}
          >
            Today
          </Button>
        </HStack>
        <Heading size="md">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </Heading>
      </Flex>

      <Grid templateColumns="repeat(7, 1fr)" gap={4} mb={4}>
        {daysOfWeek.map((day) => (
          <Text
            key={day}
            textAlign="center"
            color="gray.600"
            fontWeight="medium"
          >
            {day}
          </Text>
        ))}
      </Grid>

      <Grid templateColumns="repeat(7, 1fr)" gap={4}>
        {Array.from({ length: 42 }, (_, index) => {
          const dayNumber = index - startingDayIndex + 1;
          const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
          const todayHighlight = isToday(dayNumber);
          const dayDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            dayNumber
          );
          const isPast = isPastDate(dayDate);
          const dayEvents = isCurrentMonth ? getEventsForDay(dayNumber) : [];

          return (
            <Box
              key={index}
              h="120px"
              border="1px"
              borderColor={
                todayHighlight
                  ? "blue.500"
                  : isCurrentMonth
                  ? "gray.200"
                  : "gray.100"
              }
              borderRadius="md"
              p={2}
              bg={
                todayHighlight
                  ? "blue.50"
                  : isCurrentMonth
                  ? "white"
                  : "gray.50"
              }
              opacity={isCurrentMonth ? (isPast ? 0.7 : 1) : 0.5}
              position="relative"
              overflow="hidden"
            >
              {isCurrentMonth && (
                <>
                  <Text
                    color={todayHighlight ? "blue.500" : "gray.600"}
                    fontWeight={todayHighlight ? "bold" : "normal"}
                  >
                    {dayNumber}
                  </Text>
                  {todayHighlight && (
                    <Box
                      position="absolute"
                      top={2}
                      right={2}
                      w={2}
                      h={2}
                      borderRadius="full"
                      bg="blue.500"
                    />
                  )}
                  <VStack spacing={1} align="stretch" mt={1}>
                    {dayEvents.map((event) => (
                      <Box
                        key={event.id}
                        bg={`${getCategoryColor(event.category)}.50`}
                        p={2}
                        borderRadius="md"
                        cursor="pointer"
                        onClick={() => {
                          setSelectedEvent(event);
                          setIsModalOpen(true);
                        }}
                        _hover={
                          !isPast && {
                            bg: `${getCategoryColor(event.category)}.100`,
                          }
                        }
                      >
                        <Text
                          fontSize="xs"
                          color={`${getCategoryColor(event.category)}.600`}
                          noOfLines={1}
                        >
                          {formatEventTime(event.startDateTime)} - {event.title}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                </>
              )}
            </Box>
          );
        })}
      </Grid>
    </Box>
  );

  const renderListView = () => (
    <Box bg="white" borderRadius="xl" boxShadow="sm" p={6}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date & Time</Th>
            <Th>Event</Th>
            <Th>Category</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredEvents.map((event) => {
            const isPast = isPastDate(new Date(event.startDateTime));
            return (
              <Tr key={event.id} opacity={isPast ? 0.7 : 1}>
                <Td>
                  <VStack align="start" spacing={1}>
                    <Text>{formatEventDate(event.startDateTime)}</Text>
                    <Text color="gray.600" fontSize="sm">
                      {formatEventTime(event.startDateTime)} -{" "}
                      {formatEventTime(event.endDateTime)}
                    </Text>
                  </VStack>
                </Td>
                <Td>{event.title}</Td>
                <Td>
                  <Badge colorScheme={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                </Td>
                <Td>
                  <Button
                    leftIcon={<FaInfoCircle />}
                    colorScheme="blue"
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedEvent(event);
                      setIsModalOpen(true);
                    }}
                  >
                    Info
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );

  const tableBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={12}>
          <Heading as="h1" size="2xl" textAlign="center">
            {t("calendar.title")}
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center" maxW="2xl">
            {t("calendar.subtitle")}
          </Text>
        </VStack>

        <Tabs isLazy>
          <TabList mb={4}>
            <Tab>{t("calendar.views.calendar")}</Tab>
            <Tab>{t("calendar.views.list")}</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <CalendarView
                events={events.filter(
                  (event) => event.category === "competition"
                )}
                currentDate={currentDate}
                onDateChange={setCurrentDate}
              />
            </TabPanel>
            <TabPanel>
              <ListView
                events={events.filter(
                  (event) => event.category === "competition"
                )}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default RaceCalendar;
