import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const CautionIcon: FC<SvgAbstracted> = props => {
	const { width = '66.392', height = '60.949', classNameSVG } = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 66.392 60.949'
			className={classNameSVG}
		>
			<path
				id='Subtraction_2'
				data-name='Subtraction 2'
				d='M65.185,70H14.815A8,8,0,0,1,7.836,58.09L33.021,13.141a8,8,0,0,1,13.958,0L72.164,58.09A8,8,0,0,1,65.185,70ZM40.041,51.669c-2.808,0-5.092,2.576-5.092,5.742s2.284,5.743,5.092,5.743,5.092-2.576,5.092-5.743S42.849,51.669,40.041,51.669ZM37.064,26.4a1.433,1.433,0,0,0-1.038.459,1.836,1.836,0,0,0-.487,1.35L36.4,47.735a1.621,1.621,0,0,0,1.526,1.636h4.223a1.621,1.621,0,0,0,1.526-1.636l.866-19.526a1.838,1.838,0,0,0-.488-1.35,1.433,1.433,0,0,0-1.038-.459Z'
				transform='translate(-6.804 -9.051)'
				fill='#1a1d1e'
			/>
		</svg>
	);
};

export default CautionIcon;
