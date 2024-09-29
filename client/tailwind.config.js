/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          'dark-bg': '#0d1117',
          'dark-input': '#1c2128',
          'dark-border': '#30363d',
          'light-bg': '#ffffff',
          'light-input': '#f3f4f6',
          'light-border': '#d1d5db',
          'accent-blue': '#0066ff',
          'custom-pink': '#ff69b4',
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  }