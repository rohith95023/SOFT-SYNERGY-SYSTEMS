/**
 * Careers Page Constants
 * ======================
 * All data used specifically on the Careers page (/careers)
 * 
 * Sections: Hero, Why Join Us, Culture, Open Positions
 * 
 * @module constants/careers
 */

import { Rocket, GraduationCap, Heart, Globe, Lightbulb, Users } from 'lucide-react';

// ============================================
// CAREERS PAGE SEO
// ============================================

export const CAREERS_SEO = Object.freeze({
    title: 'Join Our Team',
    description: 'Join Soft Synergy Systems and build your career in AI, automation, and enterprise software development. Explore open positions and our vibrant culture.',
    keywords: 'careers at soft synergy systems, software engineering jobs, AI jobs, QA jobs, tech careers Bengaluru',
});

// ============================================
// CAREERS PAGE HERO
// ============================================

export const CAREERS_HERO = Object.freeze({
    title: 'Join Our Team',
    subtitle: 'Build your career with innovators and problem-solvers',
    breadcrumb: [
        { label: 'Home', path: '/' },
        { label: 'Careers', path: '/careers' }
    ],
});

// ============================================
// WHY JOIN US - BENEFITS
// ============================================

export const CAREER_BENEFITS = Object.freeze({
    badge: 'Benefits',
    title: 'Why Join Us',
    subtitle: 'We invest in our people because they are our greatest asset. Here\'s what you can expect when you join our team.',
    benefits: [
        {
            title: 'Growth Opportunities',
            description: 'Accelerate your career with challenging projects and clear advancement paths.',
            icon: Rocket,
        },
        {
            title: 'Learning & Development',
            description: 'Access to training programs, certifications, and mentorship from industry experts.',
            icon: GraduationCap,
        },
        {
            title: 'Health & Wellness',
            description: 'Comprehensive health insurance, wellness programs, and mental health support.',
            icon: Heart,
        },
        {
            title: 'Global Exposure',
            description: 'Work with international clients and diverse teams across multiple time zones.',
            icon: Globe,
        },
        {
            title: 'Innovation Culture',
            description: 'Experiment with cutting-edge technologies and contribute to groundbreaking solutions.',
            icon: Lightbulb,
        },
        {
            title: 'Collaborative Environment',
            description: 'Join a supportive team that values transparency, respect, and open communication.',
            icon: Users,
        },
    ],
});

// ============================================
// COMPANY CULTURE
// ============================================

export const COMPANY_CULTURE = Object.freeze({
    badge: 'Our Culture',
    title: 'What Defines Us',
    subtitle: 'Discover what makes our team special',
    description: 'At Soft Synergy Systems, we\'ve built a culture that empowers our team to do their best work. We believe in collaboration, continuous improvement, and creating an environment where everyone can thrive.',
    values: [
        {
            title: 'Innovation First',
            description: 'We embrace new ideas and technologies, encouraging experimentation and creative problem-solving.',
        },
        {
            title: 'Client Success',
            description: 'Our clients\' success is our success. We go above and beyond to deliver exceptional value.',
        },
        {
            title: 'Continuous Learning',
            description: 'We invest in our people\'s growth through training, workshops, and knowledge sharing.',
        },
        {
            title: 'Work-Life Balance',
            description: 'We believe in sustainable work practices that allow our team to thrive professionally and personally.',
        }
    ],
    media: {
        type: 'video', // 'video' or 'image'
        url: '/company-culture-video.mp4', // Replace with actual video URL
        thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Soft Synergy Systems Team',
    },
});

// ============================================
// OPEN POSITIONS
// ============================================

export const OPEN_POSITIONS = Object.freeze({
    badge: 'Opportunities',
    title: 'Open Positions',
    subtitle: 'Explore our current openings and find the role that matches your skills and aspirations.',
    footerTitle: 'Don\'t see a role that fits?',
    footerText: 'We\'re always looking for talented individuals.',
    footerLinkText: 'Send us your resume',
    positions: [
        {
            id: 1,
            title: 'Senior Java Developer',
            department: 'Engineering',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '5+ years'
        },
        {
            id: 2,
            title: 'Python Developer - AI/ML',
            department: 'AI Division',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '3+ years'
        },
        {
            id: 3,
            title: 'QA Automation Engineer',
            department: 'Quality Assurance',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '4+ years'
        },
        {
            id: 4,
            title: 'Full Stack Developer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            experience: '3+ years'
        },
        {
            id: 5,
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '4+ years'
        },
        {
            id: 6,
            title: 'Business Analyst',
            department: 'Consulting',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '2+ years'
        }
    ],
});

// ============================================
// APPLICATION PROCESS
// ============================================

export const APPLICATION_PROCESS = Object.freeze({
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
});

// ============================================
// CAREERS CTA
// ============================================

export const CAREERS_CTA = Object.freeze({
    title: 'Do Not See a Suitable Role?',
    subtitle: 'We are always looking for talented individuals. Send us your resume!',
    buttonText: 'Send Your Resume',
    buttonLink: '/contact',
    email: 'careers@softsynergysystems.com',
});

