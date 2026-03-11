import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { INDUSTRIES } from '../constants/industries';

const IndustriesSection = () => {
  return (
    <Section className="bg-carbon-10" id="industries">
      <Container>
        {/* Section Header - IBM Style */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
              Industry Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight mb-4">
              Industries We Transform
            </h2>
            <p className="text-carbon-60">
              Deep domain expertise across major industry verticals, delivering
              tailored solutions that address unique business challenges.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid - IBM Carbon Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-carbon-20">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 text-center group hover:bg-carbon-10 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-primary-soft mx-auto flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-200">
                <industry.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-sm font-medium text-carbon-100">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 pt-10 border-t border-carbon-20"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '7+', label: 'Industries' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl font-light text-primary mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-carbon-50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default IndustriesSection;
