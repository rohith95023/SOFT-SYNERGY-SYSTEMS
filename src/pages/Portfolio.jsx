import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { PORTFOLIO_DATA, CATEGORIES } from '../constants/portfolio';
import { cn } from '../utils/cn';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import CTABanner from '../sections/CTABanner';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(p => p.category === activeFilter);

  return (
    <>
      <SEO 
        title="Portfolio" 
        description="Explore our successful enterprise projects and digital transformation case studies across various industries."
      />
      <PageHero 
        title="Our Success Stories" 
        subtitle="How we've helped global enterprises achieve excellence through technology."
        breadcrumbs={[{ name: 'Portfolio' }]}
      />

      <Section>
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border",
                  activeFilter === cat 
                    ? "bg-primary text-white border-primary shadow-lg" 
                    : "bg-white text-slate border-slate-light/10 hover:border-primary/30 hover:bg-primary/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="h-full flex flex-col group overflow-hidden p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-white text-navy px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-standard">
                          View Project <ExternalLink size={16} />
                        </button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="accent" className="bg-white/90 text-navy shadow-lg backdrop-blur-sm">{project.category}</Badge>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{project.client}</p>
                      <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-standard">{project.title}</h3>
                      <p className="text-slate text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="pt-6 border-t border-slate-light/10 flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-light uppercase tracking-widest">Outcome</span>
                        <span className="text-success font-bold">{project.outcome}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
};

export default Portfolio;
