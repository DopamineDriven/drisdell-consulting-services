import { Fragment } from 'react';
import { Layout, ConsultantsCoalesced } from '@components/index';
import { PageTitle } from '@lib/index';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { CONSULTANTS_PAGE, HEADER_FOOTER } from '@lib/graphql';
import { ConsultantsPageQueryVars } from '@components/Consultants/consultants-coalesced';
import { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
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
	const { CONSULTANTS } = PageTitle;
	return (
		<Fragment>
			<Layout title={CONSULTANTS}>
				<ConsultantsCoalesced />
			</Layout>
		</Fragment>
	);
};

export default Consultants;
