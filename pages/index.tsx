import { Fragment } from 'react';
import { Layout, LandingPageCoalesced } from '@components/index';
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
			<Layout title='Drisdell Consulting Services landing page'>
				<LandingPageCoalesced />
			</Layout>
		</Fragment>
	);
};

export default Index;
