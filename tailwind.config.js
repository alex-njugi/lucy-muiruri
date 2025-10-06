
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f5",
          100: "#ffe4ec",
          200: "#fecddc",
          300: "#fda4ba",
          400: "#fb7185",
          500: "#f43f5e", // rose
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337"
        },
        accent: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa", // violet
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95"
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706"
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(244,63,94,0.15)',
        'glow': '0 0 0 6px rgba(167,139,250,0.15)',
      },
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif','system-ui','sans-serif'],
        body: ['"Inter"', 'ui-sans-serif','system-ui','sans-serif']
      }
    },
  },
  plugins: []
}
