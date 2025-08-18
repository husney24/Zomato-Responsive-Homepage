import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiClock, FiMapPin, FiTruck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Hero.scss';

const Hero = () => {
  const features = [
    { icon: FiClock, text: '24/7 Emergency Service' },
    { icon: FiTruck, text: 'Professional Recovery' },
    { icon: FiMapPin, text: 'West Midlands Coverage' },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Vehicle Recovery Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Fast, reliable, and professional vehicle recovery across the West Midlands. 
              Available 24/7 for all your emergency roadside assistance needs.
            </motion.p>

            <motion.div 
              className="hero-features"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="feature-icon" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a 
                href="tel:+447475365247"
                className="cta-button primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(193, 39, 41, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone className="icon" />
                Call Now: +44 7475 365247
              </motion.a>

              <motion.a 
                href="https://wa.me/447475365247"
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" />
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero-image-placeholder">
              <motion.div 
                className="recovery-truck-icon"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiTruck size={120} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="floating-element element-1"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-element element-2"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-element element-3"
        animate={{ 
          y: [0, -15, 0],
          x: [0, -8, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;