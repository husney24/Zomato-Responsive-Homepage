import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiClock, 
  FiUsers, 
  FiTruck, 
  FiShield, 
  FiStar,
  FiCheckCircle,
  FiPhone
} from 'react-icons/fi';
import './About.scss';

const About = () => {
  const features = [
    {
      icon: FiClock,
      title: '24/7 Availability',
      description: 'Round-the-clock emergency services whenever you need us most'
    },
    {
      icon: FiTruck,
      title: 'Modern Fleet',
      description: 'State-of-the-art recovery vehicles with latest safety equipment'
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Highly trained professionals with years of industry experience'
    },
    {
      icon: FiShield,
      title: 'Fully Insured',
      description: 'Complete insurance coverage for your peace of mind'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '1000+', label: 'Vehicles Recovered' },
    { number: '15+', label: 'Areas Covered' },
    { number: '24/7', label: 'Service Hours' }
  ];

  const whyChooseUs = [
    'Professional and reliable service',
    'Competitive pricing with no hidden fees',
    'Fast response times across West Midlands',
    'Fully qualified and insured technicians',
    'Modern recovery equipment and vehicles',
    'Excellent customer service and support'
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About VRS Recovery</h2>
          <p>Your trusted partner for professional vehicle recovery services across the West Midlands</p>
        </motion.div>

        {/* Main Content */}
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Professional Vehicle Recovery Services</h3>
            <p>
              VRS Recovery is a leading vehicle recovery and roadside assistance company based in 
              Walsall, serving the entire West Midlands region. We specialize in providing fast, 
              reliable, and professional vehicle recovery services 24 hours a day, 7 days a week.
            </p>
            <p>
              Our team of experienced professionals uses state-of-the-art equipment and modern 
              recovery vehicles to ensure your vehicle is handled with the utmost care. Whether 
              you need emergency roadside assistance, vehicle transportation, or specialized 
              recovery services, we're here to help.
            </p>
            
            <div className="company-info">
              <div className="info-item">
                <FiPhone className="icon" />
                <div>
                  <strong>Emergency Hotline</strong>
                  <span>+44 7475 365247</span>
                </div>
              </div>
              <div className="info-item">
                <FiAward className="icon" />
                <div>
                  <strong>Service Quality</strong>
                  <span>5-Star Customer Rating</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="visual-placeholder">
              <motion.div 
                className="truck-illustration"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiTruck size={120} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="features-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Our Track Record</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
          <motion.div 
            className="why-choose-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Why Choose VRS Recovery?</h3>
            <div className="reasons-list">
              {whyChooseUs.map((reason, index) => (
                <motion.div 
                  key={index}
                  className="reason-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FiCheckCircle className="check-icon" />
                  <span>{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="testimonial"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="testimonial-content">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star filled" />
                ))}
              </div>
              <blockquote>
                "Excellent service! They arrived quickly when my car broke down on the M6. 
                Professional, friendly, and got me back on the road safely. Highly recommended!"
              </blockquote>
              <cite>- Sarah M., Birmingham</cite>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Need Vehicle Recovery Services?</h3>
          <p>Contact us now for immediate assistance or to learn more about our services</p>
          <div className="cta-buttons">
            <motion.a 
              href="tel:+447475365247"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone className="icon" />
              Call Emergency Line
            </motion.a>
            <motion.a 
              href="#contact"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;