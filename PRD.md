**PRODUCT REQUIREMENTS DOCUMENT**

Soft Synergy Systems Pvt Ltd - Corporate Website

Built with React + Vite | Version 1.0 | 2026

| **Document Type** | Product Requirements Document (PRD) |
| --- | --- |
| **Project** | Soft Synergy Systems - Corporate Website |
| **Client** | Soft Synergy Systems Pvt Ltd |
| **Tech Stack** | React 18 + Vite 5 + React Router v6 + Tailwind CSS v3 |
| **Version** | 1.0 - Initial Release |
| **Date** | March 2026 |
| **Author** | Project Team |
| **Status** | APPROVED FOR DEVELOPMENT |

# **1\. Executive Summary**

Soft Synergy Systems Pvt Ltd requires a fully modern, responsive, and conversion-optimised corporate website built using React 18 + Vite 5. The website must serve as the company's primary digital presence - presenting its AI, automation, software, and data capabilities to enterprise clients globally.

The site must deliver an exceptional first impression within 3 seconds, clearly communicate the company's value proposition, and guide visitors through a smooth journey from awareness to inquiry conversion. It will follow a clean, minimal, light-mode-first aesthetic with subtle animations, strong typography, and a professional colour palette.

**Primary Goals:**

- Establish Soft Synergy Systems as a credible, innovative technology partner
- Clearly showcase services: AI/ML, QA, Java, Full Stack Web Development
- Drive qualified business inquiries through strategically placed CTAs
- Build trust through client logos, testimonials, certifications, and credentials
- Provide fast, accessible, mobile-first experience across all devices

# **2\. Company Information**

| **Company Name** | Soft Synergy Systems Pvt Ltd |
| --- | --- |
| **Tagline** | Innovating for a Digital Era |
| **Headquarters** | 26/3, Thirumenahalli Main Road, Block 3, Chokkanahalli, Bengaluru, Karnataka, India |
| **Email** | <hr@softsynergysystems.com> |
| **Phone** | +91 97908 23800 |
| **ISO Certification** | Yes - ISO Certified Organisation |
| **Industries** | Banking, Fintech, Telecom, Logistics, Healthcare, E-commerce |

## **2.1 Vision & Mission**

Vision: To become a global leader in digital transformation and advanced technology solutions.

Mission: Empowering organisations with innovative technology solutions that drive efficiency, intelligence, and business growth.

## **2.2 Core Divisions**

- Software Development Division
- Artificial Intelligence Division
- Robotics & Automation Division
- Embedded Systems Division

# **3\. Target Audience**

| **Primary** | C-level executives and decision makers at mid to large enterprises |
| --- | --- |
| **Secondary** | IT managers, procurement heads, and technical architects |
| **Tertiary** | Startups, founders, and SMBs seeking scalable technology partners |
| **Geography** | Global - India, Middle East, Southeast Asia, Europe, North America |
| **Intent** | Evaluating technology vendors, requesting proposals, comparing service providers |

# **4\. Design System & Branding**

## **4.1 Colour Palette**

| **Component** | **Priority** | **Description** |
| --- | --- | --- |
| Primary Blue | **Must Have** | #1A4B8C - Main brand colour. Used for headings, CTAs, nav highlights |
| Accent Cyan | **Must Have** | #0EA5E9 - Gradient accents, button hover states, highlights |
| Dark Navy | **Must Have** | #0F172A - Page backgrounds (dark areas), hero overlays, text |
| Slate | **Must Have** | #334155 - Body text, secondary headings, subtle elements |
| Light Blue BG | **Must Have** | #EFF6FF - Section backgrounds, card backgrounds, light panels |
| White | **Must Have** | #FFFFFF - Primary page background, card surfaces |
| Success Green | **Should Have** | #16A34A - Success states, trust badges, positive stats |
| Warning Amber | **Should Have** | #F59E0B - Warning states, highlights, emphasised numbers |

## **4.2 Typography**

| **Primary Font** | Inter (Google Fonts) - Clean, modern, highly legible |
| --- | --- |
| **Fallback** | system-ui, -apple-system, sans-serif |
| **Display H1** | 48-64px, font-weight: 800, letter-spacing: -0.02em |
| **Section H2** | 32-40px, font-weight: 700 |
| **Sub H3** | 22-26px, font-weight: 600 |
| **Body Text** | 16-18px, font-weight: 400, line-height: 1.7 |
| **Small / Caption** | 13-14px, font-weight: 400-500 |
| **CTA Buttons** | 15-16px, font-weight: 600, letter-spacing: 0.01em |

