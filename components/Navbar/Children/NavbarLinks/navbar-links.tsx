import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import css from './navbar-links.module.css';

interface NavbarRef {
	href: string;
	label: string;
}

const links: NavbarRef[] = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: '/about-us',
		label: 'About Us'
	},
	{
		href: '/consultants',
		label: 'Consultants'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];

interface NavbarLinksProps {
	root?: string;
}

const NavbarLinks: FC<NavbarLinksProps> = props => {
	const { root } = props;
	const { pathname } = useRouter();

	const navbarList = links.map((link, index) => (
		<>
			<Link key={link.label} href={link.href} as={link.href} passHref>
				<a
					className={
						pathname === link.href ? cn(css.linkActive, root) : cn(css.link, root)
					}
					key={index ** 2}
					aria-label={`link to ${link.label}`}
				>
					{link.label}
				</a>
			</Link>
		</>
	));
	return <>{navbarList}</>;
};

export default NavbarLinks;
