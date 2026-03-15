/**
 * Unit Tests — cn() Utility
 * ==========================
 * Tests for the className merge helper (clsx + tailwind-merge).
 * Run with: npx vitest
 */

import { describe, it, expect } from 'vitest';
import { cn } from '../../../src/utils/cn';

describe('cn()', () => {
  it('merges class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('deduplicates conflicting Tailwind classes', () => {
    // tailwind-merge should pick the last conflicting class
    const result = cn('text-red-500', 'text-blue-500');
    expect(result).toBe('text-blue-500');
  });

  it('handles undefined and null gracefully', () => {
    expect(cn('foo', undefined, null)).toBe('foo');
  });

  it('returns empty string when no classes given', () => {
    expect(cn()).toBe('');
  });
});
