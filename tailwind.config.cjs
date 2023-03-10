/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				'black-100': '#100d25',
				'black-200': '#090325',
				'white-100': '#f3f3f3',
			},
			boxShadow: {
				card: '0px 35px 120px -15px #211e35',
			},
			screens: {
				xs: '450px',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/herobg.png')",
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
		},
	},
	plugins: [],
};
