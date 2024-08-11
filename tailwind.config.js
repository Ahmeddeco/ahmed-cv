/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#e09941',
			secondary: '#417ae0',
			third: '#41dfe0',
			brown: '#60554C',
			Green: '#304141',
			black: '#21242A',
		},
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			backgroundImage: {},
		},
	},
	plugins: [],
}
