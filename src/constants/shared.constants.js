/**
 * Shared Constants
 * ================
 * Data used across multiple pages and components
 * 
 * Includes: Navigation, Industries, Partners, Testimonials, Team, Social Links
 */

import { Building2, CreditCard, Phone, Truck, Heart, ShoppingCart, Factory, Linkedin, Twitter, Facebook } from 'lucide-react';

// ============================================
// COMPANY INFORMATION (Shared across pages)
// ============================================

export const COMPANY_INFO = {
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
        email: 'hr@softsynergysystems.com',
        phone: '+91 82964 53365',
    },
    certification: 'ISO Certified Organisation',
};

// ============================================
// NAVIGATION LINKS
// ============================================

export const NAV_LINKS = [
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
];

export const SERVICE_NAV_LINKS = [
    { name: 'AI & Python Development', path: '/services' },
    { name: 'Quality Assurance', path: '/services' },
    { name: 'Enterprise Java', path: '/services' },
    { name: 'Full Stack Web', path: '/services' },
];

// ============================================
// INDUSTRIES
// ============================================

export const INDUSTRIES = [
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
];

// ============================================
// PARTNERS / CLIENTS
// ============================================

export const PARTNERS = [
    {
        id: 1,
        name: 'TechCorp',
        logo: 'https://via.placeholder.com/120x40?text=TechCorp',
        website: 'https://example.com',
        industry: 'Technology',
    },
    {
        id: 2,
        name: 'FinanceHub',
        logo: 'https://via.placeholder.com/120x40?text=FinanceHub',
        website: 'https://example.com',
        industry: 'Finance',
    },
    {
        id: 3,
        name: 'HealthTech',
        logo: 'https://via.placeholder.com/120x40?text=HealthTech',
        website: 'https://example.com',
        industry: 'Healthcare',
    },
    {
        id: 4,
        name: 'DataSystems',
        logo: 'https://via.placeholder.com/120x40?text=DataSystems',
        website: 'https://example.com',
        industry: 'Technology',
    },
    {
        id: 5,
        name: 'CloudFirst',
        logo: 'https://via.placeholder.com/120x40?text=CloudFirst',
        website: 'https://example.com',
        industry: 'Cloud',
    },
    {
        id: 6,
        name: 'SecureNet',
        logo: 'https://via.placeholder.com/120x40?text=SecureNet',
        website: 'https://example.com',
        industry: 'Security',
    },
];

// ============================================
// TESTIMONIALS
// ============================================

export const TESTIMONIALS = [
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
];

// ============================================
// TEAM MEMBERS
// ============================================

export const TEAM_MEMBERS = [
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
];

export const DEPARTMENTS = ['All', 'Leadership', 'Technology', 'Development', 'QA', 'AI'];

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIAL_LINKS = [
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
];

// ============================================
// STATS DATA
// ============================================

export const STATS_DATA = [
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
];

// ============================================
// FOOTER LINKS
// ============================================

export const FOOTER_LINKS = {
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
};

// ============================================
// LEGAL PAGES DATA
// ============================================

export const LEGAL_PAGES = {
    'privacy-policy': {
        title: 'Privacy Policy',
        lastUpdated: 'March 1, 2026',
    },
    'terms': {
        title: 'Terms & Conditions',
        lastUpdated: 'March 1, 2026',
    },
    'cookies': {
        title: 'Cookie Policy',
        lastUpdated: 'March 1, 2026',
    },
};

// ============================================
// ERROR PAGES
// ============================================

export const ERROR_PAGE = {
    notFound: {
        code: '404',
        title: 'Page Not Found',
        message: 'The page you are looking for does not exist or has been moved.',
        buttonText: 'Back to Home',
        buttonLink: '/',
    },
    serverError: {
        code: '500',
        title: 'Server Error',
        message: 'Something went wrong. Please try again later.',
        buttonText: 'Back to Home',
        buttonLink: '/',
    },
};
