/**
 * Contact Page
 * =============
 * Uses the pre-built <ContactForm /> component which is wired to
 * contactService and EmailJS. No inline form here — separation of concerns.
 *
 * @module pages/Contact
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import ContactForm from '../components/ui/ContactForm';
import { 
  CONTACT_HERO, 
  CONTACT_INFO, 
  CONTACT_FORM_CONFIG, 
  MAP_CONFIG, 
  SOCIAL_LINKS, 
  CONTACT_FAQ, 
  CONTACT_CTA,
  CONTACT_SEO
} from '../constants/contact.constants';

const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title={`${CONTACT_SEO.title} - Soft Synergy Systems`}
        description={CONTACT_SEO.description}
        keywords={CONTACT_SEO.keywords}
        canonical="https://softsynergysystems.com/contact"
      />

      {/* Page Hero */}
      <PageHero
        title={CONTACT_HERO.title}
        subtitle={CONTACT_HERO.subtitle}
        breadcrumbs={CONTACT_HERO.breadcrumb}
      />

      {/* Contact Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form — wired to contactService / EmailJS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl font-light text-carbon-100 tracking-tight mb-3">
                {CONTACT_FORM_CONFIG.title}
              </h2>
              <p className="text-carbon-60 mb-8">
                {CONTACT_FORM_CONFIG.subtitle}
              </p>
              {/* ContactForm is wired to contactService — handles EmailJS + fallback */}
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-carbon-10 p-8 lg:p-10 h-full">
                <h3 className="text-xl font-medium text-carbon-100 mb-8">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-soft flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">Email</p>
                      <a
                        href={`mailto:${CONTACT_INFO.contact.email.primary}`}
                        className="text-carbon-100 hover:text-primary transition-colors"
                      >
                        {CONTACT_INFO.contact.email.primary}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-soft flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">Phone</p>
                      <a
                        href={`tel:${CONTACT_INFO.contact.phone.primary.replace(/\s/g, '')}`}
                        className="text-carbon-100 hover:text-primary transition-colors"
                      >
                        {CONTACT_INFO.contact.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-soft flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">Address</p>
                      <p className="text-carbon-80 leading-relaxed">
                        {CONTACT_INFO.address.street},<br />
                        {CONTACT_INFO.address.area},<br />
                        {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.pincode}, {CONTACT_INFO.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-soft flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">Business Hours</p>
                      <p className="text-carbon-80">{CONTACT_INFO.workingHours.weekdays}</p>
                    </div>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="mt-10">
                  <div className="aspect-[4/3] bg-carbon-20 overflow-hidden">
                    <iframe
                      src={MAP_CONFIG.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${CONTACT_INFO.company.name} Location`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </motion.main>
  );
};

export default Contact;
