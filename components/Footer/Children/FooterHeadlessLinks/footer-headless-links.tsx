import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import css from './footer-headless-links.module.css';
import { HeaderFooter_footerDynamic_menuItems_edges_node as FooterRef } from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';

export interface FooterLinkPropsHeadless extends FooterRef {
	root?: string;
}

const FooterNavLinksHeadless: FC<FooterLinkPropsHeadless> = props => {
	const { root, path, label } = props;
	const { pathname } = useRouter();

	return (
		<li className={css.footerLinksLi}>
			<Link href={path} passHref>
				<a
					className={
						pathname === path ? cn(css.linkActive, root) : cn(css.links, root)
					}
					aria-label={`link to ${label!}`}
				>
					{label ?? ''}
				</a>
			</Link>
		</li>
	);
};

export default FooterNavLinksHeadless;
