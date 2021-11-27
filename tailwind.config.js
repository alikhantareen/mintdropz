module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : {
        'dotted' : "url('../public/bg_dots.png')"
      },
      outline : {
        white : '2px solid white',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
