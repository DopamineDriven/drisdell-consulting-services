export default function HexToRgb(hex: string = '') {
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
