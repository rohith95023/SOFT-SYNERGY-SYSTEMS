import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { OFFICE_PHOTOS_DATA } from '../constants';
import { cn } from '../utils/cn';

const OfficePhotosSection = () => {
  const { sectionBadge, sectionTitle, sectionSubtitle, photos } = OFFICE_PHOTOS_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Section className="bg-carbon-10 overflow-hidden py-12 md:py-16" id="office">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-carbon-100 mb-6 tracking-tight">
              {sectionTitle}
            </h2>
            <p className="text-lg text-carbon-60 font-light leading-relaxed">
              {sectionSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-4">
          <div className="flex items-center justify-center min-h-[250px] md:min-h-[480px] transition-all">
            <div className="relative w-full max-w-6xl flex items-center justify-center">
              {photos.map((photo, idx) => {
                let position = idx - currentIndex;
                if (position < -photos.length / 2) position += photos.length;
                if (position > photos.length / 2) position -= photos.length;

                // Optimization: Hide elements that are too far away
                const isVisible = Math.abs(position) <= 2;

                return (
                  <motion.div
                    key={photo.id}
                    animate={{
                      opacity: position === 0 ? 1 : isVisible ? 0.4 : 0,
                      scale: position === 0 ? 1 : 0.8,
                      zIndex: 10 - Math.abs(position),
                      x: position * (isMobile ? 240 : 500),
                      display: isVisible ? 'block' : 'none',
                    }}
                    transition={{
                      type: 'tween',
                      ease: 'easeInOut',
                      duration: 0.5,
                    }}
                    className={cn(
                      "absolute w-[300px] h-[180px] md:w-[700px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer will-change-transform",
                      position === 0 ? "shadow-primary/20" : ""
                    )}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={450}
                      onDragStart={(e) => e.preventDefault()}
                    />
                    {position === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/60 to-transparent text-white">
                        <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">Soft Synergy Systems</h3>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-8 mt-12 md:mt-16">
            <button
              onClick={handlePrev}
              className="p-4 rounded-full border border-carbon-20 text-carbon-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    currentIndex === i ? "w-8 bg-primary" : "w-2 bg-carbon-30 hover:bg-carbon-40"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-4 rounded-full border border-carbon-20 text-carbon-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OfficePhotosSection;
