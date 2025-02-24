import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import {
  FaDog,
  FaGraduationCap,
  FaRunning,
  FaMusic,
  FaBone,
  FaStar,
  FaHeart,
  FaTrophy,
} from 'react-icons/fa';
import data from '../../data.json';
import { useTranslation } from 'react-i18next';
import ScrollIndicator from '../components/common/ScrollIndicator';
import ScrollContainer from '../components/common/ScrollContainer';
import TrainerCard from '../components/trainers/TrainerCard';

const Info = () => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');

  const courses = [
    { icon: FaDog, key: 'agility' },
    { icon: FaGraduationCap, key: 'obedience' },
    { icon: FaRunning, key: 'rally' },
    { icon: FaMusic, key: 'freestyle' },
    { icon: FaBone, key: 'puppy' },
    { icon: FaStar, key: 'tricks' },
    { icon: FaHeart, key: 'therapy' },
    { icon: FaTrophy, key: 'competition' },
  ];

  const { trainers } = data;

  return (
    <Box>
      {/* Courses Section */}
      <Box bg={bgColor} py={16}>
        <ScrollContainer>
          <VStack spacing={8} mb={16} px={8}>
            <Heading as="h1" size="2xl" textAlign="center">
              {t('info.courses.title')}
            </Heading>
            <Text fontSize="xl" color="gray.600" textAlign="center" maxW="2xl">
              {t('info.courses.subtitle')}
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
                columns={{ base: 1, md: 2, lg: 4 }}
                spacing={8}
                w={{ base: 'max-content', md: '100%' }}
                gap={8}
              >
                {courses.map(({ icon, key }) => (
                  <Box
                    key={key}
                    p={{ base: 4, md: 6 }}
                    bg={cardBg}
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
                    <Icon
                      as={icon}
                      w={{ base: 6, md: 8 }}
                      h={{ base: 6, md: 8 }}
                      color="blue.500"
                      mb={{ base: 2, md: 4 }}
                    />
                    <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={{ base: 2, md: 4 }}>
                      {t(`info.courses.${key}.title`)}
                    </Heading>
                    <Text
                      color="gray.600"
                      fontSize={{ base: 'xs', md: 'md' }}
                      noOfLines={{ base: 3, md: 999 }}
                    >
                      {t(`info.courses.${key}.description`)}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </ScrollContainer>
      </Box>

      <Box bg="white" py={16}>
        <ScrollContainer>
          <VStack spacing={8} mb={16} px={8}>
            <Heading as="h1" size="2xl" textAlign="center">
              {t('info.trainers.title')}
            </Heading>
            <Text fontSize="xl" color="gray.600" textAlign="center" maxW="2xl">
              {t('info.trainers.subtitle')}
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
                '&::-webkit-scrollbar': { display: 'none' },
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
                {trainers.map((trainer) => (
                  <TrainerCard
                    key={trainer.id}
                    name={trainer.name}
                    image={trainer.image}
                    description={trainer.description}
                  />
                ))}
              </Flex>
            </Box>
          </Box>
        </ScrollContainer>
      </Box>
    </Box>
  );
};

export default Info;
