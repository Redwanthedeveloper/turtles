module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"pangram"'],
      heading: ['"andes"'],
    },

    colors: {
      default: '#070707',
      white: '#ffffff',
      primary: '#ffffff',
      secondary: '#131416',
      btn: '#e33e4b',
    },
    extend: {
      textColor: {
        default: '#ffffff',
        white: '#ffffff',
        primary: '#e33e4b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
