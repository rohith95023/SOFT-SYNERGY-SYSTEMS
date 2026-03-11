import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import { INDUSTRIES } from '../../constants/industries';

const IndustriesSection = () => {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle
          badge="Market Focus"
          title="Industries We Transform"
          subtitle="We provide specialized technology solutions across diverse sectors, understanding the unique challenges of each domain."
        />

        <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-6 lg:overflow-visible">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[160px] md:min-w-0"
            >
              <div className="p-8 rounded-2xl bg-background-light border border-slate-light/10 flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-medium hover:border-primary/20 transition-standard cursor-default">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <industry.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-navy group-hover:text-primary transition-colors">{industry.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default IndustriesSection;
