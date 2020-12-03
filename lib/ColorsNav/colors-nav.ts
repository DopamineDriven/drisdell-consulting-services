import random from 'lodash.random';

export default function ColorsNav() {
	const colors = [
		'#234670',
		'#f1fcf7'
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
