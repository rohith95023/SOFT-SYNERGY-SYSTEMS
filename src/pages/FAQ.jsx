import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Accordion from '../ui/Accordion';
import { FAQ_DATA } from '../constants/faq';
import { cn } from '../utils/cn';
import Button from '../ui/Button';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...FAQ_DATA.map(group => group.category)];

  const filteredData = FAQ_DATA.map(group => {
    if (activeCategory !== 'All' && group.category !== activeCategory) {
      return { ...group, items: [] };
    }
    const filteredItems = group.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...group, items: filteredItems };
  }).filter(group => group.items.length > 0);

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions" 
        description="Find answers to common questions about our technology services, industries, and engagement process."
      />
      <PageHero 
        title="How Can We Help?" 
        subtitle="Quick answers to frequently asked questions about Soft Synergy Systems."
        breadcrumbs={[{ name: 'FAQ' }]}
      />

      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Controls */}
            <div className="lg:w-1/4 lg:sticky lg:top-24 h-fit">
              <div className="mb-10">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-primary mb-6">Search FAQ</h4>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-light h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-light/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-primary mb-6">Categories</h4>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "text-left px-5 py-3 rounded-xl font-bold transition-all duration-300",
                        activeCategory === cat 
                          ? "bg-primary text-white shadow-md" 
                          : "text-slate hover:bg-primary/5 hover:text-primary"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="mt-12 bg-navy rounded-3xl p-8 text-white text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold mb-4">Still have questions?</h4>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">Our support team is always here to assist you.</p>
                <Link to="/contact">
                  <Button variant="secondary" size="sm" className="w-full">Contact Support</Button>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="space-y-16">
                <AnimatePresence mode="wait">
                  {filteredData.length > 0 ? (
                    filteredData.map((group) => (
                      <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-2xl font-black text-navy mb-8 flex items-center gap-4">
                          <span className="w-1.5 h-8 bg-primary rounded-full" />
                          {group.category} Questions
                        </h3>
                        <div className="bg-white rounded-[2rem] p-6 shadow-medium border border-slate-light/5">
                          <Accordion items={group.items} />
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-20 bg-background-light rounded-3xl">
                      <p className="text-slate text-lg font-medium">No results found for "{searchQuery}"</p>
                      <button 
                        onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                        className="mt-4 text-primary font-bold hover:underline"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default FAQ;
