import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { STATS_DATA } from '../constants/stats';

const StatsSection = () => {
  return (
    <Section className="bg-carbon-100 py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-primary-light mb-4 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
            Delivering Excellence at Scale
          </h2>
        </motion.div>

        {/* Stats Grid - IBM Carbon Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-carbon-70">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-carbon-100 p-8 md:p-10 text-center group hover:bg-carbon-90 transition-colors duration-300"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                dark
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs uppercase tracking-widest font-semibold text-carbon-50">
              ISO Certified Organization
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StatsSection;
