/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f3ff',
          100: '#e6ebff',
          200: '#d0d9ff',
          300: '#a8bcff',
          400: '#7a94ff',
          500: '#4f6bff',
          600: '#3347f5',
          700: '#2632d8',
          800: '#1f29b0',
          900: '#070c44',
        },
        secondary: {
          50: '#f0f2ff',
          100: '#e3e7ff',
          200: '#ccd4ff',
          300: '#a5b6ff',
          400: '#768dff',
          500: '#4961ff',
          600: '#2d3ef7',
          700: '#1f2ce3',
          800: '#1a25c0',
          900: '#0a1154',
        },
        accent: {
          50: '#f0f1ff',
          100: '#e3e6ff',
          200: '#ccd1ff',
          300: '#a6b0ff',
          400: '#7d87ff',
          500: '#5c66ff',
          600: '#4449f7',
          700: '#3135e3',
          800: '#282bc0',
          900: '#0f1254',
        },
        dark: {
          100: '#1e1e2a',
          200: '#191925',
          300: '#15151e',
          400: '#111118',
          500: '#0e0e14',
          600: '#0a0a0f',
          700: '#08080c',
          800: '#060609',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}