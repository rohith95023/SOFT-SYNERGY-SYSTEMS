import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../constants';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import Container from '../layout/Container';
import { trackEvent } from '../../utils/analytics';
import logoLight from '../../assets/LogoLight.webp';
import logoDark from '../../assets/LogoDark.webp';

// Pages with dark hero backgrounds (PageHero component)
const DARK_HERO_PAGES = ['/about', '/services', '/portfolio', '/blog', '/contact', '/faq', '/careers'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = useLocation();

  // Check if current page has a dark hero
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Set initial scroll state
    setScrolled(window.scrollY > 20);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    // Reset scroll state on page change
    setScrolled(window.scrollY > 20);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  // Determine which logo to show:
  // - LogoDark.webp = for dark backgrounds (not scrolled on dark hero pages)
  // - LogoLight.webp = for white/light backgrounds (scrolled = white navbar, or home page with light hero)
  const showDarkLogo = !scrolled && hasDarkHero;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-carbon-20'
          : 'bg-transparent'
      )}
    >
      <Container className="flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={showDarkLogo ? logoDark : logoLight}
            alt="Soft Synergy Systems"
            className="h-16 md:h-20 w-auto object-contain transition-opacity duration-300"
            key={showDarkLogo ? 'dark' : 'light'}
          />
        </Link>

        {/* Desktop Navigation - IBM Style */}
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
                    : scrolled ? 'text-carbon-80 hover:text-primary' : (hasDarkHero ? 'text-white hover:text-primary-light' : 'text-carbon-80 hover:text-primary')
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

              {/* Mega Menu Dropdown - IBM Style */}
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
                            View all services <ArrowRight className="h-4 w-4" />
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

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" onClick={() => trackEvent('cta_click', { button_name: 'Get a Quote', location: 'Navbar' })}>
            <Button size="sm" icon={ArrowRight}>
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            scrolled ? "text-carbon-100 hover:text-primary" : (hasDarkHero ? "text-white hover:text-primary-light" : "text-carbon-100 hover:text-primary")
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu - IBM Style */}
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
              <div className="pt-4 mt-4 border-t border-carbon-20">
                <Link to="/contact">
                  <Button className="w-full" icon={ArrowRight}>
                    Get a Quote
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
