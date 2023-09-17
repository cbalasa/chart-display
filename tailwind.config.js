/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				lightGrey: "var(--lightGrey)",
				darkGrey: "#e3e3e3",
				mediumGrey: "var(--mediumGrey)",
				lightBlue: "#E7F2FE",
				darkBlue: "#080D3D",
				fucsia: "var(--fucsia)",
				green: "var(--green)"
			}
		}
	},
	plugins: []
};
