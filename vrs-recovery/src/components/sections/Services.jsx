import React from 'react';
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
  FiCheckCircle 
} from 'react-icons/fi';
import { FaCar, FaRecycle } from 'react-icons/fa';
import './Services.scss';

const Services = () => {
  const services = [
    {
      icon: FiClock,
      title: 'Emergency Roadside Assistance',
      description: '24/7 emergency breakdown recovery service available throughout the West Midlands. Fast response times guaranteed.',
      features: ['24/7 Availability', 'Fast Response', 'Professional Service'],
      color: '#c12729'
    },
    {
      icon: FiTruck,
      title: 'Vehicle Transportation',
      description: 'High-spec recovery trucks with hydraulic tilt and lift flatbeds ensuring safe and speedy vehicle recovery.',
      features: ['Hydraulic Flatbeds', 'Secure Transport', 'All Vehicle Types'],
      color: '#2563eb'
    },
    {
      icon: FiMapPin,
      title: 'Pick and Drop Service',
      description: 'Tailored pick-up and drop-off services for MOT, servicing, and fleet vehicle maintenance at competitive prices.',
      features: ['Door-to-Door', 'MOT Services', 'Fleet Management'],
      color: '#059669'
    },
    {
      icon: FiUsers,
      title: 'Dealership, Fleet & Trade',
      description: 'Comprehensive location-to-location services for dealerships and fleet operators with signed handover documentation.',
      features: ['Trade Services', 'Fleet Solutions', 'Signed Handovers'],
      color: '#7c3aed'
    },
    {
      icon: FaRecycle,
      title: 'Scrap Car Disposal',
      description: 'Environmentally friendly disposal service for vehicles that have reached the end of their operational life.',
      features: ['Eco-Friendly', 'Legal Disposal', 'Certificate Provided'],
      color: '#dc2626'
    },
    {
      icon: FiTool,
      title: 'Vehicle Body Work',
      description: 'Fully equipped workshops capable of servicing a wide variety of vehicles to manufacturer standards.',
      features: ['Manufacturer Standards', 'Quality Repairs', 'Modern Equipment'],
      color: '#ea580c'
    },
    {
      icon: FaCar,
      title: 'Car Service',
      description: 'Specialist car mechanic team providing expert servicing for a comprehensive range of vehicle types.',
      features: ['Expert Mechanics', 'All Makes & Models', 'Quality Parts'],
      color: '#0891b2'
    },
    {
      icon: FiShield,
      title: 'MOT Testing',
      description: 'Comprehensive MOT testing with convenient pick-up and drop-off options at our authorized MOT center.',
      features: ['Authorized Center', 'Pick-up Service', 'Digital Certificates'],
      color: '#16a34a'
    },
    {
      icon: FiZap,
      title: 'Vehicle Electrician',
      description: 'Qualified vehicle electricians specialized in diagnosing and resolving all electrical faults in your vehicle.',
      features: ['Diagnostic Equipment', 'Qualified Electricians', 'All Electrical Issues'],
      color: '#ca8a04'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Professional Services</h2>
          <p>Comprehensive vehicle recovery and maintenance services across the West Midlands</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                <service.icon size={40} />
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <FiCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button 
                  className="service-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--service-color': service.color }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Vehicles Recovered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Areas Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5★</div>
              <div className="stat-label">Customer Rating</div>
            </div>
          </div>

          <motion.a 
            href="tel:+447475365247"
            className="main-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiClock className="icon" />
            Need Emergency Service? Call Now!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;