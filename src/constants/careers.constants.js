/**
 * Careers Page Constants
 * ======================
 * All data used specifically on the Careers page (/careers)
 * 
 * Sections: Hero, Why Join Us, Culture, Open Positions
 */

import { TrendingUp, BookOpen, Heart, Globe, Lightbulb, Users } from 'lucide-react';

// ============================================
// CAREERS PAGE HERO
// ============================================

export const CAREERS_HERO = {
    title: 'Join Our Team',
    subtitle: 'Build your career with a team that is shaping the future of technology',
    breadcrumb: [
        { label: 'Home', path: '/' },
        { label: 'Careers', path: '/careers' },
    ],
};

// ============================================
// WHY JOIN US - BENEFITS
// ============================================

export const CAREER_BENEFITS = {
    title: 'Why Join Us',
    subtitle: 'We invest in our people because they are our greatest asset',
    benefits: [
        {
            id: 'growth',
            title: 'Career Growth',
            description: 'Clear career paths with opportunities for advancement. We promote from within and support your professional development.',
            icon: TrendingUp,
        },
        {
            id: 'learning',
            title: 'Continuous Learning',
            description: 'Access to training programs, certifications, and conferences. We believe in staying ahead of technology trends.',
            icon: BookOpen,
        },
        {
            id: 'health',
            title: 'Health & Wellness',
            description: 'Comprehensive health insurance, wellness programs, and mental health support for you and your family.',
            icon: Heart,
        },
        {
            id: 'global',
            title: 'Global Exposure',
            description: 'Work with international clients and diverse teams. Opportunity for travel and cross-cultural experiences.',
            icon: Globe,
        },
        {
            id: 'innovation',
            title: 'Innovation Culture',
            description: 'Work on cutting-edge projects using the latest technologies. We encourage experimentation and new ideas.',
            icon: Lightbulb,
        },
        {
            id: 'collaboration',
            title: 'Collaborative Environment',
            description: 'Open, inclusive culture where every voice matters. Team events, hackathons, and knowledge sharing sessions.',
            icon: Users,
        },
    ],
};

// ============================================
// COMPANY CULTURE
// ============================================

export const COMPANY_CULTURE = {
    title: 'Our Culture',
    subtitle: 'A place where innovation meets collaboration',
    description: 'At Soft Synergy Systems, we have built a culture that celebrates innovation, values diversity, and promotes work-life balance. Our team members come from diverse backgrounds but share a common passion for technology and problem-solving.',
    values: [
        {
            id: 'innovation',
            title: 'Innovation First',
            description: 'We encourage creative thinking and embrace new ideas that push boundaries.',
        },
        {
            id: 'collaboration',
            title: 'Team Collaboration',
            description: 'We believe the best solutions come from working together across teams and disciplines.',
        },
        {
            id: 'growth',
            title: 'Growth Mindset',
            description: 'We are committed to continuous learning and professional development.',
        },
        {
            id: 'balance',
            title: 'Work-Life Balance',
            description: 'We respect personal time and promote a healthy work-life integration.',
        },
    ],
    media: {
        type: 'video', // 'video' or 'image'
        url: '/company-culture-video.mp4', // Replace with actual video URL
        thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Soft Synergy Systems Team',
    },
};

// ============================================
// OPEN POSITIONS
// ============================================

