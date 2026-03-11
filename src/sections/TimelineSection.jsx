import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

const TIMELINE_DATA = [
  { year: '2016', title: 'Foundation', description: 'Soft Synergy Systems established in Bengaluru with a focus on enterprise software.' },
  { year: '2018', title: 'Expansion', description: 'Launched AI & Robotics division, expanding our technological capabilities.' },
  { year: '2020', title: 'Global Reach', description: 'Secured our first international enterprise clients in Southeast Asia and Middle East.' },
  { year: '2022', title: 'ISO Certification', description: 'Formally recognized as an ISO Certified Organisation for quality management.' },
  { year: '2024', title: 'Innovation Hub', description: 'Opened our new advanced development center for RAG and Generative AI systems.' },
  { year: '2026', title: 'Digital Era', description: 'Leading the charge in AI-driven digital transformation for global enterprises.' },
];

const TimelineSection = () => {
  return (
    <Section light>
      <Container>
        <SectionTitle
          badge="Our Journey"
          title="Company Timeline"
          subtitle="A decade of growth, innovation, and technological excellence."
        />

        <div className="relative max-w-4xl mx-auto pt-10">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {TIMELINE_DATA.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Desktop Content */}
                <div className="flex-1 hidden md:block" />
                
                {/* Year Marker */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary shadow-soft flex items-center justify-center -translate-x-1/2 z-10 font-bold text-primary text-sm">
                  {item.year.substring(2)}'
                </div>

                {/* Content Box */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} pl-16 md:pl-0`}>
                  <div className={`inline-block p-6 rounded-2xl bg-white shadow-medium border border-slate-light/10 relative`}>
                    <span className="block text-primary font-extrabold text-2xl mb-2">{item.year}</span>
                    <h4 className="text-xl font-bold text-navy mb-4">{item.title}</h4>
                    <p className="text-slate text-sm leading-relaxed">{item.description}</p>
                    
                    {/* Triangle Arrow */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l border-t border-slate-light/10 transform ${idx % 2 === 0 ? 'hidden md:block -right-2 rotate-[135deg]' : 'hidden md:block -left-2 -rotate-45'} hidden group-hover:block transition-standard`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TimelineSection;
