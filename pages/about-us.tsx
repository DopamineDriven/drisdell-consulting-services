import { Fragment } from 'react';
import { Meta, Nav, Footer, AboutPageCoalesced } from '@components/index';
import { NextPage } from 'next';
import { initializeApollo, addApolloState } from '../lib/apollo';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ABOUT_PAGE } from '@lib/graphql';
import { AboutPageQueryVars } from '@components/About/about-page-coalesced';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ABOUT_PAGE,
		variables: AboutPageQueryVars
	});

	return addApolloState(apolloClient, {
		props: {},
		revalidate: 10
	});
};

const About: NextPage & InferGetStaticPropsType<typeof getStaticProps> = () => {
	return (
		<Fragment>
			<Meta title='about us' />
			<div className='flex min-w-full w-full'>
				<Nav classNameParentDiv='' />
			</div>
			<div className='items-center content-center justify-center block min-w-full mx-auto'>
				<AboutPageCoalesced />
			</div>
			<div className=''></div>
			<Footer />
		</Fragment>
	);
};

export default About;
