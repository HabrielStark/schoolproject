import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ThemeProvider, theme } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

// Pages
import Home from './pages/Home.tsx';
import Analytics from './pages/Analytics.tsx';
import Resources from './pages/Resources.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
            <Navbar />
            <main className="container mx-auto px-4 py-8 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;