## **4.3 Spacing & Layout**

- Base spacing unit: 4px (0.25rem). Scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96px
- Max content width: 1280px centred with auto horizontal margins
- Section padding: 80-120px vertical on desktop, 48-64px on mobile
- Card border-radius: 12-16px. Button border-radius: 8px
- Shadow system: shadow-sm (hover), shadow-md (cards), shadow-lg (modals)

# **5\. Site Architecture & Pages**

## **5.1 Complete Page List**

| **Page** | **Route** | **Purpose** |
| --- | --- | --- |
| Home | /   | Primary landing - hero, services overview, trust indicators |
| About | /about | Company story, mission, vision, team, timeline, values |
| Services | /services | Full service catalogue with detail sub-sections |
| Portfolio | /portfolio | Case studies, client work, industry solutions |
| Blog / Insights | /blog | Articles, thought leadership, tech insights |
| Blog Detail | /blog/:slug | Individual blog post page |
| Contact | /contact | Contact form, location, phone, email, map |
| FAQ | /faq | Common questions with accordion interface |
| Privacy Policy | /privacy-policy | GDPR-compliant privacy statement |
| Terms & Conditions | /terms | Legal terms of website use |
| Cookie Policy | /cookies | Cookie usage and preferences |
| Support / Help | /support | Help centre, support options |
| 404 Not Found | \*  | Custom branded error page |

# **6\. Page-by-Page Specifications**

## **6.1 Home Page (/)**

**Hero Section**

- Full-viewport height hero with animated gradient background (blue to dark navy)
- Bold headline: 'Innovating for a Digital Era' - 56-64px, white, font-weight: 800
- Subheadline: Company description in 18-20px, 60% white opacity
- Primary CTA: 'Explore Our Services' → /services (solid primary button)
- Secondary CTA: 'Get In Touch' → /contact (ghost/outline button)
- Animated floating tech illustration or abstract SVG grid in background
- Trust bar below fold: '10+ Years Experience | ISO Certified | 50+ Enterprise Clients'
- Smooth scroll-down indicator with animated arrow

**Services Overview Section**

- Section title: 'What We Build'
- 4 service cards in a responsive 2×2 or 4-column grid layout
- Each card: Icon, Title, Short description (2 sentences), 'Learn More' link
- Cards have hover lift effect (translateY(-4px)) and shadow transition
- Services: AI & Python Dev | QA Services | Enterprise Java | Full Stack Web

**Why Choose Us - Stats Section**

- Dark background section with animated counters
- Stats: 10+ Years | 50+ Clients | 4 Specialised Divisions | ISO Certified
- Numbers animate from 0 on scroll using Intersection Observer

**Industries Served Section**

- Section title: 'Industries We Transform'
- Horizontal scrollable icon grid: Banking, Fintech, Telecom, Logistics, Healthcare, E-commerce
- Each industry: icon + label, subtle hover highlight

**Partners / Clients Section**

- Section title: 'Our Trusted Partners'
- Logo grid in 3-column layout matching the reference design provided
- Each logo in white card with subtle border - hover: slight scale up
- Grayscale logos that go to colour on hover

**Testimonials Section**

- 2-3 client testimonials in card format with quote, name, role, company
- Star rating display. Subtle slide-in animation on scroll

**CTA Banner Section**

- High-contrast call-to-action strip with gradient background
- Headline: 'Ready to Transform Your Business?' - large bold white text
- CTA button: 'Start a Conversation' → /contact

**Blog Preview Section**

- Latest 3 blog post cards with thumbnail, date, category badge, title, excerpt
- 'View All Insights' link to /blog

## **6.2 About Page (/about)**

- Hero: Page title banner with background texture/pattern
- Company Story: 2-column layout - text + image (team/office photo)
- Mission & Vision: Side-by-side cards with icon + statement
- Core Values: 6 values in icon card grid (Innovation, Quality, Integrity, Client Focus, Excellence, Agility)
- Company Timeline: Vertical timeline with key milestones and years
- Divisions Section: 4 division cards with specialisations listed
- ISO Certification badge section with trust indicators
- Team Section (optional): Team member cards or department overview

