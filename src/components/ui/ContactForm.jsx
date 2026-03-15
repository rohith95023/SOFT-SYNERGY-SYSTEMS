import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { submitContactForm } from '../../services/contactService';
import Button from './Button';

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

  const inputClasses = (hasError) => cn(
    'w-full px-4 py-3 bg-white border text-carbon-100 transition-colors',
    'focus:outline-none',
    hasError
      ? 'border-error focus:border-error'
      : 'border-carbon-50 hover:border-carbon-70 focus:border-primary'
  );

  const labelClasses = "block text-sm font-medium text-carbon-80 mb-2";
  const asteriskClasses = "text-error ml-1";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn('flex flex-col gap-6', className)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className={asteriskClasses}>*</span>
          </label>
          <input
            id="name"
            type="text"
            title="Example: John Doe"
            autoComplete="name"
            className={inputClasses(errors.name)}
            {...register('name', { required: 'Full name is required', minLength: { value: 2, message: 'Minimum 2 characters' } })}
          />
          {errors.name && <p className="text-error text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address <span className={asteriskClasses}>*</span>
          </label>
          <input
            id="email"
            type="email"
            title="Example: john@company.com"
            autoComplete="email"
            className={inputClasses(errors.email)}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
          />
          {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number <span className={asteriskClasses}>*</span>
          </label>
          <input
            id="phone"
            type="tel"
            title="Example: +91 98765 43210"
            autoComplete="tel"
            className={inputClasses(errors.phone)}
            {...register('phone', { required: 'Phone number is required', minLength: { value: 10, message: 'Enter valid phone number' } })}
          />
          {errors.phone && <p className="text-error text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClasses}>
            Service of Interest
          </label>
          <select
            id="service"
            title="Select a service from the dropdown"
            className={inputClasses(errors.service)}
            {...register('service')}
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className={asteriskClasses}>*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          title="Example: Tell us about your project or requirements"
          className={cn(inputClasses(errors.message), 'resize-y')}
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Minimum 10 characters' } })}
        />
        {errors.message && <p className="text-error text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* Status message */}
      {status && status !== 'loading' && (
        <div
          className={cn(
            'flex items-start gap-3 p-4 text-sm font-medium border',
            status === 'success' ? 'bg-success/10 text-success border-success/20' : 'bg-red-50 text-error border-error/20'
          )}
        >
          {status === 'success' ? <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
          {statusMessage}
        </div>
      )}

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={status === 'loading'}
          loading={status === 'loading'}
          icon={Send}
          iconPosition="right"
          size="lg"
        >
          {status === 'loading' ? 'Sending Message...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

