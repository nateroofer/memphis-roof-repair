'use client';

import { useState, FormEvent } from 'react';
import { toast } from '@/components/ui/Toasts/use-toast';
import { trackFormSubmission, trackQuoteRequest } from '@/utils/analytics';

interface LeadFormProps {
  source?: string;
  className?: string;
  variant?: 'inline' | 'modal' | 'full';
}

export default function LeadForm({
  source = 'website',
  className = '',
  variant = 'inline'
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Roof Repair',
    'Roof Replacement',
    'Storm Damage',
    'Roof Inspection',
    'Gutter Services',
    'Flat Roofing',
    'Other'
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Post to API route (which handles Supabase + email/Slack notifications)
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          source
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to submit form');
      }

      const result = await response.json();

      toast({
        title: 'Thank you!',
        description:
          "We've received your request and will contact you shortly.",
        variant: 'default'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'There was a problem submitting your request. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-zion-green focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100';
  const labelClasses = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2';

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="John Doe"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="(901) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us about your roofing needs..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full cta-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
      </button>

      <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
        By submitting this form, you agree to be contacted by Zion Roof
        regarding your roofing needs.
      </p>
    </form>
  );
}


