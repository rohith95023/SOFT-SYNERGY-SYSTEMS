/**
 * About Page Constants
 * ====================
 * All data used specifically on the About page (/about)
 * 
 * Sections: Hero, Company Story, Mission & Vision, Core Values, Divisions, Team
 * 
 * @module constants/about
 */

import appConfig from '../config/app.config';

// ============================================
// ABOUT PAGE SEO
// ============================================

export const ABOUT_SEO = Object.freeze({
    title: 'About Us',
    description: 'Learn about Soft Synergy Systems - our mission, vision, values, and the team driving digital transformation for enterprises globally.',
    keywords: 'about soft synergy systems, company mission, vision and values, leadership team, technology enterprise',
});

// ============================================
// ABOUT PAGE HERO
// ============================================

export const ABOUT_HERO = Object.freeze({
    title: 'About Us',
    subtitle: 'Pioneering digital transformation with innovation, integrity, and excellence',
    breadcrumb: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' }
    ],
});

// ============================================
// COMPANY INFORMATION
// ============================================

export const COMPANY_INFO = Object.freeze({
    name: 'Soft Synergy Systems Pvt Ltd',
    tagline: 'Innovating for a Digital Era',
    founded: 2014,
    headquarters: {
        address: '26/3, Thirumenahalli Main Road, Block 3, Chokkanahalli',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
        pincode: '560064',
    },
    contact: {
        email: appConfig.contact.email,
        phone: appConfig.contact.phone,
    },
    certification: 'ISO Certified Organisation',
});

// ============================================
// VISION & MISSION
// ============================================

export const VISION_MISSION = Object.freeze({
    vision: {
        title: 'Our Vision',
        statement: 'To become a global leader in digital transformation and advanced technology solutions, recognized for our innovation, quality, and the measurable impact we create for our clients and communities.',
        description: 'To become a global leader in digital transformation and advanced technology solutions, recognized for our commitment to synergy, quality, and the strategic advancement of the digital world.',
    },
    mission: {
        title: 'Our Mission',
        statement: 'Empowering organizations with innovative technology solutions that drive efficiency, intelligence, and business growth. We transform complex challenges into elegant, scalable solutions that deliver lasting value.',
        description: 'Empowering organizations with innovative technology solutions that drive efficiency, intelligence, and business growth. We strive to be the bridge between complex challenges and sustainable digital success.',
    },
});

// ============================================
// COMPANY STORY
// ============================================

export const COMPANY_STORY = Object.freeze({
    badge: 'Our Story',
    title: 'Building the Future of Enterprise Technology',
    subtitle: 'A Decade of Excellence in Technology',
    paragraphs: [
        'Founded in 2014, Soft Synergy Systems was built on the belief that technology should be a catalyst for business growth, not a barrier. Over the past decade, we have evolved from a specialized software firm into a comprehensive technology partner for enterprises worldwide.',
        'Our journey began in Bengaluru, India, with a small team of passionate developers. Today, we stand as a multi-divisional organization with expertise across Artificial Intelligence, Quality Assurance, Enterprise Java, and Full Stack Web Development.',
        'We take pride in our ability to combine technical depth with strategic thinking. Every solution we deliver is designed not just to meet immediate requirements, but to provide a scalable foundation for the future of our clients\' digital ecosystems.'
    ],
    highlights: [
        { year: '2014', event: 'Company founded in Bengaluru' },
        { year: '2016', event: 'Launched AI & Python Development division' },
        { year: '2018', event: 'Achieved ISO Certification' },
        { year: '2020', event: 'Expanded to 4 specialized divisions' },
        { year: '2023', event: 'Reached 50+ enterprise clients globally' },
        { year: '2026', event: 'Continued innovation in AI & Automation' },
    ],
});

// ============================================
// CORE VALUES
// ============================================

export const CORE_VALUES = Object.freeze([
    {
        id: 'innovation',
        title: 'Innovation',
        description: 'We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive edge.',
        icon: 'lightbulb',
    },
    {
        id: 'quality',
        title: 'Quality',
        description: 'Excellence is non-negotiable. We maintain rigorous standards in every line of code and every deliverable.',
        icon: 'check-circle',
    },
    {
        id: 'integrity',
        title: 'Integrity',
        description: 'We build lasting relationships through transparency, honesty, and ethical business practices.',
        icon: 'shield',
    },
    {
        id: 'client-focus',
        title: 'Client Focus',
        description: 'Our clients\' success is our success. We go above and beyond to understand and exceed their expectations.',
        icon: 'users',
    },
    {
        id: 'excellence',
        title: 'Excellence',
        description: 'We strive for excellence in everything we do, from technical implementation to customer service.',
        icon: 'star',
    },
    {
        id: 'agility',
        title: 'Agility',
        description: 'We adapt quickly to changing technologies and client needs, staying ahead in a fast-evolving landscape.',
        icon: 'zap',
    },
]);

// ============================================
// CORE DIVISIONS
// ============================================

export const CORE_DIVISIONS = Object.freeze([
    {
        id: 'software-dev',
        name: 'Software Development Division',
        description: 'Full-stack web and mobile application development using modern frameworks and methodologies.',
        capabilities: ['Web Applications', 'Mobile Apps', 'SaaS Platforms', 'API Development'],
        icon: 'code',
    },
    {
        id: 'ai-division',
        name: 'Artificial Intelligence Division',
        description: 'AI-powered solutions including RAG systems, voice agents, and predictive analytics.',
        capabilities: ['Machine Learning', 'RAG Systems', 'AI Voice Agents', 'Predictive Analytics'],
        icon: 'brain',
    },
    {
        id: 'robotics',
        name: 'Robotics & Automation Division',
        description: 'Intelligent automation solutions and robotic process automation for enterprise efficiency.',
        capabilities: ['RPA Solutions', 'Process Automation', 'Intelligent Bots', 'Workflow Optimization'],
        icon: 'cpu',
    },
    {
        id: 'embedded',
        name: 'Embedded Systems Division',
        description: 'Specialized embedded software and firmware development for IoT and hardware integration.',
        capabilities: ['IoT Solutions', 'Firmware Development', 'Hardware Integration', 'Real-time Systems'],
        icon: 'circuit',
    },
]);


// ============================================
// CERTIFICATIONS & BADGES
// ============================================

export const CERTIFICATIONS = Object.freeze({
    iso: {
        title: 'ISO Certified Organization',
        description: 'Our processes and quality management systems meet international standards.',
        badge: 'ISO 9001:2015',
    },
    security: {
        title: 'Security First',
        description: 'Enterprise-grade security practices in all our development processes.',
    },
});

// ============================================
// ABOUT STATS
// ============================================

export const ABOUT_STATS = Object.freeze([
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Clients Served' },
    { value: '99%', label: 'Success Rate' },
]);
