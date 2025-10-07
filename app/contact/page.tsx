import { generateMetadata } from '@/lib/seoConfig';
import { SITE_CONFIG } from '@/lib/seoConfig';
import LeadForm from '@/components/LeadForm';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Contact Zion Roof - Memphis Roofing Contractor',
  description:
    'Contact Zion Roof for all your roofing needs in Memphis, TN. Call (901) 555-ROOF or request a free estimate online. 24/7 emergency service available.',
  path: '/contact'
});

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    details: SITE_CONFIG.phone,
    action: 'tel:9015557663',
    description: '24/7 Emergency Service Available'
  },
  {
    icon: MessageSquare,
    title: 'Text Us',
    details: '(901) 555-7663',
    action: 'sms:9015557663',
    description: 'Quick response via text'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: SITE_CONFIG.email,
    action: `mailto:${SITE_CONFIG.email}`,
    description: 'We respond within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}`,
    action: 'https://maps.google.com/?q=Memphis+TN',
    description: 'By appointment only'
  }
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Contact Zion Roof
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Get in touch today for a free roof inspection and estimate
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.action}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <div className="w-14 h-14 bg-zion-green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-zion-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  {method.title}
                </h3>
                <p className="text-zion-blue font-semibold mb-2">
                  {method.details}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {method.description}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Form and Info Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Request a Free Estimate
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
              For urgent matters, please call us directly.
            </p>
            <LeadForm source="contact-page" />
          </div>

          {/* Business Hours and Info */}
          <div>
            <div className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white p-8 rounded-xl mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8" />
                <h3 className="font-heading text-2xl font-bold">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>{SITE_CONFIG.businessHours.monday}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-semibold">Saturday</span>
                  <span>{SITE_CONFIG.businessHours.saturday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sunday</span>
                  <span>{SITE_CONFIG.businessHours.sunday}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="font-semibold">24/7 Emergency Service Available</p>
                <p className="text-sm text-gray-200 mt-1">
                  We're here when you need us most
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="font-heading text-2xl font-bold mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-zion-green text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Fast Response</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We respond to all inquiries within 24 hours
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-green text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Free Inspection</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Comprehensive roof assessment at no cost
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-green text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Detailed Estimate</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Transparent pricing with no hidden fees
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-green text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Expert Advice</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Professional recommendations for your situation
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Serving Memphis & Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Proudly serving homeowners throughout the greater Memphis area
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209006.8018813567!2d-90.17939795!3d35.1495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e1eea439745%3A0xd193f315601ab6fb!2sMemphis%2C%20TN!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zion Roof Service Area - Memphis, TN"
            />
          </div>
          <div className="mt-8 text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Service Areas Include:
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Downtown Memphis • Midtown • East Memphis • Germantown •
              Collierville • Bartlett • Cordova • Millington • Lakeland •
              Arlington • And More!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-bold mb-3">
                Do you offer free estimates?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! We provide free, no-obligation roof inspections and
                estimates for all our services. Simply call us or fill out the
                contact form above.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-bold mb-3">
                How quickly can you respond to emergencies?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer 24/7 emergency service and can typically respond within
                2-4 hours for urgent situations like severe leaks or storm
                damage.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-bold mb-3">
                Do you work with insurance companies?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! We work with all major insurance companies and can
                help you navigate the claims process for storm damage and other
                covered repairs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-bold mb-3">
                What areas do you serve?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We serve Memphis and all surrounding areas including Germantown,
                Collierville, Bartlett, Cordova, and more. Call us to confirm
                service availability in your area.
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
            Contact us today and experience the Zion Roof difference!
          </p>
          <a
            href="tel:9015557663"
            className="inline-flex items-center gap-2 bg-zion-blue text-white font-bold px-12 py-6 rounded-lg hover:bg-zion-blue-light transition-all duration-200 shadow-lg text-2xl"
          >
            <Phone className="w-6 h-6" />
            (901) 555-ROOF
          </a>
        </div>
      </section>
    </>
  );
}


