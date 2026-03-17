import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { CTA_BANNER_DATA } from '../constants';

const CTABanner = () => {
  const { headline, subheadline, primaryCTA, secondaryCTA } = CTA_BANNER_DATA;

  return (
    <Section className="bg-primary py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              {headline}
            </h2>
            <p className="text-primary-light text-lg max-w-xl">
              {subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={primaryCTA.link}>
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-primary hover:bg-carbon-10 border-white"
                icon={ArrowRight}
              >
                {primaryCTA.text}
              </Button>
            </Link>
            <Link to={secondaryCTA.link}>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                icon={ArrowUpRight}
              >
                {secondaryCTA.text}
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CTABanner;
