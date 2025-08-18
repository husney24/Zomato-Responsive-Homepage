import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiUsers, 
  FiTruck, 
  FiShield,
  FiClock,
  FiStar,
  FiCheckCircle,
  FiPhone,
  FiTarget,
  FiHeart
} from 'react-icons/fi';
import './About.scss';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Operations Manager',
      experience: '10+ Years',
      description: 'Expert in vehicle recovery operations with extensive knowledge of West Midlands roads.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Technician',
      experience: '8+ Years',
      description: 'Specialized in complex recovery operations and customer service excellence.'
    },
    {
      name: 'Mike Brown',
      role: 'Lead Mechanic',
      experience: '12+ Years',
      description: 'Certified mechanic with expertise in all vehicle types and emergency repairs.'
    }
  ];

  const companyValues = [
    {
      icon: FiClock,
      title: 'Reliability',
      description: 'We\'re always there when you need us most, 24/7 throughout the year.'
    },
    {
      icon: FiShield,
      title: 'Safety First',
      description: 'Your safety and the safety of your vehicle are our top priorities.'
    },
    {
      icon: FiHeart,
      title: 'Customer Care',
      description: 'We treat every customer like family, providing personalized service.'
    },
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide.'
    }
  ];

  const achievements = [
    { number: '5+', label: 'Years of Service' },
    { number: '2000+', label: 'Vehicles Recovered' },
    { number: '15+', label: 'Areas Covered' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About VRS Recovery</h1>
            <p>Your trusted partner for professional vehicle recovery services across the West Midlands</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <motion.div 
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                VRS Recovery was founded with a simple mission: to provide fast, reliable, and 
                professional vehicle recovery services when people need them most. What started 
                as a small local operation has grown into one of the most trusted recovery 
                services in the West Midlands.
              </p>
              <p>
                Our team of experienced professionals understands that vehicle breakdowns can 
                happen at the most inconvenient times. That's why we're committed to providing 
                24/7 emergency services with the fastest response times in the region.
              </p>
              <p>
                Over the years, we've built our reputation on reliability, professionalism, 
                and genuine care for our customers. Every member of our team is fully trained, 
                insured, and dedicated to getting you back on the road safely.
              </p>
            </motion.div>

            <motion.div 
              className="story-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="visual-placeholder">
                <FiTruck size={120} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="company-values">
        <div className="container">
          <motion.div 
            className="values-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {companyValues.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">
                  <value.icon size={40} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <div className="container">
          <motion.div 
            className="achievements-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Achievements</h2>
            <p>Numbers that speak for themselves</p>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="achievement-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div 
            className="team-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>Experienced professionals dedicated to your service</p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="member-avatar">
                  <FiUsers size={50} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <div className="experience">{member.experience}</div>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="choose-content">
            <motion.div 
              className="choose-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Why Choose VRS Recovery?</h2>
              <div className="reasons-list">
                <div className="reason-item">
                  <FiCheckCircle className="check-icon" />
                  <span>24/7 emergency response across West Midlands</span>
                </div>
                <div className="reason-item">
                  <FiCheckCircle className="check-icon" />
                  <span>Fully qualified and insured professionals</span>
                </div>
                <div className="reason-item">
                  <FiCheckCircle className="check-icon" />
                  <span>Modern fleet of recovery vehicles</span>
                </div>
                <div className="reason-item">
                  <FiCheckCircle className="check-icon" />
                  <span>Competitive pricing with no hidden fees</span>
                </div>
                <div className="reason-item">
                  <FiCheckCircle className="check-icon" />
                  <span>Excellent customer service and support</span>
                </div>
                <div className="reason-item">
                  <FiCheckCircle className="check-icon" />
                  <span>Fast response times and reliable service</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="testimonial-card"
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
                  "Outstanding service! My car broke down late at night and VRS Recovery 
                  came to my rescue within 30 minutes. Professional, friendly, and got 
                  everything sorted quickly. Highly recommended!"
                </blockquote>
                <cite>- Emma Thompson, Birmingham</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Experience Our Service?</h2>
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
                href="/contact"
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
    </motion.div>
  );
};

export default About;