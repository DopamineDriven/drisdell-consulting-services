import {
	NextPage,
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
	GetStaticPropsResult
} from 'next';
import { initializeApollo, addApolloState } from '@lib/apollo';
import {
	CONSULTANT_BY_SLUG,
	CONSULTANT_SLUGS,
	HEADER_FOOTER
} from '@lib/graphql';
import {
	ConsultantSlugs,
	ConsultantSlugsVariables
} from '@lib/graphql/ConsultantSlugs/__generated__/ConsultantSlugs';
import {
	ConsultantBySlug,
	ConsultantBySlugVariables
} from '@lib/graphql/ConsultantBySlug/__generated__/ConsultantBySlug';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Params } from 'next/dist/next-server/server/router';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum,
	ConsultantIdType
} from '@_types/graphql-global-types';
// import hydrate from 'next-mdx-remote/hydrate';
import ConsultantPosts from '@components/ConsultantPosts/consultant-posts';

const { ASC } = OrderEnum;
const { SLUG } = PostObjectsConnectionOrderbyEnum;

/**
 ** @CONSULTANT_SLUGS @QueryVars targeting incoming @SLUG paths
 */
const ConsultantSlugsQueryVars: ConsultantSlugsVariables = {
	order: ASC,
	field: SLUG,
	first: 15
};

/**
 ** expected shape of @GetStaticPathsResult
 */
type DynamicPaths = {
	params: {
		slug: string;
	};
}[];

export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<
		ConsultantSlugs,
		ConsultantSlugsVariables
	>({
		query: CONSULTANT_SLUGS,
		variables: ConsultantSlugsQueryVars
	});

	/**
	 * set @type annotation of @pathsData empty array to desired @GetStaticPathsResult
	 */
	const pathsData: DynamicPaths = [];

	/**
	 * @nullCheck to map @CONSULTANT_SLUGS edges
	 */
	if (
		data &&
		data.consultantSlugs !== null &&
		data.consultantSlugs.edges !== null &&
		data.consultantSlugs.edges.length > 0
	)
		data.consultantSlugs.edges.map(slugs => {
			if (slugs !== null && slugs.node !== null && slugs.node.slug !== null) {
				/**
				 * @inject empty array of @pathsData of type @DynamicPaths with @dynamicSlugs
				 */
				pathsData.push({ params: { slug: slugs.node.slug } });
			}
		});

	return {
		paths: pathsData,
		fallback: 'blocking'
	};
};

/**
 ** use @GetStaticPaths @slugs via @GetStaticPropsContext as @ctx
 ** and @GetStaticPropsResultType @Params
 ** to dynamically generate targeted @consultantPost Object and @consultantSlug path
 */
export async function getStaticProps(
	ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Params>> {
	/**
	 ** @TypeAssertion otherwise @Params can return null or undefined for @RouteMatch
	 ** @Params is defined as [param: string]: any;
	 ** recall that params is the object key resolved in @GetStaticPathsResult
	 */
	const consultantParams = ctx.params as Params;
	const ConsultantBySlugQueryVars: ConsultantBySlugVariables = {
		idType: ConsultantIdType.SLUG,
		id: consultantParams.slug
	};

	const apolloClient = initializeApollo();
	/**
	 ** injecting @ApolloState with @HeaderFooter @MenuPaths on @Layout
	 */
	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});

	/**
	 ** injecting @ApolloState with @ConsultantSlugs needed to resolve @GetStaticProps
	 ** of type @GetStaticPathsResult
	 */
	await apolloClient.query<ConsultantSlugs, ConsultantSlugsVariables>({
		query: CONSULTANT_SLUGS,
		variables: ConsultantSlugsQueryVars
	});

	/**
	 ** strongly typed destructuring of @ConsultantBySlug using @consultantParamsSlug
	 */
	const { data } = await apolloClient.query<
		ConsultantBySlug,
		ConsultantBySlugVariables
	>({
		query: CONSULTANT_BY_SLUG,
		variables: ConsultantBySlugQueryVars
	});

	/**
	 ** @NullishCoalescing for incoming dynamic @ConsultantObject @ConsultantPath
	 */
	return addApolloState(apolloClient, {
		props: {
			consultant: data.consultantPost ?? {},
			path: data.consultantPost!.slug ?? ' '
		},
		revalidate: 10
	});
}

/**
 ** @LoadingDotsDynamic @routerIsFallback
 */
const LoadingDots = dynamic(() => import('@components/UI/LoadingDots'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingDots />
	</div>
);

/**
 ** @InferGetStaticProps @infersPostSlug @infersPostObject from @GetStaticProps
 **/

function DynamicConsultant({
	consultant
}: NextPage & InferGetStaticPropsType<typeof getStaticProps>) {
	console.log({ consultant });
	console.log(typeof consultant);
	console.log(consultant);
	const { query } = useRouter();

	/**
	 ** @TypeAssertion otherwise @querySlug returns string[], string, or undefined
	 ** pass @consultantSlugTarget as @ConsultantBySlugQueryVars @id
	 */
	const consultantSlugTarget = query.slug as string;
	const ConsultantBySlugQueryVars: ConsultantBySlugVariables = {
		idType: ConsultantIdType.SLUG,
		id: consultantSlugTarget
	};
	const { data } = useQuery<ConsultantBySlug, ConsultantBySlugVariables>(
		CONSULTANT_BY_SLUG,
		{
			variables: ConsultantBySlugQueryVars,
			notifyOnNetworkStatusChange: true
		}
	);

	/**
	 ** @HandleFallback and null check @postMetaTitle
	 ** conditionally handle @Fallback and @Null via ternary
	 */
	const router = useRouter();
	return data &&
		data.consultantPost !== null &&
		data.consultantPost.title !== null ? (
		<Layout title={data.consultantPost.title}>
			{router.isFallback ? (
				<Loading />
			) : (
				<>
					<ConsultantPosts />
				</>
			)}
		</Layout>
	) : (
		<Layout title={'title null'}>
			{router.isFallback ? (
				<Loading />
			) : (
				<>
					<ConsultantPosts />
				</>
			)}
		</Layout>
	);
}

export default DynamicConsultant;