export const OPEN_POSITIONS = {
    title: 'Open Positions',
    subtitle: 'Find your perfect role and join our growing team',
    departments: [
        { id: 'all', label: 'All Departments' },
        { id: 'engineering', label: 'Engineering' },
        { id: 'ai-ml', label: 'AI & ML' },
        { id: 'qa', label: 'Quality Assurance' },
        { id: 'design', label: 'Design' },
        { id: 'operations', label: 'Operations' },
    ],
    locations: [
        { id: 'all', label: 'All Locations' },
        { id: 'bangalore', label: 'Bengaluru' },
        { id: 'remote', label: 'Remote' },
        { id: 'hybrid', label: 'Hybrid' },
    ],
    positions: [
        {
            id: 1,
            title: 'Senior Java Developer',
            department: 'engineering',
            location: 'bangalore',
            type: 'Full-time',
            experience: '5-8 years',
            description: 'We are looking for a Senior Java Developer to join our Enterprise Java team. You will be responsible for designing and building scalable microservices architectures for our enterprise clients.',
            requirements: [
                '5+ years of experience in Java development',
                'Strong experience with Spring Boot and microservices',
                'Experience with cloud platforms (AWS/Azure)',
                'Knowledge of containerization (Docker, Kubernetes)',
                'Excellent problem-solving skills',
            ],
            responsibilities: [
                'Design and develop scalable backend systems',
                'Lead technical discussions and mentor junior developers',
                'Collaborate with cross-functional teams',
                'Ensure code quality through reviews and testing',
            ],
            posted: 'Mar 1, 2026',
        },
        {
            id: 2,
            title: 'AI/ML Engineer',
            department: 'ai-ml',
            location: 'hybrid',
            type: 'Full-time',
            experience: '3-5 years',
            description: 'Join our AI division to build intelligent solutions using machine learning, NLP, and generative AI. You will work on cutting-edge projects for enterprise clients.',
            requirements: [
                '3+ years of experience in AI/ML development',
                'Strong Python programming skills',
                'Experience with TensorFlow, PyTorch, or similar frameworks',
                'Knowledge of LLMs and RAG systems',
                'Experience with NLP and computer vision',
            ],
            responsibilities: [
                'Develop and deploy ML models for production',
                'Build RAG systems and AI-powered applications',
                'Research and implement new AI techniques',
                'Collaborate with clients to understand requirements',
            ],
            posted: 'Feb 28, 2026',
        },
        {
            id: 3,
            title: 'QA Automation Engineer',
            department: 'qa',
            location: 'bangalore',
            type: 'Full-time',
            experience: '3-5 years',
            description: 'We are seeking a QA Automation Engineer to design and implement automated testing frameworks for our enterprise applications.',
            requirements: [
                '3+ years of experience in test automation',
                'Proficiency in Selenium, Cypress, or similar tools',
                'Experience with API testing and performance testing',
                'Knowledge of CI/CD pipelines',
                'Strong attention to detail',
            ],
            responsibilities: [
                'Design and implement test automation frameworks',
                'Execute automated test suites and analyze results',
                'Collaborate with development teams',
                'Maintain test documentation and reports',
            ],
            posted: 'Feb 25, 2026',
        },
        {
            id: 4,
            title: 'Full Stack Developer',
            department: 'engineering',
            location: 'remote',
            type: 'Full-time',
            experience: '2-4 years',
            description: 'Join our web development team to build modern, responsive web applications using React, Node.js, and cloud technologies.',
            requirements: [
                '2+ years of full stack development experience',
                'Proficiency in React and Node.js',
                'Experience with TypeScript',
                'Knowledge of databases (PostgreSQL, MongoDB)',
                'Familiarity with cloud platforms',
            ],
            responsibilities: [
                'Develop and maintain web applications',
                'Build RESTful APIs and microservices',
                'Implement responsive UI designs',
                'Write clean, maintainable code',
            ],
            posted: 'Feb 20, 2026',
        },
        {
            id: 5,
            title: 'Technical Project Manager',
            department: 'operations',
            location: 'bangalore',
            type: 'Full-time',
            experience: '5-8 years',
            description: 'We are looking for an experienced Technical Project Manager to lead enterprise software development projects and ensure successful delivery.',
            requirements: [
                '5+ years of project management experience',
                'PMP or Agile certification preferred',
                'Experience managing software development projects',
                'Strong communication and leadership skills',
                'Technical background in software development',
            ],
            responsibilities: [
                'Lead project planning and execution',
                'Manage project scope, timeline, and budget',
                'Coordinate with clients and internal teams',
                'Ensure quality and timely delivery',
            ],
            posted: 'Feb 15, 2026',
        },
        {
            id: 6,
            title: 'UI/UX Designer',
            department: 'design',
            location: 'hybrid',
            type: 'Full-time',
            experience: '2-4 years',
            description: 'Join our design team to create intuitive, user-centered designs for web and mobile applications.',
            requirements: [
                '2+ years of UI/UX design experience',
                'Proficiency in Figma, Sketch, or similar tools',
                'Strong portfolio demonstrating design skills',
                'Understanding of accessibility standards',
                'Experience with design systems',
            ],
            responsibilities: [
                'Create user interfaces and prototypes',
                'Conduct user research and usability testing',
                'Develop and maintain design systems',
                'Collaborate with developers for implementation',
            ],
            posted: 'Feb 10, 2026',
        },
    ],
};

// ============================================
// APPLICATION PROCESS
// ============================================

export const APPLICATION_PROCESS = {
    title: 'How to Apply',
    steps: [
        {
            step: 1,
            title: 'Submit Application',
            description: 'Apply through our portal or send your resume to careers@softsynergysystems.com',
        },
        {
            step: 2,
            title: 'Initial Screening',
            description: 'Our HR team will review your application and schedule an initial call.',
        },
        {
            step: 3,
            title: 'Technical Interview',
            description: 'Meet with our technical team for a detailed discussion about your skills.',
        },
        {
            step: 4,
            title: 'Final Discussion',
            description: 'Meet with leadership and discuss role expectations and culture fit.',
        },
        {
            step: 5,
            title: 'Offer',
            description: 'Receive your offer and join our team!',
        },
    ],
};

// ============================================
// CAREERS CTA
// ============================================

export const CAREERS_CTA = {
    title: 'Do Not See a Suitable Role?',
    subtitle: 'We are always looking for talented individuals. Send us your resume!',
    buttonText: 'Send Your Resume',
    buttonLink: 'mailto:careers@softsynergysystems.com',
    email: 'careers@softsynergysystems.com',
};
