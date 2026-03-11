import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../sections/HeroSection';
import ServicesOverview from '../sections/ServicesOverview';
import StatsSection from '../sections/StatsSection';
import IndustriesSection from '../sections/IndustriesSection';
import PartnersSection from '../sections/PartnersSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTABanner from '../sections/CTABanner';

const Home = () => {
  return (
    <>
      <SEO 
        title="Innovating for a Digital Era" 
        description="Soft Synergy Systems delivers cutting-edge AI, automation, and enterprise software solutions for global businesses."
      />
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <IndustriesSection />
      <PartnersSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
};

export default Home;