## **6.3 Services Page (/services)**

- Hero with services overview tagline and breadcrumb
- Sticky left sidebar or tabbed navigation for service categories (inspired by enterprise reference)
- Four services fully detailed:
- AI & Python Development - RAG, voice agents, ML models, predictive analytics
- Quality Assurance - End-to-end testing, automation, performance, security testing
- Enterprise Java Development - Microservices, scalable backends, banking/insurance/telecom
- Full Stack Web Development - SaaS, e-commerce, dashboards, API platforms
- Each service: icon, title, description, bullet list of capabilities, industries served, CTA
- Process section: How we work - 5-step process with numbered timeline
- Technology stack logos section (React, Python, Java, AWS, etc.)

## **6.4 Portfolio Page (/portfolio)**

- Filter tabs by industry: All | Banking | Healthcare | E-commerce | Telecom
- Masonry or grid card layout for case studies
- Each case study card: Thumbnail, client industry, project title, short outcome stat
- Hover reveals View Case Study button
- Results/Outcomes stats section: 40% efficiency gain, 60% cost reduction examples

## **6.5 Blog / Insights (/blog)**

- Hero with search input to filter posts
- Category filter tabs: All | AI & ML | Automation | Web Dev | QA | Industry News
- 3-column card grid - each card: thumbnail, category badge, date, title, excerpt, Read More
- Pagination or infinite scroll
- Newsletter signup strip midway through page

## **6.6 Contact Page (/contact)**

- Split layout matching reference: contact form on right, image + colour block on left
- Form fields: Name, Phone No., Email ID, Service of Interest (dropdown), Message
- Submit button: Dark background with arrow icon - matching reference design
- Below form: Company address, phone, email with icons
- Embedded Google Map iframe for office location
- Social media icons: LinkedIn, Twitter, Facebook

## **6.7 FAQ Page (/faq)**

- Accordion-style Q&A sections categorised by topic
- Categories: General | Services | Process | Pricing | Support
- Smooth expand/collapse animation with chevron icon rotation
- Search input to filter questions

## **6.8 Legal Pages**

- Privacy Policy, Terms & Conditions, Cookie Policy - clean prose layout
- Last updated date, table of contents with anchor links
- Cookie consent banner triggered by Cookie Policy page

# **7\. Component Architecture**

## **7.1 Project Folder Structure**

src/ ├── assets/ → images, icons, SVGs ├── components/ │ ├── common/ → Navbar, Footer, SEOHead, CookieBanner │ ├── layout/ → MainLayout, BlogLayout, Section, Container │ └── ui/ → Button, Card, Badge, SectionTitle, InputField, Modal, AnimatedCounter ├── pages/ → Home, About, Services, Portfolio, Blog, Contact, FAQ, Legal ├── sections/ → HeroSection, ServicesSection, StatsSection, PartnersSection, etc. ├── hooks/ → useScrollAnimation, useWindowSize, useIntersectionObserver, useFetch ├── services/ → contactService.js, blogService.js ├── utils/ → formatDate.js, cn.js (className merge), animations.js ├── constants/ → navigation.js, services.js, stats.js, partners.js, testimonials.js ├── styles/ → global.css, variables.css, animations.css ├── routes/ → AppRouter.jsx ├── context/ → ThemeContext.jsx ├── App.jsx └── main.jsx

## **7.2 Reusable UI Components**

