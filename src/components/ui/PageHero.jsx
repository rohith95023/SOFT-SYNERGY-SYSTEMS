import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Container from '../layout/Container';

const PageHero = ({ title, subtitle, breadcrumbs, backgroundImage }) => {
  return (
    <section className="relative bg-carbon-100 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pageGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pageGrid)" />
        </svg>
      </div>

      {/* Accent Bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                {breadcrumbs.map((crumb, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {idx > 0 && <ChevronRight className="h-4 w-4 text-carbon-50" />}
                    {crumb.path ? (
                      <Link
                        to={crumb.path}
                        className="text-carbon-50 hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-carbon-40 max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-carbon-70" />
    </section>
  );
};

export default PageHero;
