import { Box } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { keyframes } from '@emotion/react';

const bounceAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
`;

const ScrollIndicator = () => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      position="absolute"
      right={8}
      top="50%"
      transform="translateY(-50%)"
      zIndex={10}
      bg="whiteAlpha.900"
      p={3}
      borderRadius="full"
      boxShadow="xl"
      animation={`${bounceAnimation} 2s ease-in-out infinite`}
    >
      <ChevronRightIcon w={8} h={8} color="blue.500" />
    </Box>
  );
};

export default ScrollIndicator;
