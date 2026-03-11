import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Container from '../components/layout/Container';
import backgroundVideo from '../assets/background.mp4';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title1: "Innovating for a",
      title2: "Digital Era",
      description: "Soft Synergy Systems delivers enterprise-grade AI, automation, and software solutions that drive intelligence, efficiency, and growth for global businesses."
    },
    {
      title1: "Scaling Visionary",
      title2: "Startups",
      description: "Transform innovative concepts into market-ready products with our agile development, rapid prototyping, and robust architectural solutions."
    },
    {
      title1: "Empowering Next-Gen",
      title2: "Tech Talent",
      description: "Launch your career with comprehensive training, elite mentorship, and hands-on experience in cutting-edge AI and software engineering."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section className="relative flex items-center overflow-hidden min-h-[70vh] md:min-h-[75vh] lg:min-h-screen py-12 md:py-20 lg:py-24">
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


              <div className="min-h-[250px] sm:min-h-[280px] md:min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {/* Main Headline */}
                    <h1 className="text-carbon-100 mb-8 leading-[1.1]">
                      <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                        {slides[currentSlide].title1}
                      </span>
                      <span className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-2">
                        <span className="text-primary">{slides[currentSlide].title2}</span>
                      </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-carbon-80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
                      {slides[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="flex space-x-3 mb-10 -mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-10 bg-primary' : 'w-4 bg-carbon-100/20 hover:bg-carbon-100/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

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
