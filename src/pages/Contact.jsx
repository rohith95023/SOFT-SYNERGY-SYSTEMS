import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Twitter, Facebook } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import Container from '../layout/Container';
import Section from '../layout/Section';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number (min 10 digits)'),
  service: z.string().min(1, 'Please select a service of interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log('Form Data:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Soft Synergy Systems for enterprise AI, automation, and software solutions. We're here to help you innovate."
      />
      <PageHero 
        title="Let's Build the Future" 
        subtitle="Start a conversation with our experts about your digital transformation goals."
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:items-stretch">
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 flex flex-col gap-10">
              <div className="shrink-0">
                <h2 className="text-3xl font-extrabold text-navy mb-8">Reach Out Today</h2>
                <p className="text-slate text-lg mb-10 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore how technology can help your business, we're ready to listen.
                </p>
                
                <ul className="space-y-8">
                  <li className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-standard">
                      <Mail className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-light mb-1">Email Our Team</p>
                      <a href="mailto:hr@softsynergysystems.com" className="text-lg font-bold text-navy hover:text-primary transition-standard">hr@softsynergysystems.com</a>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-standard">
                      <Phone className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-light mb-1">Call Our Office</p>
                      <a href="tel:+918296453365" className="text-lg font-bold text-navy hover:text-primary transition-standard">+91 82964 53365</a>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-standard">
                      <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-light mb-1">Visit Headquarters</p>
                      <address className="text-lg font-bold text-navy not-italic">Bengaluru, Karnataka, India</address>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Block */}
              <div className="mt-auto p-8 bg-background-light rounded-[2rem] border border-slate-light/10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Connect With Us</p>
                <div className="flex gap-4">
                  {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                    <button key={i} className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-soft hover:bg-primary hover:text-white hover:-translate-y-1 transition-standard group">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-strong border border-slate-light/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mb-8">
                        <CheckCircle2 className="h-12 w-12 text-success" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-navy mb-4">Message Sent Successfully!</h3>
                      <p className="text-slate text-lg max-w-sm mx-auto">
                        Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="mt-10 text-primary font-bold hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                          label="Full Name"
                          placeholder="Soft Synergy"
                          error={errors.name?.message}
                          {...register('name')}
                        />
                        <InputField
                          label="Phone Number"
                          placeholder="+91 82964 53365"
                          error={errors.phone?.message}
                          {...register('phone')}
                        />
                      </div>
                      
                      <InputField
                        label="Email Address"
                        placeholder="hr@softsynergysystems.com"
                        type="email"
                        error={errors.email?.message}
                        {...register('email')}
                      />

                      <div className="flex flex-col mb-4 w-full">
                        <label className="text-sm font-semibold mb-2 text-slate uppercase tracking-wide">
                          Service of Interest
                        </label>
                        <select
                          className={cn(
                            'w-full px-4 py-3 bg-white border border-slate-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-standard font-medium appearance-none',
                            errors.service && 'border-red-500 focus:ring-red-500'
                          )}
                          {...register('service')}
                        >
                          <option value="">Select a service...</option>
                          <option value="ai">AI & Python Development</option>
                          <option value="qa">Quality Assurance Services</option>
                          <option value="java">Enterprise Java Development</option>
                          <option value="web">Full Stack Web Development</option>
                          <option value="other">Other / General Inquiry</option>
                        </select>
                        {errors.service && <span className="text-red-500 text-xs mt-1 font-medium">{errors.service.message}</span>}
                      </div>

                      <InputField
                        label="Your Message"
                        placeholder="Tell us about your project or requirements..."
                        type="textarea"
                        error={errors.message?.message}
                        {...register('message')}
                      />

                      <div className="pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full md:w-auto px-12"
                          isLoading={isSubmitting}
                          icon={Send}
                        >
                          Send Message
                        </Button>
                      </div>
                      <p className="text-xs text-slate-light text-center md:text-left pt-4">
                        By submitting this form, you agree to our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> and <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Embedded Map Placeholder */}
      <section className="h-[400px] w-full grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 bg-background-light">
        <div className="w-full h-full flex items-center justify-center bg-primary/5 border-t border-slate-light/10">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
            <h4 className="font-extrabold text-navy">Google Map Placeholder</h4>
            <p className="text-slate-light text-sm">Chokkanahalli, Bengaluru, Karnataka 560064</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
