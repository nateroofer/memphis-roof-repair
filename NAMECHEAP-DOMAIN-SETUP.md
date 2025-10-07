# 🌐 Namecheap Domain Setup for Vercel

## Complete Guide: memphisroof.repair → Vercel

---

## Step 1: Add Domain to Vercel

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Select your project: `memphis-roof-repair`

2. **Navigate to Domains:**
   - Click on "Settings" tab
   - Click "Domains" in the left sidebar

3. **Add Your Domain:**
   - Enter: `memphisroof.repair`
   - Click "Add"
   - Vercel will show you DNS records to configure

4. **Copy the DNS Records:**
   You'll see something like:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
   
   **Keep this tab open - you'll need these values!**

---

## Step 2: Configure Namecheap DNS

### Login to Namecheap:
1. Go to: https://www.namecheap.com
2. Login to your account
3. Click "Domain List" in left sidebar
4. Find `memphisroof.repair`
5. Click "Manage"

---

### Configure DNS Records:

#### **Option A: Using Namecheap BasicDNS** (Recommended)

1. **Set Nameservers:**
   - Ensure "Namecheap BasicDNS" is selected under "NAMESERVERS"
   - If not, select it from dropdown

2. **Go to Advanced DNS:**
   - Click "Advanced DNS" tab

3. **Remove Default Records:**
   - Delete any existing A records for `@`
   - Delete any existing CNAME records for `www`
   - Keep any MX records (email) if you have them

4. **Add Vercel A Record:**
   - Click "Add New Record"
   - Type: `A Record`
   - Host: `@`
   - Value: `76.76.19.19` (from Vercel)
   - TTL: `Automatic` or `1 min`
   - Click the green checkmark ✓

5. **Add WWW CNAME Record:**
   - Click "Add New Record"
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com` (from Vercel)
   - TTL: `Automatic` or `1 min`
   - Click the green checkmark ✓

6. **Save Changes:**
   - Click "Save all changes" button at top

---

#### **Option B: Using Vercel Nameservers** (Alternative)

If you prefer Vercel to manage all DNS:

1. **In Vercel Dashboard:**
   - When adding domain, select "Use Vercel Nameservers"
   - Copy the nameserver addresses:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```

2. **In Namecheap:**
   - Go to domain → Manage
   - Under "NAMESERVERS"
   - Select "Custom DNS"
   - Enter:
     - Nameserver 1: `ns1.vercel-dns.com`
     - Nameserver 2: `ns2.vercel-dns.com`
   - Click the green checkmark ✓

**Note:** This method gives Vercel full DNS control but takes longer to propagate (24-48 hours).

---

## Step 3: Verify DNS Configuration

### Check DNS Propagation:

**Use DNS Checker Tools:**
1. Visit: https://dnschecker.org
2. Enter: `memphisroof.repair`
3. Select: `A` record type
4. Should show: `76.76.19.19` globally

**Or use Terminal:**
```bash
# Check A record
dig memphisroof.repair

# Check CNAME record
dig www.memphisroof.repair
```

**Expected Output:**
```
memphisroof.repair.     300     IN      A       76.76.19.19
www.memphisroof.repair. 300     IN      CNAME   cname.vercel-dns.com.
```

---

## Step 4: Wait for SSL Certificate

### Vercel Automatic SSL:

Once DNS propagates, Vercel automatically:
1. ✅ Detects DNS records
2. ✅ Issues Let's Encrypt SSL certificate
3. ✅ Enables HTTPS
4. ✅ Redirects HTTP → HTTPS

**Timeline:**
- **DNS Propagation:** 5 minutes - 24 hours (usually 15-30 minutes)
- **SSL Certificate:** Automatic once DNS verifies
- **Total:** Usually 30-60 minutes

### Monitor Status in Vercel:

1. Go to Vercel → Project → Domains
2. You'll see status:
   - ⏳ **Pending**: Waiting for DNS
   - ✅ **Valid**: Domain active with SSL
   - ❌ **Invalid**: DNS configuration issue

---

## Step 5: Test Your Domain

Once SSL is issued:

### Test These URLs:
```
http://memphisroof.repair        → redirects to https
https://memphisroof.repair       → loads site ✅
http://www.memphisroof.repair    → redirects to https
https://www.memphisroof.repair   → loads site ✅
```

### Test All Pages:
```
https://memphisroof.repair/
https://memphisroof.repair/services
https://memphisroof.repair/services/commercial-roofing
https://memphisroof.repair/locations/east-memphis
https://memphisroof.repair/blog
```

---

## 🚨 Troubleshooting

### Domain Not Connecting:

**Problem:** "Domain is not configured correctly"

**Solutions:**
1. **Check DNS Records:**
   ```bash
   dig memphisroof.repair
   ```
   - Should return `76.76.19.19`
   - If not, wait 15 more minutes

2. **Verify Namecheap Settings:**
   - Advanced DNS → Check A record value
   - Ensure no typos in IP address
   - TTL should be low (1 min or Automatic)

3. **Clear DNS Cache:**
   ```bash
   # Mac/Linux
   sudo dscacheutil -flushcache
   
   # Windows
   ipconfig /flushdns
   ```

