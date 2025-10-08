// Services data - centralized for use across service pages and sitemap
// In production, this could come from a CMS or database

export const services = [
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    description:
      'Expert roof repair services for leaks, damaged shingles, flashing issues, and more. Fast response times and quality workmanship.',
    features: [
      'Leak detection and repair',
      'Shingle replacement',
      'Flashing repair',
      'Emergency repairs',
      'Minor to major repairs'
    ],
    icon: '🔧'
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    description:
      'Complete roof replacement services using premium materials from top manufacturers. Lifetime warranties available.',
    features: [
      'Full roof replacement',
      'Premium material options',
      'Warranty coverage',
      'Expert installation',
      'Clean-up included'
    ],
    icon: '🏠'
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage Repair',
    description:
      'Certified storm damage specialists. We handle insurance claims and provide emergency tarping services.',
    features: [
      'Emergency tarping',
      'Insurance claim assistance',
      'Wind damage repair',
      'Hail damage assessment',
      'Same-day service available'
    ],
    icon: '⛈️'
  },
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection',
    description:
      'Comprehensive roof inspections by licensed professionals. Detailed reports with photos and recommendations.',
    features: [
      'Free inspections',
      'Detailed photo reports',
      'Drone inspections available',
      'Pre-sale inspections',
      'Maintenance recommendations'
    ],
    icon: '🔍'
  },
  {
    slug: 'gutter-services',
    title: 'Gutter Installation & Repair',
    description:
      'Professional gutter installation, repair, and cleaning services to protect your home from water damage.',
    features: [
      'Gutter installation',
      'Gutter repair',
      'Gutter cleaning',
      'Downspout installation',
      'Gutter guard installation'
    ],
    icon: '🌊'
  },
  {
    slug: 'flat-roofing',
    title: 'Flat & Commercial Roofing',
    description:
      'Specialized flat roofing services for commercial and residential properties. TPO, EPDM, and modified bitumen.',
    features: [
      'TPO roofing',
      'EPDM installation',
      'Modified bitumen',
      'Flat roof repair',
      'Commercial roofing'
    ],
    icon: '🏢'
  },
  {
    slug: 'residential-roofing',
    title: 'Residential Roofing',
    description:
      'Comprehensive residential roofing services for Memphis homes. From repairs to complete replacements.',
    features: [
      'Asphalt shingles',
      'Architectural shingles',
      'Metal roofing',
      'Tile roofing',
      'Cedar shake'
    ],
    icon: '🏡'
  },
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing',
    description:
      'Professional commercial roofing services for businesses throughout Memphis. Minimal disruption to operations.',
    features: [
      'TPO & EPDM systems',
      'Metal roofing',
      'Built-up roofing',
      'Maintenance programs',
      'Emergency repairs'
    ],
    icon: '🏭'
  },
  {
    slug: 'emergency-roof-repair',
    title: 'Emergency Roof Repair',
    description:
      '24/7 emergency roof repair services. Fast response times when you need us most.',
    features: [
      '24/7 availability',
      'Emergency tarping',
      'Immediate leak repair',
      'Storm damage response',
      'Insurance documentation'
    ],
    icon: '🚨'
  },
  {
    slug: 'roof-types',
    title: 'Roof Types & Materials',
    description:
      'Expert installation and repair for all roof types. We help you choose the right material for your property.',
    features: [
      'Asphalt shingles',
      'Metal roofing',
      'Flat roofs (TPO/EPDM)',
      'Tile roofing',
      'Slate roofing'
    ],
    icon: '🎨'
  }
];

export type Service = typeof services[0];

