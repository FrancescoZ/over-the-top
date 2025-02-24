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
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box
          flex="1"
          bg="white"
          borderRadius={{ base: 'none', md: '2xl' }}
          boxShadow={{ base: 'none', md: 'xl' }}
          mt={{ base: 0, md: 4 }}
        >
          <AppRoutes />
          <Footer />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
