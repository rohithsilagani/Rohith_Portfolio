/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0055FF', // Data Blue
        accent: '#FF3E00',  // Insight Orange
        dark: '#050505',    // Midnight workspace
      },
      fontFamily: {
        tech: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
