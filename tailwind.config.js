/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        green_1: '#344e41',
        green_2: '#3a5a40',
        green_3: '#588157',
        green_4: '#a3b18a',
        green_5: '#dad7cd',
      }
    },
  },
  plugins: [],
}

