/**
 * Generic Analytics Utility for Tracking Page Views and Events
 * Integrates with Google Analytics and PostHog (placeholders for actual IDs)
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || ''; 
const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_KEY || '';

// Initialize tracking scripts (Call this in main.jsx or App.jsx)
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;

  // Example GA Initialization
  if (GA_MEASUREMENT_ID) {
    console.log(`Initialized GA with ID: ${GA_MEASUREMENT_ID}`);
    // Dynamically inject GA script here if needed
  }

  // Example PostHog Initialization
  if (POSTHOG_API_KEY) {
    console.log(`Initialized PostHog with Key: ${POSTHOG_API_KEY}`);
  }
};

/**
 * Track a page view
 * @param {string} path - The URL path of the page
 */
export const trackPageView = (path) => {
  if (typeof window === 'undefined') return;
  
  // Track Page View in GA
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: path });
  }

  // Track Page View in PostHog
  if (window.posthog) {
    window.posthog.capture('$pageview');
  }

  // Log in dev environment
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Page View: ${path}`);
  }
};

/**
 * Track a custom event (e.g., CTA clicks, form submissions)
 * @param {string} eventName - Name of the event
 * @param {object} properties - Additional event data properties
 */
export const trackEvent = (eventName, properties = {}) => {
  if (typeof window === 'undefined') return;

  // Example: Track Event in GA
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Example: Track Event in PostHog
  if (window.posthog) {
    window.posthog.capture(eventName, properties);
  }

  // Log in dev environment
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, properties);
  }
};
