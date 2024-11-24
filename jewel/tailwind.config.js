/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Century Gothic', 'sans-serif'],  // Century Gothic for sans-serif
        script: ['Great Vibes', 'cursive'],  // Script font (Great Vibes or other)
        calligraphy: ['Lucida Calligraphy', 'cursive'],  // Lucida Calligraphy font
      },
    },
  },
  plugins: [],
}
