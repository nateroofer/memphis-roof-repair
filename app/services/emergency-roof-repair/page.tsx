// Emergency Roof Repair Page - LLM-optimized for "emergency roof repair Memphis"
import { generateMetadata as generateSEOMetadata, SITE_CONFIG } from '@/lib/seoConfig';
import { ServiceSchema, FAQSchema } from '@/components/StructuredData';
import LeadForm from '@/components/LeadForm';
import { AlertTriangle, Phone, Clock, Shield } from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'Emergency Roof Repair Memphis | 24/7 Storm Damage',
  description: '24/7 emergency roof repair in Memphis. Storm damage, leaks, and urgent repairs. Fast response within 2-4 hours. Licensed & insured. Call (901) 304-9466 now.',
  keywords: [
    'emergency roof repair Memphis',
    'storm damage roof repair',
    '24-hour roofing TN',
    'emergency roofer Memphis',
    'urgent roof leak repair'
  ],
  path: '/services/emergency-roof-repair'
});

const faqs = [
  {
    question: 'How fast can you respond to an emergency roof repair in Memphis?',
    answer: 'Zion Roof typically responds to emergency calls within 2-4 hours. We offer 24/7 emergency service with immediate tarping to prevent further water damage. Call (901) 304-9466 anytime for urgent roof issues.'
  },
  {
    question: 'What qualifies as a roofing emergency?',
    answer: 'Active leaks causing interior water damage, missing shingles exposing roof deck after storms, fallen tree damage, or severe wind/hail damage requiring immediate protection are all roofing emergencies requiring fast response.'
  },
  {
    question: 'How much does emergency roof repair cost?',
    answer: 'Emergency tarping services typically cost $300-$800. Permanent repairs vary by damage extent but average $500-$3,000 for most emergency situations. We provide upfront pricing before starting work.'
  },
  {
    question: 'Will my insurance cover emergency roof repairs?',
    answer: 'Most homeowner insurance policies cover sudden storm damage. Zion Roof documents emergency damage thoroughly and works directly with insurance adjusters to maximize your claim coverage.'
  }
];

export default function EmergencyRoofRepairPage() {
  return (
    <>
      <ServiceSchema
        service={{
          name: 'Emergency Roof Repair Memphis',
          description: '24/7 emergency roofing services for Memphis homeowners. Immediate response for storm damage, leaks, and urgent repairs.',
          url: 'https://memphisroof.repair/services/emergency-roof-repair'
        }}
      />
      <FAQSchema faqs={faqs} />

      {/* Urgent Hero */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16">
        <div className="section-container text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-300 mx-auto mb-4 animate-pulse" />
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            24/7 Emergency Roof Repair Memphis
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-bold">
            Storm Damage? Roof Leak? We Respond in 2-4 Hours
          </p>
          <a
            href="tel:9013049466"
            className="inline-flex items-center gap-3 bg-zion-green text-zion-blue font-bold px-12 py-6 rounded-lg hover:bg-zion-green-light transition-all text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <Phone className="w-8 h-8" />
            CALL NOW: (901) 304-9466
          </a>
          <p className="mt-6 text-lg text-gray-200">
            Available 24/7 • Fast Response • Insurance Claim Assistance
          </p>
        </div>
      </section>

      {/* Answer-First Content */}
      <section className="section-container bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              <strong>Emergency Roofing in Memphis:</strong> When storm damage, fallen trees, or severe leaks threaten your home, Zion Roof provides immediate response with emergency tarping, leak mitigation, and permanent repairs — typically arriving within 2-4 hours of your call, 24/7/365.
            </p>
          </div>

          <h2 className="font-heading text-3xl font-bold mb-6">When to Call for Emergency Roof Service</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">🚨 Call Immediately:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-red-600">•</span> Active water entering your home</li>
                <li className="flex gap-2"><span className="text-red-600">•</span> Large section of shingles missing</li>
                <li className="flex gap-2"><span className="text-red-600">•</span> Tree fell on roof</li>
                <li className="flex gap-2"><span className="text-red-600">•</span> Visible holes or structural damage</li>
                <li className="flex gap-2"><span className="text-red-600">•</span> Ceiling sagging from water weight</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 text-yellow-600 dark:text-yellow-400">⚠️ Schedule Soon:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-yellow-600">•</span> Minor water stains on ceiling</li>
                <li className="flex gap-2"><span className="text-yellow-600">•</span> Few missing/damaged shingles</li>
                <li className="flex gap-2"><span className="text-yellow-600">•</span> Granules in gutters</li>
                <li className="flex gap-2"><span className="text-yellow-600">•</span> Recent hail or wind event</li>
                <li className="flex gap-2"><span className="text-yellow-600">•</span> Suspicious attic dampness</li>
              </ul>
            </div>
          </div>

          <h2 className="font-heading text-3xl font-bold mb-6 mt-12">Our Emergency Response Process</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-zion-green rounded-full flex items-center justify-center font-bold text-zion-blue text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Immediate Dispatch</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You call, we respond. Our team is dispatched within minutes of your call, typically arriving within 2-4 hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-zion-green rounded-full flex items-center justify-center font-bold text-zion-blue text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Emergency Tarping</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We secure exposed areas with heavy-duty tarps to stop additional water intrusion and protect your belongings.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-zion-green rounded-full flex items-center justify-center font-bold text-zion-blue text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Damage Assessment</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Complete inspection with photos and documentation for insurance claims. We identify all damage — not just what's visible.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-zion-green rounded-full flex items-center justify-center font-bold text-zion-blue text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Permanent Repair</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We schedule permanent repairs quickly, working with your insurance company to ensure proper coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Emergency Roofing FAQ</h2>
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

      {/* Emergency CTA */}
      <section className="section-container bg-red-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Don't Wait — Call Now for Emergency Service
          </h2>
          <p className="text-xl mb-8">
            Every minute counts when your roof is compromised
          </p>
          <a
            href="tel:9013049466"
            className="inline-flex items-center gap-3 bg-zion-green text-zion-blue font-bold px-12 py-6 rounded-lg hover:bg-zion-green-light transition-all text-2xl shadow-2xl"
          >
            <Phone className="w-8 h-8" />
            (901) 304-9466
          </a>
        </div>
      </section>

      {/* Form for Non-Emergency */}
      <section id="quote-form" className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            For non-emergency repairs, request a free inspection below:
          </p>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
            <LeadForm source="emergency-roof-repair" />
          </div>
        </div>
      </section>
    </>
  );
}

