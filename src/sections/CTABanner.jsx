import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';

const CTABanner = () => {
  return (
    <Section className="py-0">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 md:px-16 md:py-20 shadow-strong">
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <circle cx="80" cy="20" r="40" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Ready to Transform Your Business with Advanced Technology?
              </h2>
              <p className="text-white/80 text-lg md:text-xl">
                Partner with Soft Synergy Systems to leverage AI, automation, and enterprise-grade software built for the future.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg px-10 py-5 text-xl"
                  icon={ArrowRight}
                >
                  Start a Conversation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CTABanner;
