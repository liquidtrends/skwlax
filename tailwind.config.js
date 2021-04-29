const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily:{
          'lato': ['Lato', 'sans-serif']
        },
        colors: {
          'skwlax':'#752E1D',
          'black': {
            DEFAULT: '#000000',
            '50': '#F9FAFB',
            '100': '#F3F4F6',
            '200': '#4D4D4D',
            '300': '#333333',
            '400': '#1A1A1A',
            '500': '#000000',
            '600': '#000000',
            '700': '#000000',
            '800': '#000000',
            '900': '#000000'
          },
          'white': '#fff',
          'transparent': 'transparent'
        },
      extend: {
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.8s ease-out'
            }
        },
    },
    variants: {
      extend: {
        pointerEvents: ['hover', 'focus'],
      },
    },
    plugins: [],
  }
