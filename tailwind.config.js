/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{hbs,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
    },
    screens: {
      mb: '575px',
      sm: '768px',
      md: '991px',
      lg: '1280px',
      xl: '1600px',
      'xl-max': {'max': '1600px'},
      'lg-max': {'max': '1280px'},
      'md-max': {'max': '991px'},
      'sm-max': {'max': '768px'},
      'mb-max': {'max': '575px'},
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#363845',
        body: '#363845',
        primary: '#363845',
        secondary: '#B3B5BF',
        pink: '#ED1651',
        pinkDark: '#DD154C',
        pinkDark2:  '#CD2050',
        green: '#A6CE39',
        greenDark: '#33b309',
        light: '#EFEFF0',
        lightSecondary: '#DFE2EA',
        grey: '#C6C9D5',
        grey2: '#eeeff0',
        grey3: '#ECEDF0',
        grey4: '#EDEFF1',
        greyBorder: '#DADBE2',
        greyLight: '#CED1DB',
        grey25: '#5B5E67',
        grey50: '#818696',
        grey75: '#C2C4CD',
        grey100: '#DADEE3',
        greySecondary: '#B2B5BF',
        greyDark: '#7C808E',
        greenLight: '#EBF0DC',
        greyBg: '#F2F1EF',
        greyTiny: ' #EDEEF1',
        grizzly: '#D6D9E0',
        greyElem: '#b4b6bf',
        orange: '#ED9512',
        arrow: '#818696',
        lime: '#9CCD18',
        blue: '#315284'
      },
      fontSize: {
          xs: ['12px', '15px'],
          sm: ['13px', '150%'],
          tiny: '14px',
          small: '15px',
          base: ['16px', '150%'],
          lg: ['18px', '130%'],
          'large': ['20px', '130%'],
          xl: '22px',
          '2xl': ['24px', '31px'],
          'xl-large': ['26px', '36px'],
          '3xl': ['30px', '39px'],
          '3xl-large': ['32px', '36px'],
          '4xl': ['36px', '46px'],
          '5xl': ['46px', '46px'],
      },
      spacing: {
        0: 0,
        1: '6px',
        2: '12px',
        3: '18px',
        4: '24px',
        5: '30px',
        6: '60px',
        7: '20px',
        8: '8px',
        9: '16px'
      },

      maxHeight: {

      },
      minWidth: {

      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        99: '99',
        9: '9',
        1: '1',
      },
      opacity: {
        65: '.65',
      },
      transitionProperty: { width: 'width', stroke: 'stroke' },
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
        card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        switcher:
          '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
        4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
        5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
        6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
        7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
        8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
      },
      dropShadow: {
        1: '0px 1px 0px #E2E8F0',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
      },
      keyframes: {
        linspin: {
          '100%': { transform: 'rotate(360deg)' },
        },
        easespin: {
          '12.5%': { transform: 'rotate(135deg)' },
          '25%': { transform: 'rotate(270deg)' },
          '37.5%': { transform: 'rotate(405deg)' },
          '50%': { transform: 'rotate(540deg)' },
          '62.5%': { transform: 'rotate(675deg)' },
          '75%': { transform: 'rotate(810deg)' },
          '87.5%': { transform: 'rotate(945deg)' },
          '100%': { transform: 'rotate(1080deg)' },
        },
        'left-spin': {
          '0%': { transform: 'rotate(130deg)' },
          '50%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(130deg)' },
        },
        'right-spin': {
          '0%': { transform: 'rotate(-130deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-130deg)' },
        },
        rotating: {
          '0%, 100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(0deg)' },
        },
        topbottom: {
          '0%, 100%': { transform: 'translate3d(0, -100%, 0)' },
          '50%': { transform: 'translate3d(0, 0, 0)' },
        },
        bottomtop: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -100%, 0)' },
        },
      },
      animation: {
        linspin: 'linspin 1568.2353ms linear infinite',
        easespin: 'easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        'left-spin':
          'left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        'right-spin':
          'right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
        rotating: 'rotating 30s linear infinite',
        topbottom: 'topbottom 60s infinite alternate linear',
        bottomtop: 'bottomtop 60s infinite alternate linear',
        'spin-1.5': 'spin 1.5s linear infinite',
        'spin-2': 'spin 2s linear infinite',
        'spin-3': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '20px',
          paddingRight: '20px',
          position: 'relative',
          margin: '0 auto',
          '@screen md': {
            maxWidth: '960px',
            paddingLeft: '0px',
            paddingRight: '0px',
          },
          '@screen lg': {
            maxWidth: '1214px',
          },
          '@screen xl': {
            maxWidth: '1214px',
          },
        }
      })
    }
  ]
}
