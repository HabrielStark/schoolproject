import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://drive.google.com/file/d/1FOyzg6wITxHO-ZZQgz15MBU9MQHNuZmw/preview";

  return (
    <div className="relative min-h-screen">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-20 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pb-4"
            >
              Everyday Racism
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-10 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 px-4 sm:px-0"
            >
              Join us in our mission to educate, understand, and combat racism through awareness and action.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 sm:mt-8 md:mt-10 px-4 sm:px-0"
            >
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl w-full sm:w-auto justify-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105" />
                <span className="relative flex items-center space-x-2 transition-transform duration-500 ease-out transform group-hover:translate-x-1">
                  <span>Watch Video</span>
                  <svg className="w-6 h-6 transition-transform duration-500 ease-out transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            {/* Animated background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/4 left-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full mix-blend-normal filter blur-[120px] animate-pulse-slow" />
              <div className="absolute -bottom-1/4 right-1/4 w-[800px] h-[800px] bg-pink-500/20 rounded-full mix-blend-normal filter blur-[120px] animate-pulse-slow animation-delay-2000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/20 rounded-full mix-blend-normal filter blur-[100px] animate-float" />
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
              onClick={e => e.stopPropagation()}
            >
              {/* Animated border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl animate-border-flow z-10" />
              
              {/* Glass effect container */}
              <div className="absolute inset-[1px] bg-gray-900/90 backdrop-blur-sm rounded-2xl z-20 overflow-hidden">
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-500/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/20 to-transparent" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-pink-500/20 to-transparent" />

                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Campaign Video"
                />
              </div>

              {/* Close button with enhanced styling */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rest of the content */}
      <div className="relative z-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            >
              Everyday Racism
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Welcome to our platform dedicated to raising awareness about racism and promoting equality.
              Through education, data, and resources, we aim to foster understanding and drive positive change.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16 px-4 sm:px-6 lg:px-8">
            <motion.div
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl transform transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 p-4">
                <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v2a1 1 0 11-2 0v-2zm0-6a1 1 0 112 0v2a1 1 0 11-2 0V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Our Mission</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To educate and inform about the impacts of racism in our society,
                backed by data and research, while providing resources for positive action.
              </p>
              <Link to="/analytics" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  View Analytics
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl transform transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 p-4">
                <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Take Action</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore our resources and analytics to understand the current state
                of racism and learn how you can contribute to positive change.
              </p>
              <Link to="/resources" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  View Resources
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 