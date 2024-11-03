/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      
        animation: {
          marquee: 'marquee 25s linear infinite',
          marquee2: 'marquee2 15s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(20%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          marquee2: {
            '0%': { transform: 'translateX(90%)' },
            '100%': { transform: 'translateX(10%)' },
          },
        },
        colors: {
          'gvd-r': '#FF0000',
          'gvd-b': '#0000FF',
          'gvd-black': '#000000',
          'gvd-cy': '#33ffbc',
          'gvd-cy2': '#0081e4',
          'gvd-bu2': '#3830f6',
          'gvd-sky': '#00b3ff',
          'gvd-hx': '#01d2a7',
          'gvd-bug': '#1b0077',
          'gvd-green': '#05a403',
          'gvd-sec': '#00b109',
          'gvd-sect': '#005604',
          'goved-as' : '#E5DDC8',
          'goved-pp' : '#01949A',
          'goved-aa' : '#004369',
          'goved-ss' :'#DB1F48'
        
        },
    },
    fontFamily: {
      'bangla': ['Tiro Bangla', 'serif'],
      'open': ['Poppins', 'sans-serif']

    }
  },
  plugins: [],
}