import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, Lightbulb, Shield, Heart, Zap, CheckCircle, Star } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import DivisionsSection from '../sections/DivisionsSection';
import CTABanner from '../sections/CTABanner';
import { 
  ABOUT_HERO, 
  COMPANY_STORY, 
  VISION_MISSION, 
  CORE_VALUES, 
  ABOUT_STATS,
  CERTIFICATIONS,
  ABOUT_SEO
} from '../constants/about.constants';
import { GLOBAL_STRINGS } from '../constants/shared.constants';

// Icon Map for Core Values
const ICON_MAP = {
  lightbulb: Lightbulb,
  'check-circle': CheckCircle,
  shield: Shield,
  users: Users,
  star: Star,
  zap: Zap,
};

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title={`${ABOUT_SEO.title} - Soft Synergy Systems`}
        description={ABOUT_SEO.description}
        keywords={ABOUT_SEO.keywords}
      />

      {/* Page Hero */}
      <PageHero
        title={ABOUT_HERO.title}
        subtitle={ABOUT_HERO.subtitle}
        breadcrumbs={ABOUT_HERO.breadcrumb}
      />

      {/* Company Story */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                {COMPANY_STORY.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight mb-6">
                {COMPANY_STORY.title}
              </h2>
              <div className="space-y-4 text-carbon-60 leading-relaxed">
                {COMPANY_STORY.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium mt-8 hover:gap-3 transition-all"
              >
                {GLOBAL_STRINGS.getToKnowUs} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-carbon-10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Soft Synergy Systems Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 text-white">
                <p className="text-3xl font-light">10+</p>
                <p className="text-xs uppercase tracking-widest text-primary-light">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-carbon-10">
        <Container>
          <div className="grid md:grid-cols-2 gap-px bg-carbon-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 md:p-12"
            >
              <div className="w-12 h-12 bg-primary-soft flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-carbon-100 mb-4">{VISION_MISSION.mission.title}</h3>
              <p className="text-carbon-60 leading-relaxed">
                {VISION_MISSION.mission.statement}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-10 md:p-12"
            >
              <div className="w-12 h-12 bg-primary-soft flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-carbon-100 mb-4">{VISION_MISSION.vision.title}</h3>
              <p className="text-carbon-60 leading-relaxed">
                {VISION_MISSION.vision.statement}
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
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
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
                {GLOBAL_STRINGS.ourCoreValues || 'Our Core Values'}
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-carbon-20">
            {CORE_VALUES.map((value, idx) => {
              const Icon = ICON_MAP[value.icon] || Lightbulb;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white p-8 group hover:bg-carbon-10 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-primary-soft flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-200">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="text-lg font-medium text-carbon-100 mb-3">{value.title}</h3>
                  <p className="text-sm text-carbon-60">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Divisions */}
      <DivisionsSection />

      {/* ISO Certification */}
      <Section className="bg-carbon-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-primary flex items-center justify-center">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-carbon-100 mb-2">{CERTIFICATIONS.iso.title}</h3>
                <p className="text-carbon-60">
                  {CERTIFICATIONS.iso.description}
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              {ABOUT_STATS.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-2xl font-light text-primary mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-carbon-50">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner />
    </motion.main>
  );
};

export default About;
