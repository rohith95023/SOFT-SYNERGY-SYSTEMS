import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';

import { ERROR_PAGE, GLOBAL_STRINGS } from '../constants/shared.constants';

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-32 pb-20 min-h-[80vh] flex items-center"
    >
      <SEO
        title={ERROR_PAGE.notFound.title}
        description={ERROR_PAGE.notFound.message}
      />

      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl md:text-9xl font-light text-primary/20 leading-none mb-8">
              {ERROR_PAGE.notFound.code}
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-carbon-100 mb-6 tracking-tight">
              {ERROR_PAGE.notFound.title}
            </h2>
            <p className="text-lg text-carbon-60 mb-10 max-w-md mx-auto">
              {ERROR_PAGE.notFound.message}
              {ERROR_PAGE.notFound.subMessage}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ERROR_PAGE.notFound.buttonLink}>
                <Button icon={Home}>
                  {ERROR_PAGE.notFound.buttonText}
                </Button>
              </Link>
              <Link to={ERROR_PAGE.notFound.secondaryButtonLink}>
                <Button variant="ghost" icon={ArrowRight}>
                  {ERROR_PAGE.notFound.secondaryButtonText}
                </Button>
              </Link>
            </div>

            {/* Divider */}
            <div className="my-12 flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-carbon-30" />
              <span className="text-xs uppercase tracking-widest text-carbon-50">{GLOBAL_STRINGS.or}</span>
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
