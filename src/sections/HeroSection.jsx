import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Container from '../components/layout/Container';
import backgroundVideo from '../assets/hero background video/background video.mp4';
import { HERO_DATA } from '../constants';

/**
 * Memoized Video Background
 * -------------------------
 * Separate component to prevent video re-loading or re-evaluation
 * when parent slide state changes.
 */
const VideoBackground = memo(() => {
  return (
    <div className="absolute inset-0 z-0 bg-white">
      {/* object-contain shows full video frame — no zoom-in distortion */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
        style={{ pointerEvents: 'none', objectPosition: 'center right' }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay — covers blank edges from object-contain */}
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-white/10" />

      {/* Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#008b96" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
      </svg>
    </div>
  );
});

VideoBackground.displayName = 'VideoBackground';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { slides, primaryCTA, secondaryCTA } = HERO_DATA;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section className="relative flex items-center overflow-hidden min-h-[65vh] md:min-h-[70vh] lg:min-h-[90vh] py-12 md:py-20 lg:py-24">
        <VideoBackground />

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
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
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
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index
                        ? 'w-10 bg-primary'
                        : 'w-4 bg-carbon-100/20 hover:bg-carbon-100/40'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={primaryCTA.link}>
                  <Button size="lg" className="group" icon={ArrowRight}>
                    {primaryCTA.text}
                  </Button>
                </Link>
                <Link to={secondaryCTA.link}>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="border-2 border-carbon-100 bg-white/50 text-carbon-100 hover:bg-carbon-100 hover:text-white backdrop-blur-sm"
                  >
                    {secondaryCTA.text}
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
