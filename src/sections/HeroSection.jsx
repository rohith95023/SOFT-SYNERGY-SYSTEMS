import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Container from '../components/layout/Container';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* IBM-style Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-carbon-10 to-primary-soft" />

        {/* Animated Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0f62fe" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-none"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 left-[5%] w-48 h-48 bg-accent/5 rounded-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/10 rounded-none"
        />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-primary text-white text-xs font-medium tracking-widest uppercase">
                ISO Certified Organization
              </span>
              <span className="text-carbon-70 text-sm font-medium">10+ Years of Excellence</span>
            </div>

            {/* Main Headline - IBM Carbon Style */}
            <h1 className="text-carbon-100 mb-8 leading-[1.1]">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                Innovating for a
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-2">
                <span className="text-primary">Digital Era</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-carbon-70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
              Soft Synergy Systems delivers enterprise-grade AI, automation, and software solutions
              that drive intelligence, efficiency, and growth for global businesses.
            </p>

            {/* CTA Buttons - IBM Style */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link to="/services">
                <Button
                  size="lg"
                  className="group"
                  icon={ArrowRight}
                >
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-carbon-100 text-carbon-100 hover:bg-carbon-100 hover:text-white"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Trust Bar - IBM Style Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-10 border-t border-carbon-30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '50+', label: 'Enterprise Clients' },
                { value: '4', label: 'Core Divisions' },
                { value: '7+', label: 'Industries Served' },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <p className="text-3xl md:text-4xl font-light text-carbon-100 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest font-medium text-carbon-60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-carbon-50 font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-carbon-50" />
        </motion.div>
      </motion.div>

      {/* Side Decoration - IBM Style */}
      <div className="absolute right-0 top-0 h-full w-1 bg-primary hidden lg:block" />
      <div className="absolute right-4 top-1/4 h-24 w-1 bg-accent hidden lg:block" />
      <div className="absolute right-4 bottom-1/4 h-16 w-1 bg-primary-light hidden lg:block" />
    </section>
  );
};

export default HeroSection;
