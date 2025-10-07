// Semantic search utility using Supabase vector embeddings
// Finds related blog posts using cosine similarity matching

import { createClient } from '@supabase/supabase-js';
import { generateEmbedding } from './aiSEO';

// Initialize Supabase client (server-side only!)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role for RPC access
);

export interface RelatedPost {
  id: string;
  topic: string;
  slug: string;
  content: string;
  similarity: number;
  created_at: string;
}

/**
 * Find semantically related blog posts using vector similarity
 * @param query - Search query or text to find similar content for
 * @param matchThreshold - Minimum similarity score (0-1), default 0.5
 * @param matchCount - Number of results to return, default 5
 * @returns Array of related posts sorted by relevance
 */
export async function findRelatedPosts(
  query: string,
  matchThreshold: number = 0.5,
  matchCount: number = 5
): Promise<RelatedPost[]> {
  try {
    // Generate embedding for the query
    const queryEmbedding = await generateEmbedding(query);

    // Call Supabase RPC function for vector similarity search
    const { data, error } = await supabase.rpc('match_blog_posts', {
      query_embedding: queryEmbedding,
      match_threshold: matchThreshold,
      match_count: matchCount
    });

    if (error) {
      console.error('Error finding related posts:', error);
      return [];
    }

    return (data || []).map((post: any) => ({
      id: post.id,
      topic: post.topic,
      slug: post.slug,
      content: post.content,
      similarity: post.similarity,
      created_at: post.created_at
    }));
  } catch (error) {
    console.error('Error in semantic search:', error);
    return [];
  }
}

/**
 * Find posts related to a specific post by ID
 * Useful for "Related Articles" sections
 * @param postId - The post ID to find similar posts for
 * @param matchCount - Number of results, default 3
 * @returns Array of related posts
 */
export async function findRelatedToPost(
  postId: string,
  matchCount: number = 3
): Promise<RelatedPost[]> {
  try {
    // Get the post's content
    const { data: post, error: fetchError } = await supabase
      .from('blog_posts')
      .select('topic, content')
      .eq('id', postId)
      .single();

    if (fetchError || !post) {
      console.error('Error fetching post:', fetchError);
      return [];
    }

    // Use the post's topic and first paragraph as query
    const query = `${post.topic}. ${post.content.substring(0, 500)}`;

    // Find related posts, excluding the current post
    const related = await findRelatedPosts(query, 0.3, matchCount + 1);

    // Filter out the current post
    return related.filter((p) => p.id !== postId).slice(0, matchCount);
  } catch (error) {
    console.error('Error finding related to post:', error);
    return [];
  }
}

/**
 * Search blog posts by keyword with semantic understanding
 * Better than simple text search - understands context and synonyms
 * @param searchTerm - User's search query
 * @param limit - Max results to return, default 10
 * @returns Array of matching posts
 */
export async function semanticBlogSearch(
  searchTerm: string,
  limit: number = 10
): Promise<RelatedPost[]> {
  try {
    // Enhance query with context
    const enhancedQuery = `roofing ${searchTerm} Memphis Tennessee Zion Roof`;

    return await findRelatedPosts(enhancedQuery, 0.3, limit);
  } catch (error) {
    console.error('Error in semantic blog search:', error);
    return [];
  }
}

/**
 * Get recommended posts for a user based on their viewing history
 * @param viewedPostIds - Array of post IDs the user has viewed
 * @param recommendCount - Number of recommendations, default 5
 * @returns Array of recommended posts
 */
export async function getRecommendedPosts(
  viewedPostIds: string[],
  recommendCount: number = 5
): Promise<RelatedPost[]> {
  if (viewedPostIds.length === 0) {
    // Return recent posts if no history
    const { data } = await supabase
      .from('blog_posts')
      .select('id, topic, slug, content, created_at')
      .order('created_at', { ascending: false })
      .limit(recommendCount);

    return (data || []).map((post) => ({
      ...post,
      similarity: 0
    }));
  }

  try {
    // Get content from viewed posts
    const { data: viewedPosts } = await supabase
      .from('blog_posts')
      .select('topic, content')
      .in('id', viewedPostIds);

    if (!viewedPosts || viewedPosts.length === 0) {
      return [];
    }

    // Combine viewed post content
    const combinedQuery = viewedPosts
      .map((p) => `${p.topic}. ${p.content.substring(0, 300)}`)
      .join(' ');

    // Find similar posts
    const related = await findRelatedPosts(
      combinedQuery,
      0.2,
      recommendCount + viewedPostIds.length
    );

    // Filter out already viewed posts
    return related
      .filter((p) => !viewedPostIds.includes(p.id))
      .slice(0, recommendCount);
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return [];
  }
}

