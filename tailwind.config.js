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
        "white-active": "#b0b0b0",
        "white-alpha": "rgba(255,255,255, 0.4)",
        "black": "#000000",
        "black-hover": "#242424",
        "black-active": "#363535",
        "black-alpha": "rgba(0, 0, 0, 0.4)",
        "footer-color": "#1E1E1E",
        "footer-color-active": "#211f1f",
        "gray": "#C8C8C8",
        "gray-active": "#a6a6a6",
        "orange": "#E44B09",
        "orange-hover": "#c24008",
        "orange-active": "#a83707",
      },
      boxShadow: {
        "black-btn": "0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
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