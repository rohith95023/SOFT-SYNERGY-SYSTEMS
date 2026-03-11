import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import { BLOG_POSTS } from '../constants/blog';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title={post.title}
        description={post.excerpt}
        ogType="article"
      />

      {/* Article Header */}
      <section className="pt-32 pb-16 bg-carbon-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-carbon-60 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-6">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-2 text-sm text-carbon-50">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-carbon-100 tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-carbon-60 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto -mt-8"
          >
            <div className="aspect-[16/9] bg-carbon-20 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-carbon-60 leading-relaxed text-lg">
                {post.content}
              </p>

              <p className="text-carbon-60 leading-relaxed mt-6">
                This is a sample blog post content. In a real implementation, this would contain
                the full article content with proper formatting, images, and other media elements.
                The content would be fetched from a CMS or markdown files.
              </p>

              <h2 className="text-2xl font-light text-carbon-100 mt-10 mb-4">Key Takeaways</h2>
              <ul className="text-carbon-60 space-y-3">
                <li>Understanding the core concepts and their practical applications</li>
                <li>Best practices for implementation in enterprise environments</li>
                <li>Real-world examples and case studies</li>
                <li>Future trends and considerations</li>
              </ul>
            </motion.article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-carbon-20">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-carbon-80">Share this article</span>
                <div className="flex gap-3">
                  {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="w-10 h-10 bg-carbon-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section className="bg-carbon-10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light text-carbon-100 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white p-6 group hover:shadow-soft transition-shadow"
                >
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-medium text-carbon-100 mt-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-carbon-50 mt-2">{relatedPost.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </motion.main>
  );
};

export default BlogDetail;
