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
        }
    },
    fontFamily: {
      'bangla': ['Tiro Bangla', 'serif']

    }
  },
  plugins: [],
}