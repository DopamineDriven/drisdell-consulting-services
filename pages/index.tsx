import { Fragment } from 'react';
import { Meta, Nav, Footer, LandingPageCoalesced } from '@components/index';
import { NextPage } from 'next';
import { LANDING_PAGE } from '@lib/graphql';
import { LandingPageQueryVars } from '@components/LandingPage/landing-page-coalesced';
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
			<Meta title='Drisdell Consulting Services Landing' />
			<div className='flex min-w-full w-full'>
				<Nav classNameParentDiv='' />
			</div>
			<div className='container items-center content-center justify-center block max-w-full mx-auto pb-portfolio'>
				<LandingPageCoalesced />
			</div>
			<div>
				<Footer />
			</div>
		</Fragment>
	);
};

export default Index;
