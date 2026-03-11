import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import CTABanner from '../sections/CTABanner';
import { PORTFOLIO_ITEMS } from '../constants/portfolio';

const filters = ['All', 'Banking', 'Healthcare', 'E-commerce', 'Telecom'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.industry === activeFilter);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Portfolio - Soft Synergy Systems"
        description="Explore our portfolio of successful projects across Banking, Healthcare, E-commerce, and Telecom industries."
      />

      {/* Page Hero */}
      <PageHero
        title="Our Portfolio"
        subtitle="Case studies showcasing our impact across industries"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Portfolio', path: '/portfolio' }
        ]}
      />

      {/* Filter Tabs */}
      <Section className="bg-white pt-8">
        <Container>
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-sm font-medium transition-colors ${activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-carbon-10 text-carbon-80 hover:bg-carbon-20'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-carbon-20">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white group"
              >
                {/* Image */}
                <div className="aspect-[16/10] bg-carbon-10 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest font-semibold text-primary mb-2 block">
                    {item.industry}
                  </span>
                  <h3 className="text-lg font-medium text-carbon-100 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-carbon-60 mb-4">
                    {item.description}
                  </p>

                  {/* Stats */}
                  {item.stats && (
                    <div className="flex gap-6 pt-4 border-t border-carbon-20">
                      {item.stats.map((stat, i) => (
                        <div key={i}>
                          <p className="text-lg font-medium text-primary">{stat.value}</p>
                          <p className="text-xs text-carbon-50">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Results Section */}
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
                Impact & Results
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
                Measurable Business Outcomes
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-carbon-30">
            {[
              { value: '40%', label: 'Average Efficiency Gain' },
              { value: '60%', label: 'Cost Reduction' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Projects Delivered' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 text-center"
              >
                <p className="text-3xl font-light text-primary mb-2">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-carbon-50">{stat.label}</p>
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

export default Portfolio;
