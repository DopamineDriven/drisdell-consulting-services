import { Fragment } from 'react';
import { Meta, Nav } from '@components/index';
import { NextPage } from 'next';
import Head from 'next/head';
import { LANDING_PAGE } from '@lib/graphql';
import LandingPage, {
	LandingPageQueryVars
} from '@components/LandingPage/landing-page-coalesced';
import { initializeApollo, addApolloState } from '../lib/apollo';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: LANDING_PAGE,
		variables: LandingPageQueryVars
	});

	return addApolloState(apolloClient, {
		props: {},
		revalidate: 10
	});
};

const Index: NextPage & InferGetStaticPropsType<typeof getStaticProps> = () => {
	return (
		<Fragment>
			<Meta />
			<Head>
				<title>Drisdell Consulting Services</title>
			</Head>
			<div className='flex min-w-full w-full'>
				<Nav classNameParentDiv='' />
			</div>
			<div className='container items-center content-center justify-center block max-w-full mx-auto pb-portfolio'>
				<LandingPage />
			</div>
		</Fragment>
	);
};

export default Index;
