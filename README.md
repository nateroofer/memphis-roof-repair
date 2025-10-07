# Zion Roof - AI-Powered Memphis Roofing Platform

An LLM-optimized, AI-powered roofing website for Zion Roof, Memphis' premier roofing contractor. Built with Next.js 14, OpenAI embeddings, Supabase vector search, and comprehensive SEO automation for maximum lead generation and AI search visibility.

## 🚀 Features

### Core Platform
- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **AI-Powered SEO**: OpenAI GPT-4 integration for automated content generation
- **Semantic Search**: Supabase vector embeddings for intelligent content matching
- **Lead Generation**: Integrated contact forms with Slack/email notifications
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **Location Landing Pages**: Dynamic routes for Memphis neighborhoods

### AI & SEO Automation
- **GPT-4 Content Generation**: Auto-generate SEO-optimized blog posts
- **Vector Embeddings**: OpenAI text-embedding-3-large (1536 dimensions)
- **Semantic Blog Search**: Find related content using AI similarity matching
- **Keyword Clustering**: AI-generated keyword sets for each service area
- **Meta Tag Generation**: Automated title and description optimization
- **FAQ Generation**: AI-powered FAQ creation for service pages

### LLM-First Optimization
- **Answer-First Content**: 40-60 word direct answers at top of each page
- **Entity-Rich Markup**: Location-specific, brand-aware content structure
- **Comprehensive Schema**: LocalBusiness, Service, FAQ, Review, Article schemas
- **Voice Search Ready**: Optimized for conversational AI queries
- **Structured Data**: JSON-LD injection for AI search engines

## 🎨 Brand

- **Primary Color (Zion Blue)**: #080357
- **Accent Color (Zion Green)**: #DCF702
- **Fonts**: Poppins (headings) + Inter (body)

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account
- Vercel account (for deployment)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/nateroofer/memphis-roof-repair.git
cd memphis-roof-repair
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: For future features
OPENAI_API_KEY=your_openai_api_key
```

### 4. Set Up Supabase Database with Vector Embeddings

**Enable the pgvector extension first:**

```sql
-- Enable vector extension for AI embeddings
CREATE EXTENSION IF NOT EXISTS vector;
```

**Then run the complete schema:**

Copy and paste the entire contents of `sql/supabase-schema.sql` into your Supabase SQL Editor, or run:

```bash
# If using Supabase CLI
pnpm supabase db push
```

This creates:
- `leads` table for contact form submissions
- `blog_posts` table with vector embeddings (1536 dimensions)
- `match_blog_posts` RPC function for semantic search
- `blog_analytics` table for tracking (optional)
- All necessary indexes and Row Level Security policies

### 5. Set Up OpenAI API Key

Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys) and add it to `.env.local`:

```env
OPENAI_API_KEY=sk-...your-key-here
```

**Note**: The AI features require an OpenAI API key with access to:
- `gpt-4-turbo-preview` or `gpt-3.5-turbo` (for content generation)
- `text-embedding-3-large` (for vector embeddings)

Expected costs (as of 2024):
- GPT-4 Turbo: ~$0.01-0.03 per blog post
- Embeddings: ~$0.00013 per blog post
- Monthly estimate for 50 blog posts: ~$0.50-$2.00

### 6. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) to see your site.

**Production URL**: https://memphisroof.repair

### 7. Test AI Features

**Generate a test blog post:**
```bash
curl -X POST http://localhost:3001/api/ai/generate-blog \
  -H "Content-Type: application/json" \
  -d '{"topic":"Metal Roofing Benefits","location":"Germantown TN"}'
```

**Check embedding status:**
```bash
curl http://localhost:3001/api/ai/embed-blogs
```

**Generate embeddings for existing posts:**
```bash
curl -X POST http://localhost:3001/api/ai/embed-blogs
```

**Test lead submission:**
```bash
curl -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@example.com",
    "phone":"901-555-1234",
    "service":"Roof Repair",
    "message":"Need repair quote",
    "source":"test"
  }'
