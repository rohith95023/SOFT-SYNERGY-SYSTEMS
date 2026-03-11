import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { BLOG_POSTS } from '../constants/blog';
import { formatDate } from '../utils/cn';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt}
        ogType="article"
      />
      
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-background-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:gap-3 transition-all duration-300">
              <ArrowLeft size={16} /> Back to Insights
            </Link>
            
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <Badge variant="primary">{post.category}</Badge>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-light uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.date)}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
              </div>
            </div>

            <h1 className="text-navy text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </Container>
      </section>

      <Section className="pt-0">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-[2.5rem] overflow-hidden shadow-strong mb-16 h-[300px] md:h-[500px]"
            >
              <img 
                src={post.thumbnail} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Main Content */}
              <div className="lg:grow order-2 lg:order-1">
                <article className="prose prose-lg max-w-none prose-headings:text-navy prose-p:text-slate prose-a:text-primary prose-strong:text-navy prose-img:rounded-3xl">
                  <p className="text-xl font-medium text-slate-dark mb-10 leading-relaxed italic border-l-4 border-l-primary/20 pl-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-8 text-slate leading-[1.8]">
                    <p>
                      In the rapidly evolving landscape of 2026, technology is no longer just an enabler—it is the core heartbeat of every modern enterprise. As we navigate this digital era, understanding the intersection of advanced engineering and strategic business goals becomes paramount.
                    </p>
                    
                    <h2 className="text-3xl font-extrabold text-navy pt-8">The Strategic Shift</h2>
                    <p>
                      We are seeing a fundamental shift in how organizations approach digital transformation. It is no longer about isolated applications but about integrated ecosystems driven by data and intelligence. For global businesses, the challenge lies in maintaining agility while meeting the rigorous demands of enterprise-grade security and scalability.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-navy pt-4">Key Priorities for Digital Leaders</h3>
                    <ul className="list-disc pl-6 space-y-4 font-medium">
                      <li>Strategic adoption of Generative AI and RAG architectures</li>
                      <li>Modernizing legacy backends into microservices and event-driven systems</li>
                      <li>Implementing robust QA automation to speed up delivery pipelines</li>
                      <li>Ensuring WCAG compliance and accessible design practices</li>
                    </ul>

                    <p className="bg-primary/5 p-8 rounded-2xl border border-primary/10 font-bold text-primary italic">
                      "Excellence in technology is found at the intersection of synergy and innovation. Every line of code should contribute to a larger business outcome."
                    </p>

                    <p>
                      As we look further into 2026, the focus will increasingly move towards sustainable and ethical AI development. Building trust with stakeholders through transparent technology practices is as important as the performance metrics of the applications themselves.
                    </p>
                  </div>
                </article>

                {/* Tags */}
                <div className="mt-16 pt-8 border-t border-slate-light/10 flex flex-wrap gap-3">
                  {['Digital Transformation', 'Enterprise Tech', 'Innovation', 'Future Tech'].map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-light uppercase tracking-widest px-4 py-2 bg-background-light rounded-lg">#{tag}</span>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:w-72 shrink-0 space-y-12 order-1 lg:order-2">
                {/* Author Info */}
                <div className="p-8 rounded-2xl bg-background-light border border-slate-light/10">
                  <p className="text-xs font-extrabold tracking-widest text-primary uppercase mb-6">Article Author</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary text-xl">S</div>
                    <div>
                      <p className="font-bold text-navy leading-tight">{post.author}</p>
                      <p className="text-xs text-slate-light mt-1">Lead Architect</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-light leading-relaxed">Expert in specialized technology solutions at Soft Synergy Systems.</p>
                </div>

                {/* Social Share */}
                <div>
                  <p className="text-xs font-extrabold tracking-widest text-primary uppercase mb-6">Share This Story</p>
                  <div className="flex gap-4">
                    {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                      <button key={i} className="w-12 h-12 rounded-full bg-white border border-slate-light/10 flex items-center justify-center shadow-soft hover:bg-primary hover:text-white hover:-translate-y-1 transition-standard group">
                        <Icon size={18} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 rounded-3xl bg-navy text-white text-center">
                  <h4 className="text-lg font-bold mb-4">Let's Build Something Great</h4>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">Partner with us for your next project.</p>
                  <Link to="/contact">
                    <Button variant="secondary" size="sm" className="w-full">Get a Quote</Button>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BlogDetail;
