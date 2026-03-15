/**
 * App Configuration — Centralized Environment & Config Loader
 * ============================================================
 * Single source of truth for all configuration values.
 * Import from this module instead of reading import.meta.env directly.
 *
 * RULE: No other file in the codebase should access import.meta.env.
 * If you add a new env variable, add it here first.
 *
 * @module config/app.config
 */

const env = import.meta.env;

// ── Required Variables ────────────────────────────────────────────────
// These will log a warning in development if missing.
const REQUIRED_KEYS = ['VITE_CONTACT_EMAIL'];
const missingKeys = REQUIRED_KEYS.filter((key) => !env[key]);
if (import.meta.env.DEV && missingKeys.length > 0) {
  // Warn loudly in development so developers notice
  console.warn(
    `[Config] Missing recommended env variables: ${missingKeys.join(', ')}.\n` +
    `Copy .env.example to .env and fill in the values.`
  );
}

// ── Configuration Object ──────────────────────────────────────────────
const appConfig = Object.freeze({
  app: {
    env: env.MODE || 'development',
    isDev: env.DEV === true,
    isProd: env.PROD === true,
    baseUrl: env.VITE_BASE_URL || 'https://softsynergysystems.com',
  },

  contact: {
    email: env.VITE_CONTACT_EMAIL || 'hr@softsynergysystems.com',
    phone: env.VITE_CONTACT_PHONE || '+91 97908 23800',
  },

  emailjs: {
    serviceId: env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: env.VITE_EMAILJS_PUBLIC_KEY || '',
    isConfigured:
      Boolean(env.VITE_EMAILJS_SERVICE_ID) &&
      Boolean(env.VITE_EMAILJS_TEMPLATE_ID) &&
      Boolean(env.VITE_EMAILJS_PUBLIC_KEY),
  },

  analytics: {
    gaMeasurementId: env.VITE_GA_MEASUREMENT_ID || '',
    posthogKey: env.VITE_POSTHOG_KEY || '',
  },

  map: {
    googleMapKey: env.VITE_GOOGLE_MAP_KEY || '',
    embedUrl: env.VITE_GOOGLE_MAP_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1596909748396!2d77.63029397590326!3d13.089063912290417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19d5b5766363%3A0x59885816faa7d91f!2sSoft%20Synergy%20Systems%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1773298280470!5m2!1sen!2sin',
  },

  features: {
    liveChat: env.VITE_FEATURE_LIVE_CHAT === 'true',
    betaCheckout: env.VITE_FEATURE_BETA_CHECKOUT === 'true',
  },
});

export default appConfig;
