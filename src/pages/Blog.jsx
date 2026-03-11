import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../constants/blog';
import { cn } from '../utils/cn';
import { formatDate } from '../utils/cn';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Insights & Blog" 
        description="Stay updated with the latest trends in AI, automation, software engineering, and digital transformation."
      />
      <PageHero 
        title="Knowledge & Insights" 
        subtitle="Thought leadership and technical articles from our specialized engineering teams."
        breadcrumbs={[{ name: 'Blog' }]}
      />

      <Section>
        <Container>
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-16">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                    activeCategory === cat 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-background-light text-slate hover:bg-primary/5 border border-slate-light/10"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-light h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-light/10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Card className="h-full flex flex-col group p-0 overflow-hidden">
                    <Link to={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="primary" className="bg-primary/90 text-white shadow-lg backdrop-blur-sm">{post.category}</Badge>
                      </div>
                    </Link>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs font-bold text-slate-light uppercase tracking-widest mb-4">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.date)}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-extrabold text-navy mb-4 group-hover:text-primary transition-standard leading-tight">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-slate text-sm mb-8 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-standard"
                      >
                        Read Full Article <ArrowRight size={16} />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate text-lg font-medium">No articles found matching your criteria.</p>
              <button 
                onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter signup */}
      <Section light>
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-navy p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 relative z-10">Subscribe to our Newsletter</h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Get the latest industry updates, technology trends, and company insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10">
              <input 
                type="email" 
                placeholder="Work Email Address" 
                className="grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
                required
              />
              <Button variant="secondary" className="px-8 whitespace-nowrap">Join Now</Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Blog;
