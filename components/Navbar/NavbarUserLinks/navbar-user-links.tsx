import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import css from './navbar-user-links.module.css';
// import crypto from 'crypto';

// const id = crypto.randomBytes(8).toString('hex');

interface NavbarUserRef {
	id: number;
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
		id: 1,
		href: '/consultants',
		label: 'Consultants',
		className: `${css.className0}`
	},
	{
		id: 2,
		href: '/contact-us',
		label: 'Contact',
		className: `${css.className1}`
	},
	{
		id: 3,
		href: '/login',
		label: 'Log In',
		className: `${css.className2}`
	}
];

interface NavbarUserLinksProps {
	rootUserLink?: string;
	role?: string;
	rootDiv?: string;
}

const NavbarUserLinks: FC<NavbarUserLinksProps> = props => {
	const { rootUserLink, rootDiv, role } = props;
	const { pathname } = useRouter();

	const navbarUserList = links.map(link => (
		<Link key={link.id} href={link.href} as={link.href} passHref>
			<a
				key={link.id ** 2}
				className={
					pathname === link.href
						? cn(css.linkActive, link.className, rootUserLink)
						: cn(css.link, link.className, rootUserLink)
				}
				aria-label={`link to ${link.label}`}
				role={role}
			>
				{link.label}
			</a>
		</Link>
	));
	return (
		<div
			role='menu'
			aria-orientation='vertical'
			aria-labelledby='user-menu'
			className={cn(rootDiv, ' ')}
		>
			{navbarUserList}
		</div>
	);
};

export default NavbarUserLinks;
