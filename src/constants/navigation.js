export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { name: 'AI & Python Development', description: 'Advanced AI agents and ML solutions', path: '/services#ai' },
      { name: 'Quality Assurance', description: 'Comprehensive end-to-end testing', path: '/services#qa' },
      { name: 'Enterprise Java', description: 'Scalable backend architectures', path: '/services#java' },
      { name: 'Full Stack Web', description: 'Modern SaaS and web applications', path: '/services#web' },
    ]
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICE_NAV_LINKS = [
  { name: 'AI & Python Development', path: '/services#ai' },
  { name: 'Quality Assurance', path: '/services#qa' },
  { name: 'Enterprise Java', path: '/services#java' },
  { name: 'Full Stack Web', path: '/services#web' },
];
