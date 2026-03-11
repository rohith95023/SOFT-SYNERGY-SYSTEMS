import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../layout/Container';
import Button from '../ui/Button';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
      />
      
      <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden relative">
        {/* Background Glitch Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block mb-12">
              <span className="text-[12rem] md:text-[20rem] font-black text-navy opacity-5 leading-none">404</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-primary rounded-3xl rotate-12 flex items-center justify-center shadow-strong border-4 border-white">
                  <span className="text-white text-4xl md:text-6xl font-black -rotate-12">?</span>
                </div>
              </div>
            </div>

            <h1 className="text-navy text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Something Went Wrong</h1>
            <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              We couldn't find the page you're looking for. It might have been moved or doesn't exist anymore. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="px-10 py-5" icon={Home} iconPosition="left">
                  Back to Home
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="outline" size="lg" className="px-10 py-5" icon={MessageCircle}>
                  Visit Support
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Quick Links for 404 */}
          <div className="mt-20 pt-10 border-t border-slate-light/10 max-w-lg mx-auto">
            <p className="text-xs uppercase font-extrabold tracking-widest text-primary mb-6">Popular Pages</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['Services', 'Portfolio', 'About Us', 'Contact'].map(link => (
                <Link 
                  key={link} 
                  to={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-bold text-navy hover:text-primary transition-standard"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default NotFound;
