import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Emergency Hotline',
      info: '+44 7475 365247',
      link: 'tel:+447475365247',
      description: 'Available 24/7 for emergencies'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: '+44 7475 365247',
      link: 'https://wa.me/447475365247',
      description: 'Quick messaging service'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      info: 'Morford Rd, Aldridge',
      subInfo: 'Walsall WS9 8TH, UK',
      description: 'Our main service center'
    },
    {
      icon: FiClock,
      title: 'Service Hours',
      info: '24/7 Emergency',
      subInfo: 'Office: Mon-Fri 8AM-6PM',
      description: 'Always here when you need us'
    }
  ];

  const serviceAreas = [
    'Walsall', 'Birmingham', 'West Bromwich', 'Tipton', 'Wednesbury',
    'Sutton Coldfield', 'Cannock', 'Brownhills', 'Burntwood', 'Great Barr',
    'Streetly', 'Handsworth Wood', 'Lichfield', 'Burton upon Trent',
    'Wolverhampton', 'Sandwell Centre', 'Measham', 'Fradley'
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Need immediate assistance or want to learn more about our services? We're here to help!</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            
            <div className="info-cards">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="info-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-icon">
                    <item.icon size={24} />
                  </div>
                  <div className="card-content">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="contact-link">
                        {item.info}
                        {item.subInfo && <span className="sub-info">{item.subInfo}</span>}
                      </a>
                    ) : (
                      <div className="contact-text">
                        {item.info}
                        {item.subInfo && <span className="sub-info">{item.subInfo}</span>}
                      </div>
                    )}
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency CTA */}
            <motion.div 
              className="emergency-cta"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4>Need Emergency Recovery?</h4>
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
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
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

              <div className="form-group">
                <label htmlFor="service">
                  Service Required
                </label>
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
                  <option value="other">Other</option>
                </select>
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
                  placeholder="Tell us about your requirements..."
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.div 
          className="service-areas"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Areas We Serve</h3>
          <p>We provide our professional vehicle recovery services across the following areas:</p>
          
          <div className="areas-grid">
            {serviceAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="area-item"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;