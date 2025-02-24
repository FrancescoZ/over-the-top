import { Container, Heading, SimpleGrid, Image, Box } from '@chakra-ui/react';

const SponsorsDisplay = () => {
  // This would typically come from an API or database
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '/sponsor1.png' },
    { id: 2, name: 'Sponsor 2', logo: '/sponsor2.png' },
    { id: 3, name: 'Sponsor 3', logo: '/sponsor3.png' },
    { id: 4, name: 'Sponsor 4', logo: '/sponsor4.png' },
  ];

  return (
    <Container maxW="7xl" py={16}>
      <Heading
        textAlign="center"
        mb={12}
        color="brand.black"
        borderBottom="4px solid"
        borderColor="brand.yellow"
        pb={4}
        display="inline-block"
      >
        Our Trusted Partners
      </Heading>

      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
        {sponsors.map((sponsor) => (
          <Box
            key={sponsor.id}
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            _hover={{
              boxShadow: 'xl',
              transform: 'translateY(-4px)',
              borderColor: 'brand.red',
            }}
            transition="all 0.2s"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px solid"
            borderColor="transparent"
          >
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              maxH="64px"
              objectFit="contain"
              filter="grayscale(100%)"
              _hover={{ filter: 'grayscale(0%)' }}
              transition="filter 0.3s"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SponsorsDisplay;
