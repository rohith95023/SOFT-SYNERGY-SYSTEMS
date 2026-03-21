import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { COMPANY_STORY } from '../constants/about.constants';
import { COMPANY_INFO } from '../constants';

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
              badge={COMPANY_STORY.badge}
              title={COMPANY_STORY.title}
              align="left"
              className="mb-8"
            />
            <div className="space-y-6 text-slate text-lg leading-relaxed">
              {COMPANY_STORY.extendedParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
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
                  <span className="text-primary font-extrabold text-3xl italic">{COMPANY_INFO.initials || 'SSS'}</span>
                </div>
                <h4 className="text-2xl font-bold text-navy mb-2">{COMPANY_STORY.pioneeringProgress.title}</h4>
                <p className="text-slate-light">{COMPANY_STORY.pioneeringProgress.subtitle}</p>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-strong border border-slate-light/10 hidden md:block">
              <p className="text-primary font-extrabold text-3xl">{COMPANY_STORY.retentionStat.value}</p>
              <p className="text-slate font-bold uppercase tracking-wider text-xs mt-1">{COMPANY_STORY.retentionStat.label}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default CompanyStory;

