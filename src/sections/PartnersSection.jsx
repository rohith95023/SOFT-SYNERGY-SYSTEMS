import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import { PARTNERS } from '../../constants/industries';

const PartnersSection = () => {
  return (
    <Section light id="partners">
      <Container>
        <SectionTitle
          badge="Global Network"
          title="Our Trusted Partners"
          subtitle="Collaborating with industry leaders to deliver exceptional value and technological excellence."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl border border-slate-light/10 p-6 h-24 flex items-center justify-center group hover:shadow-soft transition-standard cursor-pointer">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PartnersSection;
