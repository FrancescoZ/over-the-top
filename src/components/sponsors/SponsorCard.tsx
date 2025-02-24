import { Box, VStack, Text, Image, Link, Heading, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface SponsorCardProps {
  sponsor: {
    id: string;
    name: string;
    description: string;
    logo: string;
    website: string;
  };
  category: string;
}

const SponsorCard = ({ sponsor, category }: SponsorCardProps) => {
  const { t } = useTranslation();
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const categoryColors = {
    gold: '#FFD700',
    silver: '#C0C0C0',
    bronze: '#CD7F32',
  };

  return (
    <Box
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      border="1px"
      borderColor={borderColor}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
      }}
      transition="all 0.3s"
      position="relative"
    >
      <Box
        position="absolute"
        top={4}
        right={4}
        display="flex"
        alignItems="center"
        gap={1}
        bg={`${categoryColors[category as keyof typeof categoryColors]}20`}
        color={categoryColors[category as keyof typeof categoryColors]}
        borderRadius="full"
        px={3}
        py={1}
      >
        <Icon as={FaStar} />
      </Box>

      <Box position="relative" h="200px">
        <Image src={sponsor.logo} alt={sponsor.name} objectFit="contain" w="100%" h="100%" p={6} />
      </Box>

      <VStack p={6} spacing={3} align="stretch">
        <Heading as="h3" size="md">
          {sponsor.name}
        </Heading>
        <Text color="gray.600" noOfLines={3}>
          {sponsor.description}
        </Text>
        <Link
          href={sponsor.website}
          isExternal
          color="blue.500"
          fontWeight="medium"
          _hover={{ textDecoration: 'none', color: 'blue.600' }}
        >
          {t('common.visitWebsite')}
        </Link>
      </VStack>
    </Box>
  );
};

export default SponsorCard;
