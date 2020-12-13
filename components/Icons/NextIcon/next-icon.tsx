import SvgAbstracted from '@_types/SvgProps';
import { FC, useState, useMemo, useRef, useEffect } from 'react';
import { ColorsSvg } from '@lib/index';
import cn from 'classnames';

const NextIcon: FC<SvgAbstracted> = props => {
	const {
		width = '207',
		height = '124',
		classNameGtag,
		classNameSVG,
		fillColor0 = `#fff9e9`
	} = props;

	const [bg] = useState(useMemo(() => ColorsSvg, []));

	let ref = useRef() as React.MutableRefObject<SVGSVGElement>;

	useEffect(() => {
		if (ref != null && ref.current != null) {
			ref.current.style.fill = `linear-gradient(140deg, ${bg[0]}, ${bg[1]} 100%)`;
		}
	}, [bg]);

	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 207 124'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={cn(classNameSVG, ` `)}
		>
			<g clipPath='url(#clip0)' className={cn(classNameGtag, `z-50 `)}>
				<path
					d='M48.9424 32.6323H87.9013V35.7139H52.5136V58.9073H85.7911V61.9889H52.5136V87.453H88.3072V90.5346H48.9424V32.6323ZM91.3914 32.6323H95.5308L113.874 58.0964L132.623 32.6323L158.125 0.287109L116.228 60.7725L137.818 90.5346H133.516L113.874 63.4487L94.151 90.5346H89.9305L111.683 60.7725L91.3914 32.6323ZM139.36 35.7139V32.6323H183.757V35.7139H163.303V90.5346H159.732V35.7139H139.36Z'
					fill={fillColor0}
				/>
				<path
					d='M0.203125 32.6328H4.66717L66.2238 124.304L40.7854 90.5351L3.93669 37.012L3.77436 90.5351H0.203125V32.6328Z'
					fill={fillColor0}
				/>
				<path
					d='M183.397 86.5222C184.135 86.5222 184.674 85.9596 184.674 85.2325C184.674 84.5054 184.135 83.9428 183.397 83.9428C182.667 83.9428 182.12 84.5054 182.12 85.2325C182.12 85.9596 182.667 86.5222 183.397 86.5222ZM186.906 83.1292C186.906 85.2758 188.461 86.678 190.728 86.678C193.143 86.678 194.602 85.2325 194.602 82.7224V73.885H192.656V82.7137C192.656 84.1073 191.953 84.8516 190.711 84.8516C189.599 84.8516 188.843 84.1592 188.817 83.1292H186.906ZM197.147 83.0166C197.286 85.2498 199.154 86.678 201.933 86.678C204.904 86.678 206.762 85.1805 206.762 82.7916C206.762 80.9133 205.703 79.8747 203.132 79.2774L201.751 78.9398C200.118 78.559 199.458 78.0483 199.458 77.1568C199.458 76.0316 200.482 75.2958 202.02 75.2958C203.479 75.2958 204.487 76.0143 204.669 77.1655H206.563C206.45 75.0621 204.591 73.582 202.046 73.582C199.31 73.582 197.486 75.0621 197.486 77.2866C197.486 79.1216 198.519 80.2122 200.786 80.7402L202.402 81.1297C204.061 81.5192 204.791 82.0905 204.791 83.0426C204.791 84.1505 203.644 84.9555 202.081 84.9555C200.404 84.9555 199.24 84.2025 199.075 83.0166H197.147Z'
					fill={fillColor0}
				/>
			</g>
			<defs>
				<clipPath id='clip0'>
					<rect width='207' height='124' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export default NextIcon;
