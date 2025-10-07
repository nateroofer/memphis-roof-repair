'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link href="/" className="flex items-center gap-2" aria-label="Zion Roof">
          <div className="w-10 h-10 bg-zion-green rounded-full flex items-center justify-center font-heading font-bold text-zion-blue text-xl">
            Z
          </div>
          <span className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
            Zion Roof
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-8 space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-zion-blue dark:hover:text-zion-green font-semibold transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="tel:9015557663"
          className="flex items-center gap-2 text-zion-blue dark:text-zion-green font-bold hover:underline"
        >
          <Phone className="w-4 h-4" />
          (901) 555-ROOF
        </a>
        {user && (
          <>
            <Link
              href="/account"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-zion-blue dark:hover:text-zion-green font-semibold"
            >
              Account
            </Link>
            <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
              <input type="hidden" name="pathName" value={usePathname()} />
              <button
                type="submit"
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-zion-blue dark:hover:text-zion-green font-semibold"
              >
                Sign out
              </button>
            </form>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden z-50">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-zion-blue dark:hover:text-zion-green font-semibold border-b border-gray-200 dark:border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9015557663"
              className="flex items-center gap-2 px-4 py-3 text-zion-blue dark:text-zion-green font-bold border-b border-gray-200 dark:border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              (901) 555-ROOF
            </a>
            {user && (
              <>
                <Link
                  href="/account"
                  className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-zion-blue dark:hover:text-zion-green font-semibold border-b border-gray-200 dark:border-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Account
                </Link>
                <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
                  <input type="hidden" name="pathName" value={usePathname()} />
                  <button
                    type="submit"
                    className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-zion-blue dark:hover:text-zion-green font-semibold"
                  >
                    Sign out
                  </button>
                </form>
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
