/**
 * SEO — Per-Page Head Management
 * ================================
 * Injects title, meta description, Open Graph, Twitter Card,
 * canonical link, keywords, and optional JSON-LD structured data.
 *
 * Used on every page. Pass `jsonLd` on the Home page for Organization schema.
 *
 * @module components/common/SEO
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO head manager.
 *
 * @param {object}  props
 * @param {string}  props.title       - Page-specific title (appended with site name)
 * @param {string}  props.description - Meta description (150–160 chars ideal)
 * @param {string}  [props.keywords]  - Comma-separated keywords
 * @param {string}  [props.canonical] - Canonical URL (defaults to base URL)
 * @param {string}  [props.ogType]    - Open Graph type (default: 'website')
 * @param {string}  [props.ogImage]   - Open Graph image URL
 * @param {object}  [props.jsonLd]    - JSON-LD structured data object
 * @returns {JSX.Element}
 */
const SEO = ({ title, description, keywords, canonical, ogType = 'website', ogImage, jsonLd }) => {
  const siteName = 'Soft Synergy Systems';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const url = canonical || 'https://softsynergysystems.com';

  return (
    <Helmet>
      {/* ── Basic Metadata ────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* ── Open Graph ───────────────────────────────────────── */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage || 'https://softsynergysystems.com/og-image.jpg'} />

      {/* ── Twitter Card ─────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || 'https://softsynergysystems.com/twitter-image.jpg'} />

      {/* ── JSON-LD Structured Data (optional) ───────────────── */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

