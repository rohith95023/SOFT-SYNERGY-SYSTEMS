import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Container from '../components/layout/Container';
import backgroundVideo from '../assets/background.mp4';

const HeroSection = () => {
  return (
    <>
      <section className="relative flex items-center overflow-hidden bg-white mt-20 md:mt-24 min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] py-12 md:py-20 lg:py-24">
        {/* Enterprise-style Grid Background */}
        <div className="absolute inset-0 z-0">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={`${backgroundVideo}?v=2`} type="video/mp4" />
          </video>
           
          {/* Gradient Overlay - ensuring text is readable on left but video is bright on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-white/10" />

          {/* Animated Grid Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#008b96" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        <Container className="relative z-10 w-full">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >


              {/* Main Headline */}
              <h1 className="text-carbon-100 mb-8 leading-[1.1]">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                  Innovating for a
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-2">
                  <span className="text-primary">Digital Era</span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-carbon-80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
                Soft Synergy Systems delivers enterprise-grade AI, automation, and software solutions
                that drive intelligence, efficiency, and growth for global businesses.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                    className="border-2 border-carbon-100 bg-white/50 text-carbon-100 hover:bg-carbon-100 hover:text-white backdrop-blur-sm"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>


    </>
  );
};

export default HeroSection;
