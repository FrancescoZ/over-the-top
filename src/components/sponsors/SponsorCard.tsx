import { Box, Image, Text, Heading, Link, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface SponsorCardProps {
  sponsor: {
    name: string;
    logo: string;
    website: string;
    description: string;
  };
  category: string;
}

const SponsorCard = ({ sponsor, category }: SponsorCardProps) => {
  const { t } = useTranslation();

  return (
    <Link href={sponsor.website} isExternal _hover={{ textDecoration: 'none' }}>
      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        _hover={{
          transform: 'translateY(-5px)',
          boxShadow: 'lg',
        }}
        transition="all 0.3s"
        minW={{ base: '260px', md: 'auto' }}
      >
        <Box width="100%" height={{ base: '200px', md: '250px' }} position="relative" mb={4}>
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            objectFit="cover"
            width="100%"
            height="100%"
            borderRadius="md"
          />
        </Box>
        <VStack spacing={2} align="start">
          <Heading size="md">{sponsor.name}</Heading>
          <Text fontSize="sm" color="blue.500" textTransform="uppercase" fontWeight="bold">
            {category} {t('common.sponsor')}
          </Text>
          <Text color="gray.600">{sponsor.description}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default SponsorCard;
