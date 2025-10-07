# 📧 Email Notification Setup Guide

## Overview

When a customer submits a lead form on your website, the system will:
1. ✅ **Save the lead to Supabase** (always happens)
2. ✅ **Send email to admin** (if configured)
3. ✅ **Send Slack notification** (optional)

---

## 🚀 Quick Setup (Choose One Email Provider)

### Option 1: Resend (Recommended) ⭐

**Why Resend?**
- Simple API
- Generous free tier (100 emails/day, 3,000/month)
- Great deliverability
- Easy setup

**Setup Steps:**

1. **Create Resend Account**
   - Go to https://resend.com
   - Sign up (free account)
   - Verify your email

2. **Get API Key**
   - Dashboard → API Keys
   - Click "Create API Key"
   - Copy the key (starts with `re_...`)

3. **Verify Domain (Required for Production)**
   - Go to Domains in Resend dashboard
   - Add `memphisroof.repair`
   - Add the DNS records they provide:
     - TXT record for verification
     - MX records for email delivery
     - DKIM records for authentication

4. **Add to `.env.local`:**
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   ADMIN_EMAIL=office@memphisroof.repair
   ```

5. **Test It:**
   - Start your dev server: `pnpm dev`
   - Fill out a form on your site
   - Check your inbox!

---

### Option 2: SendGrid

**Why SendGrid?**
- Industry standard
- Free tier (100 emails/day)
- Advanced analytics

**Setup Steps:**

1. **Create SendGrid Account**
   - Go to https://sendgrid.com
   - Sign up (free account)
   - Complete sender verification

2. **Get API Key**
   - Settings → API Keys
   - Create API Key with "Mail Send" permission
   - Copy the key (starts with `SG.`)

3. **Verify Domain**
   - Settings → Sender Authentication
   - Authenticate Your Domain
   - Follow DNS setup instructions

4. **Add to `.env.local`:**
   ```env
   SENDGRID_API_KEY=SG.your_actual_api_key_here
   ADMIN_EMAIL=office@memphisroof.repair
   ```

---

## 📱 Optional: Slack Notifications

Get instant lead notifications in Slack!

**Setup Steps:**

1. **Create Slack Webhook**
   - Go to https://api.slack.com/messaging/webhooks
   - Click "Create your Slack app"
   - Choose "From scratch"
   - Name it "Zion Roof Leads"
   - Select your workspace
   - Click "Incoming Webhooks"
   - Activate webhooks
   - Click "Add New Webhook to Workspace"
   - Choose a channel (e.g., #leads)
   - Copy the webhook URL

2. **Add to `.env.local`:**
   ```env
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
   ```

---

## 🧪 Testing Your Setup

### Test Locally:

```bash
# 1. Make sure env variables are set
cat .env.local

# 2. Start dev server
pnpm dev

# 3. Go to http://localhost:3001
# 4. Fill out any lead form
# 5. Check:
#    - Browser console (should see success message)
#    - Your email inbox
#    - Slack channel (if configured)
#    - Supabase table (leads should be saved)
```

### Test with cURL:

```bash
curl -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Customer",
    "email": "test@example.com",
    "phone": "(901) 555-0123",
    "service": "Roof Repair",
    "message": "This is a test lead",
    "source": "test"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Lead submitted successfully",
  "leadId": "uuid-here"
}
```

---

## 📊 What Each Notification Includes

### Email Notification (HTML formatted):
- Customer name
- Phone number (clickable)
- Email address (clickable)
- Service requested
- Message (if provided)
- Lead source (which page they came from)
- Timestamp (Central Time)
- Lead ID
- Call/Email buttons

### Slack Notification:
- All the same info as email
- Formatted with nice blocks
- Quick action buttons
- Color-coded by importance

---

## 🔧 Environment Variables Reference

```env
# Required for lead storage
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Required for email (choose ONE)
RESEND_API_KEY=re_...           # Option 1 (recommended)
SENDGRID_API_KEY=SG....         # Option 2

# Required - where emails go
ADMIN_EMAIL=office@memphisroof.repair

# Optional - instant Slack alerts
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
```

---

## 🎯 Lead Flow Diagram

```
Customer fills form
         ↓
    POST /api/leads
         ↓
    Validate data
         ↓
    Save to Supabase ✅
         ↓
    Send email (Resend/SendGrid) ✅
         ↓
    Send Slack notification (optional) ✅
         ↓
    Return success to customer ✅
```

**Important**: Lead is ALWAYS saved to Supabase, even if email/Slack fails!

---

## 🚨 Troubleshooting

### Problem: Email not arriving

**Check:**
1. ✅ API key is correct in `.env.local`
2. ✅ Domain is verified (required for production)
3. ✅ Check spam folder
4. ✅ Check server logs: `pnpm dev` output
5. ✅ Test with cURL command above

**Common Issues:**
- Domain not verified → Emails blocked
- Wrong API key → Check `.env.local`
- Typo in `ADMIN_EMAIL` → Fix email address

### Problem: Lead saved but no email

**This is expected if:**
- No email API key is set (check logs for warning)
- Email service is down (lead still saved!)
- Domain not verified (production only)

**Solution:**
- Add `RESEND_API_KEY` or `SENDGRID_API_KEY` to `.env.local`
- Restart dev server
- Verify domain in email provider dashboard

### Problem: Slack not working

**Check:**
1. Webhook URL is correct
2. URL has proper permissions
3. Channel still exists
4. Workspace hasn't disabled webhooks

---

## 🎉 Production Deployment

### Before deploying to Vercel:

1. ✅ **Verify domain** in Resend/SendGrid
2. ✅ **Add DNS records** provided by email service
3. ✅ **Set environment variables** in Vercel dashboard:
   ```
   RESEND_API_KEY
   ADMIN_EMAIL
   SLACK_WEBHOOK_URL (optional)
   NEXT_PUBLIC_SUPABASE_URL
   SUPABASE_SERVICE_ROLE_KEY
   ```
4. ✅ **Test after deployment** - submit a real form

### Email Best Practices:

- **Use verified domain** (`leads@memphisroof.repair`)
- **Set reply-to** customer email (already configured)
- **Monitor deliverability** in email provider dashboard
- **Check spam scores** if emails not arriving
- **Set up SPF, DKIM, DMARC** records (email provider guides)

---

## 📈 Monitoring

### Check Lead Delivery:

**Supabase:**
```sql
SELECT * FROM leads ORDER BY created_at DESC LIMIT 10;
```

**Email Provider:**
- Resend: Dashboard → Emails
- SendGrid: Activity → Email Activity

**Slack:**
- Check your #leads channel
- Review message history

---

## 🔐 Security Notes

- ✅ API keys are server-side only (never exposed to client)
- ✅ Lead data is validated before saving
- ✅ Email/phone regex validation
- ✅ Spam protection (future: add reCAPTCHA)
- ✅ Row Level Security enabled in Supabase

---

## 💡 Tips

1. **Set up email forwarding** from `leads@memphisroof.repair` to your personal email
2. **Create a Slack channel** just for leads (#new-leads)
3. **Use Slack mobile app** for instant notifications
4. **Monitor first 24 hours** after launch closely
5. **Test with real email** before going live

---

## 🎊 You're All Set!

Once configured, every form submission will:
- ✅ Save to database (always)
- ✅ Email you instantly
- ✅ Ping Slack (if configured)
- ✅ Track the source page

**Questions?** All the code is in `/app/api/leads/route.ts` 🚀

