/**
 * Shared Constants
 * ================
 * Data used across multiple pages and components
 * 
 * Includes: Navigation, Industries, Partners, Testimonials, Team, Social Links
 * 
 * @module constants/shared
 */

import { Building2, CreditCard, Phone, Truck, Heart, ShoppingCart, Factory, Linkedin, Twitter, Facebook } from 'lucide-react';
import appConfig from '../config/app.config';

// ============================================
// COMPANY INFORMATION (Shared across pages)
// ============================================

export const COMPANY_INFO = Object.freeze({
    name: 'Soft Synergy Systems Pvt Ltd',
    shortName: 'Soft Synergy Systems',
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
    initials: 'SSS',
});

// ============================================
// NAVIGATION LINKS
// ============================================

export const NAV_LINKS = Object.freeze([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
        name: 'Services',
        path: '/services',
        dropdown: [
            { name: 'AI & Python Development', path: '/services', description: 'Intelligent AI-powered solutions' },
            { name: 'Quality Assurance', path: '/services', description: 'End-to-end testing services' },
            { name: 'Enterprise Java', path: '/services', description: 'Scalable backend systems' },
            { name: 'Full Stack Web', path: '/services', description: 'Modern web applications' },
        ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
]);

export const SERVICE_NAV_LINKS = Object.freeze([
    { name: 'AI & Python Development', path: '/services' },
    { name: 'Quality Assurance', path: '/services' },
    { name: 'Enterprise Java', path: '/services' },
    { name: 'Full Stack Web', path: '/services' },
]);

// ============================================
// INDUSTRIES
// ============================================

export const INDUSTRIES = Object.freeze([
    {
        id: 'banking',
        name: 'Banking',
        icon: Building2,
        description: 'Core banking, digital transformation, and regulatory compliance solutions.',
    },
    {
        id: 'fintech',
        name: 'Fintech',
        icon: CreditCard,
        description: 'Payment systems, lending platforms, and financial innovation.',
    },
    {
        id: 'telecom',
        name: 'Telecom',
        icon: Phone,
        description: 'Network analytics, customer management, and billing systems.',
    },
    {
        id: 'logistics',
        name: 'Logistics',
        icon: Truck,
        description: 'Supply chain optimization, tracking, and fleet management.',
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        icon: Heart,
        description: 'Patient management, diagnostics, and healthcare analytics.',
    },
    {
        id: 'ecommerce',
        name: 'E-commerce',
        icon: ShoppingCart,
        description: 'Online stores, marketplaces, and omnichannel solutions.',
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        icon: Factory,
        description: 'Process automation, quality control, and Industry 4.0.',
    },
]);

// ============================================
// PARTNERS / CLIENTS
// ============================================

export const PARTNERS = Object.freeze([
    {
        id: 1,
        name: 'TechCorp',
        logo: 'https://placehold.co/120x40?text=TechCorp',
        website: 'https://example.com',
        industry: 'Technology',
    },
    {
        id: 2,
        name: 'FinanceHub',
        logo: 'https://placehold.co/120x40?text=FinanceHub',
        website: 'https://example.com',
        industry: 'Finance',
    },
    {
        id: 3,
        name: 'HealthTech',
        logo: 'https://placehold.co/120x40?text=HealthTech',
        website: 'https://example.com',
        industry: 'Healthcare',
    },
    {
        id: 4,
        name: 'DataSystems',
        logo: 'https://placehold.co/120x40?text=DataSystems',
        website: 'https://example.com',
        industry: 'Technology',
    },
    {
        id: 5,
        name: 'CloudFirst',
        logo: 'https://placehold.co/120x40?text=CloudFirst',
        website: 'https://example.com',
        industry: 'Cloud',
    },
    {
        id: 6,
        name: 'SecureNet',
        logo: 'https://placehold.co/120x40?text=SecureNet',
        website: 'https://example.com',
        industry: 'Security',
    },
]);

// ============================================
// TESTIMONIALS
// ============================================

export const TESTIMONIALS = Object.freeze([
    {
        id: 1,
        quote: 'Soft Synergy Systems transformed our legacy systems into a modern, scalable platform. Their expertise in enterprise Java development is exceptional.',
        author: 'Rajesh Kumar',
        role: 'CTO',
        company: 'FinanceHub',
        rating: 5,
        industry: 'Finance',
    },
    {
        id: 2,
        quote: 'The AI solutions they built for us have significantly improved our customer service efficiency. Highly recommend their team.',
        author: 'Priya Sharma',
        role: 'VP Operations',
        company: 'HealthTech Inc',
        rating: 5,
        industry: 'Healthcare',
    },
    {
        id: 3,
        quote: 'Professional team with deep technical expertise. They delivered our e-commerce platform on time and exceeded expectations.',
        author: 'Michael Chen',
        role: 'Founder',
        company: 'RetailPro',
        rating: 5,
        industry: 'E-commerce',
    },
    {
        id: 4,
        quote: 'Their QA automation framework reduced our testing time by 60%. Outstanding quality and attention to detail.',
        author: 'Anita Desai',
        role: 'QA Director',
        company: 'TelecomGlobal',
        rating: 5,
        industry: 'Telecom',
    },
]);

// ============================================
// TEAM MEMBERS
// ============================================

export const TEAM_MEMBERS = Object.freeze([
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'Chief Executive Officer',
        bio: 'Seasoned technology leader with 15+ years in enterprise software and AI strategy.',
        department: 'Leadership',
        initials: 'RK',
        linkedin: 'https://linkedin.com/in/',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Chief Technology Officer',
        bio: 'Expert in AI/ML systems architecture and scalable distributed platforms.',
        department: 'Technology',
        initials: 'PS',
        linkedin: 'https://linkedin.com/in/',
    },
    {
        id: 3,
        name: 'Arun Menon',
        role: 'Head of Quality Assurance',
        bio: 'Champion of software quality with deep expertise in test automation frameworks.',
        department: 'QA',
        initials: 'AM',
        linkedin: 'https://linkedin.com/in/',
    },
    {
        id: 4,
        name: 'Sneha Iyer',
        role: 'Head of Full Stack Development',
        bio: 'Full stack architect passionate about building elegant, performant web applications.',
        department: 'Development',
        initials: 'SI',
        linkedin: 'https://linkedin.com/in/',
    },
    {
        id: 5,
        name: 'Vikram Nair',
        role: 'Lead Enterprise Java Architect',
        bio: 'Specialist in microservices architecture for banking, insurance, and telecom sectors.',
        department: 'Development',
        initials: 'VN',
        linkedin: 'https://linkedin.com/in/',
    },
    {
        id: 6,
        name: 'Deepa Krishnan',
        role: 'AI Research Lead',
        bio: 'Drives innovation in RAG systems, voice agents, and advanced ML model development.',
        department: 'AI',
        initials: 'DK',
        linkedin: 'https://linkedin.com/in/',
    },
]);

