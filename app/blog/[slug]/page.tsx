import { generateMetadata as generateSEOMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seoConfig';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {};
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article'
  });
}

// Sample detailed content - In production, this would come from CMS
const getPostContent = (slug: string) => {
  const contents: { [key: string]: any } = {
    'signs-you-need-roof-replacement': {
      content: [
        {
          type: 'paragraph',
          text: 'Your roof is one of the most important components of your home, protecting you and your family from the elements. However, even the best roofs have a limited lifespan. Knowing when it\'s time for a replacement can save you from costly water damage and structural issues.'
        },
        {
          type: 'heading',
          text: '1. Age of Your Roof'
        },
        {
          type: 'paragraph',
          text: 'Most asphalt shingle roofs last 20-25 years. If your roof is approaching or has exceeded this age, it\'s time to consider a replacement, even if it looks fine from the ground.'
        },
        {
          type: 'heading',
          text: '2. Missing or Damaged Shingles'
        },
        {
          type: 'paragraph',
          text: 'Shingles that are cracked, curled, or missing entirely are clear signs of roof deterioration. This is especially common after severe Memphis storms.'
        },
        {
          type: 'heading',
          text: '3. Granules in Gutters'
        },
        {
          type: 'paragraph',
          text: 'Asphalt shingles lose granules as they age. If you notice excessive granules in your gutters or downspouts, your shingles are wearing out.'
        },
        {
          type: 'heading',
          text: '4. Sagging Roof Deck'
        },
        {
          type: 'paragraph',
          text: 'A sagging roofline indicates serious structural issues, possibly from water damage or inadequate support. This requires immediate professional attention.'
        },
        {
          type: 'heading',
          text: 'Contact Zion Roof Today'
        },
        {
          type: 'paragraph',
          text: 'If you\'ve noticed any of these signs, don\'t wait. Contact Zion Roof for a free inspection and estimate. Our experienced team can assess your roof\'s condition and recommend the best course of action.'
        }
      ]
    }
  };

  return contents[slug] || {
    content: [
      {
        type: 'paragraph',
        text: 'This is a sample blog post. In a production environment, this content would be dynamically loaded from a CMS or database.'
      }
    ]
  };
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postContent = getPostContent(params.slug);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: '/blog-default.jpg',
    datePublished: post.date,
    author: post.author
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Back to Blog Link */}
      <section className="bg-gray-50 dark:bg-gray-800 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zion-blue hover:text-zion-blue-light font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className="section-container max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="bg-zion-green text-zion-blue px-4 py-2 rounded-full font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {postContent.content.map((block: any, index: number) => {
            if (block.type === 'heading') {
              return (
                <h2 key={index} className="font-heading text-3xl font-bold mt-12 mb-6">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                  {block.text}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-br from-zion-blue to-zion-blue-light text-white p-8 rounded-xl">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Need Professional Roofing Services?
          </h3>
          <p className="text-lg text-gray-200 mb-6">
            Contact Zion Roof today for a free inspection and estimate. Our
            expert team is ready to help with all your roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:9015557663"
              className="bg-zion-green text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-zion-green-light transition-colors text-center"
            >
              Call (901) 555-ROOF
            </a>
            <a
              href="/contact"
              className="bg-white text-zion-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Request Estimate
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all p-4"
                >
                  <div className="text-4xl mb-3">{relatedPost.image}</div>
                  <h3 className="font-heading font-bold mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {relatedPost.category}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}


