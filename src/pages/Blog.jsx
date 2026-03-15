import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, Tag } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import { BLOG_POSTS } from '../constants';
import { submitNewsletterSignup } from '../services/contactService';

const categories = ['All', 'AI & ML', 'Automation', 'Web Dev', 'QA', 'Industry News'];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    const result = await submitNewsletterSignup(email);
    setStatus({ type: result.success ? 'success' : 'error', message: result.message });
    if (result.success) setEmail('');
    setIsSubmitting(false);
  };

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Blog & Insights - Soft Synergy Systems"
        description="Explore our latest insights on AI, automation, web development, and industry trends."
      />

      {/* Page Hero */}
      <PageHero
        title="Blog & Insights"
        subtitle="Thoughts on technology, innovation, and digital transformation"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' }
        ]}
      />

      {/* Search & Filter */}
      <Section className="bg-white pt-8">
        <Container>
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-carbon-50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-carbon-10 border border-carbon-20 text-carbon-100 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
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
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-carbon-20">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white group"
                >
                  {/* Image */}
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] bg-carbon-10 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary-soft text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-carbon-50">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-medium text-carbon-100 mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-carbon-60 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-carbon-60 mb-4">No articles found matching your criteria.</p>
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="bg-carbon-10">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-carbon-100 tracking-tight mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-carbon-60 mb-8">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="flex-grow px-4 py-3 bg-white border border-carbon-30 text-carbon-100 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                />
                <Button type="submit" icon={ArrowRight} disabled={isSubmitting}>
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
              {status.message && (
                <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                  {status.message}
                </p>
              )}
            </motion.div>
          </div>
        </Container>
      </Section>
    </motion.main>
  );
};

export default Blog;
