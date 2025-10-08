// Blog posts data - centralized for use across blog pages and sitemap
// In production, this would come from a CMS or database

export const blogPosts = [
  {
    slug: 'signs-you-need-roof-replacement',
    title: '10 Signs You Need a Roof Replacement',
    excerpt:
      'Learn the warning signs that indicate it\'s time for a new roof. From missing shingles to water damage, we cover everything Memphis homeowners need to know.',
    date: '2024-03-15',
    author: 'Zion Roof Team',
    category: 'Maintenance',
    image: '/images/blog/roof-replacement-signs.jpg'
  },
  {
    slug: 'storm-damage-insurance-claims',
    title: 'How to File a Storm Damage Insurance Claim',
    excerpt:
      'Step-by-step guide to documenting storm damage and working with your insurance company to get your roof repairs covered.',
    date: '2024-03-10',
    author: 'Zion Roof Team',
    category: 'Insurance',
    image: '/images/blog/storm-damage-claim.jpg'
  },
  {
    slug: 'memphis-roofing-materials-guide',
    title: 'Best Roofing Materials for Memphis Climate',
    excerpt:
      'Discover which roofing materials hold up best in Memphis\' hot summers, humid conditions, and occasional severe weather.',
    date: '2024-03-05',
    author: 'Zion Roof Team',
    category: 'Materials',
    image: '/images/blog/roofing-materials.jpg'
  },
  {
    slug: 'roof-maintenance-checklist',
    title: 'Seasonal Roof Maintenance Checklist',
    excerpt:
      'Keep your roof in top condition year-round with our comprehensive seasonal maintenance checklist for Memphis homeowners.',
    date: '2024-02-28',
    author: 'Zion Roof Team',
    category: 'Maintenance',
    image: '/images/blog/maintenance-checklist.jpg'
  },
  {
    slug: 'emergency-roof-repair-guide',
    title: 'Emergency Roof Repair: What to Do When Disaster Strikes',
    excerpt:
      'Quick action steps to take when your roof is damaged by storms, fallen trees, or other emergencies.',
    date: '2024-02-20',
    author: 'Zion Roof Team',
    category: 'Emergency',
    image: '/images/blog/emergency-repair.jpg'
  },
  {
    slug: 'roof-ventilation-importance',
    title: 'Why Proper Roof Ventilation Matters in Memphis',
    excerpt:
      'Understanding attic ventilation and how it protects your roof, reduces energy costs, and prevents moisture damage.',
    date: '2024-02-15',
    author: 'Zion Roof Team',
    category: 'Energy Efficiency',
    image: '/images/blog/roof-ventilation.jpg'
  }
];

export type BlogPost = typeof blogPosts[0];

