import React from 'react';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';

const LegalLayout = ({ title, date, children }) => (
  <>
    <SEO title={title} description={`Official ${title} for Soft Synergy Systems Pvt Ltd.`} />
    <PageHero title={title} subtitle="Official policy and legal documentation." breadcrumbs={[{ name: title }]} />
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-strong border border-slate-light/5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-10">Last Updated: {date}</p>
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-navy prose-strong:text-navy prose-a:text-primary">
            {children}
          </div>
        </div>
      </Container>
    </Section>
  </>
);

export const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy" date="March 2026">
    <h2>1. Introduction</h2>
    <p>Soft Synergy Systems Pvt Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
    <h2>2. Information Collection</h2>
    <p>We collect information that you provide directly to us through our contact forms, newsletter signups, and other interactive elements on the site. This may include your name, email address, phone number, and company information.</p>
    <h2>3. Use of Information</h2>
    <p>We use the collected information to respond to your inquiries, provide the services you request, and improve your overall experience on our platform. We do not sell your personal data to third parties.</p>
    <h2>4. GDPR Compliance</h2>
    <p>For users in the European Economic Area, we process your personal data in accordance with the General Data Protection Regulation (GDPR). You have the right to access, correct, or delete your personal information.</p>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="Terms & Conditions" date="March 2026">
    <h2>1. Acceptance of Terms</h2>
    <p>By accessing and using the Soft Synergy Systems website, you agree to comply with and be bound by these Terms and Conditions.</p>
    <h2>2. Use of Site</h2>
    <p>You may use this site for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use of the site. Unauthorized use of this site may give rise to a claim for damages.</p>
    <h2>3. Intellectual Property</h2>
    <p>All content, including text, graphics, logos, and software, is the property of Soft Synergy Systems Pvt Ltd and is protected by international copyright laws.</p>
  </LegalLayout>
);

export const CookiePolicy = () => (
  <LegalLayout title="Cookie Policy" date="March 2026">
    <h2>1. What are Cookies?</h2>
    <p>Cookies are small text files stored on your device to help websites function properly and to provide information to the owners of the site.</p>
    <h2>2. How We Use Cookies</h2>
    <p>We use essential cookies for the site's functionality and analytical cookies to understand how visitors interact with our content. This helps us improve the user experience.</p>
    <h2>3. Managing Cookies</h2>
    <p>You can manage your cookie preferences through the consent banner on our site or by adjusting your browser settings. Declining some cookies may affect the functionality of the site.</p>
  </LegalLayout>
);

export const Support = () => (
    <LegalLayout title="Help & Support" date="March 2026">
      <h2>How Can We Assist You?</h2>
      <p>Soft Synergy Systems is dedicated to providing exceptional support to our clients and partners. We offer multiple channels for assistance depending on your needs.</p>
      
      <h3>1. Technical Support</h3>
      <p>For existing clients requiring technical assistance with implemented solutions, please contact your dedicated account manager or use our support portal.</p>
      
      <h3>2. General Inquiries</h3>
      <p>For general questions about our services, process, or company, please refer to our <a href="/faq">FAQ page</a> or send an email to our help desk.</p>
      
      <h3>3. Response Times</h3>
      <p>We aim to respond to all support requests within one business day. Critical system issues are prioritized for even faster resolution.</p>
    </LegalLayout>
  );
