import { Fragment } from 'react';
import { Layout, ConsultantsCoalesced } from '@components/index';
import { PageTitle } from '@lib/index';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { CONSULTANTS_PAGE } from '@lib/graphql';
import { ConsultantsPageQueryVars } from '@components/Consultants/consultants-coalesced';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query({
		query: CONSULTANTS_PAGE,
		variables: ConsultantsPageQueryVars
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
