import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import HeroSection from '../sections/HeroSection';
import ServicesOverview from '../sections/ServicesOverview';
import StatsSection from '../sections/StatsSection';
import IndustriesSection from '../sections/IndustriesSection';
import PartnersSection from '../sections/PartnersSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTABanner from '../sections/CTABanner';
import BlogPreviewSection from '../sections/BlogPreviewSection';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Soft Synergy Systems - Innovating for a Digital Era"
        description="Enterprise AI, QA, Java, and Full Stack Web Development solutions for global businesses. ISO Certified with 10+ years of experience."
        keywords="AI development, QA services, Java development, web development, enterprise software, digital transformation"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Stats Section */}
      <StatsSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* Blog Preview */}
      <BlogPreviewSection />
    </motion.main>
  );
};

export default Home;
