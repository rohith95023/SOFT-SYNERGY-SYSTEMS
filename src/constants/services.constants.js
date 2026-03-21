/**
 * Services Page Constants
 * =======================
 * All data used specifically on the Services page (/services)
 * 
 * Sections: Hero, Service Categories, Process, Technology Stack
 * 
 * @module constants/services
 */

import { Brain, Shield, Code, Globe, Lightbulb, Users, Rocket, CheckCircle } from 'lucide-react';

// ============================================
// SERVICES PAGE SEO
// ============================================

export const SERVICES_SEO = Object.freeze({
    title: 'Our Services',
    description: 'Explore our comprehensive services in AI Development, QA, Enterprise Java, and Full Stack Web Development.',
    keywords: 'AI development services, QA automation, enterprise Java solutions, full stack web development services',
});

// ============================================
// SERVICES PAGE HERO
// ============================================

export const SERVICES_HERO = Object.freeze({
    title: 'Our Services',
    subtitle: 'Comprehensive technology solutions designed to drive your business forward',
    breadcrumb: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
    ],
});

// ============================================
// SERVICE CATEGORIES - DETAILED
// ============================================

export const SERVICE_CATEGORIES = Object.freeze([
    {
        id: 'ai-python',
        title: 'AI & Python Development',
        shortTitle: 'AI & Python',
        description: 'Building intelligent AI-powered solutions tailored for modern enterprises, from RAG systems to predictive analytics.',
        detailedDescription: 'Our AI & Python Development division specializes in creating cutting-edge artificial intelligence solutions that transform how businesses operate. We leverage the latest in machine learning, natural language processing, and computer vision to deliver solutions that drive real business value.',
        icon: Brain,
        link: '/services',
        capabilities: [
            {
                title: 'RAG Systems & Knowledge Bases',
                description: 'Retrieval-Augmented Generation systems that combine the power of LLMs with your enterprise data.',
            },
            {
                title: 'AI Voice Agents & Chatbots',
                description: 'Intelligent conversational AI that handles customer interactions 24/7.',
            },
            {
                title: 'Machine Learning Models',
                description: 'Custom ML models trained on your data for predictive insights.',
            },
            {
                title: 'Predictive Analytics',
                description: 'Data-driven forecasting to anticipate trends and optimize decisions.',
            },
            {
                title: 'Natural Language Processing',
                description: 'Text analysis, sentiment detection, and document processing solutions.',
            },
            {
                title: 'Computer Vision Solutions',
                description: 'Image recognition, object detection, and visual inspection systems.',
            },
        ],
        industries: ['Healthcare', 'Finance', 'E-commerce', 'Customer Service'],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
        cta: {
            text: 'Discuss Your AI Project',
            link: '/contact',
        },
    },
    {
        id: 'qa-services',
        title: 'Quality Assurance Services',
        shortTitle: 'QA Services',
        description: 'Ensuring flawless software through comprehensive end-to-end testing and quality engineering practices.',
        detailedDescription: 'Our QA Services division provides comprehensive testing solutions that ensure your software meets the highest quality standards. From automated testing to security assessments, we help you deliver reliable, secure, and performant applications.',
        icon: Shield,
        link: '/services',
        capabilities: [
            {
                title: 'Automated Testing',
                description: 'Robust test automation frameworks that accelerate release cycles.',
            },
            {
                title: 'Performance Testing',
                description: 'Load, stress, and scalability testing to ensure system reliability.',
            },
            {
                title: 'Security Testing',
                description: 'Vulnerability assessments and penetration testing for secure applications.',
            },
            {
                title: 'API Testing',
                description: 'Comprehensive API validation and integration testing.',
            },
            {
                title: 'Mobile Testing',
                description: 'Cross-platform mobile app testing on real devices and emulators.',
            },
            {
                title: 'Compliance Testing',
                description: 'Regulatory compliance validation for industry standards.',
            },
        ],
        industries: ['Banking', 'Healthcare', 'Fintech', 'Insurance'],
        technologies: ['Selenium', 'Cypress', 'JMeter', 'Postman', 'Appium', 'OWASP ZAP'],
        cta: {
            text: 'Improve Your Quality',
            link: '/contact',
        },
    },
    {
        id: 'enterprise-java',
        title: 'Enterprise Java Development',
        shortTitle: 'Enterprise Java',
        description: 'Scalable, enterprise-grade Java applications built for demanding industries with complex requirements.',
        detailedDescription: 'Our Enterprise Java Development team builds robust, scalable backend systems that power mission-critical applications. We specialize in microservices architecture, helping enterprises modernize legacy systems and build cloud-native solutions.',
        icon: Code,
        link: '/services',
        capabilities: [
            {
                title: 'Microservices Architecture',
                description: 'Scalable, loosely-coupled services designed for the cloud.',
            },
            {
                title: 'Scalable Backend Systems',
                description: 'High-performance backends that handle millions of transactions.',
            },
            {
                title: 'API Development',
                description: 'RESTful and GraphQL APIs with comprehensive documentation.',
            },
            {
                title: 'Legacy Modernization',
                description: 'Transform monolithic applications into modern architectures.',
            },
            {
                title: 'Spring Boot Applications',
                description: 'Rapid development with Spring ecosystem best practices.',
            },
            {
                title: 'Enterprise Integration',
                description: 'Seamless integration with enterprise systems and middleware.',
            },
        ],
        industries: ['Banking', 'Insurance', 'Telecommunications', 'Logistics'],
        technologies: ['Java', 'Spring Boot', 'Microservices', 'Kubernetes', 'Docker', 'Apache Kafka'],
        cta: {
            text: 'Build Your Backend',
            link: '/contact',
        },
    },
    {
        id: 'fullstack-web',
        title: 'Full Stack Web Development',
        shortTitle: 'Full Stack Web',
        description: 'End-to-end web applications from frontend UX to backend API, delivering seamless digital experiences.',
        detailedDescription: 'Our Full Stack Web Development team creates modern, responsive web applications that deliver exceptional user experiences. From SaaS platforms to e-commerce solutions, we build applications that scale with your business.',
        icon: Globe,
        link: '/services',
        capabilities: [
            {
                title: 'Web Applications',
                description: 'Custom web applications tailored to your business needs.',
            },
            {
                title: 'SaaS Platforms',
                description: 'Multi-tenant software-as-a-service solutions.',
            },
            {
                title: 'E-commerce Solutions',
                description: 'Scalable online stores with seamless checkout experiences.',
            },
            {
                title: 'Business Dashboards',
                description: 'Real-time analytics and reporting dashboards.',
            },
            {
                title: 'API Platforms',
                description: 'Developer-friendly API platforms with documentation.',
            },
            {
                title: 'Progressive Web Apps',
                description: 'App-like experiences delivered through the browser.',
            },
        ],
        industries: ['E-commerce', 'Healthcare', 'Education', 'Logistics'],
        technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'MongoDB'],
        cta: {
            text: 'Start Your Project',
            link: '/contact',
        },
    },
]);

