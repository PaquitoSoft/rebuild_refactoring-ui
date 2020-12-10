module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		// colors: {
		// 	'indigo': '#5978f3'
		// }
		colors: {
			'grey-lighter': '#f3f7f9'
		}
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
