import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-pink-500"
      >
        Terms of Service
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 text-gray-300"
      >
        <p>
          By accessing and using this website, you agree to be bound by these Terms of Service.
        </p>
        <h2 className="text-xl font-semibold text-pink-400 mt-4">Use of Content</h2>
        <p>
          All content on this website is for educational and awareness purposes only. You may not reproduce or distribute the content without proper attribution.
        </p>
        <h2 className="text-xl font-semibold text-pink-400 mt-4">User Conduct</h2>
        <p>
          Users must engage respectfully and constructively. Any form of hate speech, discrimination, or harassment is strictly prohibited.
        </p>
        <h2 className="text-xl font-semibold text-pink-400 mt-4">Disclaimer</h2>
        <p>
          The information provided on this website is for general informational purposes only. We make no warranties about the accuracy or completeness of this information.
        </p>
      </motion.div>
    </div>
  );
};

export default Terms; 