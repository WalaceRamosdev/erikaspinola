/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1F3A2E',
        'brand-gold': '#C9A96A',
        'brand-white': '#F8F8F8',
        'brand-light': '#F0EFEA', // neutral light for bg
        'brand-dark': '#11221B'
      },
      fontFamily: {
        sans: ['Inter', 'Lato', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
}
