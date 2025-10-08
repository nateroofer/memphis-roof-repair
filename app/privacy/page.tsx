import { generateMetadata } from '@/lib/seoConfig';

export const metadata = generateMetadata({
  title: 'Privacy Policy - Zion Roof',
  description: 'Privacy Policy for Zion Roof roofing services in Memphis, TN. Learn how we protect your personal information.',
  path: '/privacy'
});

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            How we protect and use your personal information
          </p>
        </div>
      </section>

      {/* Privacy Content */}
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

            <h2 className="font-heading text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Request a free estimate or consultation</li>
              <li>Contact us through our website or phone</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Schedule roofing services</li>
              <li>Complete customer surveys or reviews</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This information may include your name, email address, phone number, address, property details, and service preferences.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Provide roofing services and estimates</li>
              <li>Schedule appointments and consultations</li>
              <li>Communicate about your projects</li>
              <li>Process payments and invoices</li>
              <li>Send important service updates</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>With your explicit consent</li>
              <li>With service providers who assist us in operating our business</li>
              <li>With insurance companies for claims processing</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and restricted access to personal data.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our website may use cookies and similar tracking technologies to improve your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We may use third-party services such as Google Analytics, email marketing platforms, and payment processors. These services have their own privacy policies, and we encourage you to review them.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4">8. Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We retain your personal information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. Customer records are typically retained for 7 years after project completion.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4">11. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Zion Roof</strong><br />
                Phone: (901) 304-9466<br />
                Email: info@memphisroof.repair<br />
                Website: memphisroof.repair
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold mb-4">12. California Privacy Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              California residents have additional privacy rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This Privacy Policy is governed by applicable federal and state privacy laws.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
