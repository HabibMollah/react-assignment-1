/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#499aed',
      secondary: '#edf1f5',
      accent: '#f2f4fa',
    },
    extend: {
      fontFamily: {
        saira: ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
