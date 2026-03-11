import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Shield, Code, Globe } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import CTABanner from '../sections/CTABanner';
import { SERVICE_CATEGORIES } from '../constants';

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Selenium', category: 'QA' },
];

const processSteps = [
  { step: '01', title: 'Discovery', description: 'Understanding your business needs and technical requirements' },
  { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and architecture design' },
  { step: '03', title: 'Development', description: 'Agile development with regular progress updates' },
  { step: '04', title: 'Testing', description: 'Comprehensive QA and user acceptance testing' },
  { step: '05', title: 'Deployment', description: 'Production deployment and post-launch support' },
];

const Services = () => {
  const [activeService, setActiveService] = useState(SERVICE_CATEGORIES[0].id);

  const currentService = SERVICE_CATEGORIES.find(s => s.id === activeService);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Services - Soft Synergy Systems"
        description="Explore our comprehensive services in AI Development, QA, Enterprise Java, and Full Stack Web Development."
      />

      {/* Page Hero */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive technology solutions tailored for enterprise success"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' }
        ]}
      />

      {/* Services Navigation - Corporate-style */}
      <Section className="bg-white pt-0">
        <Container>
          <div className="border-b border-carbon-20 -mt-8 sticky top-20 bg-white z-30">
            <div className="flex overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              {SERVICE_CATEGORIES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeService === service.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-carbon-60 hover:text-carbon-100'
                    }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Detail */}
      <Section className="bg-white pt-8">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Service Header */}
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-16 h-16 bg-primary-soft flex items-center justify-center shrink-0">
                    <currentService.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-light text-carbon-100 tracking-tight mb-3">
                      {currentService.title}
                    </h2>
                    <p className="text-carbon-60 leading-relaxed">
                      {currentService.description}
                    </p>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mb-10">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-6">
                    Key Capabilities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentService.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-carbon-10 hover:bg-carbon-20 transition-colors"
                      >
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-semibold text-carbon-100 block mb-1">{cap.title}</span>
                          <span className="text-sm text-carbon-80">{cap.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-6">
                    Industries Served
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentService.industries.map((ind, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary-soft text-primary text-sm font-medium"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-40">
                {/* Quick Links */}
                <div className="bg-carbon-10 p-6 mb-6">
                  <h3 className="text-sm font-semibold text-carbon-100 mb-4">All Services</h3>
                  <div className="space-y-1">
                    {SERVICE_CATEGORIES.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${activeService === service.id
                          ? 'bg-white text-primary font-medium'
                          : 'text-carbon-60 hover:bg-white hover:text-carbon-100'
                          }`}
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary p-6 text-white">
                  <h3 className="text-lg font-medium mb-3">Ready to get started?</h3>
                  <p className="text-primary-light text-sm mb-6">
                    Let's discuss how {currentService.title} can transform your business.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 text-sm font-medium hover:bg-carbon-10 transition-colors"
                  >
                    Start a Conversation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Process */}
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
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
                How We Work
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-carbon-30">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-6 text-center group hover:bg-carbon-10 transition-colors"
              >
                <div className="text-4xl font-light text-primary mb-4">{step.step}</div>
                <h3 className="text-lg font-medium text-carbon-100 mb-2">{step.title}</h3>
                <p className="text-sm text-carbon-60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technology Stack */}
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
                Technology Stack
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
                Technologies We Use
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-carbon-20">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                className="bg-white p-6 text-center group hover:bg-carbon-10 transition-colors"
              >
                <p className="font-medium text-carbon-100 group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
                <p className="text-xs text-carbon-50 mt-1">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner />
    </motion.main>
  );
};

export default Services;
