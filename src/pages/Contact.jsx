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
import { COMPANY_INFO, MAP_CONFIG } from '../constants';

const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SEO
        title="Contact Us - Soft Synergy Systems"
        description="Get in touch with Soft Synergy Systems. Let's discuss how we can help transform your business with our technology solutions."
        keywords="contact Soft Synergy Systems, technology consultation, enterprise software inquiry, Bengaluru"
        canonical="https://softsynergysystems.com/contact"
      />

      {/* Page Hero */}
      <PageHero
        title="Contact Us"
        subtitle="Let's start a conversation about your technology needs"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '/contact' }
        ]}
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
                Send Us a Message
              </h2>
              <p className="text-carbon-60 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
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
                        href={`mailto:${COMPANY_INFO.contact.email}`}
                        className="text-carbon-100 hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.contact.email}
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
                        href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`}
                        className="text-carbon-100 hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.contact.phone}
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
                        26/3, Thirumenahalli Main Road,<br />
                        Block 3, Chokkanahalli,<br />
                        Bengaluru, Karnataka 560064, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-soft flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">Business Hours</p>
                      <p className="text-carbon-80">Mon – Fri: 9:00 AM – 6:00 PM IST</p>
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
                      title="Soft Synergy Systems Office Location"
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
