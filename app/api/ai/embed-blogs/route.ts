// API route to generate and update embeddings for existing blog posts
// Run this periodically to ensure all posts have vector embeddings for semantic search

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { batchGenerateEmbeddings } from '@/utils/aiSEO';

// Initialize Supabase with service role
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    console.log('Starting embedding generation job...');

    // Fetch all blog posts without embeddings
    const { data: posts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('id, topic, content, meta_description')
      .is('vector', null);

    if (fetchError) {
      console.error('Error fetching posts:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch posts' },
        { status: 500 }
      );
    }

    if (!posts || posts.length === 0) {
      return NextResponse.json(
        {
          success: true,
          message: 'All posts already have embeddings',
          processed: 0
        },
        { status: 200 }
      );
    }

    console.log(`Found ${posts.length} posts without embeddings`);

    // Prepare texts for embedding (combine title, description, and content snippet)
    const texts = posts.map((post) => {
      const snippet = post.content.substring(0, 2000);
      return `${post.topic}. ${post.meta_description || ''}. ${snippet}`;
    });

    // Generate embeddings in batch
    console.log('Generating embeddings...');
    const embeddings = await batchGenerateEmbeddings(texts);

    // Update posts with embeddings
    console.log('Updating database...');
    const updates = posts.map((post, index) => ({
      id: post.id,
      vector: embeddings[index]
    }));

    let successCount = 0;
    let errorCount = 0;

    // Update in smaller batches to avoid rate limits
    const BATCH_SIZE = 10;
    for (let i = 0; i < updates.length; i += BATCH_SIZE) {
      const batch = updates.slice(i, i + BATCH_SIZE);

      for (const update of batch) {
        if (update.vector && update.vector.length > 0) {
          const { error: updateError } = await supabase
            .from('blog_posts')
            .update({ vector: update.vector })
            .eq('id', update.id);

          if (updateError) {
            console.error(`Error updating post ${update.id}:`, updateError);
            errorCount++;
          } else {
            successCount++;
          }
        } else {
          errorCount++;
        }
      }

      // Brief pause between batches
      if (i + BATCH_SIZE < updates.length) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }

    console.log(
      `Embedding job complete: ${successCount} success, ${errorCount} errors`
    );

    return NextResponse.json(
      {
        success: true,
        processed: posts.length,
        successful: successCount,
        failed: errorCount
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in embedding job:', error);
    return NextResponse.json(
      {
        error: 'Embedding generation failed',
        details: error.message
      },
      { status: 500 }
    );
  }
}

// GET endpoint to check embedding status
export async function GET(request: NextRequest) {
  try {
    // Count total posts
    const { count: totalCount } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true });

    // Count posts with embeddings
    const { count: embeddedCount } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true })
      .not('vector', 'is', null);

    // Count posts without embeddings
    const { count: missingCount } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true })
      .is('vector', null);

    return NextResponse.json(
      {
        total: totalCount || 0,
        withEmbeddings: embeddedCount || 0,
        missingEmbeddings: missingCount || 0,
        coverage: totalCount
          ? ((embeddedCount || 0) / totalCount) * 100
          : 0,
        recommendation:
          (missingCount || 0) > 0
            ? 'Run POST /api/ai/embed-blogs to generate missing embeddings'
            : 'All posts have embeddings'
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error checking embedding status:', error);
    return NextResponse.json(
      { error: 'Failed to check status', details: error.message },
      { status: 500 }
    );
  }
}

