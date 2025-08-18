import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiTruck,
  FiShield,
  FiHeart
} from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const services = [
    'Emergency Roadside Assistance',
    'Vehicle Transportation',
    'Pick and Drop Service',
    'MOT Testing',
    'Car Service & Repairs',
    'Vehicle Body Work',
    'Scrap Car Disposal',
    'Fleet Services'
  ];

  const serviceAreas = [
    'Walsall',
    'Birmingham',
    'West Bromwich',
    'Wolverhampton',
    'Sutton Coldfield',
    'Cannock',
    'Lichfield',
    'Burton upon Trent'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Emergency Service', href: 'tel:+447475365247' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <motion.div 
            className="footer-section company-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <div className="logo-icon">
                <span className="logo-text">VRS</span>
              </div>
              <div className="logo-details">
                <h3>VRS Recovery</h3>
                <p>Professional Vehicle Recovery</p>
              </div>
            </div>
            
            <p className="company-description">
              Professional vehicle recovery and roadside assistance services across 
              the West Midlands. Available 24/7 for all your emergency needs.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <FiPhone className="icon" />
                <div>
                  <strong>Emergency Hotline</strong>
                  <a href="tel:+447475365247">+44 7475 365247</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FiMapPin className="icon" />
                <div>
                  <strong>Location</strong>
                  <span>Morford Rd, Aldridge, Walsall WS9 8TH</span>
                </div>
              </div>

              <div className="contact-item">
                <FiClock className="icon" />
                <div>
                  <strong>Service Hours</strong>
                  <span>24/7 Emergency • Office: Mon-Fri 8AM-6PM</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://wa.me/447475365247" 
                className="social-link whatsapp"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#services">
                    <FiTruck className="link-icon" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Service Areas</h4>
            <ul className="footer-links">
              {serviceAreas.map((area, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#contact">
                    <FiMapPin className="link-icon" />
                    {area}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="more-areas">
              <strong>And many more areas across the West Midlands!</strong>
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Emergency CTA */}
            <div className="emergency-footer-cta">
              <h5>Need Emergency Help?</h5>
              <motion.a 
                href="tel:+447475365247"
                className="emergency-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone className="icon" />
                Call Now
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="badge">
                <FiShield className="badge-icon" />
                <span>Fully Insured</span>
              </div>
              <div className="badge">
                <FiClock className="badge-icon" />
                <span>24/7 Service</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {new Date().getFullYear()} VRS Recovery. All rights reserved.
                Made with <FiHeart className="heart-icon" /> for our customers.
              </p>
            </div>
            
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Emergency Button */}
      <motion.div 
        className="floating-emergency"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.a 
          href="tel:+447475365247"
          className="floating-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: [
              '0 4px 20px rgba(193, 39, 41, 0.3)',
              '0 8px 30px rgba(193, 39, 41, 0.5)',
              '0 4px 20px rgba(193, 39, 41, 0.3)'
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FiPhone className="icon" />
          <span>Emergency</span>
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;