// ============================================
// DEVELOPMENT PROCESS
// ============================================

export const DEVELOPMENT_PROCESS = Object.freeze({
    title: 'How We Work',
    subtitle: 'Our proven 5-step engineering process ensures successful outcomes',
    steps: [
        {
            step: '01',
            title: 'Discovery',
            description: 'Understanding your business needs and technical requirements',
            icon: Lightbulb,
            deliverables: ['Requirements Document', 'Project Scope', 'Timeline Estimate'],
        },
        {
            step: '02',
            title: 'Planning',
            description: 'Creating detailed project roadmap and architecture design',
            icon: Code,
            deliverables: ['System Architecture', 'Tech Stack Selection', 'Security Plan'],
        },
        {
            step: '03',
            title: 'Development',
            description: 'Agile development with regular progress updates',
            icon: Rocket,
            deliverables: ['Working Software', 'Code Repository', 'Documentation'],
        },
        {
            step: '04',
            title: 'Testing',
            description: 'Comprehensive QA and user acceptance testing',
            icon: CheckCircle,
            deliverables: ['Test Reports', 'Security Audit', 'Performance Metrics'],
        },
        {
            step: '05',
            title: 'Deployment',
            description: 'Production deployment and post-launch support',
            icon: Users,
            deliverables: ['Production Deployment', 'Training', 'Support Plan'],
        },
    ],
});

// ============================================
// TECHNOLOGY STACK
// ============================================

export const TECHNOLOGY_STACK = Object.freeze({
    title: 'Technologies We Use',
    subtitle: 'We work with the latest and most reliable technologies',
    badge: 'Technology Stack',
    categories: [
        {
            name: 'Frontend',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
        },
        {
            name: 'Backend',
            technologies: ['Java', 'Spring Boot', 'Node.js', 'Python', 'FastAPI', 'Express.js'],
        },
        {
            name: 'AI & ML',
            technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face', 'scikit-learn'],
        },
        {
            name: 'Cloud & DevOps',
            technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
        },
        {
            name: 'Databases',
            technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL', 'Oracle'],
        },
        {
            name: 'Testing',
            technologies: ['Selenium', 'Cypress', 'JMeter', 'Postman', 'Appium', 'Jest'],
        },
    ],
    flatStack: [
        { name: 'React', category: 'Frontend' },
        { name: 'Python', category: 'Backend' },
        { name: 'Java', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'Azure', category: 'Cloud' },
        { name: 'TensorFlow', category: 'AI/ML' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Docker', category: 'DevOps' },
        { name: 'Kubernetes', category: 'DevOps' },
        { name: 'Selenium', category: 'QA' },
    ]
});

// ============================================
// SERVICE CTA SECTION
// ============================================

export const SERVICE_CTA = Object.freeze({
    title: 'Ready to Get Started?',
    subtitle: 'Let us discuss how our services can help transform your business.',
    buttonText: 'Contact Us Today',
    buttonLink: '/contact',
});
