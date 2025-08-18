import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    urgency: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        urgency: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: FiPhone,
      title: 'Emergency Hotline',
      info: '+44 7475 365247',
      link: 'tel:+447475365247',
      description: 'Available 24/7 for immediate assistance',
      color: '#c12729'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: '+44 7475 365247',
      link: 'https://wa.me/447475365247',
      description: 'Quick messaging for non-urgent queries',
      color: '#25d366'
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'info@vrsrecovery.co.uk',
      link: 'mailto:info@vrsrecovery.co.uk',
      description: 'For quotes and general inquiries',
      color: '#2563eb'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      info: 'Morford Rd, Aldridge',
      subInfo: 'Walsall WS9 8TH, UK',
      description: 'Our main service center',
      color: '#059669'
    }
  ];

  const operatingHours = [
    { day: 'Emergency Service', hours: '24/7 All Year Round' },
    { day: 'Office Hours', hours: 'Mon-Fri: 8:00 AM - 6:00 PM' },
    { day: 'Weekend Office', hours: 'Sat: 9:00 AM - 4:00 PM' },
    { day: 'Sunday Office', hours: 'Closed (Emergency Only)' }
  ];

  const serviceAreas = [
    'Walsall', 'Birmingham', 'West Bromwich', 'Wolverhampton',
    'Sutton Coldfield', 'Cannock', 'Lichfield', 'Burton upon Trent',
    'Tipton', 'Wednesbury', 'Brownhills', 'Great Barr', 'Streetly',
    'Handsworth Wood', 'Sandwell Centre', 'Measham', 'Fradley',
    'South Staffordshire', 'Burntwood'
  ];

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get In Touch</h1>
            <p>Need immediate assistance or want to learn more about our services? We're here to help 24/7!</p>
            <div className="hero-stats">
              <div className="stat-item">
                <strong>24/7</strong>
                <span>Emergency Service</span>
              </div>
              <div className="stat-item">
                <strong>&lt;30 min</strong>
                <span>Average Response</span>
              </div>
              <div className="stat-item">
                <strong>15+</strong>
                <span>Areas Covered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>How to Reach Us</h2>
            <p>Choose the best way to contact us based on your needs</p>
          </motion.div>

          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="method-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="method-icon" style={{ color: method.color }}>
                  <method.icon size={40} />
                </div>
                <h3>{method.title}</h3>
                {method.link ? (
                  <a href={method.link} className="method-info" target={method.link.startsWith('http') ? '_blank' : '_self'}>
                    {method.info}
                    {method.subInfo && <span className="sub-info">{method.subInfo}</span>}
                  </a>
                ) : (
                  <div className="method-info">
                    {method.info}
                    {method.subInfo && <span className="sub-info">{method.subInfo}</span>}
                  </div>
                )}
                <p>{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div 
              className="form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>

              {isSubmitted && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiCheckCircle className="success-icon" />
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser className="label-icon" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FiPhone className="label-icon" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail className="label-icon" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      <option value="emergency">Emergency Roadside Assistance</option>
                      <option value="recovery">Vehicle Recovery</option>
                      <option value="transport">Vehicle Transportation</option>
                      <option value="mot">MOT Testing</option>
                      <option value="service">Car Service</option>
                      <option value="bodywork">Vehicle Body Work</option>
                      <option value="electrical">Vehicle Electrical</option>
                      <option value="scrap">Scrap Car Disposal</option>
                      <option value="quote">General Quote</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="urgency">Urgency Level</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                    >
                      <option value="">Select urgency</option>
                      <option value="emergency">Emergency (Call Instead)</option>
                      <option value="urgent">Urgent (Same Day)</option>
                      <option value="normal">Normal (1-2 Days)</option>
                      <option value="quote">Quote Request</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location">
                    <FiMapPin className="label-icon" />
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Where are you located?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare className="label-icon" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Please describe your requirements or situation..."
                  ></textarea>
                </div>

                <motion.button 
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <motion.div 
                      className="loading-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <FiSend className="icon" />
                  )}
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="info-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Emergency CTA */}
              <div className="emergency-cta">
                <h3>Need Emergency Help?</h3>
                <p>Don't wait - call us now for immediate assistance!</p>
                <motion.a 
                  href="tel:+447475365247"
                  className="emergency-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPhone className="icon" />
                  Call Emergency Line
                </motion.a>
              </div>

              {/* Operating Hours */}
              <div className="operating-hours">
                <h3>Operating Hours</h3>
                <div className="hours-list">
                  {operatingHours.map((item, index) => (
                    <div key={index} className="hours-item">
                      <span className="day">{item.day}</span>
                      <span className="hours">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Tips */}
              <div className="quick-tips">
                <h3>Quick Tips</h3>
                <div className="tips-list">
                  <div className="tip-item">
                    <FiCheckCircle className="tip-icon" />
                    <span>For emergencies, call directly for fastest response</span>
                  </div>
                  <div className="tip-item">
                    <FiCheckCircle className="tip-icon" />
                    <span>Have your location and vehicle details ready</span>
                  </div>
                  <div className="tip-item">
                    <FiCheckCircle className="tip-icon" />
                    <span>WhatsApp us for quick non-urgent queries</span>
                  </div>
                  <div className="tip-item">
                    <FiCheckCircle className="tip-icon" />
                    <span>Email us for detailed quotes and information</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <motion.div 
            className="areas-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Areas We Serve</h2>
            <p>Professional vehicle recovery services across the West Midlands and surrounding areas</p>
          </motion.div>

          <div className="areas-grid">
            {serviceAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="area-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <FiMapPin className="area-icon" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="coverage-note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Don't see your area listed? Contact us anyway - we may still be able to help!
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;