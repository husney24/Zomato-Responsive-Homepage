import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiTruck, 
  FiClock, 
  FiMapPin, 
  FiUsers, 
  FiTool, 
  FiSettings,
  FiShield,
  FiZap,
  FiCheckCircle,
  FiPhone,
  FiArrowRight
} from 'react-icons/fi';
import { FaCar, FaRecycle } from 'react-icons/fa';
import './Services.scss';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: FiClock,
      title: 'Emergency Roadside Assistance',
      shortDesc: '24/7 emergency breakdown recovery service',
      fullDesc: 'Our emergency roadside assistance service is available 24/7 throughout the West Midlands. Whether you\'re stranded on a busy motorway or stuck in a remote location, our experienced team will reach you quickly with the right equipment to get you moving again.',
      features: [
        '24/7 Emergency Response',
        'Average 30-minute response time',
        'Fully equipped recovery vehicles',
        'Professional certified technicians',
        'All weather service availability',
        'GPS tracking for fastest route'
      ],
      price: 'From £45',
      color: '#c12729'
    },
    {
      icon: FiTruck,
      title: 'Vehicle Transportation',
      shortDesc: 'Safe and secure vehicle transportation',
      fullDesc: 'Our modern fleet of recovery trucks features hydraulic tilt and lift flatbeds, ensuring your vehicle is transported safely and securely. Perfect for non-running vehicles, luxury cars, or when you need reliable transportation to your destination.',
      features: [
        'Hydraulic tilt and lift flatbeds',
        'Secure tie-down systems',
        'Insurance coverage included',
        'Long distance transportation',
        'All vehicle types accepted',
        'Door-to-door service'
      ],
      price: 'From £2.50/mile',
      color: '#2563eb'
    },
    {
      icon: FiMapPin,
      title: 'Pick and Drop Service',
      shortDesc: 'Convenient pick-up and drop-off services',
      fullDesc: 'Our tailored pick-up and drop-off service is perfect for MOT appointments, servicing, or when you can\'t make it to the garage yourself. We handle the logistics so you don\'t have to worry about transportation.',
      features: [
        'MOT appointment service',
        'Service and repair drop-offs',
        'Flexible scheduling',
        'Competitive pricing',
        'Fleet vehicle management',
        'Regular service contracts available'
      ],
      price: 'From £35',
      color: '#059669'
    },
    {
      icon: FiUsers,
      title: 'Dealership, Fleet & Trade',
      shortDesc: 'Professional services for businesses',
      fullDesc: 'Comprehensive vehicle transportation services for dealerships, fleet operators, and trade customers. We provide reliable, professional service with full documentation and signed handovers for your peace of mind.',
      features: [
        'Trade customer rates',
        'Fleet management solutions',
        'Signed handover documentation',
        'Regular service contracts',
        'Priority booking system',
        'Dedicated account management'
      ],
      price: 'Contact for quote',
      color: '#7c3aed'
    },
    {
      icon: FaRecycle,
      title: 'Scrap Car Disposal',
      shortDesc: 'Environmentally friendly vehicle disposal',
      fullDesc: 'When your vehicle reaches the end of its life, we provide environmentally responsible disposal services. We handle all the paperwork and ensure your vehicle is recycled in compliance with environmental regulations.',
      features: [
        'DVLA notification included',
        'Environmental compliance',
        'Certificate of destruction',
        'Free collection service',
        'Depollution service',
        'Metal recycling process'
      ],
      price: 'Free collection',
      color: '#dc2626'
    },
    {
      icon: FiTool,
      title: 'Vehicle Body Work',
      shortDesc: 'Professional body repair services',
      fullDesc: 'Our fully equipped workshops can handle a wide variety of bodywork repairs to manufacturer standards. From minor dents to major collision repairs, our skilled technicians deliver quality results.',
      features: [
        'Manufacturer standard repairs',
        'Modern workshop facilities',
        'Quality guaranteed work',
        'Insurance work accepted',
        'Paint matching service',
        'Courtesy car available'
      ],
      price: 'Quote on inspection',
      color: '#ea580c'
    },
    {
      icon: FaCar,
      title: 'Car Service',
      shortDesc: 'Complete vehicle servicing',
      fullDesc: 'Our specialist mechanics provide comprehensive servicing for all makes and models. From basic services to complex repairs, we use quality parts and follow manufacturer guidelines to keep your vehicle running smoothly.',
      features: [
        'All makes and models',
        'Manufacturer guidelines followed',
        'Quality parts used',
        'Service history maintained',
        'Digital service reports',
        'Warranty on all work'
      ],
      price: 'From £89',
      color: '#0891b2'
    },
    {
      icon: FiShield,
      title: 'MOT Testing',
      shortDesc: 'Official MOT testing with collection',
      fullDesc: 'Our authorized MOT center provides comprehensive testing with the convenience of pick-up and drop-off service. We\'ll collect your vehicle, conduct the test, and return it to you with a digital certificate.',
      features: [
        'DVSA authorized center',
        'Pick-up and drop-off included',
        'Digital MOT certificates',
        'Retest included if required',
        'Advisory reports provided',
        'Competitive pricing'
      ],
      price: '£54.85',
      color: '#16a34a'
    },
    {
      icon: FiZap,
      title: 'Vehicle Electrical Services',
      shortDesc: 'Expert electrical diagnostics and repair',
      fullDesc: 'Our qualified vehicle electricians use the latest diagnostic equipment to identify and resolve electrical faults. From simple wiring issues to complex electronic problems, we have the expertise to fix it.',
      features: [
        'Latest diagnostic equipment',
        'Qualified electricians',
        'All electrical systems',
        'Fault finding service',
        'Component replacement',
        'System upgrades available'
      ],
      price: 'From £65/hour',
      color: '#ca8a04'
    }
  ];

  const serviceAreas = [
    'Walsall', 'Birmingham', 'West Bromwich', 'Wolverhampton', 
    'Sutton Coldfield', 'Cannock', 'Lichfield', 'Burton upon Trent',
    'Tipton', 'Wednesbury', 'Brownhills', 'Great Barr'
  ];

  return (
    <motion.div
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Professional Vehicle Recovery Services</h1>
            <p>Comprehensive vehicle recovery, transportation, and maintenance services across the West Midlands</p>
            <motion.a 
              href="tel:+447475365247"
              className="hero-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone className="icon" />
              Call Now for Immediate Service
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Complete Range of Services</h2>
            <p>Professional vehicle services tailored to your needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveService(index)}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  <service.icon size={40} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <div className="service-price">{service.price}</div>
                <motion.button 
                  className="learn-more-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <FiArrowRight className="icon" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal/Section */}
      <section className="service-detail">
        <div className="container">
          <motion.div 
            className="detail-content"
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="detail-header">
              <div className="detail-icon" style={{ color: services[activeService].color }}>
                <services[activeService].icon size={60} />
              </div>
              <div className="detail-title">
                <h2>{services[activeService].title}</h2>
                <div className="detail-price">{services[activeService].price}</div>
              </div>
            </div>

            <div className="detail-body">
              <div className="detail-description">
                <h3>Service Description</h3>
                <p>{services[activeService].fullDesc}</p>
              </div>

              <div className="detail-features">
                <h3>What's Included</h3>
                <div className="features-list">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FiCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-cta">
                <motion.a 
                  href="tel:+447475365247"
                  className="cta-button primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPhone className="icon" />
                  Book This Service
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
            </div>
          </motion.div>
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
            <p>Professional vehicle recovery services across the West Midlands</p>
          </motion.div>

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
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-text">
              <h2>Need Emergency Recovery?</h2>
              <p>Available 24/7 across the West Midlands with fast response times</p>
            </div>
            <motion.a 
              href="tel:+447475365247"
              className="emergency-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiClock className="icon" />
              Call Emergency Line Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;