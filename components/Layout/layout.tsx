import React, { FC } from 'react';
import css from './layout.module.css';
import { Meta, Navbar, Footer } from '@components/index';
import cn from 'classnames';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Button, LoadingDots } from '@components/UI';
import { useAcceptCookies } from '@lib/use-accept-cookies';

interface LayoutProps {
	children: React.ReactNode;
	classNameRoot?: string;
	title?: string;
}

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingDots />
	</div>
);
const dynamicProps = {
	loading: () => <Loading />
};
const FeatureBar = dynamic(
	() => import('@components/FeatureBar'),
	dynamicProps
);

const Layout: FC<LayoutProps> = props => {
	const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
	const { children, classNameRoot, title = 'default title' } = props;
	const isProd = process.env.NODE_ENV === 'production' ? <Meta /> : <></>;
	return (
		<>
			<Head>
				<title title={title} />
			</Head>
			{isProd}
			<Navbar />
			<div className={cn(css.bg, classNameRoot)}>
				<main className={cn(css.main, 'fit')}>{children}</main>
				<Footer />
				<div className=' font-poppins'>
					<FeatureBar
						title='This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.'
						hide={acceptedCookies}
						className='bg-primary-3 text-accents-6 bg-opacity-70'
						action={
							<Button
								className='mx-5 rounded-xl border-accents-6 border-1 hover:text-primary-3 hover:bg-accents-6 hover:bg-opacity-70 hover:border-primary-3 duration-500 ease-in-out transform transition-colors'
								onClick={onAcceptCookies}
							>
								Accept Cookies
							</Button>
						}
					/>
				</div>
			</div>
		</>
	);
};

export default Layout;
