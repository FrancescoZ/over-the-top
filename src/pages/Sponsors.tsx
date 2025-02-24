import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import data from "../../data.json";
import SponsorCard from "../components/sponsors/SponsorCard";

const Sponsors = () => {
  const { t } = useTranslation();
  const { sponsors } = data;

  // Merge all sponsors and add category
  const allSponsors = [
    ...(sponsors.gold?.map((sponsor) => ({ ...sponsor, category: "gold" })) ||
      []),
    ...(sponsors.silver?.map((sponsor) => ({
      ...sponsor,
      category: "silver",
    })) || []),
    ...(sponsors.bronze?.map((sponsor) => ({
      ...sponsor,
      category: "bronze",
    })) || []),
  ];

  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={12}>
          <Heading as="h1" size="2xl" textAlign="center">
            {t("sections.ourSponsors")}
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center" maxW="2xl">
            {t("sponsors.subtitle")}
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {allSponsors.map((sponsor) => (
            <SponsorCard
              key={`${sponsor.category}-${sponsor.id}`}
              sponsor={sponsor}
              category={sponsor.category}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Sponsors;
