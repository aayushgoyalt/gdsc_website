/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gdsc-blue": "#4884ed",
        "gdsc-red": "#db3236",
        "gdsc-green": "#3dba54",
        "gdsc-yellow": "#f4c20c",
      },
    },
  },
  plugins: [], 
}
