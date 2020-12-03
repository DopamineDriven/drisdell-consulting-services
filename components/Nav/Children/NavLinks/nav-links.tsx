import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import css from './nav-links.module.css';
import cn from 'classnames';

interface NavRef {
	href: string;
	label: string;
	className: string;
}

const links: NavRef[] = [
	{
		href: '/',
		label: 'Home',
		className: `${css.className0}`
	},
	{
		href: '/about-us',
		label: 'About Us',
		className: `${css.className0}`
	},
	{
		href: '/consultants',
		label: 'Consultants',
		className: `${css.className1}`
	},
	{
		href: '/contact',
		label: 'Contact',
		className: `${css.className2}`
	}
];

interface NavLinksProps {
	classNameParentUl?: string;
}

const NavLinks: FC<NavLinksProps> = props => {
	const { classNameParentUl = '' } = props;
	const { pathname } = useRouter();

	const navList = links.map(link => (
		<li key={link.label} className={css.navLi}>
			<Link href={link.href} as={`${link.href}`} passHref>
				<a
					className={
						pathname === link.href
							? cn(css.linkActive, link.className)
							: cn(css.link, link.className)
					}
					key={'/' + link.href}
					aria-label={`link to ${link.label}`}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	return <ul className={cn(classNameParentUl, css.navUl)}>{navList}</ul>;
};

export default NavLinks;
