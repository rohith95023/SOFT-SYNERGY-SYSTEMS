/**
 * Logger Utility
 * ==============
 * Centralised logging that:
 * - Outputs to console only in development mode
 * - Is completely silent in production (no stack trace leaks)
 * - Provides log levels: debug, info, warn, error
 *
 * RULE (RULES PRD §11 + §12.3): Never use console.log directly in code.
 * Import and use this logger instead.
 *
 * @module utils/logger
 */

import appConfig from '../config/app.config';

const isDev = appConfig.app.isDev;

/** @type {string} Prefix shown on all log messages */
const PREFIX = '[SSS]';

/**
 * Log a debug message. Only visible in development.
 * @param {string} message
 * @param {...unknown} args
 */
export const logDebug = (message, ...args) => {
  if (!isDev) return;
  console.debug(`${PREFIX} ${message}`, ...args);
};

/**
 * Log an informational message. Only visible in development.
 * @param {string} message
 * @param {...unknown} args
 */
export const logInfo = (message, ...args) => {
  if (!isDev) return;
  console.info(`${PREFIX} ${message}`, ...args);
};

/**
 * Log a warning. Visible in development; silent in production.
 * @param {string} message
 * @param {...unknown} args
 */
export const logWarn = (message, ...args) => {
  if (!isDev) return;
  console.warn(`${PREFIX} ${message}`, ...args);
};

/**
 * Log an error. Always logs in development.
 * In production, logs a generic message to avoid leaking stack traces.
 * @param {string} message
 * @param {unknown} [error]
 */
export const logError = (message, error) => {
  if (isDev) {
    // Cost: expose full error only in development per OWASP recommendations
    console.error(`${PREFIX} ${message}`, error);
  }
  // In production: swallow stack trace — never expose internals to the client
};

/**
 * Default logger object for convenience.
 */
const logger = {
  debug: logDebug,
  info: logInfo,
  warn: logWarn,
  error: logError,
};

export default logger;
