import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  Button,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const stories = [
  {
    id: 1,
    title: "A Tale of Second Chances",
    description: "Meet Max, our star agility competitor who started his journey in a local shelter. From uncertain beginnings to championship victories, Max's story inspires us all.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  },
  // Add more stories as needed
];

const SuccessStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = stories.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <Container maxW="7xl" py={20}>
      <Flex gap={12} align="center">
        <Box flex="1">
          <Heading
            as="h2"
            size="xl"
            mb={6}
            color="gray.800"
          >
            {stories[currentSlide].title}
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            mb={8}
            lineHeight="tall"
          >
            {stories[currentSlide].description}
          </Text>
          
          <HStack spacing={4} align="center">
            <Text color="gray.500">
              {currentSlide + 1} / {totalSlides}
            </Text>
            <HStack>
              <IconButton
                aria-label="Previous slide"
                icon={<ChevronLeftIcon />}
                onClick={prevSlide}
                variant="ghost"
                color="gray.400"
                _hover={{ color: 'primary.500' }}
              />
              <IconButton
                aria-label="Next slide"
                icon={<ChevronRightIcon />}
                onClick={nextSlide}
                variant="ghost"
                color="gray.400"
                _hover={{ color: 'primary.500' }}
              />
            </HStack>
          </HStack>
        </Box>

        <Box
          flex="1"
          h="500px"
          position="relative"
          borderRadius="2xl"
          overflow="hidden"
        >
          <Box
            as="img"
            src={stories[currentSlide].image}
            alt="Success story"
            w="full"
            h="full"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default SuccessStory; 