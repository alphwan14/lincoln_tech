import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A1A2F',
          light: '#00E0FF',
        },
        secondary: {
          dark: '#111111',
          light: '#4BB4FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

