// AI-powered blog post generation API route
// Creates SEO-optimized blog content and stores in Supabase

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { generateSEOContent, generateEmbedding } from '@/utils/aiSEO';

// Initialize Supabase with service role
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, location } = body;

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    // Default to Memphis if no location specified
    const targetLocation = location || 'Memphis TN';

    console.log(`Generating blog post: "${topic}" for ${targetLocation}`);

    // Generate SEO-optimized content using OpenAI
    const { title, content, metaDescription, slug } = await generateSEOContent(
      topic,
      targetLocation
    );

    // Generate embedding for the content
    console.log('Generating embedding for semantic search...');
    const embeddingText = `${title}. ${metaDescription}. ${content.substring(0, 2000)}`;
    const embedding = await generateEmbedding(embeddingText);

    // Store in Supabase
    const { data: post, error: dbError } = await supabase
      .from('blog_posts')
      .insert([
        {
          topic: title,
          slug,
          content,
          meta_description: metaDescription,
          vector: embedding,
          location: targetLocation,
          status: 'draft' // Mark as draft for review before publishing
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save blog post' },
        { status: 500 }
      );
    }

    console.log(`Blog post created successfully: ${post.id}`);

    return NextResponse.json(
      {
        success: true,
        post: {
          id: post.id,
          title,
          slug,
          content: content.substring(0, 200) + '...',
          metaDescription
        }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error generating blog post:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate blog post',
        details: error.message
      },
      { status: 500 }
    );
  }
}

// GET endpoint to generate multiple blog posts
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const batch = searchParams.get('batch');

  if (batch !== 'true') {
    return NextResponse.json(
      {
        message: 'Use POST to generate a single blog post',
        usage: {
          method: 'POST',
          body: {
            topic: 'roof repair',
            location: 'Germantown TN'
          }
        }
      },
      { status: 200 }
    );
  }

  // Batch generation endpoint
  try {
    const topics = [
      'Metal Roofing Installation',
      'Storm Damage Roof Repair',
      'Commercial Flat Roofing',
      'Roof Leak Detection',
      'Shingle Roof Replacement',
      'TPO Roofing Systems',
      'Emergency Roof Repairs',
      'Roof Maintenance Tips'
    ];

    const locations = [
      'East Memphis',
      'Germantown TN',
      'Collierville TN',
      'Bartlett TN',
      'Cordova TN'
    ];

    const results = [];

    // Generate one post per topic for a random location
    for (const topic of topics.slice(0, 3)) {
      // Limit to 3 for demo
      const location =
        locations[Math.floor(Math.random() * locations.length)];

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/ai/generate-blog`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic, location })
          }
        );

        const data = await response.json();
        results.push(data);

        // Wait 2 seconds between generations to respect rate limits
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(`Failed to generate blog for ${topic}:`, error);
        results.push({ error: `Failed: ${topic}` });
      }
    }

    return NextResponse.json(
      {
        success: true,
        generated: results.length,
        results
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Batch generation error:', error);
    return NextResponse.json(
      { error: 'Batch generation failed', details: error.message },
      { status: 500 }
    );
  }
}

