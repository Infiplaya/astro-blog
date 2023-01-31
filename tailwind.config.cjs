const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				opensans: ["Open SansVariable", "Open Sans", "sans-serif"],
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
