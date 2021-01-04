import React, { FC } from 'react';
import css from './layout.module.css';
import { Meta, Navbar, Footer } from '@components/index';
import cn from 'classnames';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Button, LoadingDots } from '@components/UI';
import { useAcceptCookies } from '@lib/use-accept-cookies';
import NavLinksHeadless from '@components/Navbar/Children';
import HEADER_FOOTER from '@lib/graphql/HeaderFooter';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import { useQuery } from '@apollo/client';
import { MenuNodeIdTypeEnum } from '@_types/graphql-global-types';
import NavbarLinks from '../Navbar/Children/NavbarLinks/navbar-links';
import FooterNavLinksHeadless from '../Footer/Children/FooterHeadlessLinks/footer-headless-links';
import FooterNavLinks from '../Footer/Children/FooterNavLinks/footer-nav-links';

interface LayoutProps {
	classNameRoot?: string;
	title?: string;
}

export const HeaderFooterMenuQueryVers: HeaderFooterVariables = {
	idTypeHead: MenuNodeIdTypeEnum.NAME,
	idHead: 'HEADER',
	idTypeFoot: MenuNodeIdTypeEnum.NAME,
	idFoot: 'Footer'
};

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingDots />
	</div>
);

const dynamicProps = {
	loading: () => <Loading />
};

const ApolloErrorMessage = dynamic(
	() => import('@components/ErrorMessage'),
	dynamicProps
);

const FeatureBar = dynamic(
	() => import('@components/FeatureBar'),
	dynamicProps
);

const Layout: FC<LayoutProps> = props => {
	const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
	const { children, classNameRoot, title = 'default title' } = props;
	const { loading, error, data } = useQuery<HeaderFooter, HeaderFooterVariables>(
		HEADER_FOOTER,
		{
			variables: HeaderFooterMenuQueryVers,
			notifyOnNetworkStatusChange: true
		}
	);
	return (
		<>
			<Head>
				<title title={title} />
			</Head>
			<Meta />
			{error ? (
				<>
					<ApolloErrorMessage
						message={`${error.message}`}
						graphQLErrors={error.graphQLErrors}
						networkError={error.networkError}
						extraInfo={error.extraInfo}
						stack={error.stack}
						name={error.name}
					/>
				</>
			) : loading && !error ? (
				<LoadingDots />
			) : (
				<Navbar
					navLinksDesktop={
						data &&
						data.headerDynamic !== null &&
						data.headerDynamic.menuItems !== null &&
						data.headerDynamic.menuItems.edges !== null &&
						data.headerDynamic.menuItems.edges.length > 0 ? (
							data.headerDynamic.menuItems.edges.map(nodes =>
								nodes !== null &&
								nodes.node !== null &&
								nodes.node.label !== null &&
								nodes.node.childItems !== null ? (
									<NavLinksHeadless
										key={nodes.node.id}
										path={nodes.node.path}
										label={nodes.node.label}
										id={nodes.node.id}
										url={nodes.node.url}
										__typename={nodes.node.__typename}
										childItems={nodes.node.childItems}
									/>
								) : (
									<div>error...{error}</div>
								)
							)
						) : (
							<NavbarLinks />
						)
					}
					navLinksMobile={
						data &&
						data.headerDynamic !== null &&
						data.headerDynamic.menuItems !== null &&
						data.headerDynamic.menuItems.edges !== null &&
						data.headerDynamic.menuItems.edges.length > 0 ? (
							data.headerDynamic.menuItems.edges.map(nodes =>
								nodes !== null &&
								nodes.node !== null &&
								nodes.node.label !== null &&
								nodes.node.childItems !== null ? (
									<NavLinksHeadless
										key={nodes.node.id}
										path={nodes.node.path}
										label={nodes.node.label}
										id={nodes.node.id}
										url={nodes.node.url}
										__typename={nodes.node.__typename}
										childItems={nodes.node.childItems}
										root={cn(
											'block px-3 py-2 rounded-md text-base font-medium text-primary-0'
										)}
									/>
								) : (
									<div>error...{error}</div>
								)
							)
						) : (
							<NavbarLinks
								root={cn(
									'block px-3 py-2 rounded-md text-base font-medium text-primary-0'
								)}
							/>
						)
					}
				/>
			)}
			<div className={cn(css.bg, classNameRoot)}>
				<main className={cn(css.main, 'fit')}>{children}</main>
				{error ? (
					<>
						<ApolloErrorMessage
							message={`${error.message}`}
							graphQLErrors={error.graphQLErrors}
							networkError={error.networkError}
							extraInfo={error.extraInfo}
							stack={error.stack}
							name={error.name}
						/>
					</>
				) : loading && !error ? (
					<LoadingDots />
				) : (
					<Footer
						footerLinks={
							data &&
							data.footerDynamic !== null &&
							data.footerDynamic.menuItems !== null &&
							data.footerDynamic.menuItems.edges !== null &&
							data.footerDynamic.menuItems.edges.length > 0 ? (
								data.footerDynamic.menuItems.edges.map(nodes =>
									nodes !== null &&
									nodes.node !== null &&
									nodes.node.label !== null &&
									nodes.node.childItems !== null ? (
										<FooterNavLinksHeadless
											key={nodes.node.id}
											path={nodes.node.path}
											url={nodes.node.url}
											label={nodes.node.label}
											__typename={nodes.node.__typename}
											childItems={nodes.node.childItems}
											id={nodes.node.id}
										/>
									) : (
										<div>error...{error}</div>
									)
								)
							) : (
								<FooterNavLinks />
							)
						}
					/>
				)}
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
