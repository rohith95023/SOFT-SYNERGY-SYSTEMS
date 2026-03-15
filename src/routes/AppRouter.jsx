/**
 * AppRouter — Application Route Definitions
 * ==========================================
 * All route definitions live here, not in App.jsx.
 * App.jsx is thin: providers + <AppRouter />.
 *
 * Pattern: Lazy-load all page-level components (RULES PRD §16.2).
 *
 * @module routes/AppRouter
 */

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import ErrorBoundary from '../components/common/ErrorBoundary';

// ── Lazy-loaded pages (reduces initial bundle size) ───────────────────
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogDetail = lazy(() => import('../pages/BlogDetail'));
const Contact = lazy(() => import('../pages/Contact'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Careers = lazy(() => import('../pages/Careers'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Legal pages are small — import together with layout
import { PrivacyPolicy, Terms, CookiePolicy, Support } from '../pages/LegalPages';

/** Full-screen loading indicator shown while lazy chunks load */
const PageLoader = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-carbon-20 border-t-primary animate-spin" />
      <p className="text-carbon-60 text-sm font-light tracking-wide">Loading...</p>
    </div>
  </div>
);

/**
 * AppRouter — renders all application routes.
 * Wraps with ErrorBoundary so route-level errors don't crash the app.
 *
 * @returns {JSX.Element}
 */
const AppRouter = () => (
  <ErrorBoundary>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="cookies" element={<CookiePolicy />} />
          <Route path="support" element={<Support />} />
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </ErrorBoundary>
);

export default AppRouter;