| **Component** | **Priority** | **Description** |
| --- | --- | --- |
| &lt;Button /&gt; | **Must Have** | Variants: primary, secondary, ghost, outline. Sizes: sm, md, lg. With icon support |
| &lt;Card /&gt; | **Must Have** | Base card with hover effects. Variants: service, blog, portfolio, testimonial |
| &lt;SectionTitle /&gt; | **Must Have** | Consistent heading block with optional subtitle and badge label |
| &lt;Container /&gt; | **Must Have** | Max-width wrapper (1280px) with responsive horizontal padding |
| &lt;Section /&gt; | **Must Have** | Vertical padding wrapper with optional background colour prop |
| &lt;Badge /&gt; | **Must Have** | Small label chip. Variants: primary, accent, success, warning |
| &lt;InputField /&gt; | **Must Have** | Form inputs with label, error state, validation. Controlled component |
| &lt;AnimatedCounter /&gt; | **Must Have** | Number that counts up from 0 on scroll entry via IntersectionObserver |
| &lt;Navbar /&gt; | **Must Have** | Sticky top nav, mobile hamburger, mega-menu dropdown for Services |
| &lt;Footer /&gt; | **Must Have** | 4-column footer with links, contact info, social icons, copyright |
| &lt;Modal /&gt; | **Should Have** | Accessible modal with overlay, escape key close, focus trap |
| &lt;Accordion /&gt; | **Must Have** | Expand/collapse for FAQ. Animated chevron, smooth height transition |
| &lt;ScrollToTop /&gt; | **Must Have** | Floating button, visible after 400px scroll, smooth scroll to top |
| &lt;CookieBanner /&gt; | **Must Have** | Bottom consent bar - Accept/Decline. Persists preference in state |
| &lt;PageHero /&gt; | **Must Have** | Reusable hero banner for inner pages with title and breadcrumb |
| &lt;ServiceCard /&gt; | **Must Have** | Icon, title, description, tags, CTA link. Used on Home and Services |
| &lt;BlogCard /&gt; | **Must Have** | Thumbnail, category badge, date, title, excerpt, read more link |
| &lt;TestimonialCard /&gt; | **Must Have** | Quote text, author name/role/company, star rating display |
| &lt;PartnerLogo /&gt; | **Must Have** | Client logo card with grayscale-to-colour hover transition |
| &lt;StatCard /&gt; | **Must Have** | Large animated number + label for stats section |
| &lt;IndustryChip /&gt; | **Should Have** | Icon + label chip for industries served horizontal scroll |
| &lt;ContactForm /&gt; | **Must Have** | Full form with validation, loading state, success/error feedback |

# **8\. UI Interactions & Animations**

## **8.1 Animation Library**

- Use Framer Motion for all page transitions and scroll animations
- Use CSS transitions for simple hover states (transform, opacity, box-shadow)
- Use IntersectionObserver API for scroll-triggered reveals

## **8.2 Required Animations**

| **Component** | **Priority** | **Description** |
| --- | --- | --- |
| Page Transitions | **Must Have** | Fade + slight slide-up (0.3s ease) when navigating between routes |
| Hero Entrance | **Must Have** | Headline fades in + slides up (0.6s), subtext 0.2s delay, CTA 0.4s delay |
| Scroll Reveal | **Must Have** | Section elements fade-in with translateY(20px → 0) on viewport entry |
| Counter Animation | **Must Have** | Stats count from 0 to target over 1.5s on first scroll into view |
| Card Hover Lift | **Must Have** | translateY(-4px) + shadow-lg on hover. 200ms ease transition |
| Button Hover | **Must Have** | Background lighten/darken + subtle scale(1.02) on hover |
| Navbar Scroll | **Must Have** | Navbar gains white bg + shadow on scroll past 80px |
| Hamburger Menu | **Must Have** | Icon morphs to X. Drawer slides in from right with overlay backdrop |
| Accordion | **Must Have** | Height animates from 0 to auto. Chevron rotates 180° |
| Logo Grayscale | **Should Have** | Partner logos: filter: grayscale(1) by default, goes to colour on hover |
| Floating Shapes | **Should Have** | Subtle floating animation on hero background elements (CSS keyframes) |
| Form Submit | **Must Have** | Button shows spinner during submission, then success tick with message |

# **9\. Navigation Specifications**

## **9.1 Primary Navigation**

| **Items** | Home \| About \| Services \| Portfolio \| Blog \| Contact |
| --- | --- |
| **CTA Button** | 'Get a Quote' → /contact - visible in navbar at all times |
| **Behaviour** | Sticky on scroll with blur backdrop and bottom border |
| **Active State** | Primary colour underline + text colour change on active route |
| **Dropdown** | Services item triggers mega-menu showing 4 service categories |
| **Mobile** | Hamburger icon → full-screen overlay drawer with stacked links |

## **9.2 Mobile Navigation**

- Hamburger icon (3 lines → X morphing animation)
- Drawer slides in from right with semi-transparent dark overlay
- All nav items stacked vertically with 16px spacing
- Services has expand/collapse accordion sub-links in mobile drawer
- 'Get a Quote' CTA at bottom of mobile drawer