```

## 📁 Project Structure

```
memphis-roof-repair/
├── app/
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── services/            # Services listing and dynamic routes
│   ├── blog/                # Blog listing and posts
│   ├── contact/             # Contact page with form
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # Robots.txt configuration
├── components/
│   ├── LeadForm.tsx         # Reusable lead capture form
│   └── ui/                  # UI components (Navbar, Footer, etc.)
├── lib/
│   ├── seoConfig.ts         # SEO metadata and schema generators
│   └── supabaseClient.ts    # Supabase client and helpers
├── styles/
│   └── main.css             # Global styles and Tailwind config
└── public/                  # Static assets (images, favicon, etc.)
```

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with CTAs
- Benefits grid
- Services preview
- Customer testimonials
- Service area map
- Lead capture form

### Services (`/services`)
- Service overview grid
- Individual service pages at `/services/[slug]`
- Each service includes detailed info and lead form

### About (`/about`)
- Company story
- Team members
- Certifications and credentials
- Values and mission

### Contact (`/contact`)
- Multiple contact methods
- Lead capture form
- Business hours
- Service area map
- FAQ section

### Blog (`/blog`)
- SEO-optimized blog posts
- Category filtering
- Related posts
- Newsletter signup

## 🔧 Customization

### Update Company Information

Edit `/lib/seoConfig.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Zion Roof',
  phone: '(901) 555-ROOF',
  email: 'info@zionroof.com',
  address: {
    street: '123 Main Street',
    city: 'Memphis',
    state: 'TN',
    zip: '38103'
  },
  // ... more config
};
```

### Add New Services

Edit `/app/services/page.tsx` and add to the `services` array:

```typescript
{
  slug: 'your-service-slug',
  title: 'Your Service Name',
  description: 'Service description',
  features: ['Feature 1', 'Feature 2'],
  icon: '🔨'
}
```

### Add Blog Posts

Edit `/app/blog/page.tsx` and add to the `blogPosts` array. In production, connect to a CMS like Contentful or Sanity.

### Customize Colors

Edit `/tailwind.config.js`:

```javascript
colors: {
  zion: {
    blue: '#080357',
    green: '#DCF702',
    // ... add more color variants
  }
}
```

## 📊 SEO Features

### Implemented SEO Optimizations:

- ✅ Next.js 14 Metadata API for dynamic meta tags
- ✅ JSON-LD structured data for LocalBusiness
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Open Graph and Twitter Card metadata
- ✅ Semantic HTML structure
- ✅ Breadcrumb schema for navigation
- ✅ Article schema for blog posts
- ✅ Location-specific keywords (Memphis, neighborhoods, zip codes)
- ✅ Mobile-optimized responsive design
- ✅ Fast loading times (< 2s LCP target)

### AI Search Optimization:

The site is optimized for AI-powered search engines:

- Entity-rich content with location specificity
- Clear service descriptions with semantic markup
- FAQ sections with structured answers
- Comprehensive business information
- Natural language content structure

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
# Connect to Vercel
pnpm dlx vercel

# Deploy to production
pnpm dlx vercel --prod
```

### Post-Deployment Checklist

- ✅ Verify all environment variables are set
- ✅ Test all forms and lead capture
- ✅ Submit sitemap to Google Search Console
- ✅ Set up Google Analytics (optional)
- ✅ Configure Supabase production database
- ✅ Test on mobile devices
- ✅ Run Lighthouse audit
- ✅ Set up monitoring and alerts

## 📧 Lead Notifications

### Email Notifications (Optional)

To get email notifications for new leads, set up a Supabase Edge Function:

```sql
-- Create a webhook or use Supabase Functions
-- Example: Send email via SendGrid/Resend when new lead is inserted
```

Or use Zapier/Make to connect Supabase to your email/CRM.

## 🎨 Design System

### Typography
- Headings: Poppins (bold, weights 600-900)
- Body: Inter (regular, weights 400-600)

### Color Palette
- Primary: Zion Blue (#080357)
- Accent: Zion Green (#DCF702)
- Background: White / Gray-900 (dark mode)
- Text: Gray-900 / Gray-100 (dark mode)

### Components
- Buttons: `.cta-button` utility class
- Sections: `.section-container` utility class
- Cards: Rounded corners, shadow-lg
- Forms: Consistent styling with focus states

## 📱 Progressive Enhancement

The site is built with progressive enhancement:

- Works without JavaScript
- Enhanced with JavaScript interactions
- Accessible keyboard navigation
- Screen reader friendly
- Mobile-first responsive design

## 🔐 Security

- Environment variables for sensitive keys
- Supabase RLS (Row Level Security) enabled
- Form validation and sanitization
- Rate limiting recommended for production
- HTTPS enforced in production

## 📈 Analytics & Monitoring

Recommended integrations:

- **Google Analytics 4**: User behavior tracking
- **Google Search Console**: SEO monitoring
- **Vercel Analytics**: Performance metrics
- **Sentry**: Error tracking (optional)
- **Hotjar**: User session recording (optional)

## 🛣️ Roadmap

Future enhancements:

- [ ] CMS integration (Contentful/Sanity)
- [ ] AI-powered blog post generator
- [ ] Customer portal for project tracking
- [ ] Photo gallery with before/after
- [ ] Online estimate calculator
- [ ] Live chat integration
- [ ] Review management system
- [ ] Social proof notifications
- [ ] Multi-language support

## 🤝 Contributing

This is a private project for Zion Roof. For questions or support, contact the development team.

## 📄 License

Copyright © 2024 Zion Roof. All rights reserved.

## 🆘 Support

For technical support or questions:

- Email: dev@zionroof.com
- Documentation: [Internal Wiki]
- Issues: [GitHub Issues]

---

**Built with ❤️ in Memphis, TN**
