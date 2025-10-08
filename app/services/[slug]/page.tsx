import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seoConfig';
import { services } from '@/lib/servicesData';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import { CheckCircle, Phone } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {};
  }

  return generateSEOMetadata({
    title: `${service.title} Services in Memphis, TN`,
    description: service.description,
    path: `/services/${service.slug}`
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            {service.title} in Memphis
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">
              What We Offer
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-zion-green flex-shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-zion-blue text-white rounded-xl">
              <h3 className="font-heading text-2xl font-bold mb-3">
                Why Choose Zion Roof?
              </h3>
              <ul className="space-y-2">
                <li>✓ Licensed & insured professionals</li>
                <li>✓ 15+ years serving Memphis</li>
                <li>✓ Free estimates & inspections</li>
                <li>✓ Warranty on all work</li>
                <li>✓ Same-day emergency service</li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="tel:9015557663"
                className="inline-flex items-center gap-2 cta-button"
              >
                <Phone className="w-5 h-5" />
                Call (901) 555-ROOF
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h2 className="font-heading text-3xl font-bold mb-6">
              Request a Free Estimate
            </h2>
            <LeadForm source={`service-${service.slug}`} />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center text-zion-blue font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Contact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Call or fill out our form
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center text-zion-blue font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                Inspection
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Free on-site assessment
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center text-zion-blue font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Estimate</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed quote provided
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center text-zion-blue font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                Completion
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert service delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-container">
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Serving All of Memphis & Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Downtown Memphis • Midtown • East Memphis • Germantown •
            Collierville • Bartlett • Cordova • Millington
          </p>
          <a
            href="/contact"
            className="cta-button"
          >
            Get Your Free Estimate Today
          </a>
        </div>
      </section>
    </>
  );
}


