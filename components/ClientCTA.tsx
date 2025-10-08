'use client';

import { trackCTAClick, trackPhoneClick } from '@/utils/analytics';

interface ClientCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  trackingData?: {
    action: 'cta_click' | 'phone_click';
    label: string;
    location: string;
  };
}

export default function ClientCTA({ 
  href, 
  children, 
  className, 
  onClick,
  trackingData 
}: ClientCTAProps) {
  const handleClick = () => {
    if (trackingData) {
      if (trackingData.action === 'cta_click') {
        trackCTAClick(trackingData.label, trackingData.location);
      } else if (trackingData.action === 'phone_click') {
        trackPhoneClick(trackingData.location);
      }
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
