/**
 * Unit Tests — formatDate Utility
 * ================================
 * Tests for the formatDate helper functions.
 * Run with: npx vitest (once vitest is added as a dev dependency)
 *
 * To set up testing:
 *   npm install -D vitest @testing-library/react @testing-library/jest-dom
 *   Then add to package.json scripts: "test": "vitest"
 */

import { describe, it, expect } from 'vitest';
import { formatDate, formatShortDate, getRelativeTime } from '../../../src/utils/formatDate';

describe('formatDate', () => {
  it('formats a valid ISO date string to a readable date', () => {
    const result = formatDate('2026-01-15');
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  it('returns empty string for null input', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
  });
});

describe('formatShortDate', () => {
  it('formats date in short form', () => {
    const result = formatShortDate('2026-01-15');
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});
