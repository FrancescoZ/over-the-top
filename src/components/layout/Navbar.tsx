import {
  Box,
  Container,
  HStack,
  Link,
  Image,
  useColorModeValue,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaHandshake,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("white", "gray.800");

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: t("nav.home"), icon: FaHome },
    { path: "/info", label: t("nav.info"), icon: FaInfoCircle },
    { path: "/calendar", label: t("nav.raceCalendar"), icon: FaCalendarAlt },
    { path: "/sponsors", label: t("nav.sponsors"), icon: FaHandshake },
    { path: "/contact", label: t("nav.contact"), icon: FaEnvelope },
  ];

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bgColor}
      boxShadow="sm"
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Container maxW="container.xl">
        <HStack h="70px" justify="space-between">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            <HStack spacing={2}>
              <Image
                src="/images/logo.png"
                alt="DoggyRace"
                h="40px"
                fallback={
                  <Box fontSize="2xl" color="blue.500">
                    🐾
                  </Box>
                }
              />
              <Box fontSize="2xl" fontWeight="bold">
                DoggyRace
              </Box>
            </HStack>
          </Link>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                as={RouterLink}
                to={link.path}
                fontWeight="medium"
                color={isActive(link.path) ? "blue.500" : "gray.600"}
                _hover={{ color: "blue.500" }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label={t("common.menu")}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
          />
        </HStack>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" px={6} py={4}>
            <HStack justify="space-between" align="center">
              <HStack spacing={2}>
                <Image
                  src="/images/logo.png"
                  alt="DoggyRace"
                  h="40px"
                  fallback={
                    <Box fontSize="2xl" color="blue.500">
                      🐾
                    </Box>
                  }
                />
                <Text fontSize="xl" fontWeight="bold">
                  DoggyRace
                </Text>
              </HStack>
              <DrawerCloseButton position="static" />
            </HStack>
          </DrawerHeader>

          <DrawerBody px={6} py={8}>
            <VStack spacing={4} align="stretch">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  display="flex"
                  alignItems="center"
                  p={3}
                  borderRadius="lg"
                  onClick={onClose}
                  bg={isActive(link.path) ? "blue.50" : "transparent"}
                  color={isActive(link.path) ? "blue.500" : "gray.700"}
                  _hover={{
                    bg: "blue.50",
                    color: "blue.500",
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.2s"
                >
                  <Icon as={link.icon} boxSize={5} mr={3} />
                  <Text fontSize="lg">{link.label}</Text>
                </Link>
              ))}
              <Box p={4} bg="gray.50" borderRadius="lg">
                <Text fontSize="sm" color="gray.600">
                  {t("common.needHelp")}
                </Text>
                <Text fontSize="md" color="blue.500" fontWeight="medium" mt={1}>
                  info@doggyrace.com
                </Text>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
