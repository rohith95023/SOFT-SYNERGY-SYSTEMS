import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { BLOG_POSTS } from '../constants';

const BlogPreviewSection = () => {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <Section className="bg-white" id="blog">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
              Insights & Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight">
              Latest from Our Blog
            </h2>
          </motion.div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-carbon-20">
          {latestPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white group"
            >
              {/* Image */}
              <Link to={`/blog/${post.slug}`}>
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary-soft text-primary text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-carbon-50">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-medium text-carbon-100 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-carbon-60 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BlogPreviewSection;
