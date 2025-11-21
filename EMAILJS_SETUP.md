# EmailJS Setup Guide for Lincoln Tech

This guide will help you configure EmailJS to send contact form messages to **alphwan14@gmail.com**.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (free account is sufficient)
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended since you're using Gmail)
4. Click **Connect Account** and authorize EmailJS to access your Gmail
5. **Important**: Make sure the service is connected to the Gmail account that can receive emails at `alphwan14@gmail.com`
6. Note your **Service ID** (e.g., `service_xxxxxxx`)

### Alternative: Use Custom SMTP

If you prefer not to connect Gmail directly:
1. Choose **Custom SMTP** instead
2. Enter your Gmail SMTP settings:
   - **SMTP Server**: `smtp.gmail.com`
   - **SMTP Port**: `587`
   - **SMTP Username**: `alphwan14@gmail.com`
   - **SMTP Password**: Use an [App Password](https://support.google.com/accounts/answer/185833) (not your regular password)

## Step 3: Create Email Template

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use the following template:

### Template Settings:
- **Template Name**: `Contact Form Template`
- **Subject**: `New Contact Form Message from {{from_name}}`

### Template Content:
```
From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Important**: In the template settings, set the **To Email** field to: `alphwan14@gmail.com`
   - This ensures all emails go to your address
5. Note your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual values:
   - `your_service_id_here` → Your Service ID from Step 2
   - `your_template_id_here` → Your Template ID from Step 3
   - `your_public_key_here` → Your Public Key from Step 4

### Example:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Test the Contact Form

1. Make sure your development server is running:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/contact`

3. Fill out the contact form with test data

4. Click **Send Message**

5. Check your email inbox at `alphwan14@gmail.com`

6. You should receive an email with the form data

## Troubleshooting

### Emails Not Arriving

1. **Check Spam Folder**: Sometimes emails go to spam initially
2. **Verify Service Connection**: Make sure your email service is connected and active
3. **Check Template Settings**: Ensure "To Email" is set to `alphwan14@gmail.com`
4. **Check Console**: Open browser DevTools (F12) and check the Console tab for errors
5. **Verify Environment Variables**: Make sure `.env.local` has correct values and restart the dev server

### "EmailJS is not configured" Error

- Make sure `.env.local` exists in the project root
- Verify all three environment variables are set
- Restart your development server after adding/changing `.env.local`

### Gmail Connection Issues

- Make sure you're using the correct Gmail account
- If using App Password, ensure it's generated correctly
- Check Gmail security settings to allow less secure apps (if needed)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Gmail integration

For higher limits, consider upgrading to a paid plan.

## Security Note

Never commit `.env.local` to version control. It's already in `.gitignore` for your protection.

---

Once configured, all contact form submissions will be sent to **alphwan14@gmail.com** automatically!

