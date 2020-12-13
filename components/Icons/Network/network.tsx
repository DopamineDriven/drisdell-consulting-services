import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const NetworkIcon: FC<SvgAbstracted> = props => {
	const { width = '63.038', height = '63.038', classNameSVG } = props;

	return (
		<svg
			id='Network_icon'
			data-name='Network icon'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 63.038 63.038'
			className={classNameSVG}
		>
			<path
				id='Path_24'
				data-name='Path 24'
				d='M34.894,7.618a27.28,27.28,0,0,1,19.29,46.566A27.28,27.28,0,0,1,15.6,15.6a27.1,27.1,0,0,1,19.29-7.986m0-4.243A31.519,31.519,0,1,0,66.413,34.894,31.514,31.514,0,0,0,34.894,3.375Z'
				transform='translate(-3.375 -3.375)'
				fill='#1a1d1e'
			/>
			<path
				id='Icon_material-people-outline'
				data-name='Icon material-people-outline'
				d='M31.087,22.9a22.722,22.722,0,0,0-8.59,1.925,22.361,22.361,0,0,0-8.59-1.925C9.765,22.9,1.5,24.975,1.5,29.152v5.293H43.495V29.152C43.495,24.975,35.229,22.9,31.087,22.9Zm-7.635,8.661H4.363V29.152c0-1.039,4.887-3.368,9.544-3.368s9.544,2.329,9.544,3.368Zm17.18,0H26.315V29.152a3.516,3.516,0,0,0-.993-2.348,18.28,18.28,0,0,1,5.765-1.02c4.658,0,9.544,2.329,9.544,3.368ZM13.908,20.972a6.736,6.736,0,1,0-6.681-6.736A6.716,6.716,0,0,0,13.908,20.972Zm0-10.585a3.849,3.849,0,1,1-3.818,3.849A3.845,3.845,0,0,1,13.908,10.387Zm17.18,10.585a6.736,6.736,0,1,0-6.681-6.736A6.716,6.716,0,0,0,31.087,20.972Zm0-10.585a3.849,3.849,0,1,1-3.818,3.849A3.845,3.845,0,0,1,31.087,10.387Z'
				transform='translate(9.259 10.624)'
				fill='#1a1d1e'
			/>
		</svg>
	);
};

export default NetworkIcon;
