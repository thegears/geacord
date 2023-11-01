/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "synthwave", 'cyberpunk', 'night', 'coffee', 'aqua', 'valentine', 'black', 'retro', {
			"blood": {
				"primary": "#df2525",
				"secondary": "#d42020",
				"accent": "#d01818",
				"neutral": "#ce0d0d",
				"base-100": "#c30505",
			},
		}],
	},
}
