import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import PageHero from '../components/ui/PageHero';
import { LEGAL_PAGES_CONTENT } from '../constants/shared.constants';

const LegalLayout = ({ title, date, subtitle, children }) => (
  <>
    <SEO title={title} description={`Official ${title} for Soft Synergy Systems Pvt Ltd.`} />
    <PageHero title={title} subtitle={subtitle} breadcrumbs={[{ name: title }]} />
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

const LegalPage = () => {
  const { slug } = useParams();
  const content = LEGAL_PAGES_CONTENT[slug || 'privacy-policy'];

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <LegalLayout 
      title={content.title} 
      date={content.date} 
      subtitle={content.subtitle}
    >
      {content.sections.map((section, idx) => (
        <React.Fragment key={idx}>
          {section.title && <h2 dangerouslySetInnerHTML={{ __html: section.title }} />}
          <p dangerouslySetInnerHTML={{ __html: section.content }} />
        </React.Fragment>
      ))}
    </LegalLayout>
  );
};

export const PrivacyPolicy = () => <LegalPage />;
export const Terms = () => <LegalPage />;
export const CookiePolicy = () => <LegalPage />;
export const Support = () => <LegalPage />;
