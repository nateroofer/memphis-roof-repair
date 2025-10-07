// Hero section component with animated CTA and Memphis-local messaging
// Optimized for conversion and LLM-first content strategy

'use client';

import { Phone, Star, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seoConfig';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showBadges?: boolean;
  className?: string;
}

export default function Hero({
  title = "Memphis' Trusted Roofing Experts",
  subtitle = 'Licensed, insured, and locally owned. Free roof inspections & same-day estimates.',
  showBadges = true,
  className = ''
}: HeroProps) {
  return (
    <section
      className={`relative bg-gradient-to-br from-zion-blue via-zion-blue-light to-zion-blue-dark text-white overflow-hidden ${className}`}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {title.split(' ').map((word, index) =>
              word.toLowerCase() === 'trusted' ||
              word.toLowerCase() === 'roofing' ||
              word.toLowerCase() === 'experts' ? (
                <span key={index} className="text-zion-green">
                  {word}{' '}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
              className="cta-button inline-flex items-center gap-2"
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
            <a
              href="#contact-form"
              className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Trust Badges */}
          {showBadges && (
            <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-zion-green" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-zion-green" />
                <span>4.9/5 Rating (247 Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-zion-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-label="License badge"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Licensed & Insured</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="fill-current text-white dark:text-gray-900"
          viewBox="0 0 1440 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 48h1440V0c-220 48-440 48-660 0S340 0 120 0 0 48 0 48z" />
        </svg>
      </div>
    </section>
  );
}

