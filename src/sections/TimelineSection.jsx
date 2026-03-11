import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

const milestones = [
  { year: '2014', title: 'Founded', description: 'Soft Synergy Systems established in Bengaluru' },
  { year: '2016', title: 'ISO Certification', description: 'Achieved ISO certification for quality management' },
  { year: '2018', title: 'AI Division Launch', description: 'Launched dedicated AI and Machine Learning division' },
  { year: '2020', title: 'Global Expansion', description: 'Expanded operations to Middle East and Southeast Asia' },
  { year: '2022', title: '50+ Clients', description: 'Reached milestone of serving 50+ enterprise clients' },
  { year: '2024', title: 'Robotics Division', description: 'Launched Robotics & Automation division' },
];

const TimelineSection = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
              Company Timeline
            </h2>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-carbon-20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative md:flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-carbon-10 p-6 hover:bg-carbon-20 transition-colors">
                    <span className="text-3xl font-light text-primary mb-2 block">{milestone.year}</span>
                    <h3 className="text-lg font-medium text-carbon-100 mb-2">{milestone.title}</h3>
                    <p className="text-sm text-carbon-60">{milestone.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary hidden md:block" />

                {/* Spacer */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TimelineSection;
