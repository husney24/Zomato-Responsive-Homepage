import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiPhone, 
  FiClock, 
  FiMapPin, 
  FiTruck,
  FiAlertTriangle,
  FiCheckCircle,
  FiNavigation,
  FiInfo
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Emergency.scss';

const Emergency = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const emergencySteps = [
    {
      icon: FiAlertTriangle,
      title: 'Stay Safe',
      description: 'Move to a safe location away from traffic. Turn on hazard lights if possible.'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      description: 'Contact our emergency hotline immediately for the fastest response.'
    },
    {
      icon: FiMapPin,
      title: 'Share Location',
      description: 'Provide your exact location, nearest landmarks, and vehicle details.'
    },
    {
      icon: FiTruck,
      title: 'Wait Safely',
      description: 'Stay in a safe area while our team heads to your location.'
    }
  ];

  const emergencyServices = [
    {
      title: 'Breakdown Recovery',
      description: 'Vehicle won\'t start or has broken down',
      responseTime: '15-30 minutes',
      icon: FiTruck
    },
    {
      title: 'Accident Recovery',
      description: 'Vehicle involved in an accident',
      responseTime: '20-40 minutes',
      icon: FiAlertTriangle
    },
    {
      title: 'Roadside Assistance',
      description: 'Flat tire, jump start, lockout service',
      responseTime: '15-25 minutes',
      icon: FiCheckCircle
    },
    {
      title: 'Emergency Transport',
      description: 'Urgent vehicle transportation needed',
      responseTime: '25-45 minutes',
      icon: FiNavigation
    }
  ];

  const safetyTips = [
    'Pull over safely and turn on hazard lights',
    'Exit vehicle on the side away from traffic',
    'Stay behind barriers or away from the roadway',
    'Keep your phone charged for emergency calls',
    'Have reflective triangles or flares if available',
    'Never attempt repairs on busy roads'
  ];

  return (
    <motion.div
      className="emergency-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Emergency Hero */}
      <section className="emergency-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="emergency-badge">
              <FiAlertTriangle className="badge-icon" />
              <span>24/7 EMERGENCY SERVICE</span>
            </div>
            
            <h1>Need Emergency Recovery?</h1>
            <p>We're here to help you 24/7 with fast, professional emergency vehicle recovery services across the West Midlands.</p>
            
            <div className="current-time">
              <FiClock className="time-icon" />
              <span>Current Time: {currentTime.toLocaleTimeString()}</span>
              <span className="availability">We're Available Now!</span>
            </div>

            <div className="emergency-actions">
              <motion.a 
                href="tel:+447475365247"
                className="emergency-call-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    '0 8px 30px rgba(193, 39, 41, 0.3)',
                    '0 12px 40px rgba(193, 39, 41, 0.5)',
                    '0 8px 30px rgba(193, 39, 41, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiPhone className="icon" />
                <div className="button-text">
                  <span className="main-text">CALL NOW</span>
                  <span className="sub-text">+44 7475 365247</span>
                </div>
              </motion.a>

              <motion.a 
                href="https://wa.me/447475365247?text=Emergency%20Recovery%20Needed"
                className="whatsapp-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" />
                <span>WhatsApp Emergency</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Steps */}
      <section className="emergency-steps">
        <div className="container">
          <motion.div 
            className="steps-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>What to Do in an Emergency</h2>
            <p>Follow these steps to ensure your safety and get help quickly</p>
          </motion.div>

          <div className="steps-grid">
            {emergencySteps.map((step, index) => (
              <motion.div 
                key={index}
                className="step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">
                  <step.icon size={32} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="emergency-services">
        <div className="container">
          <motion.div 
            className="services-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Emergency Services Available</h2>
            <p>Professional emergency recovery services with fast response times</p>
          </motion.div>

          <div className="services-grid">
            {emergencyServices.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">
                  <service.icon size={40} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="response-time">
                  <FiClock className="time-icon" />
                  <span>Response: {service.responseTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="safety-info">
        <div className="container">
          <div className="safety-content">
            <motion.div 
              className="safety-tips"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Emergency Safety Tips</h2>
              <p>Your safety is our top priority. Follow these important safety guidelines:</p>
              
              <div className="tips-list">
                {safetyTips.map((tip, index) => (
                  <motion.div 
                    key={index}
                    className="tip-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FiCheckCircle className="tip-icon" />
                    <span>{tip}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="emergency-info-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="info-header">
                <FiInfo className="info-icon" />
                <h3>What We Need From You</h3>
              </div>
              
              <div className="info-list">
                <div className="info-item">
                  <strong>Your Location</strong>
                  <span>Exact address, nearest landmarks, motorway junction</span>
                </div>
                <div className="info-item">
                  <strong>Vehicle Details</strong>
                  <span>Make, model, color, registration number</span>
                </div>
                <div className="info-item">
                  <strong>Problem Description</strong>
                  <span>What happened, any warning lights, sounds</span>
                </div>
                <div className="info-item">
                  <strong>Your Contact Number</strong>
                  <span>Best number to reach you on</span>
                </div>
                <div className="info-item">
                  <strong>Safety Status</strong>
                  <span>Are you in a safe location? Any injuries?</span>
                </div>
              </div>

              <div className="emergency-contact">
                <h4>Emergency Contact</h4>
                <a href="tel:+447475365247" className="contact-number">
                  <FiPhone className="phone-icon" />
                  +44 7475 365247
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="coverage-area">
        <div className="container">
          <motion.div 
            className="coverage-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Emergency Coverage Area</h2>
            <p>We provide 24/7 emergency recovery services across these areas</p>
          </motion.div>

          <div className="coverage-grid">
            {['Walsall', 'Birmingham', 'West Bromwich', 'Wolverhampton', 'Sutton Coldfield', 'Cannock', 'Lichfield', 'Burton upon Trent', 'M6 Corridor', 'M54 Corridor', 'A5 Route', 'A38 Route'].map((area, index) => (
              <motion.div 
                key={index}
                className="coverage-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <FiMapPin className="area-icon" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Don't Wait - Get Help Now</h2>
            <p>Every minute counts in an emergency. Our team is standing by 24/7 to assist you.</p>
            
            <div className="final-actions">
              <motion.a 
                href="tel:+447475365247"
                className="final-call-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone className="icon" />
                Call Emergency Line Now
              </motion.a>
              
              <div className="response-guarantee">
                <FiClock className="guarantee-icon" />
                <span>Average response time: 30 minutes or less</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Emergency;