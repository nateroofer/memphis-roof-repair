import { generateMetadata } from '@/lib/seoConfig';
import { Shield, Users, Award, Clock, Heart, TrendingUp } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'About Zion Roof - Memphis Roofing Experts Since 2009',
  description:
    'Learn about Zion Roof, Memphis\' trusted roofing contractor. Family-owned, licensed & insured with 15+ years of experience. Meet our team and see why we\'re Memphis\' #1 choice.',
  path: '/about'
});

const stats = [
  { icon: Users, label: 'Happy Customers', value: '5,000+' },
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: Clock, label: 'Projects Completed', value: '10,000+' },
  { icon: TrendingUp, label: 'Customer Rating', value: '4.9/5' }
];

const team = [
  {
    name: 'John Smith',
    role: 'Owner & Lead Contractor',
    bio: 'Licensed roofing contractor with 20+ years experience. Certified storm damage specialist.',
    image: '👨‍💼'
  },
  {
    name: 'Mike Johnson',
    role: 'Project Manager',
    bio: 'Expert in commercial roofing and large-scale residential projects. 15 years experience.',
    image: '👨‍🔧'
  },
  {
    name: 'Sarah Williams',
    role: 'Customer Relations',
    bio: 'Dedicated to ensuring every customer receives exceptional service and support.',
    image: '👩‍💼'
  }
];

const certifications = [
  'Tennessee Licensed Roofing Contractor',
  'GAF Master Elite Certified',
  'CertainTeed SELECT ShingleMaster',
  'Owens Corning Preferred Contractor',
  'HAAG Certified Inspector',
  'Storm Damage Specialist Certified'
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            About Zion Roof
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Memphis' most trusted roofing contractor since 2009
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-green rounded-full mb-4">
                  <Icon className="w-8 h-8 text-zion-blue" />
                </div>
                <div className="text-4xl font-bold text-zion-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Founded in 2009, Zion Roof was born from a simple vision: to
              provide Memphis homeowners with honest, reliable, and expert
              roofing services. What started as a small family business has
              grown into one of Memphis' most trusted roofing contractors,
              serving thousands of satisfied customers across the greater
              Memphis area.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Our commitment to quality workmanship, transparent pricing, and
              exceptional customer service has earned us a reputation as
              Memphis' go-to roofing experts. We're not just contractors—we're
              your neighbors, and we treat every home as if it were our own.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a locally owned and operated business, we understand the unique
              roofing challenges that Memphis weather presents. From intense
              summer heat to severe storms, we've seen it all and we know how to
              protect your most valuable investment—your home.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-zion-green rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-zion-blue" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in honest assessments, transparent pricing, and doing
                what's right for our customers—every single time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-zion-green rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-zion-blue" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to delivering superior workmanship using the
                best materials and latest roofing techniques.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-zion-green rounded-full flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-zion-blue" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                As Memphis locals, we're invested in our community and proud to
                serve our neighbors with care and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-br from-zion-blue to-zion-blue-light p-8 text-center">
                  <div className="text-8xl">{member.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-zion-blue font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-8">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We maintain the highest industry standards and certifications
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow"
              >
                <Award className="w-6 h-6 text-zion-green flex-shrink-0" />
                <span className="font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-zion-green text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-zion-blue mb-4">
            Ready to Work With Memphis' Best?
          </h2>
          <p className="text-xl text-zion-blue-dark mb-8">
            Join thousands of satisfied customers who trust Zion Roof with their
            homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9015557663"
              className="bg-zion-blue text-white font-bold px-8 py-4 rounded-lg hover:bg-zion-blue-light transition-colors"
            >
              Call (901) 555-ROOF
            </a>
            <a
              href="/contact"
              className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


