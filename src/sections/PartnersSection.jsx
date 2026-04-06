import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { PARTNERS, PARTNERS_SECTION_DATA } from '../constants';

const PartnersSection = () => {
  const { sectionBadge, sectionTitle, sectionSubtitle, bottomText } = PARTNERS_SECTION_DATA;

  return (
    <Section className="bg-white" id="partners">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
              {sectionBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight mb-4">
              {sectionTitle}
            </h2>
            <p className="text-carbon-60 max-w-2xl mx-auto">
              {sectionSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-carbon-20">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 flex items-center justify-center h-28 group hover:bg-carbon-10 transition-colors duration-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                width={120}
                height={40}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-carbon-50">{bottomText}</p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default PartnersSection;
