import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Flex,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { Event } from "../../types/event";

const EventsPreview = () => {
  // This would typically come from an API or database
  const upcomingEvents: Event[] = [
    {
      id: "1",
      title: "Beginner Agility Workshop",
      date: "2024-04-15",
      location: "Main Training Center",
      category: "workshop",
    },
    {
      id: "2",
      title: "Advanced Handling Techniques",
      date: "2024-04-22",
      location: "Outdoor Training Field",
      category: "training",
    },
    {
      id: "3",
      title: "Spring Competition",
      date: "2024-04-29",
      location: "Indoor Training Hall",
      category: "competition",
    },
  ];

  return (
    <Box bg="brand.gray" py={16}>
      <Container maxW="7xl">
        <Flex
          justify="space-between"
          align="center"
          mb={12}
          borderBottom="4px solid"
          borderColor="brand.yellow"
          pb={4}
        >
          <Heading color="brand.white">Upcoming Events</Heading>
          <Link
            as={RouterLink}
            to="/calendar"
            color="brand.yellow"
            fontWeight="semibold"
            _hover={{ color: "brand.red" }}
            transition="color 0.2s"
          >
            View All Events →
          </Link>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {upcomingEvents.map((event) => (
            <Box
              key={event.id}
              bg="brand.white"
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{ transform: "translateY(-4px)" }}
              transition="transform 0.2s"
            >
              <VStack align="stretch" spacing={3}>
                <Heading as="h3" size="md" color="brand.black">
                  {event.title}
                </Heading>
                <Badge
                  alignSelf="flex-start"
                  colorScheme={
                    event.category === "competition"
                      ? "red"
                      : event.category === "training"
                      ? "yellow"
                      : "gray"
                  }
                >
                  {event.category}
                </Badge>
                <Text color="brand.gray">
                  {new Date(event.date).toLocaleDateString()}
                </Text>
                <Text color="brand.gray">{event.location}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default EventsPreview;
