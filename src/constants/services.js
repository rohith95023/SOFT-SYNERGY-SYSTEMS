import { Brain, Shield, Code, Globe } from 'lucide-react';

export const SERVICE_LIST = [
  {
    id: 'ai-python',
    title: 'AI & Python Development',
    description: 'Building intelligent AI-powered solutions tailored for modern enterprises, from RAG systems to predictive analytics.',
    icon: Brain,
    link: '/services',
    capabilities: [
      'RAG Systems & Knowledge Bases',
      'AI Voice Agents & Chatbots',
      'Machine Learning Models',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision Solutions',
    ],
    industries: ['Healthcare', 'Finance', 'E-commerce', 'Customer Service'],
  },
  {
    id: 'qa-services',
    title: 'Quality Assurance Services',
    description: 'Ensuring flawless software through comprehensive end-to-end testing and quality engineering practices.',
    icon: Shield,
    link: '/services',
    capabilities: [
      'Automated Testing',
      'Performance Testing',
      'Security Testing',
      'API Testing',
      'Mobile Testing',
      'Compliance Testing',
    ],
    industries: ['Banking', 'Healthcare', 'Fintech', 'Insurance'],
  },
  {
    id: 'enterprise-java',
    title: 'Enterprise Java Development',
    description: 'Scalable, enterprise-grade Java applications built for demanding industries with complex requirements.',
    icon: Code,
    link: '/services',
    capabilities: [
      'Microservices Architecture',
      'Scalable Backend Systems',
      'API Development',
      'Legacy Modernization',
      'Spring Boot Applications',
      'Enterprise Integration',
    ],
    industries: ['Banking', 'Insurance', 'Telecommunications', 'Logistics'],
  },
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Development',
    description: 'End-to-end web applications from frontend UX to backend API, delivering seamless digital experiences.',
    icon: Globe,
    link: '/services',
    capabilities: [
      'Web Applications',
      'SaaS Platforms',
      'E-commerce Solutions',
      'Business Dashboards',
      'API Platforms',
      'Progressive Web Apps',
    ],
    industries: ['E-commerce', 'Healthcare', 'Education', 'Logistics'],
  },
];

export const SERVICE_NAV_LINKS = SERVICE_LIST.map(service => ({
  name: service.title,
  path: service.link,
  description: service.description,
}));
