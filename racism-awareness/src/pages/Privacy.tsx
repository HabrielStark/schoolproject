import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-pink-500"
      >
        Privacy Policy
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 text-gray-300"
      >
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
        <h2 className="text-xl font-semibold text-pink-400 mt-4">Information We Collect</h2>
        <p>
          We collect information that you voluntarily provide to us when using our website or participating in our surveys.
        </p>
        <h2 className="text-xl font-semibold text-pink-400 mt-4">How We Use Your Information</h2>
        <p>
          The information we collect is used to improve our understanding of racism and discrimination in society and to develop better strategies to combat these issues.
        </p>
        <h2 className="text-xl font-semibold text-pink-400 mt-4">Data Protection</h2>
        <p>
          We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
        </p>
      </motion.div>
    </div>
  );
};

export default Privacy; 