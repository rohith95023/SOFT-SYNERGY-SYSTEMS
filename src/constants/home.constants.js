/**
 * Home Page Constants
 * ===================
 * All data used specifically on the Home page (/)
 * 
 * Sections: Hero, Services Overview, Stats, Industries, Partners, Testimonials, CTA Banner, Blog Preview
 * 
 * @module constants/home
 */

// ============================================
// HERO SECTION DATA
// ============================================

export const HERO_DATA = Object.freeze({
    headline: 'Innovating for a Digital Era',
    subheadline: 'Soft Synergy Systems delivers enterprise-grade AI, automation, and software solutions that drive business transformation across industries.',
    primaryCTA: {
        text: 'Explore Our Services',
        link: '/services',
    },
    secondaryCTA: {
        text: 'Get In Touch',
        link: '/contact',
    },
    trustIndicators: [
        { label: '10+ Years Experience', icon: 'calendar' },
        { label: 'ISO Certified', icon: 'badge' },
        { label: '50+ Enterprise Clients', icon: 'users' },
    ],
});

// ============================================
// SERVICES OVERVIEW SECTION DATA
// ============================================

export const SERVICES_OVERVIEW_DATA = Object.freeze({
    sectionTitle: 'What We Build',
    sectionSubtitle: 'Comprehensive technology solutions designed for enterprise success',
    viewAllLink: '/services',
    viewAllText: 'View All Services',
});

// ============================================
// STATS SECTION DATA
// ============================================

export const STATS_SECTION_DATA = Object.freeze({
    sectionTitle: 'Why Choose Us',
    sectionSubtitle: 'Proven expertise delivering results for enterprises worldwide',
    stats: [
        {
            id: 'years',
            value: 10,
            suffix: '+',
            label: 'Years Experience',
            description: 'Delivering enterprise technology solutions',
        },
        {
            id: 'clients',
            value: 50,
            suffix: '+',
            label: 'Enterprise Clients',
            description: 'Trusted by leading organizations globally',
        },
        {
            id: 'divisions',
            value: 4,
            suffix: '',
            label: 'Core Divisions',
            description: 'Specialized technology divisions',
        },
        {
            id: 'industries',
            value: 7,
            suffix: '+',
            label: 'Industries Served',
            description: 'Across Banking, Healthcare, Telecom & more',
        },
    ],
});

// ============================================
// INDUSTRIES SECTION DATA
// ============================================

export const INDUSTRIES_SECTION_DATA = Object.freeze({
    sectionTitle: 'Industries We Transform',
    sectionSubtitle: 'Deep domain expertise across major industry verticals',
});

// ============================================
// PARTNERS SECTION DATA
// ============================================

export const PARTNERS_SECTION_DATA = Object.freeze({
    sectionTitle: 'Our Trusted Partners',
    sectionSubtitle: 'Collaborating with industry leaders worldwide',
});

// ============================================
// TESTIMONIALS SECTION DATA
// ============================================

export const TESTIMONIALS_SECTION_DATA = Object.freeze({
    sectionTitle: 'What Our Clients Say',
    sectionSubtitle: 'Hear from the organizations we have helped transform',
});

// ============================================
// CTA BANNER SECTION DATA
// ============================================

export const CTA_BANNER_DATA = Object.freeze({
    headline: 'Ready to Transform Your Business?',
    subheadline: 'Let us discuss how our solutions can drive your success.',
    ctaButton: {
        text: 'Start a Conversation',
        link: '/contact',
    },
});

// ============================================
// BLOG PREVIEW SECTION DATA
// ============================================

export const BLOG_PREVIEW_DATA = Object.freeze({
    sectionTitle: 'Latest Insights',
    sectionSubtitle: 'Thought leadership and industry perspectives from our team',
    viewAllLink: '/blog',
    viewAllText: 'View All Insights',
    postsCount: 3, // Number of posts to display
});
