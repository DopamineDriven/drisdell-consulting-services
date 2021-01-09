import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { CONSULTANTS_PAGE, HEADER_FOOTER } from '@lib/graphql';
import ConsultantsCoalesced, {
	ConsultantsPageQueryVars
} from '@components/Consultants/consultants-coalesced';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import {
	ConsultantsPage,
	ConsultantsPageVariables
} from '@lib/graphql/ConsultantsPage/__generated__/ConsultantsPage';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query<ConsultantsPage, ConsultantsPageVariables>({
		query: CONSULTANTS_PAGE,
		variables: ConsultantsPageQueryVars
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

const Consultants: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	return (
		<>
			<Layout title={'Drisdell Consulting Services Consultants'}>
				<ConsultantsCoalesced />
			</Layout>
		</>
	);
};

export default Consultants;
