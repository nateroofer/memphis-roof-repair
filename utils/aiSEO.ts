// AI-powered SEO content generation and optimization using OpenAI
// Handles blog generation, meta content creation, and keyword clustering for LLM-first SEO

import OpenAI from 'openai';

// Initialize OpenAI client (server-side only!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const MODEL = 'gpt-4-turbo-preview'; // Use gpt-4-turbo or gpt-3.5-turbo for cost efficiency
const EMBEDDING_MODEL = 'text-embedding-3-large'; // 1536 dimensions

/**
 * Generate SEO-optimized blog content for a specific topic and location
 * @param topic - The roofing topic (e.g., "metal roofing", "storm damage repair")
 * @param location - Memphis area location (e.g., "Germantown TN", "East Memphis")
 * @returns Markdown-formatted blog content optimized for LLM indexing
 */
export async function generateSEOContent(
  topic: string,
  location: string
): Promise<{
  title: string;
  content: string;
  metaDescription: string;
  slug: string;
}> {
  const prompt = `You are an expert SEO copywriter for Zion Roof, a Memphis-based roofing company.

Write a comprehensive, LLM-optimized blog post about "${topic}" for homeowners in ${location}.

REQUIREMENTS:
- Start with a 40-60 word answer-first snippet that directly answers the main question
- Include specific Memphis/Tennessee context (weather, building codes, local concerns)
- Use entity-rich language (mention specific neighborhoods, materials, brands)
- Write in a trustworthy, local-expert tone
- Include Quick Facts section (cost ranges, timeframes, warranties)
- Add FAQ section with 3-5 common questions
- Target 1200-1500 words
- Use semantic keywords naturally
- Optimize for voice search and AI summaries

Format as Markdown with proper headings (##, ###).
Include a meta description (155 chars) and SEO title (under 60 chars) at the top in YAML frontmatter.

Example frontmatter:
---
title: "Your SEO Title Here"
metaDescription: "Your meta description here"
---`;

  try {
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content:
            'You are an expert SEO copywriter specializing in home services and local business content.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 3000
    });

    const rawContent = completion.choices[0].message.content || '';

    // Parse frontmatter
    const frontmatterMatch = rawContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    let title = topic;
    let metaDescription = '';
    let content = rawContent;

    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      content = frontmatterMatch[2];

      const titleMatch = frontmatter.match(/title:\s*["'](.+?)["']/);
      const descMatch = frontmatter.match(/metaDescription:\s*["'](.+?)["']/);

      if (titleMatch) title = titleMatch[1];
      if (descMatch) metaDescription = descMatch[1];
    }

    // Generate slug
    const slug = `${topic}-${location}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return {
      title,
      content: content.trim(),
      metaDescription,
      slug
    };
  } catch (error) {
    console.error('Error generating SEO content:', error);
    throw new Error('Failed to generate content');
  }
}

/**
 * Generate optimized meta title and description
 * @param title - Base title
 * @param shortSummary - Brief content summary
 * @returns SEO-optimized title and meta description
 */
export async function generateMeta(
  title: string,
  shortSummary: string
): Promise<{
  title: string;
  description: string;
}> {
  const prompt = `Create SEO meta tags for a roofing company page:

Title: ${title}
Summary: ${shortSummary}

Return JSON with:
1. "title" - Under 60 characters, include "Memphis" and brand "Zion Roof"
2. "description" - 150-160 characters, action-oriented, include primary keyword

Example format:
{
  "title": "Roof Repair Memphis TN | Zion Roof Experts",
  "description": "Expert roof repair in Memphis. Licensed & insured. Free inspections, same-day service. Call (901) 304-9466 for emergency repairs."
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Use cheaper model for meta generation
      messages: [
        {
          role: 'system',
          content: 'You are an expert SEO specialist. Return only valid JSON.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.5,
      max_tokens: 200
    });

    const response = completion.choices[0].message.content || '{}';
    const parsed = JSON.parse(response);

    return {
      title: parsed.title || title,
      description: parsed.description || shortSummary
    };
  } catch (error) {
    console.error('Error generating meta:', error);
    return {
      title,
      description: shortSummary
    };
  }
}

/**
 * Generate local keyword clusters for Memphis neighborhoods
 * Returns keyword sets optimized for each service area
 * @param location - Memphis neighborhood/area
 * @returns Keyword cluster object
 */
export async function generateLocalKeywordClusters(
  location: string
): Promise<{
  primary: string[];
  secondary: string[];
  longTail: string[];
}> {
  const prompt = `Generate SEO keyword clusters for roofing services in ${location}, Memphis TN.

Return JSON with three arrays:
1. "primary" - 5-7 high-volume keywords (e.g., "roofing contractor germantown tn")
2. "secondary" - 8-12 supporting keywords (e.g., "roof repair near me", "shingle replacement germantown")
3. "longTail" - 10-15 conversational/voice search phrases (e.g., "best roofing company in germantown tennessee")

Focus on:
- Commercial AND residential intent
- Emergency services
- Specific roof types (metal, shingle, TPO, EPDM)
- Insurance claims
- Local validation terms

Return ONLY valid JSON, no markdown.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an SEO keyword research expert. Return only valid JSON.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.6,
      max_tokens: 500
    });

    const response = completion.choices[0].message.content || '{}';
    const parsed = JSON.parse(response);

    return {
      primary: parsed.primary || [],
      secondary: parsed.secondary || [],
      longTail: parsed.longTail || []
    };
  } catch (error) {
    console.error('Error generating keyword clusters:', error);
    return {
      primary: [`roofing ${location}`, `roof repair ${location}`],
      secondary: [],
      longTail: []
    };
  }
}

/**
 * Generate embedding vector for text content
 * Used for semantic search and content matching
 * @param text - Text to embed
 * @returns 1536-dimensional embedding vector
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: text.substring(0, 8000) // Limit to ~8k chars to stay within token limits
    });

    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw new Error('Failed to generate embedding');
  }
}

/**
 * Batch generate embeddings for multiple texts
 * More efficient than individual calls
 * @param texts - Array of texts to embed
 * @returns Array of embedding vectors
 * @note OpenAI has rate limits - batch in groups of 100 or less
 */
export async function batchGenerateEmbeddings(
  texts: string[]
): Promise<number[][]> {
  const BATCH_SIZE = 50; // Process 50 at a time to stay under rate limits
  const embeddings: number[][] = [];

  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    const batch = texts.slice(i, i + BATCH_SIZE);

    try {
      const response = await openai.embeddings.create({
        model: EMBEDDING_MODEL,
        input: batch.map((text) => text.substring(0, 8000))
      });

      embeddings.push(...response.data.map((item) => item.embedding));

      // Rate limiting: wait 1 second between batches
      if (i + BATCH_SIZE < texts.length) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error in batch ${i / BATCH_SIZE}:`, error);
      // Push empty arrays for failed embeddings
      embeddings.push(...batch.map(() => []));
    }
  }

  return embeddings;
}

/**
 * Generate FAQ content for a service page
 * @param service - Service name (e.g., "metal roofing", "storm damage")
 * @returns Array of FAQ objects with question and answer
 */
export async function generateServiceFAQs(
  service: string
): Promise<Array<{ question: string; answer: string }>> {
  const prompt = `Generate 5 frequently asked questions and answers for "${service}" in Memphis, TN.

Make answers:
- Concise (2-3 sentences)
- Include specific Memphis context where relevant
- Address cost, timing, process, and quality concerns
- Mention Zion Roof naturally

Return as JSON array:
[
  {"question": "...", "answer": "..."},
  ...
]`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a roofing expert. Return only valid JSON.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.6,
      max_tokens: 800
    });

    const response = completion.choices[0].message.content || '[]';
    return JSON.parse(response);
  } catch (error) {
    console.error('Error generating FAQs:', error);
    return [];
  }
}

