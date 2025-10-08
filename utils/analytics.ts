// Google Analytics utility functions
// Use these functions to track custom events throughout the application

import { trackEvent, trackPageView } from '@/components/GoogleAnalytics';

// Track form submissions
export const trackFormSubmission = (formType: string, source?: string) => {
  trackEvent('form_submit', 'engagement', `${formType}_${source || 'unknown'}`, 1);
};

// Track phone number clicks
export const trackPhoneClick = (location: string) => {
  trackEvent('phone_click', 'contact', location, 1);
};

// Track CTA button clicks
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${ctaText}_${location}`, 1);
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'content', serviceName, 1);
};

// Track blog post views
export const trackBlogView = (postTitle: string) => {
  trackEvent('blog_view', 'content', postTitle, 1);
};

// Track location page views
export const trackLocationView = (locationName: string) => {
  trackEvent('location_view', 'content', locationName, 1);
};

// Track calculator usage
export const trackCalculatorUsage = (estimatedCost: number) => {
  trackEvent('calculator_used', 'engagement', 'roof_cost_calculator', estimatedCost);
};

// Track emergency contact attempts
export const trackEmergencyContact = (method: string) => {
  trackEvent('emergency_contact', 'contact', method, 1);
};

// Track quote requests
export const trackQuoteRequest = (source: string, serviceType?: string) => {
  trackEvent('quote_request', 'conversion', `${source}_${serviceType || 'general'}`, 1);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', 'outbound', `${linkText}_${url}`, 1);
};

// Track file downloads
export const trackFileDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', 'engagement', `${fileName}_${fileType}`, 1);
};

// Track video plays
export const trackVideoPlay = (videoTitle: string, videoSource: string) => {
  trackEvent('video_play', 'engagement', `${videoTitle}_${videoSource}`, 1);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', 'engagement', `${depth}%`, depth);
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number, pagePath: string) => {
  trackEvent('time_on_page', 'engagement', pagePath, timeInSeconds);
};

// Track search queries
export const trackSearch = (query: string, resultsCount?: number) => {
  trackEvent('search', 'engagement', query, resultsCount || 0);
};

// Track error events
export const trackError = (errorType: string, errorMessage: string, pagePath: string) => {
  trackEvent('error', 'technical', `${errorType}_${pagePath}`, 1);
};

// Track custom conversions
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', 'conversion', conversionType, value || 1);
};

// Export page view tracking for use in components
export { trackPageView };
