/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

export default {
  // prefix: 'tw-',
  // corePlugins: {
  //   margin: false,
  //   padding: false,
  //   backgroundColor: false,
  //   backgroundPosition: false,
  //   borderColor: false,
  //   borderWidth: false,
  //   borderRadius: false,
  //   colors: false,
  //   padding: false,
  //   fontFamily: false,
  //   fontSize: false,
  // },   
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        roboto: 'Roboto',
      },
      colors: {
        red: '#dc2626',
        teal: '#115e59',
        sky: '#0369a1',
        indigo: '#4338ca',
        white: '#fecaca',
        blue: colors.blue,
      },
      spacing: {
        '1gri': '0.5rem',
        '2gri': '0.75rem',
        '3gri': '1rem',
        '4gri': '24px',
        '5gri': '2rem',
        '6gri': '3rem',
      },
      screens: {
        xl: { max: '1399.98px' },
        lg: { max: '1199.98px' },
        md: { max: '991.98px' },
        sm: { max: '767.98px' },
        xs: { max: '575.98' },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/forms'),
    require('autoprefixer'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.gri-btn': {
          padding: theme('spacing.2gri'),
          borderRadius: theme('spacing.1gri'),
          fontWeight: '700',
          fontFamily: theme('fontFamily.roboto'),
          border: 'none',
          backgroundColor: theme('colors.sky'),
          textTransform: 'uppercase',
          letterSpacing: '2px',
          outline: 'none',
          color: theme('colors.white')          
        },
      });
    }),
  ],
};
