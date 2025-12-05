import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
