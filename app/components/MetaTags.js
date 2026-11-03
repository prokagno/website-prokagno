import React from 'react';
import Head from 'next/head';

const MetaTags = ({ 
  title, 
  description, 
  keywords, 
  author = "Krishna Prasad Ponnekenti",
  ogTitle, 
  ogDescription, 
  ogImage = "/images/og-image.jpg",
  ogUrl, 
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage = "/images/twitter-image.jpg",
  canonicalUrl
}) => {
  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      {author && <meta name="author" content={author} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:site_name" content="Kanprokagno Innovation" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
};

export default MetaTags;
