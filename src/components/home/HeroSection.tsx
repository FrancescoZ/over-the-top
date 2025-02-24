import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <Box position="relative" h={{ base: '100vh', md: '80vh' }} w="100%" overflow="hidden">
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47')"        bgPosition="center"
        bgSize="cover"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'blackAlpha.600', // Darker overlay for better text readability
        }}
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        h="100%"
        position="relative"
        zIndex={1}
        px={{ base: 6, md: 8 }}
      >
        <VStack h="100%" justify="center" align="flex-start" spacing={{ base: 6, md: 8 }}>
          <Heading
            color="white"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            maxW={{ base: '100%', md: '80%' }}
            textShadow="0 2px 4px rgba(0,0,0,0.3)"
          >
            {t('hero.title')}
          </Heading>

          <Text
            color="white"
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW={{ base: '100%', md: '70%' }}
            textShadow="0 1px 2px rgba(0,0,0,0.3)"
            lineHeight="tall"
          >
            {t('hero.subtitle')}
          </Text>

          <Button
            as={RouterLink}
            to="/info"
            size={{ base: 'lg', md: 'xl' }}
            colorScheme="blue"
            px={{ base: 8, md: 10 }}
            fontSize={{ base: 'md', md: 'lg' }}
          >
                {t('hero.learnMore')}

          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
