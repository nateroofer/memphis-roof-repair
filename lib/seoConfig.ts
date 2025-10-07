import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'Zion Roof',
  title: 'Zion Roof - Memphis Premier Roofing Contractor',
  description:
    'Memphis\' trusted roofing experts. Licensed & insured roofing contractor specializing in roof repair, replacement, storm damage, and free inspections. Serving Memphis, TN and surrounding areas.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://memphisroof.repair',
  ogImage: '/opengraph-image.png',
  phone: '(901) 304-9466',
  email: 'info@memphisroof.repair',
  address: {
    street: '123 Main Street',
    city: 'Memphis',
    state: 'TN',
    zip: '38103',
    country: 'US'
  },
  businessHours: {
    monday: '7:00 AM - 7:00 PM',
    tuesday: '7:00 AM - 7:00 PM',
    wednesday: '7:00 AM - 7:00 PM',
    thursday: '7:00 AM - 7:00 PM',
    friday: '7:00 AM - 7:00 PM',
    saturday: '8:00 AM - 5:00 PM',
    sunday: 'Closed'
  },
  social: {
    facebook: 'https://facebook.com/memphisroofrepair',
    twitter: 'https://twitter.com/memphisroofrepair',
    instagram: 'https://instagram.com/memphisroofrepair',
    linkedin: 'https://linkedin.com/company/zionroof'
  },
  serviceArea: {
    city: 'Memphis',
    state: 'Tennessee',
    zipCodes: [
      '38103',
      '38104',
      '38105',
      '38106',
      '38107',
      '38108',
      '38109',
      '38111',
      '38112',
      '38114',
      '38115',
      '38116',
      '38117',
      '38118',
      '38119',
      '38120',
      '38122',
      '38125',
      '38126',
      '38127',
      '38128',
      '38131',
      '38132',
      '38133',
      '38134',
      '38135',
      '38138',
      '38139',
      '38141'
    ],
    counties: [
      'Shelby County',
      'DeSoto County',
      'Fayette County',
      'Tipton County'
    ],
    neighborhoods: [
      'Downtown Memphis',
      'Midtown',
      'East Memphis',
      'Germantown',
      'Collierville',
      'Bartlett',
      'Cordova',
      'Millington'
    ]
  }
};

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  path = '',
  type = 'website'
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  type?: 'website' | 'article';
}): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title;
  const pageDescription = description || SITE_CONFIG.description;
  const pageImage = image || SITE_CONFIG.ogImage;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: pageTitle,
    description: pageDescription,
    keywords: keywords || [
      'roofing contractor Memphis',
      'roof repair Memphis TN',
      'roof replacement Memphis',
      'storm damage roof repair',
      'Memphis roofer',
      'residential roofing Memphis',
      'commercial roofing Memphis',
      'roof inspection Memphis',
      'emergency roof repair',
      'licensed roofer Memphis'
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    openGraph: {
      type,
      locale: 'en_US',
      url,
      title: pageTitle,
      description: pageDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@zionroof'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      canonical: url
    }
  };
}

// JSON-LD Schema for Local Business
export function generateLocalBusinessSchema() {
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
      {
        '@type': 'State',
        name: 'Tennessee'
      }
    ],
    priceRange: '$$',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Repair',
            description:
              'Professional roof repair services for residential and commercial properties in Memphis, TN'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Replacement',
            description:
              'Complete roof replacement services with premium materials and expert installation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Storm Damage Repair',
            description:
              'Emergency storm damage assessment and repair services for Memphis area homes and businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Inspection',
            description:
              'Free comprehensive roof inspections by licensed professionals'
          }
        }
      ]
    }
  };
}

// JSON-LD Schema for Breadcrumbs
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`
    }))
  };
}

// JSON-LD Schema for Articles/Blog Posts
export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = SITE_CONFIG.name
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author
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
}


