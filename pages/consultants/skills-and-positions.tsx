import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import { HEADER_FOOTER, SKILLS_AND_POSITIONS } from '@lib/graphql';
import {
	SkillsAndPositions,
	SkillsAndPositionsVariables
} from '@lib/graphql/SkillsAndPositions/__generated__/SkillsAndPositions';
import { initializeApollo, addApolloState } from '@lib/apollo';
import SkillsAndPositionsPost, {
	SkillsAndPositionsPostVars
} from '@components/PositionsPreview/skills-and-positions';

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query<SkillsAndPositions, SkillsAndPositionsVariables>({
		query: SKILLS_AND_POSITIONS,
		variables: SkillsAndPositionsPostVars
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

const SkillsAndPositionsPage: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	return (
		<>
			<Layout title={'Skills And Positions'}>
				<SkillsAndPositionsPost />
				{/* <Button onClick={() => MailGun}>EMAIL</Button> */}
			</Layout>
		</>
	);
};

export default SkillsAndPositionsPage;
