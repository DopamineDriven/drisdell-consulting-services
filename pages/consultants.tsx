import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { CONSULTANTS_DATA, HEADER_FOOTER } from '@lib/graphql';
import ConsultantsDataCoalesced, {
	ConsultantsDataQueryVars
} from '@components/ConsultantsData/consultants-data-coalesced';
import {
	ConsultantsData,
	ConsultantsDataVariables
} from '@lib/graphql/ConsultantsData/__generated__/ConsultantsData';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	const { data: consultant, data: pages } = await apolloClient.query<
		ConsultantsData,
		ConsultantsDataVariables
	>({
		query: CONSULTANTS_DATA,
		variables: ConsultantsDataQueryVars
	});
	const { data: menu } = await apolloClient.query<
		HeaderFooter,
		HeaderFooterVariables
	>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	return addApolloState(apolloClient, {
		props: {
			headerDynamic: menu.headerDynamic ?? {},
			footerDynamic: menu.footerDynamic ?? {},
			consultants: consultant.consultants?.edges ?? {},
			pages: pages.pages ?? {}
		},
		revalidate: 10
	});
};

const Consultants: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	return (
		<>
			<Layout title={'Drisdell Consulting Services -- Consultants'}>
				<ConsultantsDataCoalesced />
			</Layout>
		</>
	);
};

export default Consultants;
