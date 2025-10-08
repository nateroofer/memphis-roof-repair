import { generateMetadata } from '@/lib/seoConfig';

export const metadata = generateMetadata({
  title: 'Terms of Service - Zion Roof',
  description: 'Terms of Service for Zion Roof roofing services in Memphis, TN. Read our terms and conditions for professional roofing work.',
  path: '/terms'
});

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Terms and conditions for Zion Roof roofing services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              By accessing and using Zion Roof's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">2. Services Provided</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zion Roof provides professional roofing services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Roof repair and replacement</li>
              <li>Storm damage assessment and repair</li>
              <li>Roof inspections</li>
              <li>Gutter installation and repair</li>
              <li>Commercial and residential roofing</li>
              <li>Emergency roofing services</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4">3. Service Area</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zion Roof provides services primarily in the Memphis metropolitan area, including but not limited to Memphis, Germantown, Collierville, Bartlett, Cordova, and surrounding areas in Tennessee and Mississippi.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">4. Estimates and Pricing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              All estimates are provided in good faith based on visual inspection and standard industry practices. Final pricing may vary based on actual conditions discovered during work. We provide detailed, written estimates before beginning any work.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Payment terms will be specified in individual contracts. We accept various payment methods and may offer financing options. Payment is due according to the agreed-upon schedule in your contract.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">6. Warranties</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zion Roof provides workmanship warranties as specified in individual contracts. Material warranties are provided by manufacturers and are separate from our workmanship warranty. Warranty terms vary by project and materials used.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">7. Insurance and Licensing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zion Roof is fully licensed and insured in Tennessee. We carry general liability insurance and workers' compensation insurance as required by law. Certificate of insurance available upon request.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zion Roof's liability is limited to the cost of the services provided. We are not responsible for consequential, incidental, or indirect damages. This limitation applies to the fullest extent permitted by law.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">9. Weather and Delays</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Roofing work is weather-dependent. Delays due to weather conditions are not considered breaches of contract. We will work with you to reschedule work as weather permits.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">10. Permits and Codes</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zion Roof will obtain necessary permits and ensure all work meets local building codes and regulations. Homeowners are responsible for any additional requirements from HOA or architectural review boards.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">11. Dispute Resolution</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Any disputes arising from our services will be resolved through good faith negotiation. If necessary, disputes will be resolved through binding arbitration in Shelby County, Tennessee.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zion Roof reserves the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Zion Roof</strong><br />
                Phone: (901) 304-9466<br />
                Email: info@memphisroof.repair<br />
                Website: memphisroof.repair
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This Terms of Service agreement is governed by the laws of Tennessee.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
