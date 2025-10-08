import { generateMetadata } from '@/lib/seoConfig';
import LeadForm from '@/components/LeadForm';
import RoofCostCalculator from '@/components/RoofCostCalculator';
import { CheckCircle, Phone, Shield, Clock, Star, Award } from 'lucide-react';
import ClientCTA from '@/components/ClientCTA';

export const metadata = generateMetadata({
  title: 'Memphis Roof Repair Experts | Zion Roof',
  description:
    'Professional roofing services in Memphis, TN. Roof repair, replacement, storm damage, and emergency services. Licensed, insured, and locally trusted. Free estimates.',
  keywords: [
    'memphis roof repair',
    'roofing contractor memphis',
    'roof replacement memphis',
    'storm damage repair',
    'emergency roof repair',
    'roofing company memphis tn'
  ],
  path: '/'
});

const benefits = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully certified professionals with comprehensive insurance coverage'
  },
  {
    icon: Clock,
    title: 'Lightning Fast',
    description: 'Emergency response in under 2 hours, 24/7 availability'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Cutting-edge materials and precision craftsmanship'
  },
  {
    icon: Star,
    title: 'Smart Pricing',
    description: 'AI-powered estimates with transparent, competitive rates'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Germantown, TN',
    text: 'Zion Roof exceeded our expectations. Their team was professional, efficient, and the quality of work was outstanding.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    location: 'Collierville, TN',
    text: 'After storm damage, Zion Roof handled everything including insurance. Made the whole process stress-free.',
    rating: 5
  },
  {
    name: 'Lisa Rodriguez',
    location: 'Bartlett, TN',
    text: 'Fair pricing, excellent communication, and beautiful work. Highly recommend Zion Roof to anyone.',
    rating: 5
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-blue-light to-zion-blue"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 floating-elements"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-slide-left">
              <div className="space-y-6">
                <div className="inline-block glass px-6 py-3 rounded-full border border-zion-green/30">
                  <span className="text-zion-green font-semibold text-sm uppercase tracking-wider">
                    Memphis's Premier Roofing Experts
                  </span>
                </div>
                <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="gradient-text">Zion</span>
                  <span className="block text-white">Roof</span>
                  <span className="block text-zion-green text-glow">Repair</span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Experience the future of roofing with cutting-edge technology, 
                premium materials, and expert craftsmanship that protects your Memphis home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <ClientCTA 
                  href="tel:+19013049466" 
                  className="cta-button group"
                  trackingData={{
                    action: 'phone_click',
                    label: '(901) 304-9466',
                    location: 'hero_section'
                  }}
                >
                  <span className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    (901) 304-9466
                  </span>
                </ClientCTA>
                <ClientCTA 
                  href="#contact" 
                  className="glass px-8 py-4 rounded-xl border border-zion-green/30 text-white font-semibold hover:border-zion-green/60 transition-all duration-300 group"
                  trackingData={{
                    action: 'cta_click',
                    label: 'Get Free Quote',
                    location: 'hero_section'
                  }}
                >
                  <span className="flex items-center gap-3">
                    Get Free Quote
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </ClientCTA>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-green">20+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-green">1000+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-green">24/7</div>
                  <div className="text-sm text-gray-300">Emergency Service</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-right">
              <div className="futuristic-card hover-lift">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-zion-green to-zion-blue-light rounded-2xl flex items-center justify-center animate-float">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Smart Roof Calculator</h3>
                  <p className="text-gray-300">Get an instant estimate for your roofing project</p>
                  <RoofCostCalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zion-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zion-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container relative">
        <div className="text-center mb-16">
          <div className="inline-block glass px-6 py-3 rounded-full border border-zion-green/30 mb-6">
            <span className="text-zion-green font-semibold text-sm uppercase tracking-wider">
              Why Choose Zion Roof
            </span>
          </div>
          <h2 className="section-heading text-white">Advanced Roofing Solutions</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="futuristic-card text-center hover-lift group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-zion-green to-zion-blue-light rounded-2xl flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-zion-green to-zion-blue-light rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-container bg-gradient-to-br from-zion-blue-light to-zion-blue">
        <div className="text-center mb-16">
          <div className="inline-block glass px-6 py-3 rounded-full border border-zion-green/30 mb-6">
            <span className="text-zion-green font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="section-heading text-white">Complete Roofing Solutions</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="futuristic-card hover-lift">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="font-heading text-xl font-bold mb-3 text-white">Roof Repair</h3>
            <p className="text-gray-300 mb-4">Expert repairs for leaks, damaged shingles, and structural issues.</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Leak detection & repair
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Shingle replacement
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Emergency repairs
              </li>
            </ul>
          </div>
          
          <div className="futuristic-card hover-lift">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="font-heading text-xl font-bold mb-3 text-white">Roof Replacement</h3>
            <p className="text-gray-300 mb-4">Complete roof replacement with premium materials and expert installation.</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Full roof replacement
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Premium materials
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Lifetime warranties
              </li>
            </ul>
          </div>
          
          <div className="futuristic-card hover-lift">
            <div className="text-4xl mb-4">⛈️</div>
            <h3 className="font-heading text-xl font-bold mb-3 text-white">Storm Damage</h3>
            <p className="text-gray-300 mb-4">Certified storm damage specialists with insurance claim assistance.</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Emergency tarping
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Insurance assistance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-green" />
                Same-day service
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <ClientCTA 
            href="/services" 
            className="cta-button"
            trackingData={{
              action: 'cta_click',
              label: 'View All Services',
              location: 'services_preview'
            }}
          >
            View All Services
          </ClientCTA>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block glass px-6 py-3 rounded-full border border-zion-green/30 mb-6">
            <span className="text-zion-green font-semibold text-sm uppercase tracking-wider">
              Customer Reviews
            </span>
          </div>
          <h2 className="section-heading text-white">What Our Customers Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="futuristic-card hover-lift">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-green fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-green to-zion-blue-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-gradient-to-br from-zion-blue to-zion-blue-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block glass px-6 py-3 rounded-full border border-zion-green/30 mb-6">
              <span className="text-zion-green font-semibold text-sm uppercase tracking-wider">
                Get Your Free Estimate
              </span>
            </div>
            <h2 className="section-heading text-white">Ready to Protect Your Home?</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation estimate. Our experts will assess your roof and provide you with a detailed quote.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="futuristic-card">
                <h3 className="font-heading text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-green to-zion-blue-light rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-300">(901) 304-9466</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-green to-zion-blue-light rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">info@memphisroof.repair</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-green to-zion-blue-light rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Service Area</div>
                      <div className="text-gray-300">Memphis & Surrounding Areas</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="futuristic-card">
                <h3 className="font-heading text-2xl font-bold mb-6 text-white">Service Hours</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Service</span>
                    <span className="text-zion-green">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <LeadForm source="homepage" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading text-white">Serving Memphis & Surrounding Areas</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We proudly serve Memphis and all surrounding communities with professional roofing services.
          </p>
        </div>
        
        <div className="futuristic-card p-0 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5!2d-90.0489!3d35.1495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e0d1c0c8b8b%3A0x8b0c8b8b8b8b8b8b!2sMemphis%2C%20TN!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96"
          ></iframe>
        </div>
      </section>
    </>
  );
}