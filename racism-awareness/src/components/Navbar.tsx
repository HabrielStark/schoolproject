import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/resources', label: 'Resources' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 h-20"
    >
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#1a1a2e]/95 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 animate-gradient-x mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent animate-pulse-slow" />
      </div>

      {/* Animated glow effects with enhanced size and position */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-[800px] h-[800px] bg-purple-500/5 rounded-full mix-blend-normal filter blur-[120px] animate-pulse-slow" />
        <div className="absolute -top-20 right-1/4 w-[800px] h-[800px] bg-pink-500/5 rounded-full mix-blend-normal filter blur-[120px] animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full mix-blend-normal filter blur-[100px] animate-float" />
      </div>

      {/* Enhanced border with animation */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 animate-gradient-x" />
      </div>

      {/* Content with improved layout */}
      <div className="max-w-7xl mx-auto px-4 relative h-full">
        <div className="flex items-center justify-between h-full relative">
          {/* Logo and Site Name Container */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex-shrink-0 relative group"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-pink-600/80 to-red-600/80 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: isLogoHovered ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isLogoHovered ? Infinity : 0,
                    repeatType: "reverse",
                  }}
                />
                <div className="relative bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-red-500/90 p-3 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    animate={{
                      backgroundPosition: isLogoHovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  <span className="relative text-2xl font-bold text-white tracking-wider">RA</span>
                </div>
              </motion.div>
            </Link>

            {/* Site Name */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:block relative"
            >
              <motion.span 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-400"
                animate={{
                  backgroundPosition: isLogoHovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Racism Awareness
              </motion.span>
              <motion.div
                className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-red-500/50 transform origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isLogoHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                isActive={location.pathname === path}
                onHover={() => setIsHovered(path)}
                onLeave={() => setIsHovered(null)}
                isHovered={isHovered === path}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-3 text-white hover:text-pink-500 transition-colors duration-300 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm rounded-b-xl border-t border-gray-800"
            >
              <div className="px-4 py-2 space-y-1">
                {navLinks.map(({ path, label }) => (
                  <motion.div
                    key={path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                        location.pathname === path
                          ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}> = ({ to, children, isActive, onHover, onLeave, isHovered }) => (
  <motion.div
    onHoverStart={onHover}
    onHoverEnd={onLeave}
    className="relative"
  >
    <Link
      to={to}
      className={`px-4 sm:px-8 py-2.5 text-base sm:text-lg font-medium transition-all duration-300 relative z-10
        ${isActive 
          ? 'text-white' 
          : 'text-gray-300 hover:text-white'}`}
    >
      {/* Text with gradient on hover */}
      <span className={`relative ${isHovered ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-400' : ''}`}>
        {children}
      </span>

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-red-500/50 transform origin-left rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive || isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 filter blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Link>

    {/* Background highlight */}
    <AnimatePresence>
      {(isActive || isHovered) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={`absolute inset-0 rounded-lg ${
            isActive
              ? 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-sm'
              : 'bg-white/5 backdrop-blur-sm'
          }`}
          style={{ zIndex: 0 }}
        >
          {/* Subtle animated border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 animate-border-flow" style={{ padding: '1px' }}>
            <div className="h-full w-full bg-gray-900/50 rounded-lg backdrop-blur-sm" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default Navbar; 