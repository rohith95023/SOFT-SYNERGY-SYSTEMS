import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import { SERVICE_LIST } from '../constants/services';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

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
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl font-light text-carbon-100 tracking-tight mb-6">
                Send Us a Message
              </h2>
              <p className="text-carbon-60 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-success/10 p-8 text-center">
                  <div className="w-16 h-16 bg-success mx-auto flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-carbon-100 mb-2">Message Sent!</h3>
                  <p className="text-carbon-60">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <InputField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <InputField
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                    <div>
                      <label className="block text-sm font-medium text-carbon-80 mb-2">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-carbon-50 text-carbon-100 focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {SERVICE_LIST.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-carbon-80 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-white border border-carbon-50 text-carbon-100 focus:border-primary focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    loading={loading}
                    icon={ArrowRight}
                  >
                    Send Message
                  </Button>
                </form>
              )}
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
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:hr@softsynergysystems.com"
                        className="text-carbon-100 hover:text-primary transition-colors"
                      >
                        hr@softsynergysystems.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-soft flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+918296453365"
                        className="text-carbon-100 hover:text-primary transition-colors"
                      >
                        +91 82964 53365
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-soft flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">
                        Address
                      </p>
                      <p className="text-carbon-80 leading-relaxed">
                        26/3, Thirumenahalli Main Road,<br />
                        Block 3, Chokkanahalli,<br />
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-soft flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-carbon-50 mb-1">
                        Business Hours
                      </p>
                      <p className="text-carbon-80">
                        Mon - Fri: 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-10">
                  <div className="aspect-[4/3] bg-carbon-20 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5976!2d77.6408!3d13.0451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzQyLjQiTiA3N8KwMzgnMjYuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
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
