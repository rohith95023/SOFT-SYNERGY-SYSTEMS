import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { SERVICE_LIST } from '../constants/services';
import { cn } from '../utils/cn';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICE_LIST[0].id);

  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore our specialized technology divisions: AI & Python, QA Services, Enterprise Java, and Full Stack Web Development."
      />
      <PageHero 
        title="Specialized Technology Divisions" 
        subtitle="End-to-end engineering excellence across AI, automation, and enterprise software."
        breadcrumbs={[{ name: 'Services' }]}
      />

      <Section className="pb-0 overflow-visible">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/3 lg:sticky lg:top-24 z-20">
              <div className="bg-white rounded-3xl shadow-strong border border-slate-light/10 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6 px-4">Service Categories</p>
                <div className="flex flex-col gap-2">
                  {SERVICE_LIST.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveTab(service.id)}
                      className={cn(
                        "flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 text-left group",
                        activeTab === service.id 
                          ? "bg-primary text-white shadow-lg" 
                          : "hover:bg-primary/5 text-navy"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                        activeTab === service.id ? "bg-white/20" : "bg-primary/5 group-hover:bg-primary group-hover:text-white"
                      )}>
                        <service.icon className="h-5 w-5" />
                      </div>
                      <span className="font-bold text-sm leading-tight">{service.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Sidebar Card */}
              <div className="mt-8 bg-navy rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-xl font-bold mb-4 relative z-10">Need a Custom Solution?</h4>
                <p className="text-white/70 text-sm mb-6 leading-relaxed relative z-10">
                  Talk to our experts about your specific project requirements.
                </p>
                <Button variant="secondary" className="w-full relative z-10" icon={ArrowRight}>Get Started</Button>
              </div>
            </div>

            {/* Detailed Content */}
            <div className="lg:w-2/3 min-h-[600px]">
              <AnimatePresence mode="wait">
                {SERVICE_LIST.filter(s => s.id === activeTab).map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-medium border border-slate-light/5">
                      <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mb-10">
                        <service.icon className="h-10 w-10 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-8">{service.title}</h2>
                      <p className="text-slate text-xl mb-10 leading-relaxed font-medium">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div>
                          <h4 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-6">Core Capabilities</h4>
                          <ul className="space-y-4">
                            {service.capabilities.map((cap, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                                <span className="text-slate font-medium">{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-6">Target Industries</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((ind, i) => (
                              <span key={i} className="px-4 py-2 bg-background-light text-navy rounded-full text-xs font-bold border border-slate-light/10">
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-10 border-t border-slate-light/10 flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-light font-semibold mb-1">Ready to start?</p>
                          <p className="text-lg font-bold text-navy">Request a consultation today.</p>
                        </div>
                        <Button size="lg" icon={ArrowRight}>Start Discussion</Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section light className="mt-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 inline-block">Workflow</span>
            <h2 className="text-4xl font-extrabold text-navy mb-6">Our Engineering Process</h2>
            <p className="text-slate font-medium text-lg leading-relaxed">
              We follow a structured 5-step methodology to ensure every solution we build is robust, scalable, and perfectly aligned with business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Connecting line for desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 hidden md:block" />
            
            {[
              { n: '01', t: 'Discovery', d: 'In-depth analysis of requirements and constraints.' },
              { n: '02', t: 'Architect', d: 'Designing scalable and modern architectures.' },
              { n: '03', t: 'Develop', d: 'Agile development with continuous integration.' },
              { n: '04', t: 'Validate', d: 'Rigorous end-to-end testing and QA.' },
              { n: '05', t: 'Deliver', d: 'Seamless deployment and ongoing support.' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 group text-center px-4">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mx-auto mb-8 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-soft">
                  <span className="text-primary font-black text-xl">{step.n}</span>
                </div>
                <h4 className="text-lg font-bold text-navy mb-3">{step.t}</h4>
                <p className="text-slate-light text-xs leading-relaxed font-semibold">{step.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack Horizontal Scroll Placeholder */}
      <Section className="bg-white border-t border-slate-light/5">
        <Container>
          <div className="flex flex-col items-center">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-light mb-12">Our Core Technology Stack</h4>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-standard duration-500">
              {['React', 'Python', 'Java', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="text-2xl font-black text-navy">{tech}</span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Services;
