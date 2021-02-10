import { useRouter } from 'next/router';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { POSITION_BY_SLUG, HEADER_FOOTER, POSITION_SLUGS } from '@lib/graphql';
import {
	NextPage,
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
	GetStaticPropsResult
} from 'next';
import {
	PositionIdType,
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from '@lib/graphql-global-types';
import {
	PositionSlugs,
	PositionSlugsVariables
} from '@lib/graphql/PositionSlugs/__generated__/PositionSlugs';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import {
	PositionBySlugVariables,
	PositionBySlug
} from '@lib/graphql/PositionBySlug/__generated__/PositionBySlug';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import PositionPostsCoalesced from '@components/PositionPosts/positon-posts-coalesced';
import { Params } from 'next/dist/next-server/server/router';
import dynamic from 'next/dynamic';

const LoadingSpinner = dynamic(() => import('@components/UI/LoadingSpinner'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingSpinner />
	</div>
);

function PositionsSubPage({
	position
}: NextPage & InferGetStaticPropsType<typeof getStaticProps>) {
	const { query } = useRouter();
	console.log('Inferred getStaticPropsType:', typeof position);
	// type assertion -- query.slug returns a string[], string, or undefined without assertion
	const positionPostTarget = query.slug as string;
	const router = useRouter();
	return (
		<>
			<Layout title={positionPostTarget ?? 'query slug error'}>
				{router.isFallback ? (
					<Loading />
				) : (
					<>
						<PositionPostsCoalesced />
					</>
				)}
			</Layout>
		</>
	);
}

export async function getStaticProps(
	ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Params>> {
	const positionParams = ctx.params as Params;
	const PositionBySlugQueryVars: PositionBySlugVariables = {
		idType: PositionIdType.SLUG,
		id: positionParams.slug
	};
	const apolloClient = initializeApollo();
	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	await apolloClient.query<PositionSlugs, PositionSlugsVariables>({
		query: POSITION_SLUGS,
		variables: PositionSlugsQueryVars
	});
	const { data } = await apolloClient.query<
		PositionBySlug,
		PositionBySlugVariables
	>({
		query: POSITION_BY_SLUG,
		variables: PositionBySlugQueryVars
	});
	return addApolloState(apolloClient, {
		props: {
			position: data.positionBySlug ?? {},
			path: data.positionBySlug!.slug ?? positionParams.slug
		},
		revalidate: 10
	});
}

type DynamicPaths = {
	params: {
		slug: string;
	};
}[];

const PositionSlugsQueryVars: PositionSlugsVariables = {
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.SLUG,
	first: 10
};

export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<
		PositionSlugs,
		PositionSlugsVariables
	>({
		query: POSITION_SLUGS,
		variables: PositionSlugsQueryVars
	});

	const positionsData: DynamicPaths = [];

	if (
		data &&
		data.positionSlugs !== null &&
		data.positionSlugs.edges !== null &&
		data.positionSlugs.edges.length > 0
	)
		data.positionSlugs.edges.map(slugs => {
			if (slugs !== null && slugs.node !== null && slugs.node.slug !== null) {
				positionsData.push({ params: { slug: slugs.node.slug } });
			}
		});
	return {
		paths: positionsData,
		fallback: true
	};
};

export default PositionsSubPage;
