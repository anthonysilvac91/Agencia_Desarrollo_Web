/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)',
        'blue-dark': 'var(--blue-dark)',
        'blue-light': 'var(--blue-light)',
        'black': 'var(--black)',
        'green': 'var(--green)',
        'gray': 'var(--gray)',
      },
      padding:{
        'psm': '25px',
        'pmd': '50px',
        'pxl': '150px',
        'p2xl': '200px',
        'p3xl': '300px',
      },
      screens:{
        '3xl': '1920px'
      },
      height: {
        '90vh': '90vh',
      },
      
      
        
     
    },
  },
  plugins: [],
}