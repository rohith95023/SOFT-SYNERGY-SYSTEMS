import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SERVICE_NAV_LINKS } from '../../constants';
import Container from '../layout/Container';
import Button from '../ui/Button';
import logoDark from '../../assets/LogoDark.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-carbon-100 text-white">
      {/* Main Footer */}
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logoDark}
                alt="Soft Synergy Systems"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-carbon-40 text-sm leading-relaxed mb-6">
              Innovating for a Digital Era. Empowering organizations with advanced
              technology solutions in AI, QA, and Enterprise Software.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-carbon-70 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-carbon-40 mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.filter(l => l.name !== 'Home').map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-carbon-30 hover:text-white text-sm py-2 flex items-center gap-2 group transition-colors duration-150"
                  >
                    <span className="w-1 h-1 bg-carbon-60 group-hover:bg-primary transition-colors duration-150" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-carbon-40 mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-1">
              {SERVICE_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-carbon-30 hover:text-white text-sm py-2 flex items-center gap-2 group transition-colors duration-150"
                  >
                    <span className="w-1 h-1 bg-carbon-60 group-hover:bg-primary transition-colors duration-150" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-carbon-40 mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-carbon-70 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-primary-light" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-semibold text-carbon-50 tracking-wider mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:hr@softsynergysystems.com"
                    className="text-sm text-carbon-30 hover:text-white transition-colors duration-150"
                  >
                    hr@softsynergysystems.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-carbon-70 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-primary-light" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-semibold text-carbon-50 tracking-wider mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+918296453365"
                    className="text-sm text-carbon-30 hover:text-white transition-colors duration-150"
                  >
                    +91 97908 23800
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-carbon-70 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary-light" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-semibold text-carbon-50 tracking-wider mb-1">
                    Address
                  </span>
                  <span className="text-sm text-carbon-30 leading-relaxed">
                    Bengaluru, Karnataka, India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* CTA Banner */}
      <div className="border-t border-carbon-90">
        <Container className="py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-light text-white mb-2">
                Ready to transform your business?
              </h3>
              <p className="text-sm text-carbon-40">
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            <Link to="/contact">
              <Button
                variant="ghost"
                className="border-white/30 text-white hover:bg-white hover:text-carbon-100"
                icon={ArrowUpRight}
              >
                Start a Conversation
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-carbon-90">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-carbon-50 text-xs text-center md:text-left">
              © {currentYear} Soft Synergy Systems Pvt Ltd. All rights reserved. ISO Certified Organization.
            </p>
            <div className="flex gap-6 text-xs">
              <Link
                to="/privacy-policy"
                className="text-carbon-50 hover:text-white transition-colors duration-150"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-carbon-50 hover:text-white transition-colors duration-150"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/cookies"
                className="text-carbon-50 hover:text-white transition-colors duration-150"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
