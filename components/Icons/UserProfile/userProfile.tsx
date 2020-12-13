import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';

const UserProfileIcon: FC<SvgAbstracted> = props => {
	const { width = '61.506', height = '68.443', classNameSVG } = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 61.506 68.443'
			className={classNameSVG}
		>
			<g
				id='Icon_feather-user'
				data-name='Icon feather-user'
				transform='translate(3 3)'
			>
				<path
					id='Path_1214'
					data-name='Path 1214'
					d='M61.506,43.315V36.376A13.876,13.876,0,0,0,47.629,22.5H19.876A13.876,13.876,0,0,0,6,36.376v6.938'
					transform='translate(-6 19.129)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='6'
				/>
				<path
					id='Path_1215'
					data-name='Path 1215'
					d='M39.753,18.376A13.876,13.876,0,1,1,25.876,4.5,13.876,13.876,0,0,1,39.753,18.376Z'
					transform='translate(1.876 -4.5)'
					fill='none'
					stroke='#1a1d1e'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='6'
				/>
			</g>
		</svg>
	);
};

export default UserProfileIcon;
