import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  Link,
  Icon,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import data from '../../../data.json';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
  const { t } = useTranslation();
  const { settings } = data;

  return (
    <Box bg="gray.900" color="white" py={16} position="relative">
      {/* Language Switcher - Positioned Absolutely */}
      <Box position="absolute" top={4} right={4}>
        <LanguageSelector />
      </Box>

      <Container>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Company Info */}
          <Stack spacing={4}>
            <Heading size="md">DoggyRace</Heading>
            <Text color="gray.400">{t('footer.tagline')}</Text>
          </Stack>

          {/* Contact Info */}
          <Stack spacing={4}>
            <Heading size="md">{t('footer.contactUs')}</Heading>
            <Stack spacing={2}>
              <Link href="tel:(555)123-4567" display="flex" alignItems="center">
                <Icon as={FaPhone} mr={2} />
                (555) 123-4567
              </Link>
              <Link href="mailto:info@doggyrace.com" display="flex" alignItems="center">
                <Icon as={FaEnvelope} mr={2} />
                info@doggyrace.com
              </Link>
            </Stack>
          </Stack>

          {/* Social Links */}
          <Stack spacing={4}>
            <Heading size="md">{t('footer.followUs')}</Heading>
            <Stack direction="row" spacing={4}>
              <Link href={settings.socialMedia.instagram} isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link href={settings.socialMedia.facebook} isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Text textAlign="center" color="gray.500" mt={16}>
          {t('footer.allRightsReserved')}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
