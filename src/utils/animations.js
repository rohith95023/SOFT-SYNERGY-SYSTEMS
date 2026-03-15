/**
 * Framer Motion animation variants used across the project
 */

export const fadeInUp = Object.freeze({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
});

export const fadeIn = Object.freeze({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const slideInFromLeft = Object.freeze({
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
});

export const slideInFromRight = Object.freeze({
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
});

export const scaleIn = Object.freeze({
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
});

export const pageTransition = Object.freeze({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.3, ease: 'easeInOut' },
});

export const cardHover = Object.freeze({
  rest: { y: 0, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  hover: {
    y: -4,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
});
