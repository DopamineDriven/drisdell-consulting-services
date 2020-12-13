import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const HomeIcon: FC<SvgAbstracted> = props => {
	const { width = '66.684', height = '66.685', classNameSVG } = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 66.684 66.685'
			className={classNameSVG}
		>
			<path
				id='Icon_ionic-md-home'
				data-name='Icon ionic-md-home'
				d='M27.484,67.185V46.29H41.95V67.185H56.657V35.842h9.4L34.717,4.5,3.375,35.842h9.4V67.185Z'
				transform='translate(-1.375 -2.5)'
				fill='none'
				stroke='#1a1d1e'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='4'
			/>
		</svg>
	);
};

export default HomeIcon;
