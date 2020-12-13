import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';
import cn from 'classnames';

const MenuIcon: FC<SvgAbstracted> = props => {
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
				d='M4 18H20M4 6H20H4ZM4 12H20H4Z'
				stroke='#234670'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default MenuIcon;
