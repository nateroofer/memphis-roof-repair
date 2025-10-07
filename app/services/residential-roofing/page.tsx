// Residential Roofing Service Page - LLM-optimized for "residential roofing Memphis TN"
import { generateMetadata as generateSEOMetadata } from '@/lib/seoConfig';
import { ServiceSchema, FAQSchema } from '@/components/StructuredData';
import LeadForm from '@/components/LeadForm';
import { Home, Shield, Star, Award, CheckCircle, DollarSign } from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'Residential Roofing Memphis TN | Home Roof Installation',
  description: 'Residential roofing experts in Memphis. Roof installation, replacement, and repair for Memphis homes. Free inspections. Licensed & insured. Call (901) 304-9466.',
  keywords: [
    'residential roofing Memphis TN',
    'roof installation Memphis',
    'home roof replacement TN',
    'residential roofers Memphis',
    'Memphis home roofing contractor'
  ],
  path: '/services/residential-roofing'
});

const faqs = [
  {
    question: 'How much does a new roof cost for a Memphis home?',
    answer: 'Residential roof replacement in Memphis typically costs $8,000-$18,000 for a standard 2,000 sq ft home with architectural shingles. Costs vary based on roof size, pitch, material choice, and any underlying damage. Zion Roof provides transparent, itemized estimates.'
  },
  {
    question: 'What is the best roofing material for Memphis homes?',
    answer: 'Architectural asphalt shingles are the most popular choice for Memphis homes, offering 25-30 year lifespan, good storm resistance, and cost-effectiveness. Metal roofing is excellent for homeowners seeking 40-50 year durability and energy efficiency.'
  },
  {
    question: 'How long does residential roof installation take?',
    answer: 'Most residential roof installations take 2-4 days. We complete the job efficiently while ensuring quality workmanship. Weather conditions and roof complexity can affect timeline.'
  },
  {
    question: 'Do you offer financing for roof replacement?',
    answer: 'Yes! Zion Roof partners with financing providers to offer flexible payment plans for qualified homeowners. We make quality roofing affordable for Memphis families.'
  }
];

export default function ResidentialRoofingPage() {
  return (
    <>
      <ServiceSchema
        service={{
          name: 'Residential Roofing Services Memphis',
          description: 'Professional residential roof installation, replacement, and repair for Memphis homes. Licensed contractors with 15+ years experience.',
          url: 'https://memphisroof.repair/services/residential-roofing'
        }}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Home className="w-12 h-12 text-zion-green mx-auto mb-4" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Memphis Residential Roofing Experts
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Protect your home with quality roofing from Memphis' trusted residential contractors. Free inspections, transparent pricing, and lifetime craftsmanship warranty on every installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9013049466" className="cta-button">Call (901) 304-9466</a>
              <a href="#quote-form" className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <h2 className="font-heading text-4xl font-bold text-center mb-12">
          Complete Residential Roofing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-heading text-xl font-bold mb-3">Roof Installation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              New roof installation for new construction and complete replacements. Premium materials from trusted manufacturers.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-zion-green">✓</span> Architectural shingles</li>
              <li className="flex gap-2"><span className="text-zion-green">✓</span> Metal roofing systems</li>
              <li className="flex gap-2"><span className="text-zion-green">✓</span> Lifetime warranties available</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-heading text-xl font-bold mb-3">Roof Replacement</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Complete roof replacement when repairs aren't enough. We remove old materials, inspect decking, and install new roofing systems.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-zion-green">✓</span> Full tear-off and disposal</li>
              <li className="flex gap-2"><span className="text-zion-green">✓</span> Decking inspection/repair</li>
              <li className="flex gap-2"><span className="text-zion-green">✓</span> New underlayment included</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-heading text-xl font-bold mb-3">Roof Repair</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Expert repairs for leaks, damaged shingles, flashing issues, and storm damage. Quick turnaround for urgent repairs.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-zion-green">✓</span> Leak detection & repair</li>
              <li className="flex gap-2"><span className="text-zion-green">✓</span> Shingle replacement</li>
              <li className="flex gap-2"><span className="text-zion-green">✓</span> Emergency services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Residential Roofing FAQ</h2>
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
          <h2 className="font-heading text-4xl font-bold text-center mb-4">Get Your Free Roof Inspection</h2>
          <p className="text-xl text-center text-gray-200 mb-8">
            No-obligation inspection and estimate for your Memphis home
          </p>
          <div className="bg-white rounded-2xl p-8">
            <LeadForm source="residential-roofing" />
          </div>
        </div>
      </section>
    </>
  );
}

