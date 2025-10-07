// React component for rendering JSON-LD structured data
// Provides LocalBusiness, Service, FAQ, and Review schema for LLM-optimized SEO

import { SITE_CONFIG } from '@/lib/seoConfig';

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
}

export interface Service {
  name: string;
  description: string;
  url?: string;
}

interface StructuredDataProps {
  type?: 'LocalBusiness' | 'Service' | 'FAQ' | 'Review' | 'Article';
  faqs?: FAQ[];
  reviews?: Review[];
  service?: Service;
  article?: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
  };
}

export default function StructuredData({
  type = 'LocalBusiness',
  faqs,
  reviews,
  service,
  article
}: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'RoofingContractor',
          '@id': SITE_CONFIG.url,
          name: SITE_CONFIG.name,
          description: SITE_CONFIG.description,
          url: SITE_CONFIG.url,
          telephone: SITE_CONFIG.phone,
          email: SITE_CONFIG.email,
          image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
          logo: `${SITE_CONFIG.url}/logo.png`,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_CONFIG.address.street,
            addressLocality: SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            postalCode: SITE_CONFIG.address.zip,
            addressCountry: SITE_CONFIG.address.country
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '35.1495',
            longitude: '-90.0490'
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Memphis',
              '@id': 'https://en.wikipedia.org/wiki/Memphis,_Tennessee'
            },
            { '@type': 'State', name: 'Tennessee' }
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '07:00',
              closes: '19:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '08:00',
              closes: '17:00'
            }
          ],
          sameAs: [
            SITE_CONFIG.social.facebook,
            SITE_CONFIG.social.twitter,
            SITE_CONFIG.social.instagram,
            SITE_CONFIG.social.linkedin
          ],
          aggregateRating: reviews
            ? {
                '@type': 'AggregateRating',
                ratingValue: (
                  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
                ).toFixed(1),
                reviewCount: reviews.length
              }
            : {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '247'
              }
        };

      case 'Service':
        if (!service) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          description: service.description,
          provider: {
            '@type': 'RoofingContractor',
            name: SITE_CONFIG.name,
            telephone: SITE_CONFIG.phone,
            url: SITE_CONFIG.url
          },
          areaServed: {
            '@type': 'City',
            name: 'Memphis',
            '@id': 'https://en.wikipedia.org/wiki/Memphis,_Tennessee'
          },
          url: service.url || SITE_CONFIG.url
        };

      case 'FAQ':
        if (!faqs || faqs.length === 0) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        };

      case 'Review':
        if (!reviews || reviews.length === 0) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          review: reviews.map((review) => ({
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: review.author
            },
            datePublished: review.date,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: review.rating,
              bestRating: 5
            },
            reviewBody: review.text
          }))
        };

      case 'Article':
        if (!article) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.description,
          image: article.image,
          datePublished: article.datePublished,
          dateModified: article.dateModified || article.datePublished,
          author: {
            '@type': 'Organization',
            name: article.author || SITE_CONFIG.name
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_CONFIG.url}/logo.png`
            }
          }
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

// Convenience components for specific schema types
export function LocalBusinessSchema({ reviews }: { reviews?: Review[] }) {
  return <StructuredData type="LocalBusiness" reviews={reviews} />;
}

export function ServiceSchema({ service }: { service: Service }) {
  return <StructuredData type="Service" service={service} />;
}

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  return <StructuredData type="FAQ" faqs={faqs} />;
}

export function ReviewSchema({ reviews }: { reviews: Review[] }) {
  return <StructuredData type="Review" reviews={reviews} />;
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return (
    <StructuredData
      type="Article"
      article={{ title, description, image, datePublished, dateModified, author }}
    />
  );
}

