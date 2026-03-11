import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Bot, Cpu } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

const divisions = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Enterprise-grade software solutions built with modern technologies and best practices.',
    capabilities: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions'],
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Intelligent AI solutions that transform business operations and decision-making.',
    capabilities: ['Machine Learning', 'RAG Systems', 'AI Voice Agents', 'Predictive Analytics'],
  },
  {
    icon: Bot,
    title: 'Robotics & Automation',
    description: 'End-to-end automation solutions that streamline operations and reduce costs.',
    capabilities: ['Process Automation', 'RPA Solutions', 'Industrial IoT', 'Smart Systems'],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'Specialized embedded solutions for industrial and consumer applications.',
    capabilities: ['Firmware Development', 'Hardware Integration', 'Real-time Systems', 'IoT Devices'],
  },
];

const DivisionsSection = () => {
  return (
    <Section className="bg-carbon-10">
      <Container>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
              Our Divisions
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight mb-4">
              Four Specialized Divisions
            </h2>
            <p className="text-carbon-60 max-w-2xl mx-auto">
              Each division is staffed with domain experts who bring deep technical knowledge
              and industry experience to every project.
            </p>
          </motion.div>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-carbon-30">
          {divisions.map((division, idx) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 md:p-10 group hover:bg-carbon-10 transition-colors"
            >
              <div className="w-14 h-14 bg-primary-soft flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <division.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-medium text-carbon-100 mb-3">
                {division.title}
              </h3>
              <p className="text-carbon-60 mb-6">
                {division.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {division.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3 py-1 bg-carbon-10 text-carbon-70 text-xs font-medium group-hover:bg-white transition-colors"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default DivisionsSection;
