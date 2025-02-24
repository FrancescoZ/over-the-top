import { Box, Heading, Text, Button, VStack, Image, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} textAlign="center">
        <Image
          src="/images/404-dog.png"
          alt={t('404.title')}
          maxW="300px"
          fallback={
            <Box
              w="300px"
              h="300px"
              bg="gray.100"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="6xl">🐕</Text>
            </Box>
          }
        />

        <Heading size="2xl">{t('404.title')}</Heading>

        <Text fontSize="xl" color="gray.600">
          {t('404.message')}
        </Text>

        <Button
          as={RouterLink}
          to="/"
          size="lg"
          colorScheme="blue"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          transition="all 0.2s"
        >
          {t('404.backHome')}
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound;
