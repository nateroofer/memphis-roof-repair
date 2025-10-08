import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/seoConfig';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zion-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-zion-green rounded-full flex items-center justify-center font-heading font-bold text-zion-blue text-xl">
                Z
              </div>
              <span className="font-heading text-2xl font-bold">Zion Roof</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Memphis' trusted roofing contractor since 2009. Licensed, insured,
              and locally owned.
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.facebook}
                aria-label="Facebook"
                className="hover:text-zion-green transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                aria-label="Twitter"
                className="hover:text-zion-green transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                aria-label="Instagram"
                className="hover:text-zion-green transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                aria-label="LinkedIn"
                className="hover:text-zion-green transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/roof-repair"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Roof Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/roof-replacement"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Roof Replacement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/storm-damage"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Storm Damage
                </Link>
              </li>
              <li>
                <Link
                  href="/services/roof-inspection"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Roof Inspection
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gutter-services"
                  className="text-gray-300 hover:text-zion-green transition-colors"
                >
                  Gutter Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:9015557663"
                  className="flex items-center gap-2 text-gray-300 hover:text-zion-green transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-zion-green transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{' '}
                    {SITE_CONFIG.address.zip}
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-block bg-zion-green text-zion-blue font-bold px-6 py-3 rounded-lg hover:bg-zion-green-light transition-colors"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-blue-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-300 text-sm">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-zion-green transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-zion-green transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
