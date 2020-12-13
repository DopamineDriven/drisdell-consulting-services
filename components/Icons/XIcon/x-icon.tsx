import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';
import cn from 'classnames';

const XIcon: FC<SvgAbstracted> = props => {
	const { width = '24', height = '24', classNameSVG } = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			aria-hidden={true}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={cn(classNameSVG, ' ')}
		>
			<path
				d='M6 6L18 18M6 18L18 6L6 18Z'
				stroke='#234670'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default XIcon;
