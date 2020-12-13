import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const MatchIcon: FC<SvgAbstracted> = props => {
	const { width = '62.272', height = '62.272', classNameSVG } = props;

	return (
		<svg
			id='Match_icon'
			data-name='Match icon'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 62.272 62.272'
			className={classNameSVG}
		>
			<path
				id='Path_21'
				data-name='Path 21'
				d='M34.511,7.566a26.949,26.949,0,0,1,19.056,46A26.949,26.949,0,0,1,15.455,15.455,26.766,26.766,0,0,1,34.511,7.566m0-4.191A31.136,31.136,0,1,0,65.647,34.511,31.131,31.131,0,0,0,34.511,3.375Z'
				transform='translate(-3.375 -3.375)'
				fill='#1a1d1e'
			/>
			<path
				id='Path_20'
				data-name='Path 20'
				d='M42.334,15.111l-2.621-2.724a.561.561,0,0,0-.417-.181h0a.538.538,0,0,0-.417.181L20.71,30.885,14.1,24.2a.572.572,0,0,0-.834,0l-2.651,2.679a.6.6,0,0,0,0,.858l8.34,8.429a2.626,2.626,0,0,0,1.742.858,2.753,2.753,0,0,0,1.728-.828h.015L42.349,15.969A.649.649,0,0,0,42.334,15.111Z'
				transform='translate(4.677 6.527)'
				fill='#1a1d1e'
			/>
		</svg>
	);
};

export default MatchIcon;
