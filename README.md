# Lincoln Tech - Company Website

A modern, production-ready company website built with Next.js, TypeScript, and Tailwind CSS. This website positions Lincoln Tech as a problem-solving technology company with a focus on helping businesses grow.

## Features

- 🎨 **Modern Design**: Clean, professional, tech-oriented UI with smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations**: Framer Motion animations and scroll effects
- 📧 **Contact Form**: Integrated EmailJS for sending messages
- 🔍 **SEO Optimized**: Proper metadata and semantic HTML
- 🎯 **Problem-Solving Focus**: Content emphasizes solving business problems

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS

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
   - Copy `.env.example` to `.env.local`
   - Fill in your EmailJS credentials (see EmailJS Setup below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## EmailJS Setup

The contact form uses EmailJS to send messages to **alphwan14@gmail.com**. 

📖 **For detailed step-by-step instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)**

### Quick Setup:

1. Create an account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Add an email service (Gmail recommended)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{message}}`
   - `{{reply_to}}`
4. Set the template's "To Email" to: `alphwan14@gmail.com`
5. Get your Service ID, Template ID, and Public Key
6. Create `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the placeholder values with your actual EmailJS credentials.

### Alternative: SMS/WhatsApp Integration

If you want to add SMS or WhatsApp notifications, you can:

1. **SMS via Twilio**: Use Twilio API to send SMS notifications
2. **WhatsApp Business API**: Use WhatsApp Business API for direct messaging
3. **EmailJS SMS**: EmailJS also supports SMS templates

For SMS integration, you would need to:
- Set up a Twilio account or WhatsApp Business account
- Add the API credentials to your environment variables
- Modify the contact form to send SMS notifications

## Project Structure

```
lincoln_tech/
├── app/
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

