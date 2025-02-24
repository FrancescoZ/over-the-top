import { Box, Image, Text, Heading, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface TrainerProps {
  name: string;
  image: string;
  description: {
    en: string;
    it: string;
  };
}

const TrainerCard = ({ name, image, description }: TrainerProps) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as keyof typeof description;

  return (
    <Box
      p={{ base: 4, md: 6 }}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'lg',
      }}
      transition="all 0.3s"
      minW={{ base: '200px', md: 'auto' }}
      maxW={{ base: '200px', md: 'none' }}
    >
      <Box
        width={{ base: '100px', md: '150px' }}
        height={{ base: '100px', md: '150px' }}
        position="relative"
        mx="auto"
        mb={4}
      >
        <Image
          src={image}
          alt={name}
          borderRadius="full"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <VStack spacing={2} align="center">
        <Heading as="h3" size={{ base: 'sm', md: 'md' }}>
          {name}
        </Heading>
        <Text
          color="gray.600"
          fontSize={{ base: 'xs', md: 'md' }}
          noOfLines={{ base: 3, md: 999 }}
          textAlign="center"
        >
          {description[currentLanguage]}
        </Text>
      </VStack>
    </Box>
  );
};

export default TrainerCard;
