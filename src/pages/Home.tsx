import { Box } from '@chakra-ui/react';
import HeroSection from '../components/home/HeroSection';
import SuccessStory from '../components/home/SuccessStory';
import UpcomingEvents from '../components/events/UpcomingEvents';

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <SuccessStory />
      <UpcomingEvents />
    </Box>
  );
};

export default Home;
