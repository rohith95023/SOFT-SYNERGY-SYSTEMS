/**
 * Contact Page Constants
 * ======================
 * All data used specifically on the Contact page (/contact)
 * 
 * Sections: Hero, Contact Form, Contact Info, Map
 * 
 * @module constants/contact
 */

import appConfig from '../config/app.config';

// ============================================
// CONTACT PAGE HERO
// ============================================

export const CONTACT_HERO = Object.freeze({
    title: 'Get In Touch',
    subtitle: 'Ready to start your project? We would love to hear from you.',
    breadcrumb: [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' },
    ],
});

// ============================================
// CONTACT INFORMATION
// ============================================

export const CONTACT_INFO = Object.freeze({
    company: {
        name: 'Soft Synergy Systems Pvt Ltd',
        tagline: 'Innovating for a Digital Era',
    },
    address: {
        full: '26/3, Thirumenahalli Main Road, Block 3, Chokkanahalli, Bengaluru, Karnataka, India',
        street: '26/3, Thirumenahalli Main Road, Block 3',
        area: 'Chokkanahalli',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
        pincode: '560064',
    },
    contact: {
        email: {
            primary: appConfig.contact.email,
            sales: 'sales@softsynergysystems.com',
            support: 'support@softsynergysystems.com',
        },
        phone: {
            primary: appConfig.contact.phone,
            display: appConfig.contact.phone,
        },
    },
    workingHours: {
        weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
        weekend: 'Saturday - Sunday: Closed',
        timezone: 'Indian Standard Time (IST)',
    },
});

// ============================================
// CONTACT FORM CONFIGURATION
// ============================================

export const CONTACT_FORM_CONFIG = Object.freeze({
    title: 'Send Us a Message',
    subtitle: 'Fill out the form below and we will get back to you within 24 hours.',
    fields: {
        name: {
            label: 'Full Name',
            placeholder: 'Enter your full name',
            required: true,
            minLength: 2,
            maxLength: 100,
        },
        email: {
            label: 'Email Address',
            placeholder: 'Enter your email address',
            required: true,
            type: 'email',
        },
        phone: {
            label: 'Phone Number',
            placeholder: 'Enter your phone number',
            required: false,
            type: 'tel',
        },
        company: {
            label: 'Company Name',
            placeholder: 'Enter your company name',
            required: false,
        },
        service: {
            label: 'Service of Interest',
            placeholder: 'Select a service',
            required: true,
            options: [
                { value: '', label: 'Select a service' },
                { value: 'ai-python', label: 'AI & Python Development' },
                { value: 'qa-services', label: 'Quality Assurance Services' },
                { value: 'enterprise-java', label: 'Enterprise Java Development' },
                { value: 'fullstack-web', label: 'Full Stack Web Development' },
                { value: 'consulting', label: 'Technology Consulting' },
                { value: 'other', label: 'Other' },
            ],
        },
        message: {
            label: 'Message',
            placeholder: 'Tell us about your project or inquiry...',
            required: true,
            minLength: 10,
            maxLength: 2000,
            rows: 5,
        },
    },
    submitButton: {
        text: 'Send Message',
        loadingText: 'Sending...',
        successText: 'Message Sent!',
    },
    successMessage: {
        title: 'Thank you for reaching out!',
        message: 'We have received your message and will get back to you within 24 hours.',
    },
    errorMessage: {
        title: 'Something went wrong',
        message: `Please try again or contact us directly at ${appConfig.contact.email}`,
    },
});

// ============================================
// MAP CONFIGURATION
// ============================================

export const MAP_CONFIG = Object.freeze({
    title: 'Our Location',
    subtitle: 'Visit us at our headquarters in Bengaluru',
    // Google Maps embed URL
    embedUrl: appConfig.map.embedUrl,
    coordinates: {
        lat: 13.012345,
        lng: 77.612345,
    },
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Soft+Synergy+Systems+Bengaluru',
});

// ============================================
// SOCIAL MEDIA LINKS
// ============================================

export const SOCIAL_LINKS = Object.freeze([
    {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/company/soft-synergy-systems',
        icon: 'linkedin',
        ariaLabel: 'Follow Soft Synergy Systems on LinkedIn',
        handle: '@soft-synergy-systems',
    },
    {
        platform: 'Twitter',
        url: 'https://twitter.com/softsynergysys',
        icon: 'twitter',
        ariaLabel: 'Follow Soft Synergy Systems on Twitter',
        handle: '@softsynergysys',
    },
    {
        platform: 'Facebook',
        url: 'https://facebook.com/softsynergysystems',
        icon: 'facebook',
        ariaLabel: 'Follow Soft Synergy Systems on Facebook',
        handle: '@softsynergysystems',
    },
]);

// ============================================
// FAQ QUICK LINKS
// ============================================

export const CONTACT_FAQ = Object.freeze({
    title: 'Common Questions',
    questions: [
        {
            question: 'What is your typical response time?',
            answer: 'We typically respond to inquiries within 24 business hours.',
        },
        {
            question: 'Do you offer free consultations?',
            answer: 'Yes, we offer complimentary initial consultations to understand your requirements.',
        },
        {
            question: 'What industries do you serve?',
            answer: 'We serve Banking, Fintech, Telecom, Logistics, Healthcare, and E-commerce industries.',
        },
    ],
    viewAllLink: '/faq',
    viewAllText: 'View All FAQs',
});

// ============================================
// CONTACT CTA
// ============================================

export const CONTACT_CTA = Object.freeze({
    title: 'Prefer to Talk?',
    subtitle: 'Call us directly or schedule a meeting at your convenience.',
    phoneCTA: {
        text: 'Call Now',
        number: appConfig.contact.phone,
    },
    scheduleCTA: {
        text: 'Schedule a Call',
        url: '#', // Replace with scheduling tool URL
    },
});
