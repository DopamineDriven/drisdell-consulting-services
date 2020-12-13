import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const SearchIcon: FC<SvgAbstracted> = props => {
	const { width = '62.685', height = '62.685', classNameSVG } = props;

	return (
		<svg
			id='Identify_icon'
			data-name='Identify icon'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 62.685 62.685'
			className={classNameSVG}
		>
			<path
				id='Icon_ionic-ios-search'
				data-name='Icon ionic-ios-search'
				d='M34.568,32.723l-8.462-8.541a12.059,12.059,0,1,0-1.83,1.854l8.406,8.486a1.3,1.3,0,0,0,1.838.048A1.311,1.311,0,0,0,34.568,32.723ZM16.63,26.139a9.522,9.522,0,1,1,6.735-2.789A9.463,9.463,0,0,1,16.63,26.139Z'
				transform='translate(11.985 11.472)'
				fill='#1a1d1e'
				stroke='#1a1d1e'
				stroke-width='1'
			/>
			<path
				id='Path_22'
				data-name='Path 22'
				d='M34.717,7.594A27.128,27.128,0,0,1,53.9,53.9,27.128,27.128,0,0,1,15.535,15.535,26.944,26.944,0,0,1,34.717,7.594m0-4.219A31.342,31.342,0,1,0,66.06,34.717,31.337,31.337,0,0,0,34.717,3.375Z'
				transform='translate(-3.375 -3.375)'
				fill='#1a1d1e'
			/>
		</svg>
	);
};

export default SearchIcon;
