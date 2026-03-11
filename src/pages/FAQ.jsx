import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import CTABanner from '../sections/CTABanner';
import { FAQ_DATA } from '../constants';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');
  const [openItems, setOpenItems] = useState({});

  const categories = [...new Set(FAQ_DATA.map(item => item.category))];

  const filteredFAQs = FAQ_DATA.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="FAQ - Soft Synergy Systems"
        description="Find answers to frequently asked questions about our services, processes, and more."
      />

      {/* Page Hero */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and processes"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'FAQ', path: '/faq' }
        ]}
      />

      {/* Search & Filter */}
      <Section className="bg-white pt-8">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-carbon-50" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-carbon-10 border border-carbon-20 text-carbon-100 focus:border-primary focus:outline-none transition-colors text-lg"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${activeCategory === 'All'
                  ? 'bg-primary text-white'
                  : 'bg-carbon-10 text-carbon-80 hover:bg-carbon-20'
                  }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-carbon-10 text-carbon-80 hover:bg-carbon-20'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="border-t border-carbon-20">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-carbon-20"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-6 flex items-start justify-between gap-4 text-left group"
                    >
                      <span className="text-base font-medium text-carbon-100 group-hover:text-primary transition-colors">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-carbon-50 shrink-0 mt-1 transition-transform duration-200 ${openItems[item.id] ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openItems[item.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-carbon-60 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-carbon-60">No questions found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner />
    </motion.main>
  );
};

export default FAQ;
