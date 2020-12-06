import React, { FC } from 'react';
import css from './layout.module.css';
import { Meta, Nav, Footer } from '@components/index';
import cn from 'classnames';
import Head from 'next/head';

interface LayoutProps {
	children: React.ReactNode;
	classNameRoot?: string;
	title?: string;
}

const Layout: FC<LayoutProps> = props => {
	const { children, classNameRoot, title = 'default title' } = props;
	return (
		<>
			<Head>
				<title title={title} />
			</Head>
			<Meta />
			<Nav />
			<div className={cn(css.bg, classNameRoot)}>
				<main className={cn(css.main, 'fit')}>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
