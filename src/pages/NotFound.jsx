import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-carbon-10 flex items-center justify-center"
    >
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
      />

      <Container>
        <div className="text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-[10rem] md:text-[14rem] font-light text-carbon-30 leading-none">
                404
              </span>
            </div>

            {/* Message */}
            <h1 className="text-3xl md:text-4xl font-light text-carbon-100 tracking-tight mb-4">
              Page Not Found
            </h1>
            <p className="text-carbon-60 max-w-md mx-auto mb-10">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button icon={Home}>
                  Back to Home
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="ghost" icon={ArrowRight}>
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Divider */}
            <div className="my-12 flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-carbon-30" />
              <span className="text-xs uppercase tracking-widest text-carbon-50">or</span>
              <div className="w-16 h-px bg-carbon-30" />
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Blog', path: '/blog' },
                { label: 'FAQ', path: '/faq' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-carbon-60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.main>
  );
};

export default NotFound;
