// API route for lead capture with Supabase storage and webhook notifications
// Validates lead data, stores in database, and triggers notifications

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase with service role for write access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Slack webhook URL (optional)
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, service, message, source } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Basic phone validation (US format)
    const phoneRegex = /^[\d\s\-\(\)\.]+$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Insert lead into Supabase
    const { data: lead, error: dbError } = await supabase
      .from('leads')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          service: service || null,
          message: message || null,
          source: source || 'website'
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      );
    }

    // Send notification to Slack (if configured)
    if (SLACK_WEBHOOK_URL) {
      await sendSlackNotification(lead);
    }

    // Send email notification
    await sendEmailNotification(lead);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        leadId: lead.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Send notification to Slack channel
 * @param lead - Lead data object
 */
async function sendSlackNotification(lead: any) {
  if (!SLACK_WEBHOOK_URL) return;

  const message = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🏠 New Lead: Zion Roof',
          emoji: true
        }
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name:*\n${lead.name}` },
          { type: 'mrkdwn', text: `*Phone:*\n${lead.phone}` },
          { type: 'mrkdwn', text: `*Email:*\n${lead.email}` },
          {
            type: 'mrkdwn',
            text: `*Service:*\n${lead.service || 'Not specified'}`
          }
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message:*\n${lead.message || 'No message provided'}`
        }
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `Source: ${lead.source} | Time: ${new Date(lead.created_at).toLocaleString()}`
          }
        ]
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: { type: 'plain_text', text: 'Call Now', emoji: true },
            url: `tel:${lead.phone}`,
            style: 'primary'
          },
          {
            type: 'button',
            text: { type: 'plain_text', text: 'Email', emoji: true },
            url: `mailto:${lead.email}`
          }
        ]
      }
    ]
  };

  try {
    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });
  } catch (error) {
    console.error('Error sending Slack notification:', error);
  }
}

/**
 * Send email notification to admin
 * Uses Resend API (or falls back to SendGrid if configured)
 * @param lead - Lead data object
 */
async function sendEmailNotification(lead: any) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'office@memphisroof.repair';

  // Email HTML template
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #080357 0%, #0A0469 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #DCF702; border-radius: 5px; }
        .field-label { font-weight: bold; color: #080357; margin-bottom: 5px; }
        .field-value { color: #333; }
        .cta-buttons { margin-top: 30px; text-align: center; }
        .cta-button { display: inline-block; padding: 12px 24px; margin: 0 10px; background: #DCF702; color: #080357; text-decoration: none; border-radius: 5px; font-weight: bold; }
        .footer { margin-top: 20px; padding: 20px; text-align: center; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏠 New Lead from Zion Roof Website</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Received: ${new Date(lead.created_at).toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">👤 Contact Name</div>
            <div class="field-value">${lead.name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📞 Phone Number</div>
            <div class="field-value"><a href="tel:${lead.phone}">${lead.phone}</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">📧 Email Address</div>
            <div class="field-value"><a href="mailto:${lead.email}">${lead.email}</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">🔧 Service Requested</div>
            <div class="field-value">${lead.service || 'Not specified'}</div>
          </div>
          
          ${lead.message ? `
          <div class="field">
            <div class="field-label">💬 Message</div>
            <div class="field-value">${lead.message}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="field-label">📊 Lead Source</div>
            <div class="field-value">${lead.source}</div>
          </div>
          
          <div class="cta-buttons">
            <a href="tel:${lead.phone}" class="cta-button">📞 Call Now</a>
            <a href="mailto:${lead.email}" class="cta-button">✉️ Send Email</a>
          </div>
        </div>
        <div class="footer">
          <p>This lead was submitted through memphisroof.repair</p>
          <p>Lead ID: ${lead.id}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Try Resend first (recommended)
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'Zion Roof Leads <leads@memphisroof.repair>',
          to: [ADMIN_EMAIL],
          subject: `🏠 New Lead: ${lead.name} - ${lead.service || 'General Inquiry'}`,
          html: htmlContent,
          reply_to: lead.email
        })
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Resend API error:', error);
        throw new Error('Resend email failed');
      }

      console.log('Email sent successfully via Resend to:', ADMIN_EMAIL);
      return;
    }

    // Fallback to SendGrid if configured
    if (SENDGRID_API_KEY) {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: ADMIN_EMAIL }],
            subject: `🏠 New Lead: ${lead.name} - ${lead.service || 'General Inquiry'}`
          }],
          from: { 
            email: 'leads@memphisroof.repair',
            name: 'Zion Roof Leads'
          },
          reply_to: { email: lead.email },
          content: [{
            type: 'text/html',
            value: htmlContent
          }]
        })
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('SendGrid API error:', error);
        throw new Error('SendGrid email failed');
      }

      console.log('Email sent successfully via SendGrid to:', ADMIN_EMAIL);
      return;
    }

    // If no email service is configured, log a warning
    console.warn('⚠️ No email service configured. Set RESEND_API_KEY or SENDGRID_API_KEY in environment variables.');
    console.log('Lead notification (email not sent):', {
      to: ADMIN_EMAIL,
      lead: lead.name,
      email: lead.email,
      phone: lead.phone
    });

  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw - we still want the lead to be saved even if email fails
  }
}

// GET endpoint to retrieve leads (admin only - add authentication!)
export async function GET(request: NextRequest) {
  // TODO: Add authentication middleware here
  // For now, this is a placeholder for admin dashboard

  try {
    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ leads }, { status: 200 });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

