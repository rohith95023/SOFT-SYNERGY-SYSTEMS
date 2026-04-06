/**
 * Home Page
 * ==========
 * Primary landing page. Assembles all home page sections.
 * SEO metadata and JSON-LD Organization schema injected via <SEO />.
 *
 * @module pages/Home
 */

import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import HeroSection from '../sections/HeroSection';
import ServicesOverview from '../sections/ServicesOverview';

// ── Lazy-loaded sections (loaded as needed or after critical content) ──
const OfficePhotosSection = lazy(() => import('../sections/OfficePhotosSection'));
const StatsSection = lazy(() => import('../sections/StatsSection'));
const IndustriesSection = lazy(() => import('../sections/IndustriesSection'));
const PartnersSection = lazy(() => import('../sections/PartnersSection'));
const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection'));
const CTABanner = lazy(() => import('../sections/CTABanner'));

import { HOME_SEO } from '../constants';

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

/** Placeholder for lazy-loading sections - prevents layout shifts */
const SectionPlaceholder = () => <div className="min-h-[500px] w-full bg-carbon-10/50 animate-pulse" />;

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        keywords={HOME_SEO.keywords}
        canonical={HOME_SEO.canonical}
        jsonLd={ORGANIZATION_JSON_LD}
      />

      {/* Critical Sections - Eagerly loaded for better LCP */}
      <HeroSection />
      <ServicesOverview />

      {/* Delayed Sections - Dynamically imported to reduce initial bundle size */}
      <Suspense fallback={<SectionPlaceholder />}>
        <OfficePhotosSection />
        <StatsSection />
        <IndustriesSection />
        <PartnersSection />
        <TestimonialsSection />
        <CTABanner />
      </Suspense>
    </motion.main>
  );
};

export default Home;