## **9.3 Footer Navigation**

| **Column 1** | Company: About, Services, Blog, Contact, Careers |
| --- | --- |
| **Column 2** | Services: AI Development, QA Services, Enterprise Java, Full Stack Web |
| **Column 3** | Contact: Email, Phone, Address with icon bullets |
| **Column 4** | Social: LinkedIn, Twitter, Facebook (icon buttons with hover) |
| **Bottom Bar** | © 2026 Soft Synergy Systems Pvt Ltd. All rights reserved. + Legal links |

# **10\. Responsive Design Breakpoints**

| **Component** | **Priority** | **Description** |
| --- | --- | --- |
| Mobile S | **Must Have** | 320px → 479px: Single column, stack everything, hamburger nav |
| Mobile L | **Must Have** | 480px → 767px: Single column, larger tap targets, bigger hero text |
| Tablet | **Must Have** | 768px → 1023px: 2-column grids, tablet nav variant, medium sections |
| Desktop S | **Must Have** | 1024px → 1279px: Full desktop nav, 3-column grids |
| Desktop L | **Must Have** | 1280px+: Max content width 1280px, 4-column grids, max typography sizes |

**Tailwind CSS Breakpoint Config:**

sm: 640px | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1536px

# **11\. Technology Stack**

## **11.1 Core Stack**

| **Component** | **Priority** | **Description** |
| --- | --- | --- |
| React 18 | **Must Have** | Core UI library with concurrent features and Suspense |
| Vite 5 | **Must Have** | Build tool - fast HMR, optimised production builds |
| React Router v6 | **Must Have** | Client-side routing with nested routes and lazy loading |
| Tailwind CSS v3 | **Must Have** | Utility-first CSS framework. No CSS Modules |
| Framer Motion | **Must Have** | Animation library for page transitions and scroll effects |
| React Helmet Async | **Must Have** | Dynamic &lt;head&gt; management for SEO per page |
| React Hook Form | **Must Have** | Form state management with validation |
| Zod | **Should Have** | Schema validation for form inputs |
| Lucide React | **Must Have** | Clean SVG icon library, tree-shakable |
| clsx + tw-merge | **Must Have** | Utility for conditional className merging |
| EmailJS / Formspree | **Should Have** | Contact form email delivery (no backend required) |
| Google Fonts (Inter) | **Must Have** | Primary typeface loaded via @import in global CSS |
| Vite PWA Plugin | **Nice to Have** | Progressive Web App support for offline caching |

## **11.2 Development Tools**

- ESLint + Prettier for consistent code formatting
- Husky + lint-staged for pre-commit hooks
- Vite environment variables (import.meta.env) for config
- React DevTools + Framer Motion DevTools for debugging

# **12\. Performance Requirements**

| **Component** | **Priority** | **Description** |
| --- | --- | --- |
| First Contentful Paint | **Must Have** | Under 1.5 seconds on 4G mobile |
| Largest Contentful Paint | **Must Have** | Under 2.5 seconds - target Core Web Vitals pass |
| Cumulative Layout Shift | **Must Have** | Below 0.1 - no unexpected layout jumps |
| Time to Interactive | **Must Have** | Under 3.5 seconds on average mobile connection |
| Lighthouse Score | **Must Have** | Performance > 90, Accessibility > 95, Best Practices > 95, SEO > 95 |
| Image Optimisation | **Must Have** | WebP format, lazy loading on all non-hero images |
| Code Splitting | **Must Have** | Lazy-load all page-level components with React.lazy + Suspense |
| Bundle Size | **Should Have** | Initial JS bundle under 200KB gzipped |
| Font Loading | **Should Have** | font-display: swap on all custom fonts to prevent FOIT |

# **13\. SEO & Accessibility**

## **13.1 SEO Requirements**

- Unique &lt;title&gt; and &lt;meta description&gt; per page via React Helmet Async
- Open Graph meta tags for all pages (og:title, og:description, og:image, og:url)
- Proper H1→H2→H3 heading hierarchy on every page - one H1 per page
- Semantic HTML5 tags: &lt;main&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;
- XML sitemap generated at /sitemap.xml
- robots.txt configured correctly
- Canonical tags on all pages to prevent duplicate content
- Structured data (JSON-LD) for Organisation schema on homepage

## **13.2 Accessibility Requirements**

