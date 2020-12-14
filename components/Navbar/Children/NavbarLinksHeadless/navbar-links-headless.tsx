import { HeaderFooter } from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import { FC } from 'react';
import cn from 'classnames';
import css from './navbar-links-headless.module.css';
import { useRouter } from 'next/router';
import NavbarLinks from '../NavbarLinks';
import Link from 'next/link';

export interface NavbarLinksHeadlessProps {
	root?: string;
}

const NavbarLinksHeadless: FC<
	NavbarLinksHeadlessProps & HeaderFooter
> = props => {
	const { headerMenu, root } = props;
	const { pathname } = useRouter();

	const navbarListHeadless =
		headerMenu && headerMenu.edges !== null && headerMenu.edges.length > 0 ? (
			headerMenu.edges.map(menu => {
				return menu !== null &&
					menu.node !== null &&
					menu.node.id !== null &&
					menu.node.label !== null &&
					menu.node.path !== null ? (
					<>
						<Link key={menu.node.id} href={menu.node.path} passHref>
							<a
								className={
									pathname === menu.node.path
										? cn(css.linkActive, root)
										: cn(css.link, root)
								}
							>
								{menu.node.label}
							</a>
						</Link>
					</>
				) : (
					<NavbarLinks />
				);
			})
		) : (
			<NavbarLinks />
		);
	return <>{navbarListHeadless}</>;
};

export default NavbarLinksHeadless;
