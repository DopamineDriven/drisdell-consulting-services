import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { HEADER_FOOTER } from '@lib/graphql';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import CONTACT_US_PAGE from '@lib/graphql/ContactUsPage';
import {
	ContactUsPage,
	ContactUsPageVariables
} from '@lib/graphql/ContactUsPage/__generated__/ContactUsPage';
import ContactUsPageCoalesced, {
	ContactUsPageQueryVars
} from '@components/ContactUsPage/contact-us-page';
import { initializeApollo, addApolloState } from '@lib/apollo';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	await apolloClient.query<ContactUsPage, ContactUsPageVariables>({
		query: CONTACT_US_PAGE,
		variables: ContactUsPageQueryVars
	});
	return addApolloState(apolloClient, {
		props: {},
		revalidate: 10
	});
};

const Contact: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	return (
		<>
			<Layout title={'Contact Drisdell Consulting Services'}>
				<ContactUsPageCoalesced />
			</Layout>
		</>
	);
};

export default Contact;
