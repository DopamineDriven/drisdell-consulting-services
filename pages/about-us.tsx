import { Fragment } from 'react';
import { Layout, AboutPageCoalesced } from '@components/index';
import { NextPage } from 'next';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PageTitle } from '@lib/index';
import { ABOUT_PAGE, HEADER_FOOTER } from '@lib/graphql';
import { AboutPageQueryVars } from '@components/About/about-page-coalesced';
import {
	AboutPage,
	AboutPageVariables
} from '@lib/graphql/AboutPage/__generated__/AboutPage';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import { HeaderFooterMenuQueryVers } from '@components/Layout/layout';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query<AboutPage, AboutPageVariables>({
		query: ABOUT_PAGE,
		variables: AboutPageQueryVars
	});
	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
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
