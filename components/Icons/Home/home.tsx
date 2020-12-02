import { FC } from 'react';
import { SvgIconConstituentValues } from '@_types/index';

const HomeIcon: FC<SvgIconConstituentValues> = props => {
	const {
		width = '2.25vw',
		height = '2.25vw',
		classNameP1 = '',
		classNameP2 = '',
		classNameSvg = '',
		classNameParent = ''
	} = props;
	return (
		<div className={`${classNameParent} align-middle block`}>
			<svg
				width={width}
				height={height}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				className={classNameSvg + ' '}
			>
				<path
					className={classNameP1}
					d='M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
					fill='white'
				/>
				<path
					className={classNameP2}
					d='M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z'
				/>
			</svg>
		</div>
	);
};

export default HomeIcon;
