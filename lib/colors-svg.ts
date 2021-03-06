import random from 'lodash.random';

export default function ColorsSvg() {
	const colors = [
		// '#6497b1',
		// '#005b96',
		// // '#03396c',
		// '#011f4b',
		'#044E54',
		// '#173972',
		// '#234670',
		// '#14505c',
		'#8A041A'
		// '#37B679',
		// '#DA3C3C',
		// '#3291FF',
		// '#7928CA',
		// '#79FFE1',
		// '#E535AB',
		// '#3333CC',
		// '#B3DDF2'
		//234670
		// '#234670',
		// '#f1fcf7'
		// '#3291FF',
		// '#7928CA',
		// '#79FFE1',
		// '#E535AB',
		// '#3333CC',
		// '#B3DDF2'
		//'#234670'
	];
	const getRandomIdx = () => random(0, colors.length - 1);
	let idx = getRandomIdx();
	let idx2 = getRandomIdx();

	// Has to be a different color
	while (idx2 === idx) {
		idx2 = getRandomIdx();
	}

	// Returns a pair of colors
	return [colors[idx], colors[idx2]];
}

function hexToRgb(hex: string = '') {
	// @ts-ignore
	const match = hex.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString
			.split('')
			.map((char: string) => {
				return char + char;
			})
			.join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xff;
	const g = (integer >> 8) & 0xff;
	const b = integer & 0xff;

	return [r, g, b];
}

export function isDark(color = '') {
	// Equation from http://24ways.org/2010/calculating-color-contrast
	const rgb = hexToRgb(color);
	const res = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	return res < 128;
}