- WCAG 2.1 AA compliance as minimum standard
- Colour contrast ratio: minimum 4.5:1 for body text, 3:1 for large text
- All images have descriptive alt attributes
- All interactive elements reachable and operable via keyboard
- Focus indicators clearly visible (outline: 2px solid primary, offset: 2px)
- ARIA labels on icon-only buttons and navigation elements
- Skip-to-main-content link as first focusable element
- Form inputs have associated &lt;label&gt; elements
- Modal traps focus while open; returns focus on close
- Minimum tap target size: 44×44px on mobile for all interactive elements

# **14\. Content Requirements**

## **14.1 Services Content**

**Service 1: Artificial Intelligence & Python Development**

- Description: Building intelligent AI-powered solutions tailored for modern enterprises
- Capabilities: RAG systems, AI voice agents, predictive analytics, ML model development
- Industries: Healthcare, Finance, E-commerce, Customer Service

**Service 2: Quality Assurance Services**

- Description: Ensuring flawless software through comprehensive end-to-end testing
- Capabilities: Automated testing, performance testing, security testing, compliance testing
- Industries: Banking, Healthcare, Fintech

**Service 3: Enterprise Java Development**

- Description: Scalable, enterprise-grade Java applications built for demanding industries
- Capabilities: Microservices architecture, scalable backends, API development
- Industries: Banking, Insurance, Telecommunications, Logistics

**Service 4: Full Stack Web Development**

- Description: End-to-end web applications from frontend UX to backend API
- Capabilities: Web apps, SaaS platforms, e-commerce, business dashboards, APIs

## **14.2 Stats & Proof Points**

| **Experience** | 10+ Years in Enterprise Technology |
| --- | --- |
| **Clients Served** | 50+ Enterprise Clients Globally |
| **Divisions** | 4 Specialised Technology Divisions |
| **Certification** | ISO Certified Organisation |
| **Industries** | 7 Major Industry Verticals |

# **15\. Extra Modern Features**

| **Component** | **Priority** | **Description** |
| --- | --- | --- |
| Dark Mode Toggle | **Should Have** | System preference detection. Toggle in navbar. Persisted in Context + CSS vars |
| Scroll Progress Bar | **Nice to Have** | Thin primary-coloured bar at top showing page scroll progress |
| Back to Top Button | **Must Have** | Floating button appears after 400px scroll, smooth scroll to top |
| Cookie Consent Banner | **Must Have** | GDPR-compliant bottom banner - Accept/Decline with policy link |
| Animated Statistics | **Must Have** | Counters animate from 0 on first viewport entry |
| Mega Menu | **Should Have** | Services dropdown shows 4 service cards with icon + description |
| Live Chat Widget | **Nice to Have** | Tawk.to or Crisp chat widget in bottom-right corner |
| Newsletter Signup | **Should Have** | Email input + submit in blog section and footer |
| Page Loading Skeleton | **Should Have** | Skeleton screens on blog/portfolio card sections during data load |
| 404 Custom Page | **Must Have** | Branded 404 page with navigation help and home button |
| Search (Blog) | **Should Have** | Client-side text search filtering blog posts by title/category |

# **16\. Development Conventions**

## **16.1 Naming Conventions**

| **Components** | PascalCase - HeroSection.jsx, ServiceCard.jsx, ContactForm.jsx |
| --- | --- |
| **Hooks** | camelCase with 'use' prefix - useScrollAnimation.js, useWindowSize.js |
| **Services** | camelCase with domain - contactService.js, blogService.js |
| **Constants** | SCREAMING_SNAKE_CASE - NAV_LINKS, SERVICE_LIST, STATS_DATA |
| **CSS Classes** | Tailwind utility classes only - no custom class names unless in global.css |
| **Files** | PascalCase for components, camelCase for everything else |

## **16.2 Code Quality Rules**

- Maximum 200 lines per component file - extract sub-components if exceeded
- No hardcoded strings in JSX - use constants files for all static data
- No direct fetch/axios calls in components - use services/ layer
- No inline styles - Tailwind classes only (except dynamic values)
- All environment variables prefixed with VITE_ and stored in .env
- All reusable components must accept className prop for composition
- Use index.js barrel exports in every component folder
- Comment only WHY, not WHAT - self-documenting variable and function names

## **16.3 File Size Limits**

