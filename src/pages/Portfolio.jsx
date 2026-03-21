import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import CTABanner from '../sections/CTABanner';
import { 
  PORTFOLIO_HERO, 
  PORTFOLIO_FILTERS, 
  PORTFOLIO_ITEMS, 
  PORTFOLIO_RESULTS, 
  PORTFOLIO_CTA,
  PORTFOLIO_SEO
} from '../constants/portfolio.constants';
import { trackEvent } from '../utils/analytics';

const categories = PORTFOLIO_FILTERS.categories;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    trackEvent('portfolio_filter_click', { filterId });
  };

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.industry === activeFilter || item.category === activeFilter);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title={`${PORTFOLIO_SEO.title} - Soft Synergy Systems`}
        description={PORTFOLIO_SEO.description}
        keywords={PORTFOLIO_SEO.keywords}
      />

      {/* Page Hero */}
      <PageHero
        title={PORTFOLIO_HERO.title}
        subtitle={PORTFOLIO_HERO.subtitle}
        breadcrumbs={PORTFOLIO_HERO.breadcrumb}
      />

      {/* Filter Tabs */}
      <Section className="bg-white pt-8">
        <Container>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                className={`px-5 py-2.5 text-sm font-medium transition-colors ${activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-carbon-10 text-carbon-80 hover:bg-carbon-20'
                  }`}
              >
                {filter.label}
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
                {PORTFOLIO_RESULTS.title}
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-carbon-30">
            {PORTFOLIO_RESULTS.highlights.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 text-center"
              >
                <p className="text-3xl font-light text-primary mb-2">{stat.metric}</p>
                <p className="text-xs uppercase tracking-widest text-carbon-50">{stat.description}</p>
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

