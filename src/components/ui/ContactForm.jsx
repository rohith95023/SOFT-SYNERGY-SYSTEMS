import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { submitContactForm } from '../../services/contactService';

const SERVICE_OPTIONS = [
  'AI & Python Development',
  'Quality Assurance',
  'Enterprise Java Development',
  'Full Stack Web Development',
  'Other / General Enquiry',
];

const ContactForm = ({ className }) => {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus('loading');
    const result = await submitContactForm(data);
    setStatus(result.success ? 'success' : 'error');
    setStatusMessage(result.message);
    if (result.success) reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn('flex flex-col gap-5', className)}
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          autoComplete="name"
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder:text-slate-light text-sm',
            'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all',
            errors.name ? 'border-red-400' : 'border-slate/20'
          )}
          {...register('name', { required: 'Full name is required', minLength: { value: 2, message: 'Minimum 2 characters' } })}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            className={cn(
              'w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder:text-slate-light text-sm',
              'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all',
              errors.phone ? 'border-red-400' : 'border-slate/20'
            )}
            {...register('phone', { required: 'Phone number is required', minLength: { value: 10, message: 'Enter valid phone number' } })}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@company.com"
            autoComplete="email"
            className={cn(
              'w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder:text-slate-light text-sm',
              'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all',
              errors.email ? 'border-red-400' : 'border-slate/20'
            )}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-navy mb-1.5">
          Service of Interest
        </label>
        <select
          id="service"
          className="w-full px-4 py-3 rounded-xl border border-slate/20 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          {...register('service')}
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project or requirements..."
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder:text-slate-light text-sm resize-none',
            'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all',
            errors.message ? 'border-red-400' : 'border-slate/20'
          )}
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Minimum 10 characters' } })}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* Status message */}
      {status && status !== 'loading' && (
        <div
          className={cn(
            'flex items-start gap-3 p-4 rounded-xl text-sm font-medium',
            status === 'success' ? 'bg-success/10 text-success border border-success/20' : 'bg-red-50 text-red-600 border border-red-200'
          )}
        >
          {status === 'success' ? <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
          {statusMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm',
          'bg-navy hover:bg-primary transition-all duration-200',
          'disabled:opacity-60 disabled:cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-primary/40'
        )}
      >
        {status === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
