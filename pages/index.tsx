import { LANDING_PAGE, HEADER_FOOTER, ALL_TESTIMONIALS } from '@lib/graphql';
import LandingPageCoalesced, {
	LandingPageQueryVars
} from '@components/LandingPage/landing-page-coalesced';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
// import { Button } from '@components/UI';
import TestimonialsCoalesced, {
	TestimonialsQueryVars
} from '@components/Testimonials/testimonials-coalesced';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import {
	LandingPage,
	LandingPageVariables
} from '@lib/graphql/LandingPage/__generated__/LandingPage';
import {
	AllTestimonials,
	AllTestimonialsVariables
} from '@lib/graphql/AllTestimonials/__generated__/AllTestimonials';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	const { data: page } = await apolloClient.query<
		LandingPage,
		LandingPageVariables
	>({
		query: LANDING_PAGE,
		variables: LandingPageQueryVars
	});
	const { data: menu } = await apolloClient.query<
		HeaderFooter,
		HeaderFooterVariables
	>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	const { data: testimonials } = await apolloClient.query<
		AllTestimonials,
		AllTestimonialsVariables
	>({
		query: ALL_TESTIMONIALS,
		variables: TestimonialsQueryVars
	});
	return addApolloState(apolloClient, {
		props: {
			headerDynamic: menu.headerDynamic ?? {},
			footerDynamic: menu.footerDynamic ?? {},
			page: page.pages?.edges ?? {},
			testimonials: testimonials.testimonials?.edges ?? {}
		},
		revalidate: 10
	});
};

const Index: NextPage & InferGetStaticPropsType<typeof getStaticProps> = () => {
	return (
		<>
			<Layout title={'Drisdell Consulting Services Landing Page'}>
				<LandingPageCoalesced />
				<TestimonialsCoalesced />
				{/* <Button onClick={() => MailGun}>EMAIL</Button> */}
			</Layout>
		</>
	);
};

export default Index;
