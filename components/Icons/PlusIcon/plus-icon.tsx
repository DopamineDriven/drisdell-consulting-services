import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';
import cn from 'classnames';

const PlusIcon: FC<SvgAbstracted> = props => {
	const { width = '20', height = '20', classNameSVG } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 20 20'
			fill=''
			aria-hidden={true}
			xmlns='http://www.w3.org/2000/svg'
			className={cn(classNameSVG, '')}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M10 5C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6V9H14C14.2652 9 14.5196 9.10536 14.7071 9.29289C14.8946 9.48043 15 9.73478 15 10C15 10.2652 14.8946 10.5196 14.7071 10.7071C14.5196 10.8946 14.2652 11 14 11H11V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15C9.73478 15 9.48043 14.8946 9.29289 14.7071C9.10536 14.5196 9 14.2652 9 14V11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9H9V6C9 5.73478 9.10536 5.48043 9.29289 5.29289C9.48043 5.10536 9.73478 5 10 5V5Z'
				fill='#f4f3ee'
				className=''
			/>
		</svg>
	);
};

export default PlusIcon;

// change path fill rule
