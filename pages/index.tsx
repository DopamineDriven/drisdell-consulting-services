import { LANDING_PAGE, HEADER_FOOTER } from '@lib/graphql';
import LandingPageCoalesced, {
	LandingPageQueryVars
} from '@components/LandingPage/landing-page-coalesced';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
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
	return (
		<>
			<Layout title={'Drisdell Consulting Services Landing Page'}>
				<LandingPageCoalesced />
			</Layout>
		</>
	);
};

export default Index;
