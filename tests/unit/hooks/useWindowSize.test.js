import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import useWindowSize from '../../../src/hooks/useWindowSize';

describe('useWindowSize', () => {
  it('should return initial window size', () => {
    // Default mock values in jsdom are usually 1024x768
    const { result } = renderHook(() => useWindowSize());
    
    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  it('should update size on window resize', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      // Simulate resize
      window.innerWidth = 500;
      window.innerHeight = 500;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });

  it('should correctly identify breakpoints', () => {
    const { result } = renderHook(() => useWindowSize());

    // Test Desktop
    act(() => {
      window.innerWidth = 1200;
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.isDesktop).toBe(true);
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);

    // Test Tablet
    act(() => {
      window.innerWidth = 800;
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);

    // Test Mobile
    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isTablet).toBe(false);
  });
});
