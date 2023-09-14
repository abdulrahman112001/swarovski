/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        'phone-screen': { max: '480px' },
        'mid-screen': { max: '1010px' },
        's-500': { max: '500px' },
        's-800': { max: '800px' },
        's-900': { max: '900px' },

        'xs-m': { min: '0', max: '400px' },
        'sm-m': { max: '576px' },
        'md-m': { max: '768px' },
        'lg-m': { max: '992px' },
        'xl-m': { max: '1279px' },
        'xxl-m': { max: '1400px' },
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
