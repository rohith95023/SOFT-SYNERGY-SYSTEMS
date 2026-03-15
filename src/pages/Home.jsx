/**
 * Home Page
 * ==========
 * Primary landing page. Assembles all home page sections.
 * SEO metadata and JSON-LD Organization schema injected via <SEO />.
 *
 * RULE: Page files max 80 lines — business sections live in sections/.
 *
 * @module pages/Home
 */

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

/**
 * JSON-LD Organization schema for the homepage.
 * Helps search engines understand the company's identity.
 * @see https://schema.org/Organization
 */
const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Soft Synergy Systems Pvt Ltd',
  url: 'https://softsynergysystems.com',
  logo: 'https://softsynergysystems.com/logo.png',
  description: 'Enterprise AI, QA, Java, and Full Stack Web Development solutions for global businesses.',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '26/3, Thirumenahalli Main Road, Block 3, Chokkanahalli',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560064',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-97908-23800',
    contactType: 'customer service',
    email: 'hr@softsynergysystems.com',
  },
  sameAs: [
    'https://linkedin.com/company/soft-synergy-systems',
    'https://twitter.com/softsynergysys',
    'https://facebook.com/softsynergysystems',
  ],
};

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
        keywords="AI development, machine learning, QA services, test automation, Java development, full stack web development, enterprise software, digital transformation, Bengaluru, India"
        canonical="https://softsynergysystems.com/"
        jsonLd={ORGANIZATION_JSON_LD}
      />

      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <IndustriesSection />
      <PartnersSection />
      <TestimonialsSection />
      <CTABanner />
      <BlogPreviewSection />
    </motion.main>
  );
};

export default Home;

