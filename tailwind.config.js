const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
	important: true,
	purge: {
		content: [
			'./components/**/*.{js,ts,jsx,tsx}',
			'./pages/**/*.{js,ts,jsx,tsx}',
			'./styles/**/*.{js,ts,jsx,tsx}'
		],
		options: {
			safelist: {
				standard: ['outline-none']
			}
		}
	},
	theme: {
		lineClamp: {
			1: 1,
			2: 2,
			3: 3,
			10: 10
		},
		extend: {
			zIndex: {
				'-10': '-10',
				100: '100',
				150: '150'
			},
			maxWidth: {
				'9xl': '2220px'
			},
			screens: {
				xs: '375px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
				'3xl': '1920px'
			},
			transitionDuration: {
				0: '0ms',
				300: '300ms',
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
				2000: '2000ms',
				3000: '3000ms',
				10000: '10000ms'
			},
			rotate: {
				0: '0deg',
				45: '45deg',
				90: '90deg',
				125: '125deg',
				180: '180deg',
				360: '360deg',
				855: '845deg'
			},
			fontFamily: {
				header: ['goudy-bookletter-1911', 'serif'],
				poppins: ['poppins', 'sans-serif'],
				somaRoman: ['neue-haas-grotesk-text', 'sans-serif'],
				somaDisplay: ['neue-haas-grotesk-display', 'sans-serif'],
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				auxiliary: 'var(--color-bg-auxiliary)',
				tertiary: 'var(--color-bg-tertiary)',
				quaternary: 'var(--color-bg-quaternary)',
				quinary: 'var(--color-bg-quinary)',
				senary: 'var(--color-bg-senary)'
			},
			textColor: {
				accent: 'var(--color-text-accent)',
				primary: 'var(--color-text-primary)',
				auxiliary: 'var(--color-text-auxiliary)',
				tertiary: 'var(--color-text-tertiary)',
				quaternary: 'var(--color-text-quaternary)',
				quinary: 'var(--color-text-quinary)'
			},
			borderColor: {
				primary: 'var(--color-border-primary)',
				auxiliary: 'var(--color-border-auxiliary)'
			},

			outlline: {
				'outline-0': 'var(--outline-0)',
				'outline-1': 'var(--outline-1)',
				'outline-2': 'var(--outline-2)',
				'outline-3': 'var(--outline-3)'
			},
			strokeColor: {
				primary: 'var(--stroke-primary)',
				auxiliary: 'var(--stroke-auxiliary)',
				tertiary: 'var(--stroke-tertiary)',
				quaternary: 'var(--stroke-quaternary)',
				quinary: 'var(--stroke-quinary)',
				senary: 'var(--stroke-senary)'
			},
			colors: {
				'primary-0': 'var(--primary-0)',
				'primary-1': 'var(--primary-1)',
				'primary-2': 'var(--primary-2)',
				'primary-3': 'var(--primary-3)',
				'primary-4': 'var(--primary-4)',
				'primary-5': 'var(--primary-5)',
				'primary-6': 'var(--primary-6)',
				'primary-7': 'var(--primary-7)',
				'primary-8': 'var(--primary-8)',
				'primary-9': 'var(--primary-9)',
				'secondary-0': 'var(--secondary-0)',
				'secondary-1': 'var(--secondary-1)',
				'secondary-2': 'var(--secondary-2)',
				'hover-0': 'var(--hover-0)',
				'hover-1': 'var(--hover-1)',
				'hover-2': 'var(--hover-2)',
				'focus-0': 'var(--focus-0)',
				'focus-1': 'var(--focus-1)',
				'focus-2': 'var(--focus-2)',
				'accents-0': 'var(--accents-0)',
				'accents-1': 'var(--accents-1)',
				'accents-2': 'var(--accents-2)',
				'accents-3': 'var(--accents-3)',
				'accents-4': 'var(--accents-4)',
				'accents-5': 'var(--accents-5)',
				'accents-6': 'var(--accents-6)',
				'accents-7': 'var(--accents-7)',
				'accents-8': 'var(--accents-8)',
				'accents-9': 'var(--accents-9)',
				lightBlue: {
					0: '#E3F8FF',
					100: '#B3ECFF',
					200: '#81DEFD',
					300: '#5ED0FA',
					400: '#40C3F7',
					500: '#2BB0ED',
					600: '#1992D4',
					700: '#127FBF',
					800: '#0B69A3',
					900: '#035388'
				},
				cyan: {
					0: '#E0FCFF',
					100: '#BEF8FD',
					200: '#87EAF2',
					300: '#54D1DB',
					400: '#38BEC9',
					500: '#2CB1BC',
					600: '#14919B',
					700: '#0E7C86',
					800: '#0A6C74',
					900: '#044E54'
				},
				rojo: {
					0: '#610316',
					100: '#8A041A',
					200: '#AB091E',
					300: '#CF1124',
					400: '#E12D39',
					500: '#EF4E4E',
					600: '#F86A6A',
					700: '#FF9B9B',
					800: '#FFBDBD',
					900: '#FFE3E3'
				},
				rosado: {
					0: '#620042',
					100: '#870557',
					200: '#A30664',
					300: '#BC0A6F',
					400: '#DA127D',
					500: '#E8368F',
					600: '#F364A2',
					700: '#FF8CBA',
					800: '#FFB8D2',
					900: '#FFE3EC'
				},
				amarillo: {
					0: 'hsl(15, 86%, 30%)',
					100: 'hsl(22, 82%, 39%)',
					200: 'hsl(29, 80%, 44%)',
					300: 'hsl(36, 77%, 49%)',
					400: 'hsl(42, 87%, 55%)',
					500: 'hsl(44, 92%, 63%)',
					600: 'hsl(48, 94%, 68%)',
					700: 'hsl(48, 95%, 76%)',
					800: 'hsl(48, 100%, 88%)',
					900: 'hsl(49, 100%, 96%)'
				},
				verdeAzulado: {
					// blueish-green === teal (espanol)
					0: 'hsl(170, 97%, 15%)',
					100: 'hsl(168, 80%, 23%)',
					200: 'hsl(166, 72%, 28%)',
					300: 'hsl(164, 71%, 34%)',
					400: 'hsl(162, 63%, 41%)',
					500: 'hsl(160, 51%, 49%)',
					600: 'hsl(158, 58%, 62%)',
					700: 'hsl(156, 73%, 74%)',
					800: 'hsl(154, 75%, 87%)',
					900: 'hsl(152, 68%, 96%)'
				},
				black: '#000000',
				white: '#FFFFFF',
				success: '#0070F3',
				cyan: '#79FFE1',
				blizzardBlue: '#B3DDF2',
				chicagoRed: '#FF0000',
				customGray: '#D0D0D0',
				tailwindBlue: '#2298BD',
				tailwindGreen: '#0ED7B5',
				bloodMoon: '#CC6633',
				herokuStroke: '#6762A6',
				gqlPink: '#E535AB',
				devPurple: '#3333CC',
				lighterBlack: '#323232',
				gatsbyPurple: '#663399',
				oneFiveBlack: '#151515',
				eaWhite: '#EAEAEA',
				afWhite: '#AFAFAF',
				fiveOBlack: '#505050',
				offWhite: '#F0F1F2',
				portfolio: '#EBE8E0',
				portfolioComplementary: '#E5E0EB',
				portfolioDark: '#14171F',
				everythingIsBlue: '#007acc',
				newlineRed: '#FA5252',
				newlinePink: '#BE4BDB',
				newlinePurple: '#4C6EF5',
				newlineGreen: '#40C057',
				newlineYellow: '#FAB005',
				newlineOrange: '#E535AB',
				jujiMintCream: '#F1FCF7',
				jujiSeaGreen: '#168644',
				jujiCastletonGreen: '#00523C',
				jujiOldLace: '#FFF9E9',
				jujiMaxYellowRed: '#F6BD60',
				jujiMarigold: '#E6A63E'
			},
			keyframes: {
				// bounceNinety: {
				// 	transform: 'translate3d(0, -4px, 0)'
				// },
				// bounceSeventy: {
				// 	transform: 'translate3d(0, -15px, 0)'
				// },
				// bounceForty: {
				// 	transform: 'translate3d(0, -30px, 0)'
				// },
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				hero: {
					transform: 'translate3d(0px, 0px, 0px)'
				}
			},
			animation: {
				wiggle: 'wiggle 10s ease-in-out infinite',
				hero: 'hero 1s ease-in-out infinite',
				slowPing: 'pulse 10s cubic-bezier(0, 0, 0.2, 1) infinite'
			},
			width: {
				82: '20.5rem',
				100: '25rem',
				200: '50rem',
				'8xl': '96rem'
			},
			maxWidth: {
				82: '20.5rem',
				100: '25rem',
				'8xl': '96rem'
			},
			spacing: {
				7: '1.75rem',
				14: '3.5rem',
				18: '4.5rem',
				25: '6.25rem',
				26: '6.5rem',
				28: '7rem',
				44: '11rem',
				75: '75vh',
				82: '20.5rem',
				100: '25rem',
				104: '26rem',
				150: '150vh'
			},
			boxShadow: {
				'outline-2': '0 0 0 2px var(--accents-0)',
				magical:
					'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
				/**
				 * thanks to [@brian-lovin-next](https://github.com/brianlovin/brian-lovin-next/blob/main/tailwind.config.js)
				 */
				cardHover:
					'0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)'
			}
		},
		variants: {
			extend: {
				ringWidth: [
					'responsive',
					'hover',
					'active',
					'first',
					'last',
					'focus',
					'even',
					'odd',
					'group-hover'
				],
				ringColor: [
					'responsive',
					'hover',
					'active',
					'first',
					'last',
					'focus',
					'even',
					'odd',
					'group-hover'
				],
				ringOpacity: [
					'responsive',
					'hover',
					'active',
					'first',
					'last',
					'focus',
					'even',
					'odd',
					'group-hover'
				],
				fontSize: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
				gap: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
				stroke: [
					'responsive',
					'hover',
					'focus',
					'last',
					'first',
					'even',
					'odd',
					'group-hover'
				],
				fill: [
					'responsive',
					'hover',
					'focus',
					'last',
					'first',
					'even',
					'odd',
					'group-hover'
				],

				gridTemplateColumns: [
					'responsive',
					'last',
					'first',
					'hover',
					'focus',
					'even',
					'odd'
				],
				animation: [
					'responsive',
					'hover',
					'focus',
					'last',
					'first',
					'motion-safe',
					'motion-reduce',
					'even',
					'odd'
				],
				transitionProperty: [
					'responsive',
					'hover',
					'focus',
					'last',
					'first',
					'motion-safe',
					'motion-reduce',
					'even',
					'odd'
				],
				transitionDuration: [
					'responsive',
					'last',
					'first',
					'hover',
					'focus',
					'even',
					'odd'
				],
				transitionTimingFunction: [
					'responsive',
					'last',
					'first',
					'hover',
					'focus',
					'even',
					'odd'
				],
				transitionDelay: [
					'responsive',
					'last',
					'first',
					'hover',
					'focus',
					'even',
					'odd'
				],
				scale: [
					'responsive',
					'hover',
					'focus',
					'active',
					'group-hover',
					'first',
					'last',
					'even',
					'odd'
				],
				rotate: [
					'responsive',
					'hover',
					'focus',
					'active',
					'group-hover',
					'first',
					'last',
					'even',
					'odd'
				],
				backgroundColor: ['active', 'hover', 'focus', 'group-hover']
			}
		}
	},
	variants: {
		padding: [
			'responsive',
			'group-hover',
			'hover',
			'focus',
			'even',
			'odd',
			'first',
			'last'
		],
		textColor: [
			'responsive',
			'group-hover',
			'hover',
			'focus',
			'even',
			'first',
			'last',
			'odd'
		],
		backgroundColor: [
			'responsive',
			'group-hover',
			'hover',
			'focus',
			'even',
			'first',
			'last',
			'odd'
		],
		display: ['responsive', 'hover', 'group-hover'],
		visibility: ['responsive', 'hover', 'group-hover'],
		transitionDuration: ['responsive', 'hover', 'group-hover'],
		gridColumn: ['responsive', 'hover', 'first', 'odd', 'even']
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/ui'),
		require('@tailwindui/react'),
		require('@tailwindcss/forms'),
		require('tailwindcss-line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.bg-overlay': {
					background:
						'linear-gradient(var(--overlay-angle, 0deg), var(--overlay-colors)), var(--overlay-image)',
					'background-position': 'center',
					'background-size': 'cover'
				}
			});
		})
	]
};
