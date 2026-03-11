import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import { cn } from '../../utils/cn';

const PageHero = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
          <circle cx="90" cy="10" r="30" />
          <path d="M50,0 Q80,50 50,100 T50,200" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-6 text-sm font-semibold text-slate-light/60">
            <Link to="/" className="hover:text-primary transition-standard">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="h-4 w-4" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-primary transition-standard text-slate-light">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-white mb-6 max-w-2xl">{title}</h1>
          {subtitle && (
            <p className="text-xl text-slate-light max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default PageHero;
