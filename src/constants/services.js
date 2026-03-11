import { Cpu, ShieldCheck, Database, Globe } from 'lucide-react';

export const SERVICE_LIST = [
  {
    id: 'ai',
    title: 'AI & Python Development',
    description: 'Building intelligent AI-powered solutions tailored for modern enterprises.',
    icon: Cpu,
    capabilities: [
      'RAG (Retrieval-Augmented Generation) systems',
      'AI Voice Agents & Chatbots',
      'Predictive Analytics Models',
      'Custom ML Model Development'
    ],
    industries: ['Healthcare', 'Finance', 'E-commerce', 'Customer Service'],
    cta: 'Learn More',
    link: '/services#ai'
  },
  {
    id: 'qa',
    title: 'Quality Assurance Services',
    description: 'Ensuring flawless software through comprehensive end-to-end testing.',
    icon: ShieldCheck,
    capabilities: [
      'Automated Testing Frameworks',
      'Performance & Load Testing',
      'Security Vulnerability Assessment',
      'Compliance & Regulatory Testing'
    ],
    industries: ['Banking', 'Healthcare', 'Fintech', 'Insurance'],
    cta: 'Learn More',
    link: '/services#qa'
  },
  {
    id: 'java',
    title: 'Enterprise Java Development',
    description: 'Scalable, enterprise-grade Java applications built for demanding industries.',
    icon: Database,
    capabilities: [
      'Microservices Architecture',
      'Scalable Backend Systems',
      'High-Performance API Development',
      'Legacy System Modernization'
    ],
    industries: ['Banking', 'Insurance', 'Telecommunications', 'Logistics'],
    cta: 'Learn More',
    link: '/services#java'
  },
  {
    id: 'web',
    title: 'Full Stack Web Development',
    description: 'End-to-end web applications from frontend UX to backend API.',
    icon: Globe,
    capabilities: [
      'Custom SaaS Platforms',
      'Enterprise E-commerce Solutions',
      'Real-time Business Dashboards',
      'Progressive Web Apps (PWA)'
    ],
    industries: ['Startups', 'SaaS', 'E-commerce', 'Direct-to-Consumer'],
    cta: 'Learn More',
    link: '/services#web'
  }
];
