/**
 * Home Page Constants
 * ===================
 * All data used specifically on the Home page (/)
 * 
 * Sections: Hero, Services Overview, Office Photos, Stats, Industries, Partners, Testimonials, CTA Banner, Blog Preview
 * 
 * @module constants/home
 */

import officePhoto1 from '../assets/office/1.webp';
import officePhoto2 from '../assets/office/3.webp';
import officePhoto3 from '../assets/office/5.webp';
import officePhoto4 from '../assets/office/6.webp';
import officePhoto5 from '../assets/office/7.webp';
import officePhoto6 from '../assets/office/8.webp';
import officeEntrance from '../assets/office/entrance.webp';
import officeMain from '../assets/office/main office.webp';

// ============================================
// HOME PAGE SEO
// ============================================

export const HOME_SEO = Object.freeze({
    title: 'Soft Synergy Systems - Innovating for a Digital Era',
    description: 'Enterprise AI, QA, Java, and Full Stack Web Development solutions for global businesses. ISO Certified with 10+ years of experience.',
    keywords: 'AI development, machine learning, QA services, test automation, Java development, full stack web development, enterprise software, digital transformation, Bengaluru, India',
    canonical: 'https://softsynergysystems.com/',
});

// ============================================
// HERO SECTION DATA
// ============================================

export const HERO_DATA = Object.freeze({
    slides: [
        {
            title1: 'Innovating for a',
            title2: 'Digital Era',
            description:
                'Soft Synergy Systems delivers enterprise-grade AI, automation, and software solutions that drive intelligence, efficiency, and growth for global businesses.',
        },
        {
            title1: 'Scaling Visionary',
            title2: 'Startups',
            description:
                'Transform innovative concepts into market-ready products with our agile development, rapid prototyping, and robust architectural solutions.',
        },
        {
            title1: 'Empowering Next-Gen',
            title2: 'Tech Talent',
            description:
                'Launch your career with comprehensive training, elite mentorship, and hands-on experience in cutting-edge AI and software engineering.',
        },
    ],
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
    sectionBadge: 'Our Capability',
    sectionTitle: 'Advanced Solutions for Modern Enterprises.',
    sectionSubtitle: 'We bridge the gap between complex problems and elegant technology solutions across four core divisions, delivering measurable business outcomes.',
    viewAllLink: '/services',
    viewAllText: 'View All Services',
    bottomCTA: {
        question: 'Looking for a specific solution?',
        linkText: 'View all services',
        link: '/services',
    },
    contactCTA: {
        text: 'Discuss your project',
        link: '/contact',
    },
});

// ============================================
// OFFICE PHOTOS SECTION DATA
// ============================================

export const OFFICE_PHOTOS_DATA = Object.freeze({
    sectionBadge: 'Our Workspace',
    sectionTitle: 'A Glimpse Into Our Home',
    sectionSubtitle: 'Where innovation meets collaboration. Our modern workspace is designed to foster creativity and excellence.',
    photos: [
        { id: 1, src: officeMain, alt: 'Main Office Area' },
        { id: 2, src: officeEntrance, alt: 'Office Entrance' },
        { id: 3, src: officePhoto1, alt: 'Workspace 1' },
        { id: 4, src: officePhoto2, alt: 'Collaborative Area' },
        { id: 5, src: officePhoto3, alt: 'Meeting Room' },
        { id: 6, src: officePhoto4, alt: 'Workspace 2' },
        { id: 7, src: officePhoto5, alt: 'Relaxation Zone' },
        { id: 8, src: officePhoto6, alt: 'Workspace 3' },
    ],
});

// ============================================
// STATS SECTION DATA
// ============================================

export const STATS_SECTION_DATA = Object.freeze({
    sectionBadge: 'Our Impact',
    sectionTitle: 'Delivering Excellence at Scale',
    sectionSubtitle: 'Proven expertise delivering results for enterprises worldwide',
    certText: 'ISO Certified Organization',
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
    sectionBadge: 'Industry Expertise',
    sectionTitle: 'Industries We',
    sectionTitleHighlight: 'Transform',
    sectionSubtitle: 'We bridge the gap between complex business challenges and digital solutions.',
    calloutCard: {
        title: 'Any Domain',
        description: 'Our adaptive engineering framework solves challenges across any industry.',
        ctaText: "Let's Discuss",
        ctaLink: '/contact',
    },
    bottomStats: [
        { value: '10+', label: 'Years of Innovation' },
        { value: '500+', label: 'Global Deployments' },
        { value: '98%', label: 'Customer Retention' },
    ],
});

// ============================================
// PARTNERS SECTION DATA
// ============================================

export const PARTNERS_SECTION_DATA = Object.freeze({
    sectionBadge: 'Global Network',
    sectionTitle: 'Our Trusted Partners',
    sectionSubtitle: 'Collaborating with industry leaders to deliver exceptional value and technological excellence across the globe.',
    bottomText: 'Trusted by leading enterprises across Banking, Healthcare, Telecom, and more.',
});

// ============================================
// TESTIMONIALS SECTION DATA
// ============================================

export const TESTIMONIALS_SECTION_DATA = Object.freeze({
    sectionBadge: 'Client Success',
    sectionTitle: 'What Our Partners Say',
    sectionSubtitle: 'Real results from enterprises that have trusted us with their digital transformation journey.',
});

// ============================================
// CTA BANNER SECTION DATA
// ============================================

export const CTA_BANNER_DATA = Object.freeze({
    headline: 'Ready to Transform Your Business?',
    subheadline: "Let's discuss how our technology solutions can drive growth, efficiency, and innovation for your organization.",
    primaryCTA: {
        text: 'Start a Conversation',
        link: '/contact',
    },
    secondaryCTA: {
        text: 'Explore Services',
        link: '/services',
    },
});

// ============================================
// BLOG PREVIEW SECTION DATA
// ============================================

export const BLOG_PREVIEW_DATA = Object.freeze({
    sectionBadge: 'Insights & Updates',
    sectionTitle: 'Latest from Our Blog',
    sectionSubtitle: 'Thought leadership and industry perspectives from our team',
    viewAllLink: '/blog',
    viewAllText: 'View All Insights',
    postsCount: 3,
});
