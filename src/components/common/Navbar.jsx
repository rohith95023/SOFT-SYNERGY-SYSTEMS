import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, GLOBAL_STRINGS, COMPANY_INFO } from '../../constants';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import Container from '../layout/Container';
import { trackEvent } from '../../utils/analytics';
import { useTheme } from '../../context/ThemeContext';
import featuresConfig from '../../config/features.config';
import logoLight from '../../assets/LogoLight.webp';
import logoDark from '../../assets/LogoDark.webp';

// Pages with dark hero backgrounds (PageHero component)
const DARK_HERO_PAGES = ['/about', '/services', '/portfolio', '/blog', '/contact', '/faq', '/careers'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isBeyondHero, setIsBeyondHero] = useState(false);
  const { pathname } = useLocation();
  // Dark mode toggle — only available when feature flag is on
  const { theme, toggleTheme } = useTheme();
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);
  const isHomePage = pathname === '/';


  const updateScrollState = () => {
    const scrollPos = window.scrollY;
    setScrolled(scrollPos > 20);
    setIsBeyondHero(scrollPos > window.innerHeight * 0.8);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollState);
    updateScrollState();
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    updateScrollState();
  }, [pathname]);

  const isActive = (path) => pathname === path;

  // Determine which logo to show:
  // - LogoDark.webp = for dark backgrounds (not scrolled on dark hero pages)
  // - LogoLight.webp = for white/light backgrounds (scrolled = white navbar, or home page with light hero)
  // Only use dark logo on home page if it has a dark hero (which it doesn't currently) 
  // or on dark hero pages when not scrolled and transparency is active (only on home)
  const showDarkLogo = isHomePage ? (!scrolled && hasDarkHero && !isHovered) : false;
  
  // Logic for solid white navbar state
  // It's solid white if:
  // 1. Not on home page
  // 2. On home page but scrolled past Hero (isBeyondHero)
  // 3. On home page and hovered
  const isSolidWhite = !isHomePage || isBeyondHero || isHovered;


  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
        (isHomePage && !isBeyondHero)
          ? (scrolled || isHovered)
            ? isHovered 
              ? 'bg-white shadow-medium border-b border-carbon-30' 
              : 'bg-white/30 backdrop-blur-md backdrop-saturate-150 backdrop-brightness-95 shadow-sm border-b border-carbon-30'
            : 'bg-white/80'
          : 'bg-white shadow-medium border-b border-carbon-30'
      )}


    >
      <Container className="flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={showDarkLogo ? logoDark : logoLight}
            alt={COMPANY_INFO.name}
            className="h-16 md:h-20 w-auto object-contain transition-opacity duration-300"
            key={showDarkLogo ? 'dark' : 'light'}
          />
        </Link>

        {/* Desktop Navigation - Corporate-style */}
        <div className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={cn(
                  'px-5 py-3 text-lg font-medium transition-colors duration-150 flex items-center gap-1.5',
                  isActive(link.path)
                    ? 'text-primary'
                    : isSolidWhite ? 'text-carbon-80 hover:text-primary' : (hasDarkHero ? 'text-white hover:text-primary-light' : 'text-carbon-80 hover:text-primary')

                )}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    activeDropdown === link.name && "rotate-180"
                  )} />
                )}
              </Link>

              {/* Mega Menu Dropdown - Corporate-style */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-80 z-50"
                    >
                      <div className="bg-white border border-carbon-20 shadow-medium">
                        <div className="p-2">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block p-4 hover:bg-carbon-10 transition-colors duration-150 border-l-2 border-transparent hover:border-primary"
                            >
                              <span className="block text-sm font-medium text-carbon-100">
                                {item.name}
                              </span>
                              <span className="block text-xs text-carbon-60 mt-1">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-carbon-20 p-4 bg-carbon-10">
                          <Link
                            to="/services"
                            className="text-sm font-medium text-primary hover:text-primary-dark flex items-center gap-2"
                          >
                            {GLOBAL_STRINGS.viewAllServices} <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Dark Mode Toggle + CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          {featuresConfig.darkMode && (
            <button
              onClick={() => { toggleTheme(); trackEvent('theme_toggle', { theme: theme === 'light' ? 'dark' : 'light' }); }}
              aria-label={theme === 'dark' ? GLOBAL_STRINGS.darkMode.switchToLight : GLOBAL_STRINGS.darkMode.switchToDark}
              className={cn(
                'p-2 transition-colors duration-200',
                isSolidWhite ? 'text-carbon-80 hover:text-primary' : 'text-white hover:text-primary-light'
              )}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <Link to="/contact" onClick={() => trackEvent('cta_click', { button_name: GLOBAL_STRINGS.getQuote, location: 'Navbar' })}>
            <Button size="sm" icon={ArrowRight}>
              {GLOBAL_STRINGS.getQuote}
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            isSolidWhite ? "text-carbon-100 hover:text-primary" : (hasDarkHero ? "text-white hover:text-primary-light" : "text-carbon-100 hover:text-primary")
          )}

          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? GLOBAL_STRINGS.menu.close : GLOBAL_STRINGS.menu.open}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu - Corporate-style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-carbon-20 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      'block py-3 px-4 text-lg font-medium transition-colors',
                      isActive(link.path)
                        ? 'text-primary bg-primary-soft'
                        : 'text-carbon-80 hover:bg-carbon-10'
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 border-l-2 border-carbon-20 ml-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-2 px-4 text-base text-carbon-60 hover:text-primary hover:bg-carbon-10"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-carbon-20 flex flex-col gap-3">
                {featuresConfig.darkMode && (
                  <button
                    onClick={() => toggleTheme()}
                    className="flex items-center gap-3 py-3 px-4 text-base font-medium text-carbon-80 hover:bg-carbon-10 w-full text-left"
                    aria-label={theme === 'dark' ? GLOBAL_STRINGS.darkMode.switchToLight : GLOBAL_STRINGS.darkMode.switchToDark}
                  >
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    {theme === 'dark' ? GLOBAL_STRINGS.darkMode.lightMode : GLOBAL_STRINGS.darkMode.darkMode}
                  </button>
                )}
                <Link to="/contact">
                  <Button className="w-full" icon={ArrowRight}>
                    {GLOBAL_STRINGS.getQuote}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
