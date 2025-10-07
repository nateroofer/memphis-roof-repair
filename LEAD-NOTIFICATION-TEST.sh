#!/bin/bash

# Lead Notification Test Script
# Run this to test your lead capture + email notifications

echo "🧪 Testing Zion Roof Lead Notification System"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if server is running
echo "Checking if dev server is running..."
if ! curl -s http://localhost:3001 > /dev/null; then
    echo -e "${RED}❌ Dev server not running!${NC}"
    echo "Please run: pnpm dev"
    exit 1
fi
echo -e "${GREEN}✅ Server is running${NC}"
echo ""

# Test lead submission
echo "�� Submitting test lead..."
RESPONSE=$(curl -s -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Customer",
    "email": "test@example.com",
    "phone": "(901) 555-0123",
    "service": "Roof Inspection",
    "message": "This is a test lead from the automated test script",
    "source": "test-script"
  }')

echo "Response: $RESPONSE"
echo ""

# Check if successful
if echo "$RESPONSE" | grep -q '"success":true'; then
    echo -e "${GREEN}✅ Lead submitted successfully!${NC}"
    echo ""
    echo "Check the following:"
    echo "1. ${YELLOW}Supabase:${NC} Go to your Supabase dashboard → leads table"
    echo "2. ${YELLOW}Email:${NC} Check your inbox at the ADMIN_EMAIL address"
    echo "3. ${YELLOW}Slack:${NC} Check your Slack channel (if configured)"
    echo "4. ${YELLOW}Logs:${NC} Check terminal where 'pnpm dev' is running"
else
    echo -e "${RED}❌ Lead submission failed${NC}"
    echo "Response: $RESPONSE"
fi

echo ""
echo "=============================================="
echo "Test complete!"
