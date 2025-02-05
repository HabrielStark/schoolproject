import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ThemeProvider, theme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Analytics from './pages/Analytics.tsx';
import Resources from './pages/Resources.tsx';

const MotionDiv = motion.div;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Router>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col"
          >
            <Navbar />
            <main className="container mx-auto px-4 py-8 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/resources" element={<Resources />} />
              </Routes>
            </main>
            <Footer />
          </MotionDiv>
        </Router>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;
