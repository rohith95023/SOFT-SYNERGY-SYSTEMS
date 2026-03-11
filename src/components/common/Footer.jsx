import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SERVICE_NAV_LINKS } from '../../constants/navigation';
import Container from '../layout/Container';
import Button from '../ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Soft Synergy</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">Systems</span>
              </div>
            </Link>
            <p className="text-slate-light text-sm leading-relaxed">
              Innovating for a Digital Era. Empowering organizations with advanced technology solutions in AI, QA, and Enterprise Software.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-slate-light/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-standard">
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.filter(l => l.name !== 'Home').map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-light hover:text-primary text-sm transition-standard flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-standard" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {SERVICE_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-light hover:text-primary text-sm transition-standard flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-standard" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-slate-light tracking-wider">Email</span>
                  <a href="mailto:hr@softsynergysystems.com" className="text-sm font-semibold hover:text-primary transition-standard">hr@softsynergysystems.com</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-slate-light tracking-wider">Phone</span>
                  <a href="tel:+918296453365" className="text-sm font-semibold hover:text-primary transition-standard">+91 82964 53365</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-slate-light tracking-wider">Address</span>
                  <span className="text-sm font-semibold leading-relaxed">Bengaluru, Karnataka, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-light/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-light text-sm text-center md:text-left">
            © {currentYear} Soft Synergy Systems Pvt Ltd. All rights reserved. ISO Certified Organization.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-slate-light hover:text-white transition-standard">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-light hover:text-white transition-standard">Terms & Conditions</Link>
            <Link to="/cookies" className="text-slate-light hover:text-white transition-standard">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
