import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { INDUSTRIES } from '../constants';
import { cn } from '../utils/cn';

const IndustriesSection = () => {
  return (
    <Section className="bg-white overflow-hidden py-10 md:py-14 lg:py-16 flex items-center min-h-auto lg:min-h-screen" id="industries">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase text-xs mb-2">
                Industry Expertise
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-carbon-100 tracking-tight leading-tight">
                Industries We <span className="text-primary font-medium italic">Transform</span>
              </h3>
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-carbon-60 text-base md:text-lg md:max-w-xs leading-relaxed"
          >
            We bridge the gap between complex business challenges and digital solutions.
          </motion.p>
        </div>

        {/* Industries Grid - Limited to 2 rows on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <IndustryCard 
              key={industry.id} 
              industry={industry} 
              index={idx} 
            />
          ))}
          
          {/* Decorative Callout Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: INDUSTRIES.length * 0.1 }}
            className="relative overflow-hidden rounded-2xl bg-primary p-6 flex flex-col justify-between group h-full min-h-[220px]"
          >
            <div className="relative z-10">
              <h4 className="text-white text-xl font-medium mb-2 leading-tight">
                Any Domain
              </h4>
              <p className="text-white/80 text-xs leading-relaxed mb-4">
                Our adaptive engineering framework solves challenges across any industry.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="relative z-10 w-fit px-5 py-2.5 bg-white text-primary font-semibold rounded-full text-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              Let's Discuss
            </Link>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-primary-dark/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Dynamic Experience Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 lg:mt-12 p-6 md:p-8 rounded-4xl bg-carbon-10 border border-carbon-20 flex flex-wrap justify-around items-center gap-6 md:gap-12"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-carbon-100 mb-1">10+</span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-primary">Years of Innovation</span>
          </div>
          <div className="w-px h-10 bg-carbon-20 hidden md:block" />
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-carbon-100 mb-1">500+</span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-primary">Global Deployments</span>
          </div>
          <div className="w-px h-10 bg-carbon-20 hidden md:block" />
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-carbon-100 mb-1">98%</span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-primary">Customer Retention</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

const IndustryCard = ({ industry, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col p-6 rounded-2xl bg-white border border-carbon-20 hover:border-primary/20 hover:shadow-[0_15px_40px_rgba(0,139,150,0.08)] transition-all duration-500 overflow-hidden"
    >
      {/* Icon Container */}
      <div className="relative mb-5">
        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
        <div className={cn(
          "relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 z-10",
          "bg-carbon-10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30"
        )}>
          <industry.icon className="h-5 w-5 text-carbon-80 group-hover:text-white transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-carbon-100 mb-2 group-hover:text-primary transition-colors duration-300">
        {industry.name}
      </h3>
      <p className="text-carbon-60 text-xs leading-relaxed mb-4 grow">
        {industry.description}
      </p>

      {/* Feature Indicators */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-carbon-10 mt-auto">
        <div className="h-0.5 w-6 rounded-full bg-carbon-20 group-hover:bg-primary/40 transition-colors duration-500" />
        <div className="h-0.5 w-3 rounded-full bg-carbon-10 group-hover:bg-primary/20 transition-colors duration-500" />
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
};

export default IndustriesSection;
