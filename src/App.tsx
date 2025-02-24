import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import './App.css';
import './i18n'; // Import i18n configuration

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box
        maxW="1440px"
        mx="auto"
        my={4}
        mt="90px"
        bg="white"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="xl"
      >
        <AppRoutes />
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
