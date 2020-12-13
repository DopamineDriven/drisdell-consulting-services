import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const RightArrowIcon: FC<SvgAbstracted> = props => {
	const { width = '62.712', height = '62.712', classNameSVG } = props;

	return (
		<svg
			id='Arrow'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 62.712 62.712'
			className={classNameSVG}
		>
			<path
				id='Icon_ionic-ios-arrow-dropup-circle'
				data-name='Icon ionic-ios-arrow-dropup-circle'
				d='M31.356,62.712A31.356,31.356,0,1,0,0,31.356,31.351,31.351,0,0,0,31.356,62.712Zm0-36.858L19.13,38.2a2.91,2.91,0,0,1-4.115-4.115L29.442,19.7a2.906,2.906,0,0,1,4.01-.09L47.667,33.783a2.9,2.9,0,1,1-4.1,4.115Z'
				transform='translate(62.712 0) rotate(90)'
				fill='#1a1d1e'
			/>
		</svg>
	);
};

export default RightArrowIcon;
