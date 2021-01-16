import { FC } from 'react';
import cn from 'classnames';
import {
	TwitterIcon,
	LinkedInIcon,
	FacebookIcon,
	InstagramIcon
} from '@components/Icons';
import css from './footer-social.module.css';

interface FooterSocialIcons {
	href: string;
	label: string;
	className: string;
	icon: JSX.Element;
}

const socialIcons: FooterSocialIcons[] = [
	{
		href: '#',
		label: 'LinkedIn',
		className: ``,
		icon: <LinkedInIcon />
	},
	{
		href: '#',
		label: 'Facebook',
		className: ``,
		icon: <FacebookIcon />
	},
	{
		href: '#',
		label: 'Twitter',
		className: ``,
		icon: <TwitterIcon />
	},
	{
		href: '#',
		label: 'Instagram',
		className: ``,
		icon: <InstagramIcon />
	}
];

interface FooterSocialProps {
	classNameRoot?: string;
}

const FooterSocial: FC<FooterSocialProps> = props => {
	const { classNameRoot } = props;
	const socialMapped = socialIcons.map(link => (
		<div key={link.label}>
			<a
				key={link.label}
				target='__blank'
				className={cn(css.socialLink, link.className)}
				href={link.href}
			>
				{link.icon}
			</a>
		</div>
	));
	return <div className={cn(css.socialRoot, classNameRoot)}>{socialMapped}</div>;
};

export default FooterSocial;
