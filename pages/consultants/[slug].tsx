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

const ConsultantSlugsQueryVars: ConsultantSlugsVariables = {
	order: ASC,
	field: SLUG,
	first: 15
};

type DynamicPaths = {
	params: {
		slug: string;
	};
}[];

interface PathPropsResult extends GetStaticPaths {
	pathsData: DynamicPaths;
}

const LoadingDots = dynamic(() => import('@components/UI/LoadingDots'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingDots />
	</div>
);

// const DynamicImage = dynamic(() => import('next/image'), dynamicProps);

const DynamicConsultant: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	const { query } = useRouter();
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
};

export async function getStaticProps(
	ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Params>> {
	const consultantParams = ctx.params as Params;
	const ConsultantBySlugQueryVars: ConsultantBySlugVariables = {
		idType: ConsultantIdType.SLUG,
		id: consultantParams.slug
	};

	const apolloClient = initializeApollo();
	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	await apolloClient.query<ConsultantSlugs, ConsultantSlugsVariables>({
		query: CONSULTANT_SLUGS,
		variables: ConsultantSlugsQueryVars
	});
	const { data } = await apolloClient.query<
		ConsultantBySlug,
		ConsultantBySlugVariables
	>({
		query: CONSULTANT_BY_SLUG,
		variables: ConsultantBySlugQueryVars
	});
	const consultantPostDynamic =
		data && data.consultantPost !== null ? data.consultantPost : {};
	const consultantSlugDynamic =
		data && data.consultantPost !== null && data.consultantPost.slug !== null
			? data.consultantPost.slug
			: '';

	console.log('consultantPostDynamic: ', consultantPostDynamic);
	console.log('consultantSlugDynamic: ', consultantSlugDynamic);

	return addApolloState(apolloClient, {
		props: {
			consultant: data.consultantPost ?? {},
			path: data.consultantPost!.slug ?? ' '
		}
	});
}

export const getStaticPaths = async (
	ctx: PathPropsResult
): Promise<{
	paths: DynamicPaths;
	fallback: boolean | 'blocking';
}> => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<
		ConsultantSlugs,
		ConsultantSlugsVariables
	>({
		query: CONSULTANT_SLUGS,
		variables: ConsultantSlugsQueryVars
	});

	const { pathsData = [] } = ctx;

	if (
		data &&
		data.consultantSlugs !== null &&
		data.consultantSlugs.edges !== null &&
		data.consultantSlugs.edges.length > 0
	)
		data.consultantSlugs.edges.map(slugs => {
			if (slugs !== null && slugs.node !== null && slugs.node.slug !== null) {
				const returnedAboutPaths = { params: { slug: slugs.node.slug } };
				pathsData.push(returnedAboutPaths);
			}
		});

	return {
		paths: pathsData,
		fallback: 'blocking'
	};
};

export default DynamicConsultant;
