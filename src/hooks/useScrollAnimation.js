import { useEffect, useRef } from 'react';

/**
 * Applies a CSS class when an element enters the viewport.
 * Useful for scrollReveal-style CSS animations.
 * @param {string} visibleClass - Class to add when visible (default: 'visible')
 * @param {IntersectionObserverInit} options - Observer options
 */
const useScrollAnimation = (visibleClass = 'visible', options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, ...options });

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visibleClass]);

  return containerRef;
};

export default useScrollAnimation;
