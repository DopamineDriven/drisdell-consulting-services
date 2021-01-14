import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';
import css from './nav-links-headless.module.css';
import { HeaderFooter_headerDynamic_menuItems_edges_node as NavRef } from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';

export interface NavLinkProps extends NavRef {
	root?: string;
	subMenu: React.ReactNode;
}

const NavLinksHeadless: FC<NavLinkProps> = props => {
	const { root, path, label, subMenu, childItems } = props;
	const { pathname } = useRouter();

	return (
		<>
			<Link href={path} passHref>
				<a
					className={
						pathname === path ? cn(css.linkActive, root) : cn(css.link, root)
					}
					aria-label={`link to ${label!}`}
				>
					{label ?? ''}
				</a>
			</Link>
			{childItems !== null &&
			childItems.edges !== null &&
			childItems.edges.length > 0
				? childItems.edges.map(edge => {
						return edge !== null &&
							edge.node !== null &&
							edge.node.url !== null &&
							edge.node.label !== null &&
							edge.node.parentId !== null ? (
							<>{subMenu}</>
						) : (
							''
						);
				  })
				: ''}
		</>
	);
};

export default NavLinksHeadless;
// 											'block px-3 py-2 rounded-md text-base font-semibold text-primary-8 hover:text-primary-9'
