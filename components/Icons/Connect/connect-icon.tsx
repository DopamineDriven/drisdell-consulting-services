import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const ConnectIcon: FC<SvgAbstracted> = props => {
	const { width = '83.088', height = '53.311', classNameSVG } = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 83.088 53.311'
			className={classNameSVG}
		>
			<path
				id='Icon_material-people-outline'
				data-name='Icon material-people-outline'
				d='M60.039,37.963a44.957,44.957,0,0,0-17,3.808,44.242,44.242,0,0,0-17-3.808c-8.2,0-24.549,4.113-24.549,12.376V60.811H84.588V50.339C84.588,42.076,68.235,37.963,60.039,37.963ZM44.932,55.1H7.165v-4.76c0-2.056,9.668-6.664,18.884-6.664s18.884,4.608,18.884,6.664Zm33.991,0H50.6v-4.76a6.957,6.957,0,0,0-1.964-4.646,36.169,36.169,0,0,1,11.406-2.018c9.215,0,18.884,4.608,18.884,6.664ZM26.049,34.155A13.328,13.328,0,1,0,12.83,20.828,13.288,13.288,0,0,0,26.049,34.155Zm0-20.943A7.616,7.616,0,1,1,18.5,20.828,7.607,7.607,0,0,1,26.049,13.212ZM60.039,34.155A13.328,13.328,0,1,0,46.821,20.828,13.288,13.288,0,0,0,60.039,34.155Zm0-20.943a7.616,7.616,0,1,1-7.553,7.616A7.607,7.607,0,0,1,60.039,13.212Z'
				transform='translate(-1.5 -7.5)'
				fill='#1a1d1e'
			/>
		</svg>
	);
};

export default ConnectIcon;
