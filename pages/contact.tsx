import { Fragment } from 'react';
import { Layout } from '@components/index';
import { PageTitle } from '@lib/index';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { HEADER_FOOTER } from '@lib/graphql';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { HeaderFooterMenuQueryVers } from '@components/Layout/layout';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	return addApolloState(apolloClient, {
		props: {},
		revalidate: 10
	});
};

const Contact: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	const { CONTACT } = PageTitle;
	return (
		<Fragment>
			<Layout title={CONTACT}>
				<div>Contact Page</div>
			</Layout>
		</Fragment>
	);
};

export default Contact;
