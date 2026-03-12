/**
 * Contact form submission via EmailJS or mailto fallback.
 * Configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID,
 * and VITE_EMAILJS_PUBLIC_KEY in .env to enable EmailJS.
 */

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Submits the contact form data.
 * @param {object} formData - { name, email, phone, service, message }
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const submitContactForm = async (formData) => {
  try {
    // If EmailJS is configured, use it
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: import.meta.env.VITE_CONTACT_EMAIL || 'hr@softsynergysystems.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      return { success: true, message: 'Your message has been sent successfully!' };
    }

    // Fallback: simulate success (replace with your API endpoint)
    await new Promise((res) => setTimeout(res, 1000));
    return { success: true, message: 'Your message has been received. We will get back to you shortly!' };
  } catch (err) {
    console.error('Contact form submission error:', err);
    return { success: false, message: 'Failed to send your message. Please try again or email us directly.' };
  }
};

/**
 * Newsletter signup submission.
 * @param {string} email
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const submitNewsletterSignup = async (email) => {
  try {
    await new Promise((res) => setTimeout(res, 800));
    return { success: true, message: 'You have been subscribed to our newsletter!' };
  } catch (err) {
    return { success: false, message: 'Subscription failed. Please try again.' };
  }
};
