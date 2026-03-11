export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'AI & Python Development', path: '/services', description: 'Intelligent AI-powered solutions' },
      { name: 'Quality Assurance', path: '/services', description: 'End-to-end testing services' },
      { name: 'Enterprise Java', path: '/services', description: 'Scalable backend systems' },
      { name: 'Full Stack Web', path: '/services', description: 'Modern web applications' },
    ]
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICE_NAV_LINKS = [
  { name: 'AI & Python Development', path: '/services' },
  { name: 'Quality Assurance', path: '/services' },
  { name: 'Enterprise Java', path: '/services' },
  { name: 'Full Stack Web', path: '/services' },
];
