// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // Aquí está la magia: esto le dice a Tailwind
  // que escanee todos tus archivos .jsx en src
  // para encontrar clases.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}