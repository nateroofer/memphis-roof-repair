import { generateMetadata } from '@/lib/seoConfig';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Roofing Blog - Tips & Advice from Memphis Experts',
  description:
    'Expert roofing tips, maintenance advice, and industry insights from Zion Roof. Learn about roof care, storm preparation, and more from Memphis\' trusted roofers.',
  path: '/blog'
});

// Sample blog posts - In production, this would come from a CMS or database
export const blogPosts = [
  {
    slug: 'signs-you-need-roof-replacement',
    title: '10 Signs You Need a Roof Replacement',
    excerpt:
      'Learn the warning signs that indicate it\'s time for a new roof. From missing shingles to water damage, we cover everything Memphis homeowners need to know.',
    author: 'John Smith',
    date: '2024-01-15',
    category: 'Maintenance',
    readTime: '5 min read',
    image: '🏠'
  },
  {
    slug: 'preparing-roof-for-memphis-storms',
    title: 'Preparing Your Roof for Memphis Storm Season',
    excerpt:
      'Memphis weather can be unpredictable. Discover how to protect your roof from severe storms, high winds, and hail damage with these expert tips.',
    author: 'John Smith',
    date: '2024-01-10',
    category: 'Storm Damage',
    readTime: '7 min read',
    image: '⛈️'
  },
  {
    slug: 'roof-maintenance-checklist',
    title: 'Annual Roof Maintenance Checklist',
    excerpt:
      'Keep your roof in top condition with our comprehensive maintenance checklist. Learn what to inspect and when to call a professional.',
    author: 'Mike Johnson',
    date: '2024-01-05',
    category: 'Maintenance',
    readTime: '6 min read',
    image: '✅'
  },
  {
    slug: 'choosing-right-roofing-material',
    title: 'Choosing the Right Roofing Material for Memphis Homes',
    excerpt:
      'Compare different roofing materials and find the best option for Memphis\' climate. We cover asphalt shingles, metal roofing, and more.',
    author: 'Sarah Williams',
    date: '2023-12-28',
    category: 'Installation',
    readTime: '8 min read',
    image: '🔨'
  },
  {
    slug: 'insurance-claims-roof-damage',
    title: 'Navigating Insurance Claims for Roof Damage',
    excerpt:
      'Step-by-step guide to filing an insurance claim for roof damage. Learn what documentation you need and how to work with adjusters.',
    author: 'John Smith',
    date: '2023-12-20',
    category: 'Insurance',
    readTime: '10 min read',
    image: '📋'
  },
  {
    slug: 'energy-efficient-roofing',
    title: 'How Energy-Efficient Roofing Can Lower Your Bills',
    excerpt:
      'Discover how modern roofing materials and techniques can reduce your energy costs. Learn about cool roofs, proper ventilation, and more.',
    author: 'Mike Johnson',
    date: '2023-12-15',
    category: 'Energy Efficiency',
    readTime: '6 min read',
    image: '💡'
  }
];

const categories = [
  'All Posts',
  'Maintenance',
  'Storm Damage',
  'Installation',
  'Insurance',
  'Energy Efficiency'
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Roofing Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Expert tips, advice, and insights from Memphis' trusted roofing
            professionals
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white dark:bg-gray-700 rounded-full hover:bg-zion-green hover:text-zion-blue font-semibold transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-zion-blue to-zion-blue-light p-12 text-center">
                <div className="text-7xl">{post.image}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="bg-zion-green text-zion-blue px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-zion-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-zion-blue font-bold group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-container bg-gradient-to-br from-zion-blue to-zion-blue-light text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Subscribe to our newsletter for roofing tips, seasonal advice, and
            special offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-zion-green"
            />
            <button
              type="submit"
              className="bg-zion-green text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-zion-green-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}


