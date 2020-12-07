import { Fragment } from 'react';
import { Layout, AboutPageCoalesced } from '@components/index';
import { NextPage } from 'next';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PageTitle } from '@lib/index';
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
	const { ABOUT_US } = PageTitle;
	return (
		<Fragment>
			<Layout title={ABOUT_US}>
				<AboutPageCoalesced />
			</Layout>
		</Fragment>
	);
};

export default About;
