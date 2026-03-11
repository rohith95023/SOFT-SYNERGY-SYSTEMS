import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../layout/Container';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-700" />
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Empowering Digital Transformation
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]">
              Innovating for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Digital Era</span>
            </h1>
            <p className="text-slate-light text-lg md:text-xl mb-10 max-w-2xl leading-relaxed opacity-80">
              Soft Synergy Systems delivers cutting-edge AI, automation, and enterprise software solutions that drive intelligence and growth for global businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto" icon={ArrowRight}>
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/5" icon={Play}>
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-8 md:gap-16"
          >
            <div>
              <p className="text-white font-bold text-xl mb-1">10+ Years</p>
              <p className="text-slate-light text-xs uppercase tracking-wider font-semibold">Experience</p>
            </div>
            <div>
              <p className="text-white font-bold text-xl mb-1">ISO Certified</p>
              <p className="text-slate-light text-xs uppercase tracking-wider font-semibold">Organization</p>
            </div>
            <div>
              <p className="text-white font-bold text-xl mb-1">50+ Clients</p>
              <p className="text-slate-light text-xs uppercase tracking-wider font-semibold">Global Scale</p>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
