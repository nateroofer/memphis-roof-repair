import { generateMetadata } from '@/lib/seoConfig';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Roofing Services in Memphis',
  description:
    'Complete roofing services in Memphis, TN. Roof repair, replacement, storm damage, inspections, gutters, and more. Licensed & insured. Free estimates.',
  keywords: [
    'roofing services Memphis',
    'roof repair Memphis',
    'roof replacement Memphis',
    'storm damage repair',
    'gutter installation Memphis',
    'flat roof repair Memphis'
  ],
  path: '/services'
});

export const services = [
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    description:
      'Expert roof repair services for leaks, damaged shingles, flashing issues, and more. Fast response times and quality workmanship.',
    features: [
      'Leak detection and repair',
      'Shingle replacement',
      'Flashing repair',
      'Emergency repairs',
      'Minor to major repairs'
    ],
    icon: '🔧'
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    description:
      'Complete roof replacement services using premium materials from top manufacturers. Lifetime warranties available.',
    features: [
      'Full roof replacement',
      'Premium material options',
      'Warranty coverage',
      'Expert installation',
      'Clean-up included'
    ],
    icon: '🏠'
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage Repair',
    description:
      'Certified storm damage specialists. We handle insurance claims and provide emergency tarping services.',
    features: [
      'Emergency tarping',
      'Insurance claim assistance',
      'Wind damage repair',
      'Hail damage assessment',
      'Same-day service available'
    ],
    icon: '⛈️'
  },
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection',
    description:
      'Comprehensive roof inspections by licensed professionals. Detailed reports with photos and recommendations.',
    features: [
      'Free inspections',
      'Detailed photo reports',
      'Drone inspections available',
      'Pre-sale inspections',
      'Maintenance recommendations'
    ],
    icon: '🔍'
  },
  {
    slug: 'gutter-services',
    title: 'Gutter Installation & Repair',
    description:
      'Professional gutter installation, repair, and cleaning services to protect your home from water damage.',
    features: [
      'Gutter installation',
      'Gutter repair',
      'Gutter cleaning',
      'Downspout installation',
      'Gutter guard installation'
    ],
    icon: '🌊'
  },
  {
    slug: 'flat-roofing',
    title: 'Flat & Commercial Roofing',
    description:
      'Specialized flat roofing services for commercial and residential properties. TPO, EPDM, and modified bitumen.',
    features: [
      'TPO roofing',
      'EPDM installation',
      'Modified bitumen',
      'Flat roof repair',
      'Commercial roofing'
    ],
    icon: '🏢'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Professional Roofing Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive roofing solutions for Memphis homes and businesses.
            Licensed, insured, and locally trusted.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden"
            >
              <div className="p-8">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="font-heading text-2xl font-bold mb-3 group-hover:text-zion-blue transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-zion-green mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-zion-blue font-bold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Why Choose Zion Roof?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-heading text-xl font-bold mb-3">
                15+ Years Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Serving Memphis with excellence since 2009. Thousands of
                satisfied customers.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fully licensed, bonded, and insured for your complete
                protection and peace of mind.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-3">
                Warranty Coverage
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive warranties on materials and workmanship for all
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-zion-green text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-zion-blue mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-blue-dark mb-8">
            Contact us today for a free estimate on any roofing service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9015557663"
              className="bg-zion-blue text-white font-bold px-8 py-4 rounded-lg hover:bg-zion-blue-light transition-colors"
            >
              Call (901) 555-ROOF
            </a>
            <a
              href="/contact"
              className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


