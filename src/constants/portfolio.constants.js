/**
 * Portfolio Page Constants
 * ========================
 * All data used specifically on the Portfolio page (/portfolio)
 * 
 * Sections: Hero, Portfolio Grid, Results Stats
 * 
 * @module constants/portfolio
 */

// ============================================
// PORTFOLIO PAGE SEO
// ============================================

export const PORTFOLIO_SEO = Object.freeze({
    title: 'Our Portfolio',
    description: 'Explore our portfolio of successful projects across Banking, Healthcare, E-commerce, and Telecom industries.',
    keywords: 'software portfolio, case studies, enterprise solutions, AI projects, digital transformation examples',
});

// ============================================
// PORTFOLIO PAGE HERO
// ============================================

export const PORTFOLIO_HERO = Object.freeze({
    title: 'Our Portfolio',
    subtitle: 'Explore our successful projects across industries and see how we deliver results',
    breadcrumb: [
        { label: 'Home', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
    ],
});

// ============================================
// PORTFOLIO FILTER OPTIONS
// ============================================

export const PORTFOLIO_FILTERS = Object.freeze({
    allLabel: 'All Projects',
    categories: [
        { id: 'all', label: 'All', value: 'all' },
        { id: 'banking', label: 'Banking', value: 'Banking' },
        { id: 'healthcare', label: 'Healthcare', value: 'Healthcare' },
        { id: 'ecommerce', label: 'E-commerce', value: 'E-commerce' },
        { id: 'telecom', label: 'Telecom', value: 'Telecom' },
        { id: 'logistics', label: 'Logistics', value: 'Logistics' },
        { id: 'fintech', label: 'Fintech', value: 'Fintech' },
    ],
});

// ============================================
// PORTFOLIO ITEMS - CASE STUDIES
// ============================================

export const PORTFOLIO_ITEMS = Object.freeze([
    {
        id: 1,
        title: 'Banking Platform Modernization',
        industry: 'Banking',
        client: 'Major Regional Bank',
        description: 'Complete digital transformation of a legacy banking system to modern microservices architecture, enabling real-time transactions and improved customer experience.',
        detailedDescription: 'We partnered with a major regional bank to transform their 15-year-old legacy core banking system into a modern, cloud-native microservices architecture. The project involved migrating over 200 services while maintaining 99.99% uptime.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        stats: [
            { value: '40%', label: 'Faster Processing' },
            { value: '60%', label: 'Cost Reduction' },
            { value: '99.99%', label: 'Uptime' },
        ],
        technologies: ['Java', 'Spring Boot', 'Kubernetes', 'AWS', 'PostgreSQL'],
        duration: '18 months',
        teamSize: '25 engineers',
        category: 'Enterprise Java',
    },
    {
        id: 2,
        title: 'Healthcare AI Diagnostics',
        industry: 'Healthcare',
        client: 'Healthcare Provider Network',
        description: 'AI-powered diagnostic system for early disease detection and treatment recommendations, improving patient outcomes across 50+ facilities.',
        detailedDescription: 'Developed an AI-powered diagnostic assistant that analyzes medical imaging and patient data to provide early detection recommendations. The system is now used across 50+ healthcare facilities, assisting radiologists and clinicians.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        stats: [
            { value: '95%', label: 'Accuracy Rate' },
            { value: '50%', label: 'Time Saved' },
            { value: '30%', label: 'Early Detection' },
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'DICOM'],
        duration: '12 months',
        teamSize: '15 engineers',
        category: 'AI & Python',
    },
    {
        id: 3,
        title: 'E-commerce Platform',
        industry: 'E-commerce',
        client: 'Retail Giant',
        description: 'Scalable multi-tenant e-commerce platform supporting millions of transactions daily with seamless checkout experiences.',
        detailedDescription: 'Built a high-performance e-commerce platform from scratch, capable of handling millions of daily transactions during peak seasons. The platform includes inventory management, payment processing, and real-time analytics.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
        stats: [
            { value: '3x', label: 'Traffic Capacity' },
            { value: '99.9%', label: 'Uptime' },
            { value: '45%', label: 'Conversion Increase' },
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
        duration: '14 months',
        teamSize: '20 engineers',
        category: 'Full Stack Web',
    },
    {
        id: 4,
        title: 'Telecom Network Analytics',
        industry: 'Telecom',
        client: 'National Telecom Provider',
        description: 'Real-time network analytics and predictive maintenance system for telecom infrastructure, reducing downtime significantly.',
        detailedDescription: 'Implemented a comprehensive network analytics platform that processes billions of events daily, providing real-time insights and predictive maintenance alerts for network infrastructure.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        stats: [
            { value: '30%', label: 'Downtime Reduced' },
            { value: '25%', label: 'Cost Savings' },
            { value: '1B+', label: 'Events/Day' },
        ],
        technologies: ['Java', 'Apache Kafka', 'Spark', 'Elasticsearch', 'Grafana'],
        duration: '16 months',
        teamSize: '18 engineers',
        category: 'Enterprise Java',
    },
    {
        id: 5,
        title: 'Supply Chain Optimization',
        industry: 'Logistics',
        client: 'Global Logistics Company',
        description: 'AI-driven supply chain optimization platform for real-time tracking and route optimization across global operations.',
        detailedDescription: 'Developed an intelligent supply chain platform that optimizes routes, predicts delays, and provides real-time visibility across the entire logistics network spanning 30+ countries.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        stats: [
            { value: '35%', label: 'Efficiency Gain' },
            { value: '20%', label: 'Fuel Savings' },
            { value: '30+', label: 'Countries' },
        ],
        technologies: ['Python', 'React', 'PostgreSQL', 'Google Maps API', 'AWS'],
        duration: '10 months',
        teamSize: '12 engineers',
        category: 'AI & Python',
    },
    {
        id: 6,
        title: 'Patient Management System',
        industry: 'Healthcare',
        client: 'Hospital Network',
        description: 'Comprehensive patient management system with integrated telemedicine capabilities for improved healthcare delivery.',
        detailedDescription: 'Created a unified patient management platform that integrates appointments, medical records, billing, and telemedicine capabilities, serving over 500,000 patients across multiple facilities.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        stats: [
            { value: '60%', label: 'Admin Time Saved' },
            { value: '45%', label: 'Patient Satisfaction' },
            { value: '500K+', label: 'Patients Served' },
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
        duration: '12 months',
        teamSize: '14 engineers',
        category: 'Full Stack Web',
    },
    {
        id: 7,
        title: 'Fintech Payment Gateway',
        industry: 'Fintech',
        client: 'Payment Processing Company',
        description: 'Secure, high-performance payment gateway supporting multiple payment methods and real-time fraud detection.',
        detailedDescription: 'Built a PCI-DSS compliant payment gateway that processes millions of transactions daily with real-time fraud detection using machine learning models.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
        stats: [
            { value: '99.99%', label: 'Uptime' },
            { value: '50ms', label: 'Avg Response' },
            { value: '<0.1%', label: 'Fraud Rate' },
        ],
        technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Redis', 'TensorFlow'],
        duration: '14 months',
        teamSize: '16 engineers',
        category: 'Enterprise Java',
    },
    {
        id: 8,
        title: 'Insurance Claims Automation',
        industry: 'Fintech',
        client: 'Insurance Provider',
        description: 'AI-powered claims processing system that automates document analysis and fraud detection for faster settlements.',
        detailedDescription: 'Implemented an intelligent claims processing system that uses computer vision and NLP to automatically extract information from claims documents and detect potential fraud.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        stats: [
            { value: '70%', label: 'Faster Processing' },
            { value: '80%', label: 'Auto-Approved' },
            { value: '40%', label: 'Cost Reduction' },
        ],
        technologies: ['Python', 'TensorFlow', 'Tesseract OCR', 'AWS', 'PostgreSQL'],
        duration: '10 months',
        teamSize: '10 engineers',
        category: 'AI & Python',
    },
]);

// ============================================
// RESULTS/OUTCOMES SUMMARY
// ============================================

export const PORTFOLIO_RESULTS = Object.freeze({
    title: 'Delivering Measurable Results',
    subtitle: 'Our projects consistently deliver significant business impact',
    highlights: [
        { metric: '40%', description: 'Average efficiency improvement' },
        { metric: '99.9%', description: 'Average system uptime' },
        { metric: '50+', description: 'Successful projects delivered' },
        { metric: '6', description: 'Industries served' },
    ],
});

// ============================================
// PORTFOLIO CTA
// ============================================

export const PORTFOLIO_CTA = Object.freeze({
    title: 'Have a Project in Mind?',
    subtitle: 'Let us help you achieve similar results for your business.',
    buttonText: 'Start a Conversation',
    buttonLink: '/contact',
});
