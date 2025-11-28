# Resend Setup Guide for Lincoln Tech

This guide will help you configure Resend to send contact form messages to **alphwan14@gmail.com**.

## What is Resend?

Resend is a modern email API for developers. It's reliable, fast, and perfect for transactional emails like contact forms.

## Step 1: Create Resend Account

1. Go to [https://resend.com/](https://resend.com/)
2. Click **Sign Up** (free tier includes 3,000 emails/month)
3. Verify your email address
4. Complete the onboarding process

## Step 2: Get Your API Key

1. After logging in, go to [API Keys](https://resend.com/api-keys)
2. Click **Create API Key**
3. Give it a name (e.g., "Lincoln Tech Contact Form")
4. Copy the API key immediately (you won't be able to see it again!)
5. The key will look like: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**Important:** Keep this key secure and never commit it to version control.

## Step 3: Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain:

1. Go to [Domains](https://resend.com/domains) in Resend dashboard
2. Click **Add Domain**
3. Enter your domain (e.g., `lincolntech.com` or `lincoln-tech.vercel.app`)
4. Follow the DNS setup instructions
5. Wait for verification (usually takes a few minutes)

**Note:** For testing, you can use the default `onboarding@resend.dev` sender, but it's limited. For production, domain verification is recommended.

## Step 4: Configure Environment Variables

### For Local Development:

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECEIVER_EMAIL=alphwan14@gmail.com
```

3. Replace `re_your_api_key_here` with your actual Resend API key from Step 2

### For Vercel Deployment (Production):

**CRITICAL: You must add environment variables in Vercel!**

1. Go to your Vercel project dashboard: [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your `lincoln-tech` project
3. Go to **Settings** → **Environment Variables**
4. Add the following two variables:

   | Name | Value |
   |------|-------|
   | `RESEND_API_KEY` | Your Resend API key (e.g., `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`) |
   | `CONTACT_RECEIVER_EMAIL` | `alphwan14@gmail.com` |

5. **Important**: Make sure to select all environments:
   - ☑ Production
   - ☑ Preview
   - ☑ Development

6. Click **Save** for each variable

7. **Redeploy your site** after adding environment variables:
   - Go to **Deployments** tab
   - Click the three dots (⋯) on the latest deployment
   - Click **Redeploy**

## Step 5: Update Sender Email (After Domain Verification)

Once you've verified your domain in Resend:

1. Open `app/api/send/route.ts`
2. Find this line:
   ```typescript
   from: 'Lincoln Tech Contact Form <onboarding@resend.dev>',
   ```
3. Replace with your verified domain:
   ```typescript
   from: 'Lincoln Tech Contact Form <contact@yourdomain.com>',
   ```
4. Replace `yourdomain.com` with your actual verified domain

## Step 6: Test the Contact Form

1. Make sure your development server is running:
   ```bash
   npm install  # Install Resend package
   npm run dev
   ```

2. Navigate to `http://localhost:3000/contact`

3. Fill out the contact form with test data

4. Click **Send Message**

5. Check your email inbox at `alphwan14@gmail.com`

6. You should receive a beautifully formatted HTML email with all the form data

## Troubleshooting

### "Email service is not configured" Error

- Make sure `RESEND_API_KEY` is set in your `.env.local` (local) or Vercel environment variables (production)
- Verify the API key is correct and active in Resend dashboard
- Restart your development server after adding `.env.local`

### "Receiver email is not configured" Error

- Make sure `CONTACT_RECEIVER_EMAIL` is set in your `.env.local` (local) or Vercel environment variables (production)
- Verify the email address is correct

### Emails Not Arriving

1. **Check Spam Folder**: Sometimes emails go to spam initially
2. **Verify API Key**: Check that your Resend API key is active in the dashboard
3. **Check Resend Dashboard**: Go to [Logs](https://resend.com/emails) to see email delivery status
4. **Check Console**: Open browser DevTools (F12) and check the Console tab for errors
5. **Verify Environment Variables**: 
   - Local: Make sure `.env.local` has correct values and restart the dev server
   - Production: Check Vercel environment variables are set correctly

### "Invalid email format" Error

- Make sure the email address in the form is valid
- Check for typos in the email field

### CORS Errors

- The API route is server-side only, so CORS shouldn't be an issue
- If you see CORS errors, check that you're calling `/api/send` (not an external URL)

### Rate Limiting

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day

If you exceed these limits, you'll need to upgrade your Resend plan.

## Security Notes

- ✅ `RESEND_API_KEY` is a server-side secret - never expose it in client-side code
- ✅ The API key is stored in environment variables (not in code)
- ✅ Never commit `.env.local` to version control (already in `.gitignore`)
- ✅ The API route validates all inputs before sending

## API Route Details

The contact form sends a POST request to `/api/send` with this payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+254 123 456 789",
  "message": "Hello, I need help with...",
  "time": "Monday, January 1, 2024 at 12:00:00 PM EAT"
}
```

The API route:
- Validates all inputs
- Sanitizes data
- Sends a beautifully formatted HTML email
- Returns success/error responses
- Handles errors gracefully

## Free Tier Limits

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- Basic email templates
- Email logs and analytics

For higher limits, consider upgrading to a paid plan.

---

Once configured, all contact form submissions will be sent to **alphwan14@gmail.com** automatically!

