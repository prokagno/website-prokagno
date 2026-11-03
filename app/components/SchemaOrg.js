"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function SchemaOrg({
  organization = {
    name: "Kanprokagno Innovation",
    legalName: "Kanprokagno Innovation Private Limited",
    url: "https://prokagno.co.in",
    logo: "https://prokagno.co.in/logo.png",
    foundingDate: "2023",
    founders: [
      {
        "@type": "Person",
        name: "Krishna Prasad Ponnekenti",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@prokagno.co.in",
      telephone: "+91-XXXXXXXXXX",
      contactType: "customer service",
    },
  },
  breadcrumbItems = [],
}) {
  const pathname = usePathname();
  const baseUrl = "https://prokagno.co.in";
  const currentUrl = `${baseUrl}${pathname}`;

  // Create schema for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organization.name,
    legalName: organization.legalName,
    url: organization.url,
    logo: organization.logo,
    foundingDate: organization.foundingDate,
    founders: organization.founders,
    contactPoint: organization.contactPoint,
    sameAs: [
      "https://twitter.com/kanprokagno",
      "https://www.facebook.com/kanprokagno",
      "https://www.linkedin.com/company/kanprokagno",
    ],
  };

  // Create schema for breadcrumbs (if provided)
  let breadcrumbSchema = null;
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${baseUrl}${item.path}`,
      })),
    };
  }

  // Create schema for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: organization.name,
    url: organization.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // Combine all schemas
  const schemas = [organizationSchema, websiteSchema];
  if (breadcrumbSchema) schemas.push(breadcrumbSchema);

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
