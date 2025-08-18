import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Emergency', href: '/emergency' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        className="top-bar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <div className="contact-item">
                <FiPhone className="icon" />
                <span>+44 7475 365247</span>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="icon whatsapp" />
                <span>WhatsApp Available</span>
              </div>
              <div className="contact-item">
                <FiMapPin className="icon" />
                <span>Morford Rd, Aldridge, Walsall WS9 8TH</span>
              </div>
            </div>
            <div className="emergency-badge">
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="logo-icon">
                <span className="logo-text">VRS</span>
              </div>
              <div className="logo-details">
                <h2>VRS Recovery</h2>
                <p>Professional Vehicle Recovery</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul>
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Link 
                      to={item.href}
                      className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <motion.div 
              className="header-cta"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a 
                href="tel:+447475365247" 
                className="cta-button"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(193, 39, 41, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone className="icon" />
                Call Now
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mobile-nav-content">
            <ul>
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={false}
                  animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    to={item.href}
                    className={location.pathname === item.href ? 'active' : ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="mobile-cta"
              initial={false}
              animate={isMobileMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <a href="tel:+447475365247" className="mobile-cta-button">
                <FiPhone className="icon" />
                Emergency Call
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;