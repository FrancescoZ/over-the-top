import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <Box
      h="600px"
      position="relative"
      bgImage="url('https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47')"
      bgPosition="center"
      bgSize="cover"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <Container maxW="7xl" h="full" position="relative" display="flex" alignItems="center">
        <VStack maxW="2xl" align="flex-start" spacing={6} color="white">
          <Heading as="h1" size="2xl" lineHeight="1.2" fontWeight="bold">
            {t('hero.title')}
          </Heading>
          <Text fontSize="xl" lineHeight="1.6">
            {t('hero.description')}
          </Text>
          <Button
            as={RouterLink}
            to="/info"
            size="lg"
            bg="blue.500"
            color="white"
            px={8}
            _hover={{
              bg: 'blue.600',
            }}
          >
            {t('hero.learnMore')}
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
