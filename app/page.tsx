import { generateMetadata } from '@/lib/seoConfig';
import LeadForm from '@/components/LeadForm';
import RoofCostCalculator from '@/components/RoofCostCalculator';
import { Shield, Award, MapPin, Phone, Star, Clock } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Memphis Premier Roofing Contractor',
  description:
    'Licensed & insured Memphis roofing contractor. Free roof inspections, storm damage repair, roof replacement & more. Call (901) 555-ROOF for a free estimate today!'
});

const benefits = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'Fully licensed, bonded, and insured for your protection and peace of mind.'
  },
  {
    icon: MapPin,
    title: 'Memphis Local',
    description:
      'Proudly serving Memphis and surrounding areas for over 15 years.'
  },
  {
    icon: Award,
    title: 'Storm Damage Experts',
    description:
      'Certified storm damage specialists. We work with all insurance companies.'
  },
  {
    icon: Star,
    title: 'Free Estimates',
    description:
      'No-obligation free roof inspections and estimates for all services.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Germantown, TN',
    rating: 5,
    text: 'Zion Roof replaced our entire roof after storm damage. They were professional, fast, and worked directly with our insurance. Highly recommend!'
  },
  {
    name: 'Michael Davis',
    location: 'Collierville, TN',
    rating: 5,
    text: 'Best roofing company in Memphis! They repaired our leak quickly and at a fair price. The crew was respectful and cleaned up perfectly.'
  },
  {
    name: 'Jennifer Williams',
    location: 'East Memphis',
    rating: 5,
    text: 'Outstanding service from start to finish. Free inspection, detailed estimate, and beautiful new roof. Worth every penny!'
  }
];

const services = [
  {
    name: 'Roof Repair',
    description: 'Expert repairs for leaks, damaged shingles, and more',
    image: '🔧'
  },
  {
    name: 'Roof Replacement',
    description: 'Complete roof replacement with premium materials',
    image: '🏠'
  },
  {
    name: 'Storm Damage',
    description: 'Emergency storm damage repair and insurance claims',
    image: '⛈️'
  },
  {
    name: 'Inspections',
    description: 'Free comprehensive roof inspections',
    image: '🔍'
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue via-zion-blue-light to-zion-blue-dark text-white">
        <div className="absolute inset-0 bg-[url('/roof-texture.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Memphis' Trusted{' '}
              <span className="text-zion-green">Roofing Experts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Licensed, insured, and locally owned. Free roof inspections & same-day estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:9015557663"
                className="cta-button inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (901) 555-ROOF
              </a>
              <a
                href="#contact-form"
                className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Get Free Estimate
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-zion-green" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-zion-green" />
                <span>4.9/5 Rating (247 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Why Choose Zion Roof?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Memphis' most trusted roofing contractor since 2009
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-zion-green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-zion-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-zion-blue dark:group-hover:text-zion-green transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Our Roofing Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Comprehensive roofing solutions for Memphis homes and businesses
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.image}</div>
              <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-zion-green transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-zion-blue text-white font-bold px-8 py-4 rounded-lg hover:bg-zion-blue-light transition-colors duration-200"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Trusted by hundreds of Memphis homeowners
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-zion-green"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-zion-green text-zion-green"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic text-lg">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-zion-blue dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Proudly Serving Memphis & Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Germantown • Collierville • Bartlett • Cordova • East Memphis
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="section-container bg-gradient-to-br from-zion-blue to-zion-blue-light text-white"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Get Your Free Roof Inspection
            </h2>
            <p className="text-xl text-gray-200">
              Fill out the form below and we'll contact you within 24 hours
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
            <LeadForm source="homepage" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container text-center bg-zion-green">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zion-blue mb-6">
            Ready to Fix Your Roof?
          </h2>
          <p className="text-xl text-zion-blue-dark mb-8">
            Call now for same-day service and free estimates!
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
