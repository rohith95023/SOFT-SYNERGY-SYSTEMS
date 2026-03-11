/**
 * Formats a date string to a human-readable format
 * @param {string} dateStr - ISO date string or parseable date
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export const formatDate = (dateStr, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };
  return new Intl.DateTimeFormat('en-IN', defaultOptions).format(new Date(dateStr));
};

/**
 * Returns a relative time string (e.g. "2 days ago")
 * @param {string} dateStr - ISO date string
 * @returns {string} Relative time string
 */
export const timeAgo = (dateStr) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return 'Just now';
};

/**
 * Format a date to short format (e.g. "Mar 11, 2026")
 */
export const formatShortDate = (dateStr) =>
  formatDate(dateStr, { year: 'numeric', month: 'short', day: 'numeric' });
