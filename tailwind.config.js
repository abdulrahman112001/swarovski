/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        'mid-screen': { max: '1010px' },
        // 'sm-m': { min: '0', max: '400px' },
      },
      colors: {
        mainBlue: '#1A3760',
        hoverGray: '#f5f5f5',
        bgGray: '#e6e6e6',
        subYellow: '#E6AA1B',
        backBlue: '#0A2357',
        backSkyBlue: '#cff4fc',
        backDarkBlue: '#151a35',
        mainGray: '#6c757d',
        subGray: '#5c636a',
        lightGray: '#F9F9F9',
        darkMode: '#1A1B1E',
      },
    },
  },
  plugins: [],
};
