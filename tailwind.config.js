module.exports = {
  darkMode: 'class',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        // dark theme
        // https://www.happyhues.co/palettes/4
        drk: {
          bgPrimary: '#16161a',
          bgSec: '#242629',
          headline: '#fffffe',
          p: '#94a1b2',
          btn: '#7f5af0',
          btntxt: '#fffffe',
          stroke: '#010101',
          main: '#fffffe',
          highlight: '#7f5af0',
          primary: '#2cb67d',
          secondary: '#72757e'
        },
        // light theme
        // https://www.happyhues.co/palettes/11
        lght: {
          background: '#f9f4ef',
          headline: '#020826',
          p: '#716040',
          btn: '#8c7851',
          btntxt: '#fffffe',
          stroke: '#020826',
          main: '#fffffe',
          highlight: '#8c7851',
          primary: '#f25042',
          secondary: '#eaddcf'
        }

      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}