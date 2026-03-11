/**
 * Contact Page Constants
 * ======================
 * All data used specifically on the Contact page (/contact)
 * 
 * Sections: Hero, Contact Form, Contact Info, Map
 */

// ============================================
// CONTACT PAGE HERO
// ============================================

export const CONTACT_HERO = {
    title: 'Get In Touch',
    subtitle: 'Ready to start your project? We would love to hear from you.',
    breadcrumb: [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' },
    ],
};

// ============================================
// CONTACT INFORMATION
// ============================================

export const CONTACT_INFO = {
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
            primary: 'hr@softsynergysystems.com',
            sales: 'sales@softsynergysystems.com',
            support: 'support@softsynergysystems.com',
        },
        phone: {
            primary: '+91 82964 53365',
            display: '+91 82964 53365',
        },
    },
    workingHours: {
        weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
        weekend: 'Saturday - Sunday: Closed',
        timezone: 'Indian Standard Time (IST)',
    },
};

// ============================================
// CONTACT FORM CONFIGURATION
// ============================================

export const CONTACT_FORM_CONFIG = {
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
        message: 'Please try again or contact us directly at hr@softsynergysystems.com',
    },
};

// ============================================
// MAP CONFIGURATION
// ============================================

export const MAP_CONFIG = {
    title: 'Our Location',
    subtitle: 'Visit us at our headquarters in Bengaluru',
    // Google Maps embed URL - replace with actual coordinates
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.123456789!2d77.6123456789!3d13.0123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzQ0LjQiTiA3N8KwMzYnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890',
    coordinates: {
        lat: 13.012345,
        lng: 77.612345,
    },
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Soft+Synergy+Systems+Bengaluru',
};

// ============================================
// SOCIAL MEDIA LINKS
// ============================================

export const SOCIAL_LINKS = [
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
];

// ============================================
// FAQ QUICK LINKS
// ============================================

export const CONTACT_FAQ = {
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
};

// ============================================
// CONTACT CTA
// ============================================

export const CONTACT_CTA = {
    title: 'Prefer to Talk?',
    subtitle: 'Call us directly or schedule a meeting at your convenience.',
    phoneCTA: {
        text: 'Call Now',
        number: '+91 82964 53365',
    },
    scheduleCTA: {
        text: 'Schedule a Call',
        url: '#', // Replace with scheduling tool URL
    },
};
