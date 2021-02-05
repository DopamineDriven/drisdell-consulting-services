import { HEADER_FOOTER, LANDING_COALESCED } from '@lib/graphql';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import LandingPageCoalescence, {
	LandingCoalescedQueryVars
} from '@components/Landing/landing-page-coalesced';
import {
	LandingCoalescedVariables,
	LandingCoalesced
} from '../lib/graphql/LandingCoalesced/__generated__/LandingCoalesced';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query<LandingCoalesced, LandingCoalescedVariables>({
		query: LANDING_COALESCED,
		variables: LandingCoalescedQueryVars
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
				<LandingPageCoalescence />
				{/* <Button onClick={() => MailGun}>EMAIL</Button> */}
			</Layout>
		</>
	);
};

export default Index;
