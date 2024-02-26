/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FC6736',
        'secondary':'#0C2D57',
        'off-white':'#EFECEC'
      }
    },
  },
  plugins: [],
}

