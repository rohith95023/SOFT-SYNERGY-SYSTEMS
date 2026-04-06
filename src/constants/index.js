/**
 * Constants Index
 * ================
 * Central export point for all constants
 * 
 * This file provides a single import point for all constants across the application.
 * Import from this file instead of individual constant files for cleaner imports.
 * 
 * Usage:
 * import { NAV_LINKS, SERVICE_CATEGORIES, BLOG_POSTS } from '@/constants';
 */

// ============================================
// PAGE-SPECIFIC CONSTANTS
// ============================================

// Home Page Constants
export {
    HERO_DATA,
    SERVICES_OVERVIEW_DATA,
    OFFICE_PHOTOS_DATA,
    STATS_SECTION_DATA,
    INDUSTRIES_SECTION_DATA,
    PARTNERS_SECTION_DATA,
    TESTIMONIALS_SECTION_DATA,
    CTA_BANNER_DATA,
    BLOG_PREVIEW_DATA,
    HOME_SEO,
} from './home.constants';

// About Page Constants
export {
    COMPANY_INFO as ABOUT_COMPANY_INFO,
    VISION_MISSION,
    COMPANY_STORY,
    CORE_VALUES,
    CORE_DIVISIONS,
    CERTIFICATIONS,
    ABOUT_SEO,
} from './about.constants';

// Services Page Constants
export {
    SERVICES_HERO,
    SERVICE_CATEGORIES,
    DEVELOPMENT_PROCESS,
    TECHNOLOGY_STACK,
    SERVICE_CTA,
    SERVICES_SEO,
} from './services.constants';

// Portfolio Page Constants
export {
    PORTFOLIO_HERO,
    PORTFOLIO_FILTERS,
    PORTFOLIO_ITEMS,
    PORTFOLIO_RESULTS,
    PORTFOLIO_CTA,
    PORTFOLIO_SEO,
} from './portfolio.constants';

// Blog Page Constants
export {
    BLOG_HERO,
    BLOG_CATEGORIES,
    BLOG_POSTS,
    NEWSLETTER_DATA,
    BLOG_DETAIL_CONSTANTS,
    BLOG_SEO,
} from './blog.constants';

// Contact Page Constants
export {
    CONTACT_HERO,
    CONTACT_INFO,
    CONTACT_FORM_CONFIG,
    MAP_CONFIG,
    CONTACT_FAQ,
    CONTACT_CTA,
    CONTACT_SEO,
} from './contact.constants';

// FAQ Page Constants
export {
    FAQ_HERO,
    FAQ_CATEGORIES,
    FAQ_DATA,
    FAQ_CTA,
    FAQ_SEO,
} from './faq.constants';

// Careers Page Constants
export {
    CAREERS_HERO,
    CAREER_BENEFITS,
    COMPANY_CULTURE,
    OPEN_POSITIONS,
    APPLICATION_PROCESS,
    CAREERS_CTA,
    CAREERS_SEO,
} from './careers.constants';

// ============================================
// SHARED CONSTANTS (Used across multiple pages)
// ============================================

export {
    COMPANY_INFO,
    NAV_LINKS,
    SERVICE_NAV_LINKS,
    INDUSTRIES,
    PARTNERS,
    TESTIMONIALS,
    TEAM_MEMBERS,
    DEPARTMENTS,
    SOCIAL_LINKS,
    STATS_DATA,
    FOOTER_LINKS,
    FOOTER_DATA,
    COOKIE_BANNER_DATA,
    ERROR_PAGE,
    DEFAULT_SEO,
    GLOBAL_STRINGS,
    LEGAL_PAGES_CONTENT,
} from './shared.constants';
