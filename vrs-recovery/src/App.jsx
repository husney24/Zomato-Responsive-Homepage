import React from 'react';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Temporary content - will be replaced with actual sections */}
      <main>
        <section id="home" className="temp-section">
          <div className="container">
            <h1>Welcome to VRS Recovery</h1>
            <p>Professional Vehicle Recovery Services</p>
          </div>
        </section>
        
        <section id="services" className="temp-section">
          <div className="container">
            <h2>Our Services</h2>
            <p>Emergency Roadside Assistance, Vehicle Transportation, and more...</p>
          </div>
        </section>
        
        <section id="about" className="temp-section">
          <div className="container">
            <h2>About Us</h2>
            <p>Professional vehicle recovery services in the West Midlands</p>
          </div>
        </section>
        
        <section id="areas" className="temp-section">
          <div className="container">
            <h2>Areas We Serve</h2>
            <p>Covering Walsall, Birmingham, West Bromwich and surrounding areas</p>
          </div>
        </section>
        
        <section id="contact" className="temp-section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Get in touch for immediate assistance</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;