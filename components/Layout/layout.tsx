import React, { FC } from 'react';
import css from './layout.module.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import cn from 'classnames';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Button, LoadingSpinner, Modal } from '../UI';
import { useAcceptCookies } from '@lib/use-accept-cookies';
import HEADER_FOOTER from '@lib/graphql/HeaderFooter';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import { useQuery } from '@apollo/client';
import { MenuNodeIdTypeEnum } from '@lib/graphql-global-types';
import Meta from './Meta';
import NavLinksHeadless from './NavLinksHeadless';
import NavbarLinks from './NavbarLinks';
import FooterNavLinksHeadless from './FooterHeadlessLinks';
import FooterNavLinks from './FooterNavLinks';
import { useUI } from '@components/context';

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
		<LoadingSpinner />
	</div>
);

const dynamicProps = {
	loading: () => <Loading />
};

const ApolloErrorMessage = dynamic(
	() => import('@components/UI/ErrorMessage'),
	dynamicProps
);

const EmailView = dynamic(
	() => import('@components/Portals/nodemail'),
	dynamicProps
);

const SubmitResumeView = dynamic(
	() => import('@components/Portals/submit-a-resume'),
	dynamicProps
);

const SuccessView = dynamic(
	() => import('@components/Portals/success'),
	dynamicProps
);

const LoginView = dynamic(
	() => import('@components/Portals/user-login'),
	dynamicProps
);

const SignUpView = dynamic(
	() => import('@components/Portals/sign-up'),
	dynamicProps
);

const FeatureBar = dynamic(
	() => import('@components/FeatureBar'),
	dynamicProps
);

const Layout: FC<LayoutProps> = props => {
	const { displayModal, closeModal, modalView } = useUI();
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
						message={error.message}
						graphQLErrors={error.graphQLErrors}
						networkError={error.networkError}
						extraInfo={error.extraInfo}
						stack={error.stack}
						name={error.name}
					/>
				</>
			) : loading && !error ? (
				<LoadingSpinner />
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
										parentId={nodes.node.parentId}
										url={nodes.node.url}
										key={nodes.node.id}
										path={nodes.node.path}
										label={nodes.node.label}
										id={nodes.node.id}
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
										parentId={nodes.node.parentId}
										key={nodes.node.id}
										path={nodes.node.path}
										label={nodes.node.label}
										id={nodes.node.id}
										url={nodes.node.url}
										__typename={nodes.node.__typename}
										childItems={nodes.node.childItems}
										root={
											'block px-3 py-2 rounded-md text-base font-semibold text-primary-1 hover:bg-primary-8'
										}
									/>
								) : (
									<div>error...{error}</div>
								)
							)
						) : (
							<NavbarLinks
								root={cn(
									'block px-3 py-2 rounded-md text-base font-medium text-primary-9'
								)}
							/>
						)
					}
				/>
			)}
			<Modal open={displayModal} onClose={closeModal}>
				{modalView === 'EMAIL_VIEW' && <EmailView />}
				{modalView === 'LOGIN_VIEW' && <LoginView />}
				{modalView === 'SIGNUP_VIEW' && <SignUpView />}
				{modalView === 'SUBMIT_RESUME_VIEW' && <SubmitResumeView />}
				{modalView === 'SUCCESS_VIEW' && <SuccessView />}
			</Modal>
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
					<LoadingSpinner />
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
											parentId={nodes.node.parentId}
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
						className='bg-primary-3 prose-lg sm:prose-xl text-primary-0 bg-opacity-70 sm:text-center'
						action={
							<Button
								className='mx-auto text-center rounded-xl border-primary-0 border-1 hover:text-primary-9 hover:bg-primary-0 hover:bg-opacity-80 hover:border-primary-8 duration-500 ease-in-out transform transition-colors'
								onClick={() => onAcceptCookies()}
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
