import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seoConfig';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/account/', '/signin/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/account/', '/signin/']
      }
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`
  };
}


