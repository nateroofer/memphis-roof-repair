// Roof Types Comparison Page - LLM-optimized for "metal roofing Memphis TN" and material comparisons
import { generateMetadata as generateSEOMetadata } from '@/lib/seoConfig';
import { ServiceSchema, FAQSchema } from '@/components/StructuredData';
import LeadForm from '@/components/LeadForm';
import { Layers, DollarSign, Clock, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = generateSEOMetadata({
  title: 'Roofing Materials Guide | Metal vs Shingle | Memphis TN',
  description: 'Compare roofing materials for Memphis homes. Metal, asphalt shingle, TPO roofing pros/cons. Expert advice from Zion Roof. Call (901) 304-9466.',
  keywords: [
    'metal roofing Memphis TN',
    'shingle roof repair',
    'TPO roofing contractors',
    'roofing materials comparison',
    'best roof for Memphis'
  ],
  path: '/services/roof-types'
});

const roofTypes = [
  {
    name: 'Asphalt Shingles',
    description: 'Most popular residential roofing in Memphis',
    icon: '🏠',
    pros: [
      'Affordable initial cost ($3.50-$5.50/sq ft)',
      'Wide variety of colors and styles',
      'Easy repairs and maintenance',
      '20-30 year lifespan',
      'Good wind and impact resistance'
    ],
    cons: [
      'Shorter lifespan than metal',
      'Requires periodic maintenance',
      'Less energy efficient'
    ],
    bestFor: 'Traditional homes, budget-conscious homeowners, quick installation needs',
    cost: '$8,000-$15,000 (typical Memphis home)'
  },
  {
    name: 'Metal Roofing',
    description: 'Premium, long-lasting solution for Memphis climate',
    icon: '⚡',
    pros: [
      'Extremely durable (40-70 year lifespan)',
      'Energy efficient (reflects heat)',
      'Fire resistant (Class A rating)',
      'Low maintenance requirements',
      'Increases home value'
    ],
    cons: [
      'Higher initial investment',
      'Professional installation required',
      'Can be noisy in heavy rain (solved with insulation)'
    ],
    bestFor: 'Long-term investment, energy savings, premium aesthetics',
    cost: '$15,000-$25,000 (typical Memphis home)'
  },
  {
    name: 'TPO Roofing',
    description: 'Commercial flat roof solution',
    icon: '🏢',
    pros: [
      'Heat-reflective white membrane',
      'Excellent for flat/low-slope roofs',
      'Energy Star certified',
      '15-20 year lifespan',
      'Seams are welded (not glued)'
    ],
    cons: [
      'Primarily for commercial/flat roofs',
      'Professional installation critical',
      'Not suitable for steep slopes'
    ],
    bestFor: 'Commercial buildings, flat residential roofs, energy efficiency focus',
    cost: '$4-$8 per square foot'
  }
];

const faqs = [
  {
    question: 'Metal vs shingle roofing in Tennessee — which is better?',
    answer: 'Metal roofing offers superior longevity (40-70 years vs 20-30) and energy efficiency, making it ideal for Memphis\' hot summers. Asphalt shingles cost less initially and suit traditional aesthetics. Your best choice depends on budget, home style, and how long you plan to stay.'
  },
  {
    question: 'Is metal roofing worth the extra cost in Memphis?',
    answer: 'Yes, for most homeowners. Metal roofs last 2-3x longer than asphalt, reduce cooling costs by 10-25%, require minimal maintenance, and increase home resale value. The higher upfront cost is offset by longevity and energy savings.'
  },
  {
    question: 'What roof type handles Memphis storms best?',
    answer: 'Impact-resistant architectural shingles (Class 4) and metal roofing both excel in Memphis storms. Metal roofing handles high winds (up to 140 mph) exceptionally well. Impact-resistant shingles resist hail damage better than standard shingles.'
  },
  {
    question: 'Can you install a metal roof over existing shingles?',
    answer: 'Sometimes, but not recommended. While codes may allow it, Zion Roof recommends full tear-off to inspect decking for damage and ensure proper installation. This prevents hidden issues and maximizes your new roof\'s lifespan.'
  }
];

export default function RoofTypesPage() {
  return (
    <>
      <ServiceSchema
        service={{
          name: 'Roofing Material Consultation Memphis',
          description: 'Expert guidance on roofing materials for Memphis homes. Compare metal, shingle, TPO, and other roofing systems.',
          url: 'https://memphisroof.repair/services/roof-types'
        }}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="section-container text-center">
          <Layers className="w-16 h-16 text-zion-green mx-auto mb-4" />
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Roofing Materials Guide for Memphis
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Choose the right roofing system for your Memphis home. Compare metal, asphalt shingle, and TPO roofing with expert guidance from Zion Roof's experienced team.
          </p>
        </div>
      </section>

      {/* Roof Types Comparison */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Compare Roofing Materials
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {roofTypes.map((type, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="bg-gradient-to-r from-zion-blue to-zion-blue-light p-6 text-center">
                  <div className="text-6xl mb-2">{type.icon}</div>
                  <h3 className="font-heading text-2xl font-bold text-white">{type.name}</h3>
                  <p className="text-gray-200 text-sm mt-2">{type.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">TYPICAL COST</p>
                    <p className="text-lg font-bold text-zion-blue dark:text-zion-green">{type.cost}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">PROS</p>
                    <ul className="space-y-2">
                      {type.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-green-500">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">BEST FOR</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{type.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Helper */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">
            Which Roof Type Is Right for You?
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg mb-8">
            <h3 className="font-heading text-xl font-bold mb-4">Choose Metal Roofing If:</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">• Planning to stay in your home 10+ years</li>
              <li className="flex gap-2">• Want to reduce energy costs significantly</li>
              <li className="flex gap-2">• Desire modern or contemporary aesthetic</li>
              <li className="flex gap-2">• Live in high storm-risk area</li>
              <li className="flex gap-2">• Want minimal long-term maintenance</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="font-heading text-xl font-bold mb-4">Choose Asphalt Shingles If:</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">• Working with a tighter budget</li>
              <li className="flex gap-2">• Prefer traditional home appearance</li>
              <li className="flex gap-2">• Need quick installation (2-3 days)</li>
              <li className="flex gap-2">• Home has complex roof design</li>
              <li className="flex gap-2">• Planning shorter-term ownership (5-15 years)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Roofing Material Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="font-heading text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-br from-zion-blue to-zion-blue-light text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">
            Not Sure Which Material to Choose?
          </h2>
          <p className="text-xl text-center text-gray-200 mb-8">
            Schedule a free consultation and we'll help you find the perfect roofing solution for your home and budget.
          </p>
          <div className="bg-white rounded-2xl p-8">
            <LeadForm source="roof-types" />
          </div>
        </div>
      </section>
    </>
  );
}

