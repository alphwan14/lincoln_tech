# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure EmailJS

### Option A: Using EmailJS (Recommended - Free tier available)

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Create `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Option B: Using Nodemailer (Requires backend)

If you prefer Nodemailer, you'll need to:
1. Create an API route in `app/api/contact/route.ts`
2. Set up SMTP credentials
3. Update the contact form to call the API route instead

## 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 4. Customize Content

- **Company Info**: Update `components/Footer.tsx`
- **Services**: Edit `app/services/page.tsx`
- **About**: Edit `app/about/page.tsx`
- **Portfolio**: Edit `app/portfolio/page.tsx`
- **Testimonials**: Edit `app/page.tsx` (TestimonialsSection component)
- **Colors**: Modify `tailwind.config.ts`

## 5. Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

### Contact Form Not Sending

1. Check that `.env.local` file exists and has correct values
2. Verify EmailJS service is active
3. Check browser console for errors
4. Ensure EmailJS template variables match the form data

### Styling Issues

1. Clear `.next` cache: `rm -rf .next`
2. Rebuild: `npm run build`

### Build Errors

1. Ensure all dependencies are installed: `npm install`
2. Check TypeScript errors: `npm run lint`
3. Verify Node.js version is 18+

## Need Help?

Check the main README.md for detailed documentation.

