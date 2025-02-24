import { Box, Heading, SimpleGrid, VStack, Text, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import data from '../../data.json';
import SponsorCard from '../components/sponsors/SponsorCard';
import ScrollIndicator from '../components/common/ScrollIndicator';
import ScrollContainer from '../components/common/ScrollContainer';

const Sponsors = () => {
  const { t } = useTranslation();
  const { sponsors } = data;

  // Merge all sponsors and add category
  const allSponsors = [
    ...(sponsors.gold?.map((sponsor) => ({ ...sponsor, category: 'gold' })) || []),
    ...(sponsors.silver?.map((sponsor) => ({ ...sponsor, category: 'silver' })) || []),
    ...(sponsors.bronze?.map((sponsor) => ({ ...sponsor, category: 'bronze' })) || []),
  ];

  return (
    <Box py={12}>
      <ScrollContainer>
        <VStack spacing={8} mb={12} px={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            {t('sections.ourSponsors')}
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center" maxW="2xl">
            {t('sponsors.subtitle')}
          </Text>
        </VStack>

        <Box width="100%" position="relative" overflow="hidden">
          <ScrollIndicator />

          <Box
            overflowX={{ base: 'auto', md: 'visible' }}
            overflowY="hidden"
            pb={{ base: 4, md: 0 }}
            px={8}
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <Flex
              display={{ base: 'flex', md: 'grid' }}
              as={SimpleGrid}
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={8}
              w={{ base: 'max-content', md: '100%' }}
              gap={8}
            >
              {allSponsors.map((sponsor) => (
                <SponsorCard
                  key={`${sponsor.category}-${sponsor.id}`}
                  sponsor={sponsor}
                  category={sponsor.category}
                />
              ))}
            </Flex>
          </Box>
        </Box>
      </ScrollContainer>
    </Box>
  );
};

export default Sponsors;
