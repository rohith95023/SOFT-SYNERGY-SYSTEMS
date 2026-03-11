import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that wraps IntersectionObserver
 * @param {IntersectionObserverInit} options - Observer options
 * @returns {{ ref, isIntersecting, hasIntersected }}
 */
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) setHasIntersected(true);
    }, { threshold: 0.1, ...options });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isIntersecting, hasIntersected };
};

export default useIntersectionObserver;