| **Component files** | Max 200 lines (ideal: 80-150) |
| --- | --- |
| **Page files** | Max 80 lines (delegate to section components) |
| **Service files** | Max 100 lines |
| **Constants files** | Max 150 lines - split by domain if exceeded |
| **Global CSS** | Max 200 lines - variables and resets only |

# **17\. Content Data Files (constants/)**

## **17.1 Required Data Files**

| **Component** | **Priority** | **Description** |
| --- | --- | --- |
| navigation.js | **Must Have** | NAV_LINKS array with name, path, optional dropdown items |
| services.js | **Must Have** | SERVICE_LIST with id, title, description, icon, capabilities\[\], industries\[\] |
| stats.js | **Must Have** | STATS_DATA with value, suffix, label for animated counters |
| partners.js | **Must Have** | PARTNERS list with name, logoUrl, website for client logo section |
| testimonials.js | **Must Have** | TESTIMONIALS with quote, author, role, company, rating (1-5) |
| industries.js | **Must Have** | INDUSTRIES array with name, icon for industries served section |
| faq.js | **Must Have** | FAQ_DATA with category, question, answer for accordion groups |
| blog.js | **Should Have** | BLOG_POSTS (mock data) with title, slug, date, category, excerpt, thumbnail |
| team.js | **Should Have** | TEAM_MEMBERS with name, role, bio, photo for About page |
| socialLinks.js | **Must Have** | SOCIAL_LINKS with platform, url, icon for footer and contact page |

# **18\. Launch Checklist**

## **18.1 Pre-Launch**

- All 13 pages implemented and content-complete
- All forms tested: Contact, Newsletter, FAQ search
- Mobile responsiveness tested on iOS Safari, Android Chrome
- Lighthouse audit run - all scores above 90
- All images optimised to WebP with correct alt attributes
- Console is clean - no errors or warnings in production build
- React Router handles direct URL access (not just client-side navigation)
- 404 page works for all undefined routes
- Environment variables set in production environment
- robots.txt and sitemap.xml generated and accessible

## **18.2 Post-Launch**

- Google Analytics 4 (or privacy-first alternative) installed and tracking
- Google Search Console property verified and sitemap submitted
- Open Graph preview tested via LinkedIn / Twitter card validators
- All mailto: and tel: links tested on mobile
- Contact form email delivery confirmed end-to-end
- Cookie consent banner tested - accept/decline persists correctly

# **19\. Acceptance Criteria**

The website is considered READY FOR PRODUCTION when all of the following are met:

- All 13 pages are implemented with full content and correct routing
- Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95
- No layout breakage on viewports: 375px, 768px, 1024px, 1280px, 1440px
- Contact form submits successfully and triggers email delivery
- All animations run at 60fps with no frame drops on mid-tier devices
- All interactive elements are keyboard-accessible with visible focus states
- Dark mode (if implemented) applies consistently across all pages and components
- Page load time under 3 seconds on simulated Fast 3G connection
- Zero console errors in production build on Chrome, Firefox, and Safari
- GDPR cookie consent banner functional and compliant

Soft Synergy Systems Pvt Ltd - Product Requirements Document - v1.0 - 2026

<hr@softsynergysystems.com> | +91 97908 23800s | Bengaluru, Karnataka, India


13. SEO Requirements

Search Engine Optimisation (SEO) is critical for improving discoverability, increasing organic traffic, and ensuring that the website ranks well in search engines globally.

13.1 SEO Objectives

Improve discoverability for enterprise technology services

Rank for keywords related to AI, automation, QA, Java development, and enterprise software

Optimise page metadata for search engines and social platforms

Ensure clean semantic HTML and proper heading hierarchy

Achieve SEO Lighthouse score above 95

13.2 Metadata Requirements

All pages must include dynamic metadata using React Helmet Async.

Required metadata elements:

Meta Element	Description
Page Title	Unique descriptive title for each page
Meta Description	150–160 characters summarising page content
Canonical URL	Prevent duplicate indexing
Open Graph Tags	Social media sharing optimisation
Twitter Cards	Preview cards for Twitter/X
Structured Data	Schema.org JSON-LD markup

Example implementation:

