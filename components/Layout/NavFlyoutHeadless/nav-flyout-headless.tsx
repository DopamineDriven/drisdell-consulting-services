// import { Transition, Menu } from '@headlessui/react';
import { FC } from 'react';
import { HeaderFooter_headerDynamic_menuItems_edges_node_childItems as FlyoutProps } from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import cn from 'classnames';
// import DownArrow from '../../Icons/down-arrow';
import css from './nav-flyout-headless.module.css';
// import Link from 'next/link';

interface NavFlyoutProps extends FlyoutProps {
	root?: string;
}

const NavFlyoutHeadless: FC<NavFlyoutProps> = props => {
	const { root } = props;

	return (
		<>
			<div className={cn(root, css.root)}></div>
		</>
	);
};

export default NavFlyoutHeadless;
