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
        happyhues_4: {
          background : {
            primary : '#1a1a1d',
            secondary: '#292929',
            button: '#f0a57f'
            },
            text : {
            headline: '#e6e6e6',
            paragraph: '#b2a494',
            sub_paragraph: '#7e7572',
            button: '#e6e6e6'
            },
            stroke: '#121212'
        },
        happyhues_11: {
          background : {
            primary : '#E8F5E9',
            secondary: '#A5D6A7',
            button: '#4CAF50'
            },
            text : {
            headline: '#262626',
            paragraph: '#689F38',
            sub_paragraph: '#efefef',
            button: '#262626'
            },
            stroke: '#689F38'
        },
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}