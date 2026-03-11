import React from 'react';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import CompanyStory from '../sections/CompanyStory';
import { MissionVision, CoreValues } from '../sections/AboutSections';
import TimelineSection from '../sections/TimelineSection';
import StatsSection from '../sections/StatsSection';
import CTABanner from '../sections/CTABanner';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Soft Synergy Systems - a decade of excellence in AI, automation, and enterprise software solutions."
      />
      <PageHero 
        title="Our Story of Innovation" 
        subtitle="Empowering global enterprises with technological synergy since 2016."
        breadcrumbs={[{ name: 'About' }]}
      />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <TimelineSection />
      <StatsSection />
      <CTABanner />
    </>
  );
};

export default About;
