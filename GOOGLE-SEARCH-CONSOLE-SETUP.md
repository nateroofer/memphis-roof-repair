# 🔍 Google Search Console Setup Guide

## Step-by-Step Sitemap Submission

### 1. Add Your Site to Google Search Console

**URL:** https://search.google.com/search-console

#### Choose Verification Method:

##### Option A: Domain Property (Recommended)
- Verifies all subdomains and protocols
- Requires DNS TXT record
- Best for long-term management

**Steps:**
1. Select "Domain" property type
2. Enter: `memphisroof.repair`
3. Copy the TXT record (looks like: `google-site-verification=abc123...`)
4. Add to your DNS provider:
   - Record type: TXT
   - Host: @ (or your domain)
   - Value: [paste the verification code]
5. Wait 5-10 minutes for DNS propagation
6. Click "Verify" in Search Console

##### Option B: URL Prefix (Easier)
- Only verifies the specific URL
- Multiple verification methods available
- Faster setup

**Steps:**
1. Select "URL prefix" property type
2. Enter: `https://memphisroof.repair`
3. Choose verification method:

**HTML Tag Method** (Recommended):
```html
<!-- Add this to app/layout.tsx in <head> section -->
<meta name="google-site-verification" content="YOUR_CODE_HERE" />
```

**HTML File Method:**
1. Download the verification file
2. Upload to: `/public/google[verification-code].html`
3. Deploy to Vercel
4. Click "Verify"

---

### 2. Submit Your Sitemap

Once verified:

1. **Go to "Sitemaps"** in left sidebar
2. **Enter sitemap URL:**
   ```
   sitemap.xml
   ```
3. **Click "Submit"**

**Your sitemap URL:** `https://memphisroof.repair/sitemap.xml`

**What's in your sitemap:**
- Homepage
- 10 location pages (East Memphis, Germantown, etc.)
- 10 service pages
- Blog index
- Contact page
- About page
- Total: 25+ URLs

---

### 3. Monitor Indexing Status

**Check Coverage Report:**
- Search Console → Coverage
- Wait 1-3 days for initial crawl
- Check for:
  - ✅ Valid pages
  - ⚠️ Warnings
  - ❌ Errors (if any)

**Expected Timeline:**
- Day 1: Sitemap discovered
- Day 2-3: Pages start appearing in index
- Week 1-2: Most pages indexed
- Week 3-4: Start seeing impressions/clicks

---

### 4. Set Up URL Inspection

**Test individual pages:**
1. Go to "URL Inspection" in Search Console
2. Enter a page URL (e.g., `/locations/east-memphis`)
3. Click "Test Live URL"
4. If not indexed yet, click "Request Indexing"

**Priority pages to request indexing:**
1. Homepage: `https://memphisroof.repair/`
2. Services: `https://memphisroof.repair/services`
3. Top location: `https://memphisroof.repair/locations/east-memphis`
4. Commercial: `https://memphisroof.repair/services/commercial-roofing`
5. Emergency: `https://memphisroof.repair/services/emergency-roof-repair`

---

## 🤖 Bing Webmaster Tools Setup

### Quick Import from Google:
1. Visit: https://www.bing.com/webmasters
2. Click **"Import from Google Search Console"**
3. Authorize connection
4. Select your property
5. Bing automatically imports:
   - Site verification
   - Sitemap
   - Settings

### Manual Setup:
1. Add site: `https://memphisroof.repair`
2. Verify ownership (HTML tag or file)
3. Go to "Sitemaps" → "Submit Sitemap"
4. Enter: `https://memphisroof.repair/sitemap.xml`

---

## 📊 robots.txt Verification

Your `robots.txt` is at: `https://memphisroof.repair/robots.txt`

**Should contain:**
```txt
User-agent: *
Allow: /

Sitemap: https://memphisroof.repair/sitemap.xml
```

This is already configured in your `/app/robots.ts` file.

---

## 🎯 Post-Submission Checklist

### Week 1:
- [ ] Verify site ownership in Google Search Console
- [ ] Submit sitemap
- [ ] Request indexing for 5 priority pages
- [ ] Check Coverage report daily
- [ ] Fix any crawl errors

### Week 2-4:
- [ ] Monitor index coverage (should reach 80%+)
- [ ] Check Performance tab for impressions
- [ ] Review Page Experience report
- [ ] Optimize pages with issues
- [ ] Submit any new content

### Ongoing:
- [ ] Check Search Console weekly
- [ ] Monitor keyword rankings
- [ ] Track click-through rates
- [ ] Update content based on insights
- [ ] Submit new blog posts as published

---

## 🚨 Troubleshooting

### Sitemap Not Found:
- Ensure deployment is complete
- Visit `https://memphisroof.repair/sitemap.xml` directly
- Check Vercel deployment logs
- Verify no build errors

### Pages Not Indexing:
- Check `robots.txt` allows crawling
- Verify no `noindex` meta tags
- Ensure pages are linked from other pages
- Use "Request Indexing" in URL Inspection

### Verification Failed:
- Wait 10 minutes for DNS propagation (TXT record)
- Clear browser cache (HTML tag method)
- Re-deploy site (HTML file method)
- Check verification code is correct

---

## 📈 Expected SEO Timeline

### Week 1-2: Initial Indexing
- Sitemap discovered
- 5-10 pages indexed
- Brand name searches appear

### Week 3-4: Growth Phase
- 15-20 pages indexed
- Local keywords start ranking (page 2-3)
- Location pages gain visibility

### Month 2: Acceleration
- All 25+ pages indexed
- Primary keywords reach page 1-2
- Organic traffic increases 50-100%
- Lead forms start converting

### Month 3+: Dominance
- Top 3 rankings for primary keywords
- Featured in AI Overviews (Google SGE)
- 30-50 qualified leads/month
- ROI positive

---

## 💡 Pro Tips

1. **Set up email alerts:**
   - Search Console → Settings → Users and permissions
   - Enable email notifications for:
     - Critical issues
     - New security issues
     - Manual actions

2. **Link Google Analytics:**
   - More detailed traffic data
   - Conversion tracking
   - User behavior insights

3. **Enable Web Vitals:**
   - Monitor Core Web Vitals
   - Optimize for LCP, FID, CLS
   - Maintain green scores

4. **Use Structured Data Testing:**
   - Test JSON-LD at: https://search.google.com/test/rich-results
   - Verify LocalBusiness schema
   - Check FAQ schema markup

---

## 🎊 You're All Set!

Once you submit your sitemap, Google will:
- ✅ Discover all 25+ pages
- ✅ Crawl within 24-48 hours
- ✅ Index within 3-7 days
- ✅ Start showing in search results

**Your LLM-optimized content will help you rank faster than competitors!** 🚀

