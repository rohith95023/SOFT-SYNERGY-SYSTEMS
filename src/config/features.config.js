/**
 * Feature Flags — Configuration-Driven Development
 * =================================================
 * Controls which features are enabled without changing code.
 * Set VITE_FEATURE_* variables in .env to override.
 *
 * RULE: Never hard-code feature toggles inside components.
 * Import from this file instead.
 *
 * @module config/features.config
 */

import appConfig from './app.config';

/**
 * Feature flag map for the application.
 * @type {Readonly<Record<string, boolean>>}
 */
const featuresConfig = Object.freeze({
  /** Dark Mode toggle in Navbar — fully rolled out */
  darkMode: true,

  /** Newsletter signup strip in Footer */
  newsletter: true,

  /** Scroll Progress Bar at top of viewport */
  scrollProgressBar: true,

  /** Cookie consent banner */
  cookieBanner: true,

  /** Google Analytics tracking */
  analytics: appConfig.analytics.gaMeasurementId ? true : false,

  /** AI Recommendations for blog — still in testing */
  aiRecommend: false,

  /** Live Chat Widget (Tawk.to / Crisp) */
  liveChat: appConfig.features.liveChat,

  /** Beta checkout flow */
  betaCheckout: appConfig.features.betaCheckout,
});

export default featuresConfig;
