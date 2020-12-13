import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import css from './navbar-user-links.module.css';

interface NavbarUserRef {
	href: string;
	label: string;
	className: string;
}

const links: NavbarUserRef[] = [
	// {
	// 	href: '/profile',
	// 	label: 'Profile',
	// 	className: `${css.className0}`
	// },
	{
		href: '/consultants',
		label: 'Consultants',
		className: `${css.className0}`
	},
	{
		href: '/profile',
		label: 'Profile',
		className: `${css.className1}`
	},
	{
		href: '/login',
		label: 'Log In',
		className: `${css.className2}`
	}
];

interface NavbarUserLinksProps {
	root?: string;
	role?: string;
}

const NavbarUserLinks: FC<NavbarUserLinksProps> = props => {
	const { root, role } = props;
	const { pathname } = useRouter();

	const navbarUserList = links.map((link, index) => (
		<>
			<Link key={link.label} href={link.href} as={link.href} passHref>
				<a
					className={
						pathname === link.href
							? cn(css.linkActive, link.className, root)
							: cn(css.link, link.className, root)
					}
					key={index ** 2}
					aria-label={`link to ${link.label}`}
					role={role}
				>
					{link.label}
				</a>
			</Link>
		</>
	));
	return <>{navbarUserList}</>;
};

export default NavbarUserLinks;
