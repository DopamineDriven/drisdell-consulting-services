import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const ProcessIcon: FC<SvgAbstracted> = props => {
	const { width = '62.889', height = '62.889', classNameSVG } = props;

	return (
		<svg
			id='Process_icon'
			data-name='Process icon'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 62.889 62.889'
			className={classNameSVG}
		>
			<path
				id='Path_23'
				data-name='Path 23'
				d='M34.819,7.608A27.216,27.216,0,0,1,54.064,54.064,27.216,27.216,0,0,1,15.575,15.575,27.031,27.031,0,0,1,34.819,7.608m0-4.233A31.444,31.444,0,1,0,66.264,34.819,31.439,31.439,0,0,0,34.819,3.375Z'
				transform='translate(-3.375 -3.375)'
				fill='#1a1d1e'
			/>
			<g
				id='Icon_feather-loader'
				data-name='Icon feather-loader'
				transform='translate(16.234 16.462)'
			>
				<path
					id='Path_9'
					data-name='Path 9'
					d='M18,3V9.116'
					transform='translate(-2.709 -3)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<path
					id='Path_10'
					data-name='Path 10'
					d='M18,27v6.116'
					transform='translate(-2.709 -2.535)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<path
					id='Path_11'
					data-name='Path 11'
					d='M7.4,7.395l4.327,4.327'
					transform='translate(-2.915 -2.915)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<path
					id='Path_12'
					data-name='Path 12'
					d='M24.36,24.36l4.327,4.327'
					transform='translate(-2.586 -2.586)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<path
					id='Path_13'
					data-name='Path 13'
					d='M3,18H9.116'
					transform='translate(-3 -2.709)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<path
					id='Path_14'
					data-name='Path 14'
					d='M27,18h6.116'
					transform='translate(-2.535 -2.709)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<path
					id='Path_15'
					data-name='Path 15'
					d='M7.4,28.687l4.327-4.327'
					transform='translate(-2.915 -2.586)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<path
					id='Path_16'
					data-name='Path 16'
					d='M24.36,11.722l4.327-4.327'
					transform='translate(-2.586 -2.915)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
			</g>
		</svg>
	);
};

export default ProcessIcon;
