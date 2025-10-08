// Dynamic location landing pages for Memphis neighborhoods
// Optimized for local SEO with location-specific content and keywords

import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from '@/lib/seoConfig';
import { LocalBusinessSchema, FAQSchema, ServiceSchema } from '@/components/StructuredData';
import { locations } from '@/lib/locationsData';
import LeadForm from '@/components/LeadForm';
import { Phone, MapPin, Award } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const location = locations[params.slug as keyof typeof locations];

  if (!location) {
    return {};
  }

  return generateSEOMetadata({
    title: location.metaTitle || `Roofing Contractor ${location.name} TN`,
    description: location.metaDescription || location.description,
    keywords: location.keywords || [
      `roofing contractor ${location.name}`,
      `roof repair ${location.name} TN`,
      `roof replacement ${location.name}`,
      `roofing services ${location.zip}`
    ],
    path: `/locations/${params.slug}`
  });
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = locations[params.slug as keyof typeof locations];

  if (!location) {
    notFound();
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: SITE_CONFIG.name,
    image: SITE_CONFIG.url + '/images/locations/' + params.slug + '.jpg', // Placeholder image
    url: `${SITE_CONFIG.url}/locations/${params.slug}`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: location.name,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: location.zip,
      addressCountry: SITE_CONFIG.address.country
    },
    areaServed: location.neighborhoods.map((area) => ({
      '@type': 'Place',
      name: area
    })),
    openingHours: SITE_CONFIG.openingHours,
    priceRange: '$$',
    // Add aggregateRating if available
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you work with insurance companies in ${location.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes — Zion Roof documents damage and supports you through the claims process for ${location.name} residents.`
        }
      },
      {
        '@type': 'Question',
        name: `How soon can you inspect my roof in ${location.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We typically schedule local inspections in ${location.name} within 24–72 hours, often same-week for urgent storm damage.`
        }
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Roof Repair & Replacement in ${location.name}`,
    description: location.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.name,
        addressRegion: SITE_CONFIG.address.state
      }
    },
    areaServed: {
      '@type': 'Place',
      name: location.name
    },
    url: `${SITE_CONFIG.url}/locations/${params.slug}`
  };

  return (
    <>
      <LocalBusinessSchema schema={localBusinessSchema} />
      <FAQSchema schema={faqSchema} />
      <ServiceSchema schema={serviceSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-zion-green" />
              <span className="text-zion-green font-semibold">
                {location.name}, {location.zip}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {location.h1 || `Professional Roofing Services in ${location.name}`}
            </h1>
            {/* Answer-first lead paragraph (LLM-optimized) */}
            {location.answerFirst && (
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                {location.answerFirst}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`} className="cta-button inline-flex items-center gap-2 justify-center">
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href="#contact-form"
                className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-container bg-white dark:bg-gray-900">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">
          Roofing in {location.name}: Quick Facts
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-zion-green/20">
            <div className="text-zion-blue dark:text-zion-green font-bold text-xl mb-2">
              {location.quickFacts.avgProjectCost}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Typical Project Cost</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-zion-green/20">
            <div className="text-zion-blue dark:text-zion-green font-bold text-xl mb-2">
              {location.quickFacts.avgCompletionTime}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completion Time</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-zion-green/20">
            <div className="text-zion-blue dark:text-zion-green font-bold text-xl mb-2">
              {location.quickFacts.commonIssues}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Common Issues</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-zion-green/20">
            <div className="text-zion-blue dark:text-zion-green font-bold text-xl mb-2">
              {location.quickFacts.serviceArea}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Service Area</div>
          </div>
        </div>
      </section>

      {/* Full Content Section */}
      {location.fullContent && (
        <section className="section-container bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {location.fullContent.split('\n\n').map((paragraph, index) => {
                // Check if this is a markdown heading
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="font-heading text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                // Check if this is a list
                if (paragraph.includes('\n-')) {
                  const items = paragraph.split('\n-').filter(item => item.trim());
                  return (
                    <ul key={index} className="space-y-2 mb-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-zion-green mt-1.5">✓</span>
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraph
                return (
                  <p key={index} className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Case Study */}
      {location.caseStudy && (
        <section className="section-container bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-zion-blue to-zion-blue-light p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-zion-green" />
                <h2 className="font-heading text-2xl font-bold">Case Study: {location.caseStudy.title}</h2>
              </div>
              <p className="text-xl mb-4">{location.caseStudy.description}</p>
              <p className="text-gray-200 text-sm">{location.caseStudy.details}</p>
            </div>
          </div>
        </section>
      )}

      {/* Neighborhoods Served */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">
          Neighborhoods We Serve in {location.name}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-center">
          {location.neighborhoods.map((neighborhood, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
              <MapPin className="w-6 h-6 text-zion-blue dark:text-zion-green mx-auto mb-2" />
              <p className="font-medium text-gray-800 dark:text-gray-200">{neighborhood}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action / Lead Form */}
      <section id="contact-form" className="section-container bg-zion-blue text-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading text-white">
            Get Your <span className="text-zion-green">Free Estimate</span> in {location.name} Today!
          </h2>
          <p className="text-xl text-gray-200">
            Fill out the form below or call us directly to schedule your no-obligation inspection.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl">
          <LeadForm source={`location-${params.slug}`} />
        </div>
      </section>
    </>
  );
}
