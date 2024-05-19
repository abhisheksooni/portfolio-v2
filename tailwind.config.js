/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:'#191919',
        color2:'#343434',
        color3:'#E8E5DE',
      },
    },
    
  },
  plugins: [],
}

