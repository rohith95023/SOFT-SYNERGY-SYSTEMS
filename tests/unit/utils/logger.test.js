import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { logDebug, logInfo, logWarn, logError } from '../../../src/utils/logger';
import appConfig from '../../../src/config/app.config';

// Mock appConfig
vi.mock('../../../src/config/app.config', () => ({
  default: {
    app: {
      isDev: true
    }
  }
}));

describe('Logger Utility', () => {
  const consoleSpy = {
    debug: vi.spyOn(console, 'debug').mockImplementation(() => {}),
    info: vi.spyOn(console, 'info').mockImplementation(() => {}),
    warn: vi.spyOn(console, 'warn').mockImplementation(() => {}),
    error: vi.spyOn(console, 'error').mockImplementation(() => {}),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Note: vi.mock is hoisted, so we don't need to reset it here if we want to test prod mode, 
    // we should use a different way to toggle mode if needed, but for now let's test dev mode.
  });

  it('logs debug messages in development', () => {
    logDebug('test debug');
    expect(consoleSpy.debug).toHaveBeenCalledWith(expect.stringContaining('[SSS] test debug'));
  });

  it('logs info messages in development', () => {
    logInfo('test info');
    expect(consoleSpy.info).toHaveBeenCalledWith(expect.stringContaining('[SSS] test info'));
  });

  it('logs warn messages in development', () => {
    logWarn('test warn');
    expect(consoleSpy.warn).toHaveBeenCalledWith(expect.stringContaining('[SSS] test warn'));
  });

  it('logs error messages with stack traces in development', () => {
    const error = new Error('test error');
    logError('test error message', error);
    expect(consoleSpy.error).toHaveBeenCalledWith(expect.stringContaining('[SSS] test error message'), error);
  });
});
