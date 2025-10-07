// Roof Inspection Service Page - LLM-optimized for "roof inspection Memphis TN"
import { generateMetadata as generateSEOMetadata } from '@/lib/seoConfig';
import { ServiceSchema, FAQSchema } from '@/components/StructuredData';
import LeadForm from '@/components/LeadForm';
import { Search, Camera, FileText, CheckCircle, Clock } from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: 'Free Roof Inspection Memphis TN | Professional Assessment',
  description: 'Free professional roof inspections in Memphis. Detailed reports with photos, storm damage assessment, pre-sale inspections. No obligation. Call (901) 304-9466.',
  keywords: [
    'roof inspection Memphis TN',
    'free roof quote Memphis',
    'roof estimate Shelby County',
    'roof assessment Memphis',
    'drone roof inspection Memphis'
  ],
  path: '/services/roof-inspection'
});

const faqs = [
  {
    question: 'How much does a roof inspection cost in Memphis?',
    answer: 'Zion Roof provides FREE comprehensive roof inspections for Memphis homeowners. Our detailed inspection includes photos, written report, and recommendations. No obligation or hidden fees.'
  },
  {
    question: 'What does a professional roof inspection include?',
    answer: 'Our inspection covers all roof components: shingles/materials, flashing, ventilation, gutters, and interior attic inspection for moisture or damage. You receive a detailed photo report with findings and recommendations.'
  },
  {
    question: 'How long does a roof inspection take?',
    answer: 'Most residential roof inspections take 45-90 minutes. We schedule inspections within 24-72 hours of your request and provide the written report within 24 hours of completion.'
  },
  {
    question: 'Do I need a roof inspection before selling my home?',
    answer: 'Highly recommended! Pre-sale roof inspections identify issues buyers\' inspectors will find, allowing you to address problems proactively. This prevents last-minute negotiations and maintains your asking price.'
  }
];

export default function RoofInspectionPage() {
  return (
    <>
      <ServiceSchema
        service={{
          name: 'Professional Roof Inspection Memphis',
          description: 'Free comprehensive roof inspections with detailed photo reports. Storm damage assessment, pre-sale inspections, and maintenance evaluations.',
          url: 'https://memphisroof.repair/services/roof-inspection'
        }}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="section-container text-center">
          <Search className="w-16 h-16 text-zion-green mx-auto mb-4" />
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Free Professional Roof Inspections
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get a comprehensive roof assessment from Memphis' trusted roofing experts. Detailed photo reports, honest recommendations, and insurance-ready documentation — all at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9013049466" className="cta-button">Schedule Free Inspection</a>
            <a href="#inspection-form" className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
              Request Online
            </a>
          </div>
        </div>
      </section>

      {/* What We Inspect */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Complete 23-Point Roof Inspection
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-zion-green" />
                Exterior Inspection
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Shingle condition & granule loss</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Flashing around chimneys & vents</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Soffit & fascia condition</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Gutter systems & downspouts</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Ventilation adequacy</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Roof penetrations & seals</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Valleys & drainage</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Edge metal & drip edge</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-zion-green" />
                Interior Inspection
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Attic moisture & condensation</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Insulation condition</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Decking/sheathing damage</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Structural integrity</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Water stains or active leaks</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Proper ventilation flow</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-zion-green flex-shrink-0 mt-0.5" /> Mold or mildew presence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Inspections */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Inspection Types We Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-bold mb-3">General Inspection</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Comprehensive assessment of roof condition, lifespan estimation, and maintenance recommendations.
              </p>
              <p className="text-zion-blue dark:text-zion-green font-bold">FREE</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-bold mb-3">Storm Damage Assessment</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Post-storm evaluation with insurance-ready documentation, photos, and detailed damage report.
              </p>
              <p className="text-zion-blue dark:text-zion-green font-bold">FREE</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-bold mb-3">Pre-Sale Inspection</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Detailed evaluation for home sellers, identifying issues before buyer inspections.
              </p>
              <p className="text-zion-blue dark:text-zion-green font-bold">FREE</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Roof Inspection Questions</h2>
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

      {/* Form */}
      <section id="inspection-form" className="section-container bg-gradient-to-br from-zion-blue to-zion-blue-light text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">Request Your Free Inspection</h2>
          <p className="text-xl text-center text-gray-200 mb-8">
            We'll inspect your roof and provide a detailed report — no obligation
          </p>
          <div className="bg-white rounded-2xl p-8">
            <LeadForm source="roof-inspection" />
          </div>
        </div>
      </section>
    </>
  );
}

