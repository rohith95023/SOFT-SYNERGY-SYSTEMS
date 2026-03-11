import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../constants/navigation';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import Container from '../layout/Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-white/80 backdrop-blur-md border-slate-light/10 shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-extrabold text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-bold text-lg leading-none transition-colors",
              scrolled ? "text-navy" : "text-navy"
            )}>Soft Synergy</span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">Systems</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={cn(
                  'text-sm font-semibold transition-standard hover:text-primary flex items-center gap-1',
                  pathname === link.path ? 'text-primary' : (scrolled ? 'text-slate' : 'text-slate')
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0 w-64 z-50">
                  <div className="bg-white rounded-xl shadow-strong border border-slate-light/10 p-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block p-3 rounded-lg hover:bg-primary/5 transition-standard group"
                      >
                        <span className="block text-sm font-bold text-navy group-hover:text-primary">{item.name}</span>
                        <span className="block text-xs text-slate-light mt-1">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contact">
            <Button size="sm" icon={ArrowRight}>Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-light/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      'text-lg font-bold transition-standard',
                      pathname === link.path ? 'text-primary' : 'text-navy'
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-4 flex flex-col gap-4 border-l-2 border-primary/10">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-sm font-semibold text-slate hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="mt-4">
                <Button className="w-full" icon={ArrowRight}>Get a Quote</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
