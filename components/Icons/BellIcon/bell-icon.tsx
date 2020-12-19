import { FC } from 'react';
import SvgAbstracted from '@_types/SvgProps';
import cn from 'classnames';

const BellIcon: FC<SvgAbstracted> = props => {
	const { width = '24', height = '24', classNameSVG } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={cn(classNameSVG, ' ')}
			aria-hidden={true}
			stroke='#1a1d1e'
		>
			<path
				d='M15 17H9M15 17H20L18.595 15.595C18.4063 15.4063 18.2567 15.1822 18.1546 14.9357C18.0525 14.6891 18 14.4249 18 14.158V11C18.0002 9.75894 17.6156 8.54834 16.8992 7.53489C16.1829 6.52144 15.17 5.75496 14 5.341V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5V5.341C7.67 6.165 6 8.388 6 11V14.159C6 14.697 5.786 15.214 5.405 15.595L4 17H9H15ZM15 17V18C15 18.7956 14.6839 19.5587 14.1213 20.1213C13.5587 20.6839 12.7956 21 12 21C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V17H15Z'
				stroke='#bcccdc'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default BellIcon;
