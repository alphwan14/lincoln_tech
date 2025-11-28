# Troubleshooting Contact Form Issues

## Error: "Unexpected token '<', "<!DOCTYPE "... is not valid JSON"

This error means the API route is returning HTML (an error page) instead of JSON. Here's how to fix it:

### Step 1: Install Dependencies

Make sure Resend is installed:

```bash
npm install
```

### Step 2: Check Environment Variables

**For Local Development:**

Create `.env.local` in the project root:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_RECEIVER_EMAIL=alphwan14@gmail.com
```

**For Vercel:**

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `RESEND_API_KEY` = Your Resend API key
   - `CONTACT_RECEIVER_EMAIL` = `alphwan14@gmail.com`
3. Enable for: Production, Preview, Development
4. **Redeploy** after adding variables

### Step 3: Verify API Route Exists

Make sure the file exists at: `app/api/send/route.ts`

### Step 4: Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Try submitting the form
4. Look for detailed error messages

### Step 5: Check Server Logs

**For Local Development:**
- Check the terminal where `npm run dev` is running
- Look for error messages

**For Vercel:**
- Go to Vercel Dashboard → Your Project → Deployments
- Click on the latest deployment
- Check the "Functions" tab for error logs

### Common Issues:

1. **Resend package not installed**
   - Solution: Run `npm install`

2. **Environment variables not set**
   - Solution: Add `.env.local` (local) or set in Vercel (production)

3. **Invalid Resend API key**
   - Solution: Get a new API key from [Resend Dashboard](https://resend.com/api-keys)

4. **API route not found**
   - Solution: Make sure `app/api/send/route.ts` exists and is properly formatted

5. **Next.js build error**
   - Solution: Run `npm run build` to check for build errors

### Testing the API Route Directly

You can test the API route directly using curl:

```bash
curl -X POST http://localhost:3000/api/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+254 123 456 789",
    "message": "Test message",
    "time": "Test time"
  }'
```

You should get a JSON response. If you get HTML, there's an error in the route.

### Still Having Issues?

1. Check that all files are saved
2. Restart your development server: `npm run dev`
3. Clear Next.js cache: `rm -rf .next` then rebuild
4. Verify Resend API key is active in Resend dashboard
5. Check Resend email logs at [resend.com/emails](https://resend.com/emails)

