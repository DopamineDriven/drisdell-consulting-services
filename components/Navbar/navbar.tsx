import { FC, Fragment } from 'react';
import Link from 'next/link';
import css from './navbar.module.css';
import CompanyLogo from '@components/Logo';
import { Media } from '@lib/window-width';
import { useRouter } from 'next/router';
// import { Menu } from '@headlessui/react'
import Avatar from '../Avatar';

interface NavRef {
	href: string;
	label: string;
}

const links: NavRef[] = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/reviews',
		label: 'Reviews'
	},
	{
		href: '/services',
		label: 'Services'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];
interface NavbarProps {
	className?: string;
}

interface NavBarFC extends FC<NavbarProps> {}

const Navbar: NavBarFC = ({ className }) => {
	const { pathname } = useRouter();
	const classNameParent = className;
	const navList = links.map(link => (
		<Fragment key={link.label}>
			<li key={link.href} className={css.navLi}>
				<Link href={link.href} as={`${link.href}`} passHref key={link.label}>
					<a
						className={pathname === link.href ? css.linkActive : css.link}
						key={'/' + link.href}
						aria-label={`link to ${link.label}`}
					>
						{link.label}
					</a>
				</Link>
			</li>
		</Fragment>
	));

	const LogoDesktop = (
		<Media greaterThanOrEqual='md'>
			<CompanyLogo width='6.25vw' height='6.25vw' />
		</Media>
	);

	const LogoMobile = (
		<Media lessThan='md'>
			<CompanyLogo width='8.75vw' height='8.75vw' />
		</Media>
	);

	return (
		<Fragment>
			<div className={css.divParent + ` ${classNameParent}`}>
				<div className={css.divChild}>
					<div className={css.divGrandChild}>
						<Link href='/'>
							<a className={css.logo} aria-label='logo link to home'>
								{LogoDesktop}
								{LogoMobile}
							</a>
						</Link>
						<nav className={css.nav}>
							<ul className={css.ul}>{navList}</ul>
						</nav>
						<button className={css.avatarButton}>
							<Avatar className={css.avatarButton} />
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Navbar;