export const DEPARTMENTS = Object.freeze(['All', 'Leadership', 'Technology', 'Development', 'QA', 'AI']);

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIAL_LINKS = Object.freeze([
    {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/company/soft-synergy-systems',
        Icon: Linkedin,
        ariaLabel: 'Follow Soft Synergy Systems on LinkedIn',
    },
    {
        platform: 'Twitter',
        url: 'https://twitter.com/softsynergysys',
        Icon: Twitter,
        ariaLabel: 'Follow Soft Synergy Systems on Twitter',
    },
    {
        platform: 'Facebook',
        url: 'https://facebook.com/softsynergysystems',
        Icon: Facebook,
        ariaLabel: 'Follow Soft Synergy Systems on Facebook',
    },
]);

// ============================================
// STATS DATA
// ============================================

export const STATS_DATA = Object.freeze([
    {
        id: 'years',
        value: 10,
        suffix: '+',
        label: 'Years Experience',
    },
    {
        id: 'clients',
        value: 50,
        suffix: '+',
        label: 'Enterprise Clients',
    },
    {
        id: 'divisions',
        value: 4,
        suffix: '',
        label: 'Core Divisions',
    },
    {
        id: 'industries',
        value: 7,
        suffix: '+',
        label: 'Industries Served',
    },
]);

// ============================================
// FOOTER LINKS
// ============================================

export const FOOTER_LINKS = Object.freeze({
    company: [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ],
    services: [
        { name: 'AI & Python Development', path: '/services' },
        { name: 'Quality Assurance', path: '/services' },
        { name: 'Enterprise Java', path: '/services' },
        { name: 'Full Stack Web', path: '/services' },
    ],
    legal: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
    ],
});

// ============================================
// LEGAL PAGES DATA
// ============================================


// ============================================
// GLOBAL BUTTONS & LABELS
// ============================================

export const GLOBAL_STRINGS = Object.freeze({
    getQuote: 'Get a Quote',
    startConversation: 'Start a Conversation',
    viewAllServices: 'View all services',
    backToBlog: 'Back to Blog',
    backToHome: 'Back to Home',
    readMore: 'Read More',
    viewAll: 'View All',
    loading: 'Loading...',
    error: 'An error occurred',
    noResults: 'No results found',
    learnMore: 'Learn More',
    getToKnowUs: 'Get to know us better',
    ourCoreValues: 'Our Core Values',
    or: 'or',
    darkMode: {
        switchToLight: 'Switch to light mode',
        switchToDark: 'Switch to dark mode',
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
    },
    menu: {
        open: 'Open menu',
        close: 'Close menu',
    },
});

// ============================================
// FOOTER DATA
// ============================================

export const FOOTER_DATA = Object.freeze({
    description: 'Innovating for a Digital Era. Empowering organizations with advanced technology solutions in AI, QA, and Enterprise Software.',
    columnTitles: {
        company: 'Company',
        services: 'Services',
        contact: 'Contact',
    },
    newsletter: {
        title: 'Stay ahead of the curve',
        subtitle: 'Get the latest insights on AI, QA, and enterprise technology.',
        placeholder: 'Enter your email',
        button: 'Subscribe',
        buttonLoading: 'Subscribing...',
        buttonSuccess: 'Subscribed!',
    },
    cta: {
        title: 'Ready to transform your business?',
        subtitle: "Let's discuss how we can help you achieve your goals.",
        buttonText: 'Start a Conversation',
    },
});

