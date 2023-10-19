/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      'mobile': "320px",

      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    extend: {
      colors: {
        "white": "#fff",
        "white-hover": "#cccccc",
        "black": "#000",
        "black-hover": "#242424",
        "footer-color": "#1E1E1E",
        "gray": "#C8C8C8"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}