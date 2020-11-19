import hexToRgb from '../HexToRgb';

export default function IsDark(color = '') {
	// Equation from http://24ways.org/2010/calculating-color-contrast
	const rgb = hexToRgb(color);
	const res = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	return res < 128;
}
