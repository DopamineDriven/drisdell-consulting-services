import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const LinkedinIcon: FC<SvgAbstracted> = props => {
	const { width = '67.449', height = '64.454', classNameSVG } = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 67.449 64.454'
			className={classNameSVG}
		>
			<path
				id='Icon_zocial-linkedin'
				data-name='Icon zocial-linkedin'
				d='M-.18,7.7A7.011,7.011,0,0,1,2.1,2.332,8.36,8.36,0,0,1,8.023.216,8.11,8.11,0,0,1,13.818,2.3,7.343,7.343,0,0,1,16.1,7.9a6.856,6.856,0,0,1-2.214,5.208,8.375,8.375,0,0,1-5.99,2.148H7.828a7.967,7.967,0,0,1-5.794-2.148A7.216,7.216,0,0,1-.18,7.7ZM.666,64.67V21.18H15.12V64.67H.666Zm22.461,0H37.581V40.386A9.373,9.373,0,0,1,38.1,36.87a9.442,9.442,0,0,1,2.767-3.744,7.074,7.074,0,0,1,4.655-1.53q7.292,0,7.292,9.831V64.67H67.269V39.735q0-9.636-4.557-14.616a15.546,15.546,0,0,0-12.044-4.981,14.775,14.775,0,0,0-13.086,7.227v.13h-.065l.065-.13V21.18H23.128q.13,2.083.13,12.956t-.13,30.534Z'
				transform='translate(0.18 -0.216)'
				fill='#1a1d1e'
			/>
		</svg>
	);
};

export default LinkedinIcon;
