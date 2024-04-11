/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				lightRed: 'hsl(0, 100%, 67%)',
				orangeyYellow: 'hsl(39, 100%, 56%)',
				greenTeal: 'hsl(166, 100%, 37%)',
				cobaltBlue: 'hsl(234, 85%, 45%)',

				white: ' hsl(0, 0%, 100%)',
				paleBlue: 'hsl(221, 100%, 96%)',
				lightLavender: 'hsl(241, 100%, 89%)',
				darkGrayBlue: 'hsl(224, 30%, 27%)',

				lightSlateBlueBbackground: 'hsl(252, 100%, 67%)',
				lightRoyalBlueBackground: 'hsl(241, 81%, 54%)',
				violetBlueCircle: 'hsla(256, 72%, 46%, 0)',
				persianBlueCircle: 'hsla(241, 72%, 46%, 1)',
			},
			keyframes: {
				showLeft: {
					'0%': { translate: '-200% 0%' },
					'75%': { translate: '10% 0%' },
					'100%': { translate: '0% 0%' },
				},
				showRight: {
					'0%': { translate: '200% 0%' },
					'75%': { translate: '-10% 0%' },
					'100%': { translate: '0% 0%' },
				},
			},
		},
	},
	plugins: [],
}
