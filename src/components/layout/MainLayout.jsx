/**
 * MainLayout — Primary App Shell
 * ================================
 * Wraps every page with Navbar, Footer, and cross-cutting UI:
 * - Skip-to-main-content link (WCAG 2.1 AA, first focusable element)
 * - ScrollProgressBar (thin indicator at top)
 * - ScrollToTop floating button
 * - CookieBanner
 *
 * @module components/layout/MainLayout
 */

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';
import CookieBanner from '../common/CookieBanner';
import ScrollProgressBar from '../common/ScrollProgressBar';

/**
 * MainLayout renders the persistent shell around every page.
 * @returns {JSX.Element}
 */
const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change for consistent user experience
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Skip to main content — first focusable element for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:rounded"
      >
        Skip to main content
      </a>

      {/* Scroll progress bar — sits above the navbar */}
      <ScrollProgressBar />

      <Navbar />

      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </div>
  );
};

export default MainLayout;

