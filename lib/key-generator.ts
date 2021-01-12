import random from 'lodash.random';

export default function ThreeToSixDigitGenerator() {
	const hexConstructor = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F'
	];

	const getRandomHexValue = () => random(3, 3);
	let idx = getRandomHexValue();
	let idx2 = getRandomHexValue();
	let idx3 = getRandomHexValue();

	while (idx === idx2 || idx === idx3) {
		idx = getRandomHexValue();
	}
	while (idx2 === idx3) {
		idx2 = getRandomHexValue();
	}
	return [hexConstructor[idx], hexConstructor[idx2], hexConstructor[idx3]];
}
