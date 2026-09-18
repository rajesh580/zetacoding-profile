/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo-led brand palette: purple wordmark, green AI mark, clean white UI.
        zetaPurple: {
          950: '#1f0628',
          900: '#32103f',
          800: '#5f2f70',
          700: '#6f3b7f',
          600: '#814892',
          500: '#9561a4',
          400: '#ad82ba',
          300: '#c8aad0',
          200: '#e1cfe7',
          100: '#f1e7f5',
          50: '#fbf8fc',
        },
        zetaGreen: {
          900: '#244b13',
          800: '#356c1d',
          700: '#468d27',
          600: '#5ba936',
          500: '#72bf44',
          400: '#8cd25f',
          300: '#aee58c',
          200: '#cff2ba',
          100: '#e7f9db',
          50: '#f5fcf1',
        },
        zetaGold: {
          600: '#d99706',
          500: '#f0b31a', // Exact PDF Gold Wreath
          400: '#fbbf24',
          300: '#fde047',
          100: '#fef9c3',
          50: '#fefce8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
