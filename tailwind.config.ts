import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
			},
			colors: {
				waikawa: {
					50: "#F2F7FB",
					100: "#E7F0F8",
					200: "#D3E2F2",
					300: "#B9CFE8",
					400: "#9CB6DD",
					500: "#839DD1",
					600: "#6A7FC1",
					DEFAULT: "#6374AE",
					800: "#4A5989",
					900: "#414E6E",
					950: "#262C40",
				}
			},
			borderRadius: {
				"4xl": "2rem",
				"5xl": "2.5rem",
				"6xl": "3rem",
			},
			scale: {
				flip: "-1",
				102: "1.02",
				103: "1.03",
				104: "1.04",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
