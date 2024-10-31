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
      
      
        
     
    },
  },
  plugins: [],
}