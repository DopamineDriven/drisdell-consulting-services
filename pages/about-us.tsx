import { initializeApollo, addApolloState } from '@lib/apollo';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ABOUT_PAGE, HEADER_FOOTER } from '@lib/graphql';
import AboutPageCoalesced, {
	AboutPageQueryVars
} from '@components/About/about-page-coalesced';
import {
	AboutPage,
	AboutPageVariables
} from '@lib/graphql/AboutPage/__generated__/AboutPage';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';

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
	return (
		<>
			<Layout title={'ABOUT DRISDELL CONSULTING SERVICES'}>
				<AboutPageCoalesced />
			</Layout>
		</>
	);
};

export default About;
