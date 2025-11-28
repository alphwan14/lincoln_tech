# Lincoln Tech - Company Website

A modern, production-ready company website built with Next.js, TypeScript, and Tailwind CSS. This website positions Lincoln Tech as a problem-solving technology company with a focus on helping businesses grow.

## Features

- 🎨 **Modern Design**: Clean, professional, tech-oriented UI with smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations**: Framer Motion animations and scroll effects
- 📧 **Contact Form**: Integrated Resend API for sending messages
- 🔍 **SEO Optimized**: Proper metadata and semantic HTML
- 🎯 **Problem-Solving Focus**: Content emphasizes solving business problems

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: Resend

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd lincoln_tech
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create `.env.local` file
   - Add your Resend API key and receiver email (see Resend Setup below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Resend Setup

The contact form uses Resend to send messages to **alphwan14@gmail.com**. 

📖 **For detailed step-by-step instructions, see [RESEND_SETUP.md](./RESEND_SETUP.md)**

### Quick Setup:

1. Create an account at [https://resend.com/](https://resend.com/)
2. Get your API key from the [API Keys](https://resend.com/api-keys) page
3. Create `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECEIVER_EMAIL=alphwan14@gmail.com
```

4. Replace `re_your_api_key_here` with your actual Resend API key

### For Vercel Deployment:

Add the same environment variables in Vercel:
- Go to **Settings** → **Environment Variables**
- Add `RESEND_API_KEY` and `CONTACT_RECEIVER_EMAIL`
- Enable for Production, Preview, and Development
- Redeploy your site

**Note:** The contact form sends emails via a server-side API route (`/api/send`), so no client-side secrets are exposed.

## Project Structure

```
lincoln_tech/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.ts      # Resend API route for contact form
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── Footer.tsx            # Footer component
│   └── Header.tsx             # Header/Navigation component
├── public/                    # Static assets
├── .env.example              # Environment variables example
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Dependencies
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. You can modify:

- `primary.dark`: Main dark color (#0A1A2F)
- `primary.light`: Accent color (#00E0FF)
- `secondary.dark`: Secondary dark (#111111)
- `secondary.light`: Secondary accent (#4BB4FF)

### Content

- Update company information in `components/Footer.tsx`
- Modify services in `app/services/page.tsx`
- Update testimonials in `app/page.tsx`
- Change portfolio projects in `app/portfolio/page.tsx`

### Fonts

Fonts are configured in `app/layout.tsx`. The site uses:
- Inter (primary)
- Poppins (secondary)
- Montserrat (tertiary)

## Building for Production

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

Or deploy to platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

## SEO Optimization

The site includes:
- Proper meta tags in `app/layout.tsx`
- Semantic HTML structure
- Open Graph tags for social sharing
- Descriptive page titles and descriptions

Update metadata in each page's metadata export for better SEO.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For questions or issues, contact: contact@lincolntech.com

---

Built with ❤️ by Lincoln Tech

