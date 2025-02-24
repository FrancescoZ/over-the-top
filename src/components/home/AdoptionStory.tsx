import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
} from "@chakra-ui/react";
import { placeholderImages } from "../../utils/imageUtils";

const AdoptionStory = () => {
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
        Success Stories
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
        <VStack align="stretch" spacing={6}>
          <Heading as="h3" size="lg" color="brand.red">
            Max's Journey
          </Heading>
          <Text color="brand.gray" fontSize="lg">
            From a shy shelter dog to a confident agility champion, Max's story
            is one of determination and trust. His journey showcases the
            transformative power of proper training and unconditional love.
          </Text>
          <Text color="brand.gray" fontSize="lg">
            Today, Max competes in national agility competitions and helps other
            rescue dogs adapt to their new homes through our training programs.
          </Text>
        </VStack>

        <SimpleGrid columns={2} spacing={4}>
          <Image
            src={placeholderImages.adoption.before}
            alt="Max at the shelter"
            borderRadius="lg"
            objectFit="cover"
            height="200px"
            width="100%"
          />
          <Image
            src={placeholderImages.adoption.after}
            alt="Max winning competition"
            borderRadius="lg"
            objectFit="cover"
            height="200px"
            width="100%"
          />
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
};

export default AdoptionStory;
