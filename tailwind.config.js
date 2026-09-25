/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        indigo: { 950:'#141b42', 900:'#1c2657', 800:'#232f6e', 700:'#2d3c8a', 600:'#3949a3', 500:'#4a5bc4', 100:'#e4e7fb', 50:'#f2f3fd' },
        ember: { 600:'#f2650f', 500:'#ff7a29', 50:'#fff2e9' },
        leaf: { 500:'#16a34a', 50:'#eefdf3' },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
