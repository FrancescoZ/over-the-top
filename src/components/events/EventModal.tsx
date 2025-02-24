import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Divider,
  Box,
  Icon,
} from "@chakra-ui/react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaDollarSign,
  FaInfoCircle,
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    startDateTime: string;
    location: string;
    description: string;
    category: string;
    capacity: number;
    currentParticipants: number;
    price: number;
    instructor: string;
    requirements?: string[];
  };
}

const EventModal = ({ isOpen, onClose, event }: EventModalProps) => {
  const { t } = useTranslation();

  const categoryColors = {
    competition: "blue",
    training: "green",
    workshop: "purple",
  };

  const startDate = new Date(event.startDateTime);
  const endDate = new Date(event.endDateTime);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered
    >
      <ModalOverlay 
        bg="blackAlpha.600" 
        backdropFilter="blur(8px)"
      />
      <ModalContent mx={4}>
        <ModalHeader>{event.title}</ModalHeader>
        <ModalCloseButton aria-label={t('common.close')} />
        <ModalBody pb={6}>
          <VStack align="stretch" spacing={6}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                {formatDate(startDate)}
              </Text>
              <HStack spacing={2} color="gray.600">
                <Icon as={FaClock} />
                <Text>
                  {formatTime(startDate)} - {formatTime(endDate)}
                </Text>
              </HStack>
            </Box>

            <VStack align="stretch" spacing={4}>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="gray.500" boxSize={5} />
                <Text fontSize="lg">{event.location}</Text>
              </HStack>

              <HStack>
                <Icon as={FaUser} color="gray.500" boxSize={5} />
                <Text fontSize="lg">{event.instructor}</Text>
              </HStack>

              <HStack>
                <Icon as={FaDollarSign} color="gray.500" boxSize={5} />
                <Text fontSize="lg">${event.price}</Text>
              </HStack>
            </VStack>

            <Divider />

            <Box>
              <Text fontWeight="semibold" fontSize="lg" mb={3}>
                Description
              </Text>
              <Text color="gray.600" fontSize="md" lineHeight="tall">
                {event.description}
              </Text>
            </Box>

            {event.requirements && (
              <Box>
                <Text fontWeight="semibold" fontSize="lg" mb={3}>
                  Requirements
                </Text>
                <VStack align="stretch" spacing={2}>
                  {event.requirements.map((req, index) => (
                    <Text key={index} color="gray.600" fontSize="md">
                      • {req}
                    </Text>
                  ))}
                </VStack>
              </Box>
            )}

            <Box bg="gray.50" p={5} borderRadius="md">
              <Text fontWeight="semibold" fontSize="lg" mb={2}>
                Capacity
              </Text>
              <Text color="gray.600" fontSize="md">
                {event.currentParticipants} / {event.capacity} participants
              </Text>
            </Box>

            <Button
              leftIcon={<FaInfoCircle />}
              colorScheme="blue"
              size="lg"
              variant="outline"
              onClick={onClose}
              mt={2}
            >
              Close Info
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
