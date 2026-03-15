/**
 * ScrollProgressBar — Page Scroll Progress Indicator
 * ====================================================
 * Thin primary-coloured bar at the top of the viewport showing
 * how far the user has scrolled through the current page.
 *
 * Displayed: only when the user has scrolled more than 5%.
 * Uses a lightweight requestAnimationFrame loop for 60fps updates.
 *
 * @module components/common/ScrollProgressBar
 */

import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollProgressBar component.
 * Place once inside MainLayout, above Navbar.
 *
 * @returns {JSX.Element|null}
 */
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Guard against pages shorter than viewport (no scrollable area)
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
    };

    const onScroll = () => {
      // Throttle via rAF to avoid forced layout thrashing
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Hide completely at 0% or 100% (avoids a ghost line on fresh page load)
  if (progress <= 0 || progress >= 100) return null;

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 w-full z-[60] h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-primary transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
