import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Box,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import data from '../../data.json';
import Map from '../components/Map';

const Contact = () => {
  const { t } = useTranslation();
  const { settings } = data;

  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={12}>
          <Heading as="h1" size="2xl" textAlign="center">
            {t('contact.title')}
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center" maxW="2xl">
            {t('contact.subtitle')}
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} alignItems="start">
          {/* Contact Information */}
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={6}>
                {t('contact.info.title')}
              </Heading>
              <VStack spacing={6} align="start">
                <HStack spacing={4}>
                  <Icon as={FaMapMarkerAlt} boxSize={6} color="blue.500" />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{t('contact.info.address')}</Text>
                    <Text>{settings.locationData.address}</Text>
                  </VStack>
                </HStack>

                <HStack spacing={4}>
                  <Icon as={FaPhoneAlt} boxSize={6} color="blue.500" />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{t('contact.info.phone')}</Text>
                    <Link href={`tel:${settings.contactPhone}`}>{settings.contactPhone}</Link>
                  </VStack>
                </HStack>

                <HStack spacing={4}>
                  <Icon as={FaEnvelope} boxSize={6} color="blue.500" />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{t('contact.info.email')}</Text>
                    <Link href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</Link>
                  </VStack>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading as="h3" size="md" mb={6}>
                {t('contact.info.social')}
              </Heading>
              <HStack spacing={6}>
                <Link
                  href={settings.socialMedia.instagram}
                  isExternal
                  _hover={{ color: 'blue.500' }}
                >
                  <Icon as={FaInstagram} boxSize={8} />
                </Link>
                <Link
                  href={settings.socialMedia.facebook}
                  isExternal
                  _hover={{ color: 'blue.500' }}
                >
                  <Icon as={FaFacebook} boxSize={8} />
                </Link>
              </HStack>
            </Box>
          </VStack>

          {/* Map */}
          <Box h="500px" borderRadius="lg" overflow="hidden" boxShadow="lg">
            <Map location={settings.locationData} />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
