import { FC } from 'react';
// import Image from 'next/image';
import css from './nav-image.module.css';
import Link from 'next/link';
import { Logo } from '@components/index';

interface NavImageProps {
	classNameParentA?: string;
	classNameImage?: string;
}

interface NavPropsExtended extends FC<NavImageProps> {}

const NavImage: NavPropsExtended = props => {
	const { classNameParentA = '' } = props;

	return (
		<>
			<Link href='/' as={'/'} passHref>
				<a className={css.logo + `${classNameParentA}`}>
					<Logo />
				</a>
			</Link>
		</>
	);
};

export default NavImage;
