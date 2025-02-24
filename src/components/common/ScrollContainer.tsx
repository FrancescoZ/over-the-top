import { Container, ContainerProps } from '@chakra-ui/react';

interface ScrollContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const ScrollContainer = ({ children, ...props }: ScrollContainerProps) => {
  return (
    <Container maxW="container.xl" position="relative" overflow="hidden" mx="auto" {...props}>
      {children}
    </Container>
  );
};

export default ScrollContainer;
