-- Supabase schema for Zion Roof AI-powered SEO platform
-- Creates tables for leads, blog posts with vector embeddings, and semantic search functions

-- ============================================
-- LEADS TABLE
-- ============================================
-- Stores contact form submissions and lead data
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts (for lead forms)
CREATE POLICY "Allow public lead submissions" ON public.leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Allow authenticated users to read (for admin dashboard)
CREATE POLICY "Allow authenticated users to read leads" ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON public.leads(email);
CREATE INDEX IF NOT EXISTS leads_source_idx ON public.leads(source);
CREATE INDEX IF NOT EXISTS leads_service_idx ON public.leads(service);

-- Comments for documentation
COMMENT ON TABLE public.leads IS 'Stores lead submissions from website contact forms';
COMMENT ON COLUMN public.leads.source IS 'Source of the lead (e.g., homepage, contact-page, service-roof-repair)';
COMMENT ON COLUMN public.leads.service IS 'Requested service type (e.g., roof repair, storm damage, inspection)';

-- ============================================
-- BLOG POSTS TABLE WITH VECTOR EMBEDDINGS
-- ============================================
-- Stores blog content with OpenAI embeddings for semantic search
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  topic TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  meta_description TEXT,
  location TEXT,
  status TEXT DEFAULT 'published',
  vector vector(1536), -- OpenAI text-embedding-3-large dimensions
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to read published posts
CREATE POLICY "Allow public to read published posts" ON public.blog_posts
  FOR SELECT
  TO public
  USING (status = 'published');

-- Policy: Allow authenticated users full access (for admin)
CREATE POLICY "Allow authenticated users full access to blog_posts" ON public.blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_status_idx ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS blog_posts_location_idx ON public.blog_posts(location);
CREATE INDEX IF NOT EXISTS blog_posts_created_at_idx ON public.blog_posts(created_at DESC);

-- Vector similarity index for fast semantic search
-- Using ivfflat index for approximate nearest neighbor search
CREATE INDEX IF NOT EXISTS blog_posts_vector_idx 
  ON public.blog_posts 
  USING ivfflat (vector vector_cosine_ops)
  WITH (lists = 100);

-- Comments
COMMENT ON TABLE public.blog_posts IS 'Blog posts with OpenAI embeddings for LLM-optimized SEO';
COMMENT ON COLUMN public.blog_posts.vector IS '1536-dimensional embedding from OpenAI text-embedding-3-large';
COMMENT ON COLUMN public.blog_posts.location IS 'Target Memphis neighborhood/area (e.g., Germantown, East Memphis)';
COMMENT ON COLUMN public.blog_posts.status IS 'Post status: draft, published, archived';

-- ============================================
-- RPC FUNCTION: SEMANTIC BLOG SEARCH
-- ============================================
-- Finds blog posts similar to a query embedding using cosine similarity

CREATE OR REPLACE FUNCTION match_blog_posts(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.5,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  topic text,
  slug text,
  content text,
  meta_description text,
  location text,
  similarity float,
  created_at timestamptz
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    blog_posts.id,
    blog_posts.topic,
    blog_posts.slug,
    blog_posts.content,
    blog_posts.meta_description,
    blog_posts.location,
    1 - (blog_posts.vector <=> query_embedding) AS similarity,
    blog_posts.created_at
  FROM blog_posts
  WHERE 
    blog_posts.status = 'published'
    AND blog_posts.vector IS NOT NULL
    AND 1 - (blog_posts.vector <=> query_embedding) > match_threshold
  ORDER BY blog_posts.vector <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION match_blog_posts(vector(1536), float, int) TO authenticated, anon;

COMMENT ON FUNCTION match_blog_posts IS 'Finds semantically similar blog posts using vector cosine similarity';

-- ============================================
-- HELPER FUNCTION: UPDATE TIMESTAMPS
-- ============================================
-- Automatically updates updated_at column on row modification

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to leads table
DROP TRIGGER IF EXISTS update_leads_updated_at ON public.leads;
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to blog_posts table
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- OPTIONAL: ANALYTICS TABLE
-- ============================================
-- Track blog post views and engagement (optional enhancement)

CREATE TABLE IF NOT EXISTS public.blog_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- 'view', 'click', 'share'
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS blog_analytics_post_id_idx ON public.blog_analytics(post_id);
CREATE INDEX IF NOT EXISTS blog_analytics_event_type_idx ON public.blog_analytics(event_type);
CREATE INDEX IF NOT EXISTS blog_analytics_created_at_idx ON public.blog_analytics(created_at DESC);

ALTER TABLE public.blog_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert analytics" ON public.blog_analytics
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated to read analytics" ON public.blog_analytics
  FOR SELECT
  TO authenticated
  USING (true);

COMMENT ON TABLE public.blog_analytics IS 'Tracks blog post views and engagement for analytics';

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================
-- Insert sample blog post for testing semantic search

-- Uncomment to insert sample data:
/*
INSERT INTO public.blog_posts (topic, slug, content, meta_description, location, status)
VALUES (
  'Metal Roofing Installation Guide for Memphis Homes',
  'metal-roofing-installation-memphis',
  'Metal roofing has become increasingly popular among Memphis homeowners due to its durability and energy efficiency. In this comprehensive guide, we''ll explore everything you need to know about metal roof installation in Memphis, TN...

## Benefits of Metal Roofing in Memphis

Memphis'' hot, humid summers and occasional severe storms make metal roofing an excellent choice for local homeowners. Metal roofs can last 40-70 years, significantly longer than traditional asphalt shingles...

## Cost of Metal Roofing in Memphis

The average cost for metal roof installation in Memphis ranges from $8,000 to $25,000 depending on your home''s size, roof complexity, and material choice...',
  'Complete guide to metal roofing installation in Memphis, TN. Learn about costs, benefits, and why metal roofs are perfect for Tennessee weather.',
  'Memphis TN',
  'published'
);
*/

