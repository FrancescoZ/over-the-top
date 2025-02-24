import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "/images/flags/gb.svg",
  },
  {
    code: "it",
    name: "Italiano",
    flag: "/images/flags/it.svg",
  },
];

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const getCurrentLanguage = () => {
    return (
      languages.find((lang) => lang.code === i18n.language) || languages[0]
    );
  };

  return (
    <Box bg="gray.900" color="white" py={16} position="relative">
      {/* Language Switcher - Positioned Absolutely */}
      <Box position="absolute" top={4} right={4}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            bg="whiteAlpha.200"
            _hover={{ bg: "whiteAlpha.300" }}
            _active={{ bg: "whiteAlpha.400" }}
          >
            <HStack>
              <Image
                src={getCurrentLanguage().flag}
                alt={getCurrentLanguage().name}
                boxSize="20px"
                objectFit="cover"
                borderRadius="full"
              />
              <Text>{getCurrentLanguage().name}</Text>
            </HStack>
          </MenuButton>
          <MenuList bg="gray.800" borderColor="gray.700">
            {languages.map((language) => (
              <MenuItem
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
              >
                <HStack>
                  <Image
                    src={language.flag}
                    alt={language.name}
                    boxSize="20px"
                    objectFit="cover"
                    borderRadius="full"
                  />
                  <Text>{language.name}</Text>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Company Info */}
          <Stack spacing={4}>
            <Heading size="md">DoggyRace</Heading>
            <Text color="gray.400">{t("footer.tagline")}</Text>
          </Stack>

          {/* Contact Info */}
          <Stack spacing={4}>
            <Heading size="md">{t("footer.contactUs")}</Heading>
            <Stack spacing={2}>
              <Link href="tel:(555)123-4567" display="flex" alignItems="center">
                <Icon as={FaPhone} mr={2} />
                (555) 123-4567
              </Link>
              <Link
                href="mailto:info@doggyrace.com"
                display="flex"
                alignItems="center"
              >
                <Icon as={FaEnvelope} mr={2} />
                info@doggyrace.com
              </Link>
            </Stack>
          </Stack>

          {/* Social Links */}
          <Stack spacing={4}>
            <Heading size="md">{t("footer.followUs")}</Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#" aria-label="Facebook">
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Text textAlign="center" color="gray.500" mt={16}>
          {t("footer.allRightsReserved")}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
