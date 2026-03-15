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
        statement: 'To become a global leader in digital transformation and advanced technology solutions.',
        description: 'We envision a future where every enterprise can harness the power of AI, automation, and modern software to achieve unprecedented growth and efficiency.',
    },
    mission: {
        title: 'Our Mission',
        statement: 'Empowering organisations with innovative technology solutions that drive efficiency, intelligence, and business growth.',
        description: 'We deliver cutting-edge solutions tailored to each client\'s unique challenges, combining deep technical expertise with a commitment to excellence.',
    },
});

// ============================================
// COMPANY STORY
// ============================================

export const COMPANY_STORY = Object.freeze({
    title: 'Our Story',
    paragraphs: [
        'Founded in 2014, Soft Synergy Systems began with a simple yet ambitious vision: to help enterprises navigate the complexities of digital transformation. What started as a small team of passionate technologists has grown into a full-service technology partner serving clients across the globe.',
        'Over the years, we have expanded our capabilities to include four specialized divisions: Software Development, Artificial Intelligence, Robotics & Automation, and Embedded Systems. Each division is staffed by experts who bring deep domain knowledge and a commitment to innovation.',
        'Today, we are proud to serve over 50 enterprise clients across Banking, Fintech, Telecom, Logistics, Healthcare, and E-commerce. Our ISO certification reflects our unwavering commitment to quality and security in everything we do.',
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
        title: 'ISO Certified Organisation',
        description: 'We maintain strict quality management systems following international standards.',
        badge: 'ISO 9001:2015',
    },
    security: {
        title: 'Security First',
        description: 'Enterprise-grade security practices in all our development processes.',
    },
});
