import { FC, Fragment } from 'react';
import cn from 'classnames';
import {
	faFacebook,
	faLinkedin,
	faTwitter,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import css from './footer-social.module.css';

interface FooterSocialIcons {
	href: string;
	label: string;
	className: string;
	icon: IconProp;
}

const socialIcons: FooterSocialIcons[] = [
	{
		href: '',
		label: 'LinkedIn',
		className: ``,
		icon: faLinkedin
	},
	{
		href: '',
		label: 'Facebook',
		className: ``,
		icon: faFacebook
	},
	{
		href: '',
		label: 'Twitter',
		className: ``,
		icon: faTwitter
	},
	{
		href: '',
		label: 'Instagram',
		className: ``,
		icon: faInstagram
	}
];

interface FooterSocialProps {
	classNameRoot?: string;
}

const FooterSocial: FC<FooterSocialProps> = props => {
	const { classNameRoot = '' } = props;
	const socialMapped = socialIcons.map(link => (
		<Fragment>
			<>
				<a
					key={link.label}
					target='__blank'
					className={cn(css.socialLink, link.className)}
					href={link.href}
				>
					<FontAwesomeIcon icon={link.icon} size='2x' className={css.socialLink} />
				</a>
			</>
		</Fragment>
	));
	return <div className={cn(css.socialRoot, classNameRoot)}>{socialMapped}</div>;
};

export default FooterSocial;
