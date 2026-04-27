import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Navbar from '../../components/Navbar/Navbar';
import MisionVision from '../../components/MisionVision/MisionVision';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <SEO
        description="Desarrollos Nerd: expertos en desarrollo de software a medida, automatizaciones con IA, apps móviles, startups tech y ciberseguridad en República Dominicana. Primera consulta GRATIS."
        path="/"
      />
      <Navbar />
      <HeroSection />
      <MisionVision />
      <Footer />
    </div>
  );
}

export default Home; 