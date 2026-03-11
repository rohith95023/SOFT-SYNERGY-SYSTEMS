/**
 * FAQ Page Constants
 * ==================
 * All data used specifically on the FAQ page (/faq)
 * 
 * Sections: Hero, FAQ Categories, FAQ Items
 */

// ============================================
// FAQ PAGE HERO
// ============================================

export const FAQ_HERO = {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our services and processes',
    breadcrumb: [
        { label: 'Home', path: '/' },
        { label: 'FAQ', path: '/faq' },
    ],
    searchPlaceholder: 'Search questions...',
};

// ============================================
// FAQ CATEGORIES
// ============================================

export const FAQ_CATEGORIES = [
    { id: 'general', label: 'General', icon: 'info' },
    { id: 'services', label: 'Services', icon: 'briefcase' },
    { id: 'process', label: 'Process', icon: 'workflow' },
    { id: 'pricing', label: 'Pricing', icon: 'currency' },
    { id: 'support', label: 'Support', icon: 'help' },
];

// ============================================
// FAQ DATA - ALL QUESTIONS AND ANSWERS
// ============================================

export const FAQ_DATA = [
    // ============================================
    // GENERAL QUESTIONS
    // ============================================
    {
        id: 'general-1',
        category: 'General',
        question: 'What industries does Soft Synergy Systems specialize in?',
        answer: 'We specialize in several major industry verticals including Banking, Fintech, Telecom, Logistics, Healthcare, and E-commerce. Our solutions are tailored to the specific regulatory and operational needs of each sector. With deep domain expertise, we understand the unique challenges and opportunities in each industry.',
        tags: ['industries', 'expertise', 'sectors'],
    },
    {
        id: 'general-2',
        category: 'General',
        question: 'Is Soft Synergy Systems an ISO certified organization?',
        answer: 'Yes, we are a formally recognized ISO Certified Organisation. We maintain strict quality management systems and follow international standards for software development and data security. Our ISO certification reflects our commitment to delivering consistent, high-quality solutions to our clients.',
        tags: ['certification', 'ISO', 'quality'],
    },
    {
        id: 'general-3',
        category: 'General',
        question: 'Where is the company headquartered?',
        answer: 'Our global headquarters is located in Bengaluru, Karnataka, India. Specifically at 26/3, Thirumenahalli Main Road, Block 3, Chokkanahalli, Bengaluru - 560064. We serve clients globally across India, Middle East, Southeast Asia, Europe, and North America.',
        tags: ['location', 'headquarters', 'address'],
    },
    {
        id: 'general-4',
        category: 'General',
        question: 'How long has Soft Synergy Systems been in business?',
        answer: 'We were founded in 2014 and have been serving enterprises for over 10 years. In that time, we have grown from a small team to a full-service technology partner with four specialized divisions and over 50 enterprise clients globally.',
        tags: ['history', 'experience', 'founded'],
    },
    {
        id: 'general-5',
        category: 'General',
        question: 'What are your core divisions?',
        answer: 'We have four specialized technology divisions: Software Development Division (web and mobile applications), Artificial Intelligence Division (AI/ML solutions), Robotics & Automation Division (RPA and process automation), and Embedded Systems Division (IoT and firmware development).',
        tags: ['divisions', 'services', 'capabilities'],
    },

    // ============================================
    // SERVICES QUESTIONS
    // ============================================
    {
        id: 'services-1',
        category: 'Services',
        question: 'What kind of AI solutions do you provide?',
        answer: 'We offer a comprehensive range of AI services including RAG (Retrieval-Augmented Generation) systems for knowledge management, AI voice agents and chatbots for customer service, predictive analytics for business intelligence, custom ML model development, natural language processing, and computer vision solutions. Our AI solutions are tailored to enterprise needs and integrate seamlessly with existing systems.',
        tags: ['AI', 'machine learning', 'RAG', 'chatbots'],
    },
    {
        id: 'services-2',
        category: 'Services',
        question: 'Do you offer end-to-end QA services?',
        answer: 'Yes, our QA division provides comprehensive end-to-end testing services including automated testing frameworks, performance and load testing, security testing and vulnerability assessments, API testing, mobile testing on real devices, and compliance testing for regulated industries. We help organizations achieve faster release cycles without compromising quality.',
        tags: ['QA', 'testing', 'automation', 'quality'],
    },
    {
        id: 'services-3',
        category: 'Services',
        question: 'Can you modernize legacy Java applications?',
        answer: 'Absolutely. We have extensive experience in transforming legacy monoliths into scalable, cloud-native microservices architectures using modern Java frameworks. Our enterprise Java team specializes in Spring Boot applications, API development, and enterprise integration patterns. We serve banking, insurance, and telecommunications sectors with complex modernization projects.',
        tags: ['Java', 'modernization', 'microservices', 'legacy'],
    },
    {
        id: 'services-4',
        category: 'Services',
        question: 'What technologies do you use for web development?',
        answer: 'Our full stack web development team works with modern technologies including React, Next.js, Vue.js, Node.js, TypeScript, and Tailwind CSS for frontend; Java Spring Boot, Python FastAPI, and Node.js for backend; PostgreSQL, MongoDB, and Redis for databases; and AWS, Azure, and Google Cloud for deployment. We choose the best technology stack based on project requirements.',
        tags: ['web development', 'technologies', 'full stack', 'React'],
    },
    {
        id: 'services-5',
        category: 'Services',
        question: 'Do you provide RPA implementation services?',
        answer: 'Yes, our Robotics & Automation Division specializes in RPA implementation. We help enterprises automate repetitive, rule-based processes using leading RPA platforms. Our services include process assessment, bot development, deployment, and ongoing support. We also integrate RPA with AI for intelligent automation solutions.',
        tags: ['RPA', 'automation', 'robotics', 'process'],
    },

    // ============================================
    // PROCESS QUESTIONS
    // ============================================
    {
        id: 'process-1',
        category: 'Process',
        question: 'How do I start a project with Soft Synergy Systems?',
        answer: 'Starting a project is easy. You can use our Contact form on the website, email us at hr@softsynergysystems.com, or call us at +91 97908 23800. One of our solution architects will reach out within 24 hours to schedule a discovery call where we will understand your requirements and propose a tailored solution.',
        tags: ['start', 'contact', 'engagement', 'begin'],
    },
    {
        id: 'process-2',
        category: 'Process',
        question: 'What is your typical development process?',
        answer: 'We follow a proven 5-step engineering process: Discovery (understanding requirements and goals), Architecture (designing the solution), Develop (agile development with regular updates), Validate (comprehensive testing and QA), and Deliver (deployment and ongoing support). This ensures full transparency and high-quality outcomes throughout the project lifecycle.',
        tags: ['process', 'methodology', 'development', 'workflow'],
    },
    {
        id: 'process-3',
        category: 'Process',
        question: 'How do you handle project communication and updates?',
        answer: 'We believe in transparent communication. You will have a dedicated project manager who provides regular updates through weekly status reports, sprint reviews, and direct communication channels. We use collaboration tools like Jira, Confluence, and Slack to ensure you have full visibility into project progress.',
        tags: ['communication', 'updates', 'project management'],
    },
    {
        id: 'process-4',
        category: 'Process',
        question: 'What engagement models do you offer?',
        answer: 'We offer flexible engagement models to suit different needs: Fixed-Price Projects (defined scope with fixed timeline and budget), Time & Materials (flexible scope with hourly billing), Dedicated Teams (full-time resources working exclusively on your project), and Staff Augmentation (skilled professionals joining your team). We will recommend the best model based on your project requirements.',
        tags: ['engagement', 'models', 'pricing', 'contracts'],
    },

    // ============================================
    // PRICING QUESTIONS
    // ============================================
    {
        id: 'pricing-1',
        category: 'Pricing',
        question: 'How much does a typical project cost?',
        answer: 'Project costs vary based on scope, complexity, and duration. We provide detailed proposals after understanding your requirements during the discovery phase. We offer competitive rates while maintaining high quality standards. Contact us for a free consultation and quote tailored to your specific needs.',
        tags: ['cost', 'pricing', 'budget', 'quote'],
    },
    {
        id: 'pricing-2',
        category: 'Pricing',
        question: 'Do you offer free consultations?',
        answer: 'Yes, we offer complimentary initial consultations to understand your requirements and provide preliminary recommendations. This helps both parties determine if there is a good fit before moving forward with a formal engagement.',
        tags: ['consultation', 'free', 'initial', 'meeting'],
    },
    {
        id: 'pricing-3',
        category: 'Pricing',
        question: 'What payment terms do you offer?',
        answer: 'Our payment terms are typically milestone-based for fixed-price projects, with an upfront deposit and subsequent payments tied to deliverables. For time & materials engagements, we bill monthly based on hours worked. Specific terms are discussed and agreed upon during contract negotiation.',
        tags: ['payment', 'terms', 'milestones', 'billing'],
    },

    // ============================================
    // SUPPORT QUESTIONS
    // ============================================
    {
        id: 'support-1',
        category: 'Support',
        question: 'What post-delivery support do you provide?',
        answer: 'We provide comprehensive post-delivery support including warranty period support (typically 30-90 days), ongoing maintenance packages, 24/7 critical issue support for enterprise clients, and dedicated support teams for long-term engagements. Support terms are defined in the project agreement.',
        tags: ['support', 'maintenance', 'post-delivery', 'warranty'],
    },
    {
        id: 'support-2',
        category: 'Support',
        question: 'How do you handle data security and confidentiality?',
        answer: 'Data security is a top priority. We are ISO certified and follow industry best practices for security. This includes NDAs with all clients and team members, secure development environments, encrypted communications, access controls, and compliance with relevant regulations like GDPR and HIPAA where applicable.',
        tags: ['security', 'confidentiality', 'data', 'privacy'],
    },
    {
        id: 'support-3',
        category: 'Support',
        question: 'Can you work with our existing team?',
        answer: 'Absolutely. We frequently work in hybrid models where our team collaborates with client teams. We can integrate with your existing workflows, tools, and processes. Many clients appreciate our staff augmentation services where our experts join their teams to fill skill gaps or accelerate projects.',
        tags: ['collaboration', 'team', 'integration', 'augmentation'],
    },
];

// ============================================
// FAQ CTA
// ============================================

export const FAQ_CTA = {
    title: 'Still Have Questions?',
    subtitle: 'Cannot find the answer you are looking for? Please reach out to our team.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
};
