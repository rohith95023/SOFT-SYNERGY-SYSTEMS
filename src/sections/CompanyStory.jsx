import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';

const CompanyStory = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              badge="Our Story"
              title="A Decade of Excellence in Technology"
              align="left"
              className="mb-8"
            />
            <div className="space-y-6 text-slate text-lg leading-relaxed">
              <p>
                Founded on the principles of innovation and synergy, Soft Synergy Systems (SSS) has grown from a specialized technology firm into a global partner for enterprise digital transformation.
              </p>
              <p>
                Headquartered in the silicon hub of Bengaluru, India, we have spent over 10 years mastering the complexities of AI, automation, and enterprise software systems. Our approach has been defined by a relentless focus on quality and a deep understanding of the evolving digital landscape.
              </p>
              <p>
                Today, as an ISO Certified Organisation, we serve a diverse portfolio of 50+ enterprise clients across 7 major industry verticals, helping them navigate the digital era with intelligence and agility.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-strong aspect-[4/3] bg-primary/10 flex items-center justify-center border border-primary/20">
              <div className="text-center p-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary font-extrabold text-3xl italic">SSS</span>
                </div>
                <h4 className="text-2xl font-bold text-navy mb-2">Pioneering Progress</h4>
                <p className="text-slate-light">Since 2016 - Bengaluru, India</p>
              </div>
              {/* This would be an image in a real project */}
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-strong border border-slate-light/10 hidden md:block">
              <p className="text-primary font-extrabold text-3xl">100%</p>
              <p className="text-slate font-bold uppercase tracking-wider text-xs mt-1">Client Retention</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default CompanyStory;
