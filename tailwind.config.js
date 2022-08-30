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
        happyhues_4: {
          background : {
            primary : '#16161a',
            secondary: '#242629',
            button: '#7f5af0'
          },
          text : {
            headline: '#fffffe',
            paragraph: '#94a1b2',
            sub_paragraph: '#72757e',
            button: '#fffffe'
          },
          stroke: '#010101'

        },

        // light theme
        // https://www.happyhues.co/palettes/11
        happyhues_11: {
          background : {
            primary : '#f9f4ef',
            secondary: '#8c7851',
            button: '#f25042'
          },
          text : {
            headline: '#020826',
            paragraph: '#716040',
            sub_paragraph: '#f9f4ef',
            button: '#fffffe'
          },
          stroke: '#020826'

        },

      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}