import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Navbar from '../../components/Navbar/Navbar';
import MisionVision from '../../components/MisionVision/MisionVision';
import Footer from '../../components/Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <MisionVision />
      <Footer />
    </div>
  );
}

export default Home; 