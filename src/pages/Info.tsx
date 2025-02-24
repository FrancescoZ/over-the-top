import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaDog,
  FaGraduationCap,
  FaRunning,
  FaMusic,
  FaBone,
  FaStar,
  FaHeart,
  FaTrophy,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { settings } from "../../data.json";
import { lazy } from "react";

// Lazy load the Map component
const Map = lazy(() => import("../components/Map"));

const Info = () => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const { locationData } = settings;

  const courses = [
    { icon: FaDog, key: "agility" },
    { icon: FaGraduationCap, key: "obedience" },
    { icon: FaRunning, key: "rally" },
    { icon: FaMusic, key: "freestyle" },
    { icon: FaBone, key: "puppy" },
    { icon: FaStar, key: "tricks" },
    { icon: FaHeart, key: "therapy" },
    { icon: FaTrophy, key: "competition" }
  ];

  return (
    <Box>
      {/* Courses Section */}
      <Box bg={bgColor} py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} mb={16}>
            <Heading as="h1" size="2xl" textAlign="center">
              {t("info.courses.title")}
            </Heading>
            <Text fontSize="xl" color="gray.600" textAlign="center" maxW="2xl">
              {t("info.courses.subtitle")}
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {courses.map(({ icon, key }) => (
              <Box
                key={key}
                p={8}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s"
              >
                <Icon as={icon} w={10} h={10} color="blue.500" mb={4} />
                <Heading as="h3" size="md" mb={4}>
                  {t(`info.courses.${key}.title`)}
                </Heading>
                <Text color="gray.600">
                  {t(`info.courses.${key}.description`)}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Info;