// ============================================
// COOKIE BANNER DATA
// ============================================

export const COOKIE_BANNER_DATA = Object.freeze({
    title: 'We value your privacy',
    description: 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our ',
    policyLinkText: 'Cookie Policy',
    declineButton: 'Decline',
    acceptButton: 'Accept All',
});

// ============================================
// GLOBAL SEO DEFAULTS
// ============================================

export const DEFAULT_SEO = Object.freeze({
    title: 'Soft Synergy Systems',
    titleTemplate: '%s | Soft Synergy Systems',
    description: 'Enterprise AI, QA, Java, and Full Stack Web Development solutions for global businesses.',
    keywords: 'AI development, machine learning, QA services, test automation, Java development, full stack web development, enterprise software, digital transformation',
    canonical: 'https://softsynergysystems.com/',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://softsynergysystems.com/',
        site_name: 'Soft Synergy Systems',
    },
});

// ============================================
// ERROR PAGES
// ============================================

export const ERROR_PAGE = Object.freeze({
    notFound: {
        code: '404',
        title: '404 - Page Not Found',
        message: 'The page you are looking for does not exist or has been moved.',
        subMessage: "Let's get you back on track.",
        buttonText: 'Back to Home',
        buttonLink: '/',
        secondaryButtonText: 'Explore Services',
        secondaryButtonLink: '/services',
    },
    serverError: {
        code: '500',
        title: '500 - Server Error',
        message: 'Something went wrong. Please try again later.',
        buttonText: 'Back to Home',
        buttonLink: '/',
    },
});

// ============================================
// LEGAL PAGES CONTENT
// ============================================

export const LEGAL_PAGES_CONTENT = Object.freeze({
    'privacy-policy': {
        title: 'Privacy Policy',
        date: 'March 2026',
        subtitle: 'Official policy and legal documentation.',
        sections: [
            {
                title: '1. Introduction',
                content: 'Soft Synergy Systems Pvt Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.',
            },
            {
                title: '2. Information Collection',
                content: 'We collect information that you provide directly to us through our contact forms, newsletter signups, and other interactive elements on the site. This may include your name, email address, phone number, and company information.',
            },
            {
                title: '3. Use of Information',
                content: 'We use the collected information to respond to your inquiries, provide the services you request, and improve your overall experience on our platform. We do not sell your personal data to third parties.',
            },
            {
                title: '4. GDPR Compliance',
                content: 'For users in the European Economic Area, we process your personal data in accordance with the General Data Protection Regulation (GDPR). You have the right to access, correct, or delete your personal information.',
            },
        ]
    },
    'terms': {
        title: 'Terms & Conditions',
        date: 'March 2026',
        subtitle: 'Official policy and legal documentation.',
        sections: [
            {
                title: '1. Acceptance of Terms',
                content: 'By accessing and using the Soft Synergy Systems website, you agree to comply with and be bound by these Terms and Conditions.',
            },
            {
                title: '2. Use of Site',
                content: 'You may use this site for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use of the site. Unauthorized use of this site may give rise to a claim for damages.',
            },
            {
                title: '3. Intellectual Property',
                content: 'All content, including text, graphics, logos, and software, is the property of Soft Synergy Systems Pvt Ltd and is protected by international copyright laws.',
            },
        ]
    },
    'cookies': {
        title: 'Cookie Policy',
        date: 'March 2026',
        subtitle: 'Official policy and legal documentation.',
        sections: [
            {
                title: '1. What are Cookies?',
                content: 'Cookies are small text files stored on your device to help websites function properly and to provide information to the owners of the site.',
            },
            {
                title: '2. How We Use Cookies',
                content: 'We use essential cookies for the site\'s functionality and analytical cookies to understand how visitors interact with our content. This helps us improve the user experience.',
            },
            {
                title: '3. Managing Cookies',
                content: 'You can manage your cookie preferences through the consent banner on our site or by adjusting your browser settings. Declining some cookies may affect the functionality of the site.',
            },
        ]
    },
    'support': {
        title: 'Help & Support',
        date: 'March 2026',
        subtitle: 'Official policy and legal documentation.',
        sections: [
            {
                title: 'How Can We Assist You?',
                content: 'Soft Synergy Systems is dedicated to providing exceptional support to our clients and partners. We offer multiple channels for assistance depending on your needs.',
            },
            {
                title: '1. Technical Support',
                content: 'For existing clients requiring technical assistance with implemented solutions, please contact your dedicated account manager or use our support portal.',
            },
            {
                title: '2. General Inquiries',
                content: 'For general questions about our services, process, or company, please refer to our <a href="/faq">FAQ page</a> or send an email to our help desk.',
            },
            {
                title: '3. Response Times',
                content: 'We aim to respond to all support requests within one business day. Critical system issues are prioritized for even faster resolution.',
            },
        ]
    }
});
