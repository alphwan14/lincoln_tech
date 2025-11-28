# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Resend

1. Sign up at [https://resend.com/](https://resend.com/)
2. Get your API key from the [API Keys](https://resend.com/api-keys) page
3. Create `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECEIVER_EMAIL=alphwan14@gmail.com
```

4. Replace `re_your_api_key_here` with your actual Resend API key

📖 **For detailed setup instructions, see [RESEND_SETUP.md](./RESEND_SETUP.md)**

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
2. Verify `RESEND_API_KEY` and `CONTACT_RECEIVER_EMAIL` are set
3. Check browser console for errors
4. Verify your Resend API key is active in the Resend dashboard
5. Check Resend email logs for delivery status

### Styling Issues

1. Clear `.next` cache: `rm -rf .next`
2. Rebuild: `npm run build`

### Build Errors

1. Ensure all dependencies are installed: `npm install`
2. Check TypeScript errors: `npm run lint`
3. Verify Node.js version is 18+

## Need Help?

Check the main README.md for detailed documentation.

