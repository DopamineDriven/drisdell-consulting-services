import { Layout, LandingPageCoalesced } from '@components/index';
import { LANDING_PAGE, HEADER_FOOTER } from '@lib/graphql';
import { LandingPageQueryVars } from '@components/LandingPage/landing-page-coalesced';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { PageTitle } from '@lib/index';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import {
	LandingPage,
	LandingPageVariables
} from '@lib/graphql/LandingPage/__generated__/LandingPage';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query<LandingPage, LandingPageVariables>({
		query: LANDING_PAGE,
		variables: LandingPageQueryVars
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

const Index: NextPage & InferGetStaticPropsType<typeof getStaticProps> = () => {
	const { INDEX } = PageTitle;
	return (
		<>
			<Layout title={INDEX}>
				<LandingPageCoalesced />
			</Layout>
		</>
	);
};

export default Index;