4. **Use Different DNS Server:**
   - Try accessing from mobile data (different DNS)
   - Use Google DNS: 8.8.8.8

---

### SSL Certificate Not Issuing:

**Problem:** "Certificate pending" for > 1 hour

**Solutions:**
1. **Verify DNS Propagation:**
   - Use https://dnschecker.org
   - Must show Vercel IPs globally

2. **Check CAA Records:**
   - Namecheap → Advanced DNS
   - Look for CAA records
   - If present, add: `letsencrypt.org`

3. **Remove and Re-add Domain:**
   - Vercel → Domains → Click domain
   - Click "Remove" → Confirm
   - Wait 5 minutes
   - Add domain again

4. **Contact Vercel Support:**
   - If issue persists > 4 hours
   - Live chat: https://vercel.com/help

---

### WWW Not Working:

**Problem:** `www.memphisroof.repair` doesn't load

**Solution:**
1. **Check CNAME Record:**
   ```bash
   dig www.memphisroof.repair
   ```
   - Should return `cname.vercel-dns.com`

2. **Verify in Namecheap:**
   - Advanced DNS
   - Host should be exactly: `www`
   - Value should be: `cname.vercel-dns.com`
   - No trailing dots or spaces

---

## 📧 Email Setup (Optional)

### If You Need Email at `*@memphisroof.repair`:

**Namecheap Email Options:**

1. **Private Email ($0.88/month):**
   - Namecheap → Domain → Email Products
   - Purchase Private Email
   - Follow setup wizard

2. **Google Workspace ($6/month):**
   - Better for business
   - Professional email with Gmail interface
   - Setup: https://workspace.google.com

3. **Free Email Forwarding:**
   - Namecheap → Advanced DNS
   - Add MX record
   - Forward to existing Gmail

**Important:** Keep MX records separate from your Vercel A/CNAME records!

---

## 🔐 Security Best Practices

### Enable Domain Lock:
1. Namecheap → Domain List
2. Click lock icon next to `memphisroof.repair`
3. Ensures domain can't be transferred without authorization

### Enable Two-Factor Auth:
1. Namecheap → Profile → Security
2. Enable 2FA
3. Protects against unauthorized access

### Auto-Renew Domain:
1. Namecheap → Domain List
2. Toggle "Auto-Renew" to ON
3. Prevents accidental expiration

---

## ✅ Final Checklist

### Namecheap Side:
- [ ] A record: `@` → `76.76.19.19`
- [ ] CNAME record: `www` → `cname.vercel-dns.com`
- [ ] TTL set to low value (1 min or Auto)
- [ ] No conflicting records
- [ ] Changes saved

### Vercel Side:
- [ ] Domain added to project
- [ ] DNS configuration showing "Valid"
- [ ] SSL certificate issued
- [ ] HTTPS enabled
- [ ] All pages loading

### Testing:
- [ ] `memphisroof.repair` loads
- [ ] `www.memphisroof.repair` loads
- [ ] HTTP redirects to HTTPS
- [ ] All 25+ pages accessible
- [ ] Forms work correctly
- [ ] Cost calculator functional

---

## 📊 DNS Record Reference

### Your Complete DNS Configuration:

```
# Vercel Website Records
Type    Host    Value                   TTL
====    ====    =====                   ===
A       @       76.76.19.19            Automatic
CNAME   www     cname.vercel-dns.com   Automatic

# Email Records (if using email)
MX      @       [your email provider]   Automatic

# Google Verification (after adding to Search Console)
TXT     @       google-site-verification=YOUR_CODE
```

---

## 🎯 Expected Timeline

### Immediate (0-5 minutes):
- Domain added to Vercel
- DNS records configured in Namecheap

### Short-term (15-60 minutes):
- DNS propagates globally
- Vercel detects domain
- SSL certificate issued automatically

### Same Day (1-4 hours):
- Domain fully active
- HTTPS working
- All redirects functional

### Next Day:
- Email Google Search Console verification
- Submit sitemap
- Start ranking in search

---

## 💡 Pro Tips

1. **Use Low TTL Initially:**
   - Set TTL to 1 minute during setup
   - Allows faster changes if needed
   - Increase to 1 hour once stable

2. **Test Immediately:**
   - Don't wait 24 hours
   - Most changes propagate in 15-30 minutes
   - Use `dig` command to check directly

3. **Redirect Root Domain:**
   - Decide: `memphisroof.repair` or `www.memphisroof.repair`
   - Vercel handles redirects automatically
   - Choose one as canonical URL

4. **Monitor Uptime:**
   - Use: https://uptimerobot.com (free)
   - Get alerts if site goes down
   - 5-minute checks

---

## 🎊 You're Ready!

Once DNS propagates (15-60 minutes), your Memphis roofing empire will be live at:

**🌐 https://memphisroof.repair**

With:
- ✅ SSL Certificate (HTTPS)
- ✅ 25+ SEO-Optimized Pages
- ✅ Interactive Cost Calculator
- ✅ Lead Capture Forms
- ✅ Email Notifications
- ✅ LLM-First Content

---

**Need help? Run into issues? Let me know!** 🚀