<Helmet>
<title>Soft Synergy Systems | AI, Automation & Software Solutions</title>
<meta name="description" content="Enterprise AI, automation, QA, and full stack development services." />
<link rel="canonical" href="https://softsynergysystems.com/" />
</Helmet>
13.3 Structured Data

Implement Organization schema using JSON-LD.

Example fields:

Company Name

Logo

Address

Phone

Email

Website

Social Profiles

14. Accessibility Requirements

The website must follow WCAG 2.1 AA accessibility guidelines to ensure usability for all users, including those with disabilities.

14.1 Accessibility Standards
Requirement	Description
WCAG Compliance	WCAG 2.1 Level AA
Keyboard Navigation	All UI elements must be accessible via keyboard
ARIA Attributes	Navigation, forms, and dynamic elements must include ARIA roles
Color Contrast	Minimum contrast ratio of 4.5:1
Focus Indicators	Visible focus state for interactive elements
Image Alt Text	All images must include descriptive alt attributes
Screen Reader Support	Semantic HTML structure

Example accessible button:

<button aria-label="Open navigation menu">
15. Security Requirements

The website must follow security best practices to protect user data and prevent malicious activity.

15.1 Security Guidelines
Component	Description
HTTPS	All traffic must be encrypted using SSL
Form Validation	Validate inputs using Zod schema
Spam Protection	Google reCAPTCHA v3 for contact forms
Input Sanitisation	Prevent XSS attacks
Rate Limiting	Prevent spam submissions
Secure Environment Variables	Sensitive values stored in .env

Example validation schema:

const contactSchema = z.object({
name: z.string().min(2),
email: z.string().email(),
phone: z.string().min(10),
message: z.string().min(10)
});
16. Deployment & Hosting

The website must support modern CI/CD deployment for fast updates and scalability.

16.1 Recommended Hosting Architecture
Component	Recommended Service
Frontend Hosting	Vercel / Netlify
Domain DNS	Cloudflare
Form Handling	EmailJS / Formspree
Asset Storage	Cloudinary or CDN
SSL	Automatic via hosting provider
16.2 Deployment Workflow

Deployment pipeline:

Developer → GitHub Repository → CI/CD Pipeline → Production Hosting

Branch strategy:

Branch	Purpose
main	Production environment
dev	Staging environment
feature/*	Feature development
17. Analytics & Tracking

Analytics tools will measure visitor behaviour and help optimise conversion performance.

17.1 Analytics Tools
Tool	Purpose
Google Analytics 4	Website traffic and engagement
Google Tag Manager	Event tracking and scripts
Search Console	SEO performance monitoring
Hotjar (Optional)	User behaviour heatmaps
17.2 Key Events to Track
Event Name	Description
CTA Click	User clicks primary CTA buttons
Form Submission	Contact form successfully submitted
Blog Engagement	User reads blog article
Scroll Depth	Measures page engagement
Navigation Click	Tracks menu interactions
18. Environment Configuration

Environment variables must be used to store configuration values securely.

18.1 Environment Variables

Example .env file:

VITE_CONTACT_EMAIL=hr@softsynergysystems.com
VITE_FORM_SERVICE=emailjs
VITE_GOOGLE_MAP_KEY=XXXXXXXX
VITE_ANALYTICS_ID=G-XXXXXXXX
18.2 Usage in Vite

Environment variables can be accessed using:

import.meta.env.VITE_CONTACT_EMAIL
19. Performance Optimisation

The website must meet modern performance standards to ensure fast loading across devices.

19.1 Code Splitting

Use React lazy loading to reduce initial bundle size.

Example:

const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
19.2 Image Optimisation
Requirement	Description
Image Format	WebP preferred
Lazy Loading	All non-critical images
Responsive Images	Use srcset for different screen sizes
Compression	Optimise images before deployment
19.3 Asset Optimisation

Tree-shake unused JavaScript

Minify CSS and JS during build

Use CDN for static assets

Enable browser caching

19.4 Lighthouse Targets
Metric	Target Score
Performance	90+
Accessibility	95+
Best Practices	95+
SEO	95+
20. Content Management Strategy (Optional Future Enhancement)

If blog content increases, a headless CMS may be integrated.

Possible CMS options:

CMS	Type
Sanity	Headless CMS
Contentful	Headless CMS
Strapi	Self-hosted CMS
Markdown	Static content approach

Initial implementation may use static blog data stored in JSON or Markdown files.


by deafult light mode