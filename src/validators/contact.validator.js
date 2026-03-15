/**
 * Contact Form — Input Validation Schema
 * =======================================
 * Zod validation schemas for the contact and newsletter forms.
 * Lives in the validators/ layer per RULES PRD §9 (Separation of Concerns).
 *
 * RULE: No component or service should define its own inline validation.
 * Import schemas from this file.
 *
 * @module validators/contact.validator
 */

import { z } from 'zod';

// ── Contact Form Schema ───────────────────────────────────────────────

/**
 * Zod schema for validating the contact form.
 *
 * @example
 * import { contactSchema } from '../validators/contact.validator';
 * const result = contactSchema.safeParse(formData);
 */
export const contactSchema = z.object({
  /** Full name — minimum 2 characters */
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),

  /** Phone number — must be at least 10 digits */
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Phone number contains invalid characters'),

  /** Email address — must be a valid email format */
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email address is too long'),

  /** Service of interest — optional dropdown selection */
  service: z.string().optional(),

  /** Message body — minimum 10 characters */
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
});

/** TypeScript-style type inference for consumers  */
export const contactSchemaDefaults = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

// ── Newsletter Schema ─────────────────────────────────────────────────

/**
 * Zod schema for validating the newsletter signup email.
 *
 * @example
 * const result = newsletterSchema.safeParse({ email });
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email address is too long'),
});
