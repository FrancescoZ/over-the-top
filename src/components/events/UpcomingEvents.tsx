import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Text,
  Image,
  Link,
  useDisclosure,
  Flex,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { getUpcomingEvents } from "../../utils/dataUtils";
import EventModal from "./EventModal";
import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EventCard = ({ event, onClick }: { event: any; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <Box
        bg="white"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        transition="all 0.2s"
        _hover={{
          transform: "translateY(-4px)",
          cursor: "pointer",
        }}
        onClick={onClick}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Box style={{ transform: "translateZ(50px)" }}>
          <Image
            src={event.image}
            alt={event.title}
            h="240px"
            w="full"
            objectFit="cover"
          />

          <VStack align="stretch" p={6} spacing={4}>
            <Text color="blue.500" fontWeight="medium">
              {formatDate(event.startDateTime)}
            </Text>

            <Text fontSize="lg" fontWeight="bold">
              {event.title}
            </Text>

            <Text color="gray.600" fontSize="lg">
              {event.description}
            </Text>

            <Link
              color="blue.500"
              fontWeight="medium"
              fontSize="lg"
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: "none" }}
            >
              Learn More
              <ChevronRightIcon ml={1} />
            </Link>
          </VStack>
        </Box>
      </Box>
    </motion.div>
  );
};

const UpcomingEvents = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const upcomingEvents = getUpcomingEvents();

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    onOpen();
  };

  return (
    <Box py={12} px={{ base: 8, md: 16 }}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" mb={8}>
          <Text fontSize="3xl" fontWeight="bold">
            {t("sections.upcomingEvents")}
          </Text>
          <Link
            as={RouterLink}
            to="/calendar?view=list"
            display="flex"
            alignItems="center"
            color="blue.500"
            fontWeight="medium"
            _hover={{ textDecoration: "none", color: "blue.600" }}
          >
            {t("common.viewAllEvents")}
            <Icon as={ChevronRightIcon} ml={1} boxSize={5} />
          </Link>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {upcomingEvents.slice(0, 3).map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => handleEventClick(event)}
            />
          ))}
        </SimpleGrid>

        {selectedEvent && (
          <EventModal
            isOpen={isOpen}
            onClose={() => {
              onClose();
              setSelectedEvent(null);
            }}
            event={selectedEvent}
          />
        )}
      </Container>
    </Box>
  );
};

export default UpcomingEvents;
