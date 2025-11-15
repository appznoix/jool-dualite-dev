/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-deep': '#0A2463',
        'ocean-light': '#1E3A5F',
        'gold-elegant': '#C9A961',
        'gold-highlight': '#D4AF77',
        'brand-light': '#F8F9FA',
        'brand-gray': '#E8E9EA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
