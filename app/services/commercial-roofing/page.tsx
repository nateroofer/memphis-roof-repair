// Commercial Roofing Service Page - LLM-optimized for "commercial roofing Memphis TN"
import { generateMetadata as generateSEOMetadata } from '@/lib/seoConfig';
import { ServiceSchema, FAQSchema } from '@/components/StructuredData';
import LeadForm from '@/components/LeadForm';
import { Building2, Shield, Clock, Award, CheckCircle } from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'Commercial Roofing Memphis TN | Flat Roof Experts',
  description: 'Commercial roofing specialists in Memphis. TPO, EPDM, flat roof repair & replacement. Licensed contractors serving Memphis businesses. Call (901) 304-9466.',
  keywords: [
    'commercial roofing Memphis TN',
    'flat roof repair Memphis',
    'EPDM roofing Memphis',
    'TPO roofing contractors',
    'commercial roof replacement Memphis'
  ],
  path: '/services/commercial-roofing'
});

const faqs = [
  {
    question: 'How much does commercial roof replacement cost in Memphis?',
    answer: 'Commercial roof replacement in Memphis typically costs $4-$8 per square foot, depending on materials (TPO, EPDM, or modified bitumen), roof size, and accessibility. Most projects range from $15,000-$75,000. Zion Roof provides detailed estimates with no hidden fees.'
  },
  {
    question: 'What is the best roofing system for Memphis commercial buildings?',
    answer: 'TPO (Thermoplastic Polyolefin) roofing is ideal for Memphis due to its heat-reflective properties, durability in extreme weather, and 15-20 year lifespan. EPDM rubber roofing is also excellent for flat or low-slope roofs common in commercial buildings.'
  },
  {
    question: 'How long does commercial roof installation take?',
    answer: 'Most commercial roofing projects take 3-10 days depending on size and complexity. We work efficiently to minimize business disruption, often scheduling installation during off-hours or weekends when requested.'
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer: 'Yes! Zion Roof offers preventive maintenance contracts with quarterly inspections, debris removal, minor repairs, and detailed condition reports to extend your roof\'s lifespan and prevent costly emergency repairs.'
  }
];

export default function CommercialRoofingPage() {
  return (
    <>
      <ServiceSchema
        service={{
          name: 'Commercial Roofing Services Memphis',
          description: 'Professional commercial roofing installation, repair, and maintenance for Memphis businesses. Specializing in TPO, EPDM, and flat roof systems.',
          url: 'https://memphisroof.repair/services/commercial-roofing'
        }}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-light to-zion-blue-dark text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-zion-green" />
              <span className="text-zion-green font-semibold text-lg">Commercial Roofing</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Memphis Commercial Roofing Specialists
            </h1>
            {/* Answer-first paragraph for LLM visibility */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Zion Roof provides expert commercial roofing solutions for Memphis businesses — specializing in TPO, EPDM, and flat roof systems with minimal disruption to your operations. Most projects complete in 3-10 days with flexible scheduling options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9013049466" className="cta-button inline-flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Call (901) 304-9466
              </a>
              <a href="#quote-form" className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Commercial Roofing: Quick Facts</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-lg">
            <div className="text-zion-blue dark:text-zion-green font-bold text-2xl mb-2">$4-$8/sq ft</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Cost Range</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-lg">
            <div className="text-zion-blue dark:text-zion-green font-bold text-2xl mb-2">3-10 days</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Typical Timeline</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-lg">
            <div className="text-zion-blue dark:text-zion-green font-bold text-2xl mb-2">15-20 years</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">TPO Lifespan</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-lg">
            <div className="text-zion-blue dark:text-zion-green font-bold text-2xl mb-2">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Emergency Service</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6">Professional Commercial Roofing for Memphis Businesses</h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Memphis commercial properties require specialized roofing expertise that balances durability, cost-effectiveness, and minimal business disruption. Zion Roof delivers professional commercial roofing solutions for office buildings, retail centers, warehouses, and multi-family properties throughout the Memphis metro area.
            </p>
            
            <h3 className="font-heading text-2xl font-bold mt-8 mb-4">Commercial Roofing Systems We Install:</h3>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-heading text-xl font-bold mb-3">TPO Roofing</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Heat-reflective, energy-efficient single-ply membrane. Ideal for Memphis climate. 15-20 year lifespan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" />
                    <span>Reflective surface reduces cooling costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" />
                    <span>Resistant to UV, ozone, chemical exposure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-heading text-xl font-bold mb-3">EPDM Rubber Roofing</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Durable rubber membrane for flat and low-slope roofs. Excellent weather resistance. 20-25 year lifespan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" />
                    <span>Proven performance in extreme weather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" />
                    <span>Cost-effective long-term solution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-heading text-xl font-bold mb-3">Modified Bitumen</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Multi-layer system with reinforced asphalt. Excellent for high-traffic roofs. 15-20 year lifespan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" />
                    <span>Withstands foot traffic for maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" />
                    <span>Self-healing properties prevent leaks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-heading text-xl font-bold mb-3">Built-Up Roofing (BUR)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Traditional tar and gravel system. Proven reliability. 20-30 year lifespan with maintenance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" />
                    <span>Excellent waterproofing protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" />
                    <span>Fire-resistant top layer</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="font-heading text-2xl font-bold mt-12 mb-4">Why Memphis Businesses Choose Zion Roof:</h3>
            
            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-blue" />
                </div>
                <h4 className="font-heading text-lg font-bold mb-2">Licensed & Bonded</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fully licensed commercial contractors with comprehensive liability insurance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-zion-blue" />
                </div>
                <h4 className="font-heading text-lg font-bold mb-2">Flexible Scheduling</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Off-hours and weekend installations to minimize business disruption
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-zion-blue" />
                </div>
                <h4 className="font-heading text-lg font-bold mb-2">Warranty Protection</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Manufacturer warranties plus our workmanship guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Commercial Roofing FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <h3 className="font-heading text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="section-container bg-gradient-to-br from-zion-blue to-zion-blue-light text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">
            Request Commercial Roofing Quote
          </h2>
          <p className="text-xl text-center text-gray-200 mb-8">
            Get a detailed estimate for your Memphis commercial property
          </p>
          <div className="bg-white rounded-2xl p-8">
            <LeadForm source="commercial-roofing" />
          </div>
        </div>
      </section>
    </>
  );
}

