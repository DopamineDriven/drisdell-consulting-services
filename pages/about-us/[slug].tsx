import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
	GetStaticPropsResult
} from 'next';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { ABOUT_BY_SLUG, ABOUT_SLUGS, HEADER_FOOTER } from '@lib/graphql';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum,
	AboutIdType
} from '@lib/graphql-global-types';
import {
	AboutSlugs,
	AboutSlugsVariables
} from '@lib/graphql/AboutSlugs/__generated__/AboutSlugs';
import {
	AboutBySlug,
	AboutBySlugVariables
} from '@lib/graphql/AboutBySlug/__generated__/AboutBySlug';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';
import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Params } from 'next/dist/next-server/server/router';
// import AboutPosts from '@components/AboutPosts';
import AboutPostsEnhanced from '@components/AboutPosts/about-posts-enhanced';
import { AboutBySlug_aboutPost } from '../../lib/graphql/AboutBySlug/__generated__/AboutBySlug';

const LoadingSpinner = dynamic(() => import('@components/UI/LoadingSpinner'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingSpinner />
	</div>
);

const AboutSlugsQueryVars: AboutSlugsVariables = {
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.SLUG,
	first: 15
};

const { SLUG } = AboutIdType;

type DynamicPaths = {
	params: {
		slug: string;
	};
}[];

export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<AboutSlugs, AboutSlugsVariables>({
		query: ABOUT_SLUGS,
		variables: AboutSlugsQueryVars
	});

	const pathsData: DynamicPaths = [];

	if (
		data &&
		data.aboutslugs !== null &&
		data.aboutslugs.edges !== null &&
		data.aboutslugs.edges.length > 0
	)
		data.aboutslugs.edges.map(post => {
			if (post !== null && post.node !== null && post.node.slug !== null) {
				pathsData.push({ params: { slug: post.node.slug } });
			}
		});

	return {
		paths: pathsData,
		fallback: true
	};
};

export async function getStaticProps(
	ctx: GetStaticPropsContext
): Promise<
	GetStaticPropsResult<{ about: AboutBySlug_aboutPost | {}; path: string }>
> {
	const params = ctx.params as Params;
	const AboutBySlugQueryVars: AboutBySlugVariables = {
		idType: SLUG,
		id: params.slug
	};
	const apolloClient = initializeApollo();
	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	await apolloClient.query<AboutSlugs, AboutSlugsVariables>({
		query: ABOUT_SLUGS,
		variables: AboutSlugsQueryVars
	});
	const { data } = await apolloClient.query<AboutBySlug, AboutBySlugVariables>({
		query: ABOUT_BY_SLUG,
		variables: AboutBySlugQueryVars
	});
	return addApolloState(apolloClient, {
		props: {
			about: data.aboutPost ?? {},
			path: data.aboutPost!.slug ?? ''
		},
		revalidate: 10
	});
}

function DynamicAbout({
	about,
	path
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { query } = useRouter();
	const targetSlug = query.slug as string;
	console.log(`${about}`);
	const AboutBySlugQueryVars: AboutBySlugVariables = {
		idType: SLUG,
		id: path || targetSlug
	};
	const { data } = useQuery<AboutBySlug, AboutBySlugVariables>(ABOUT_BY_SLUG, {
		variables: AboutBySlugQueryVars,
		notifyOnNetworkStatusChange: true
	});
	const router = useRouter();
	return (
		<Layout title={data?.aboutPost?.title ?? ''}>
			{router.isFallback ? (
				<Loading />
			) : (
				<>
					<AboutPostsEnhanced />
				</>
			)}
		</Layout>
	);
}

export default DynamicAbout;

/*

type DynamicPaths = {
	params: {
		slug: string;
	};
}[];

interface PathPropsResult extends GetStaticPaths {
	pathsData: DynamicPaths;
}

export const getStaticPaths = async (
	ctx: PathPropsResult
): Promise<{
	paths: DynamicPaths;
	fallback: true | false | 'blocking';
}> => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<AboutSlugs, AboutSlugsVariables>({
		query: ABOUT_SLUGS,
		variables: AboutSlugsQueryVars
	});

	const { pathsData = [] } = ctx;

	if (
		data &&
		data.aboutslugs !== null &&
		data.aboutslugs.edges !== null &&
		data.aboutslugs.edges.length > 0
	)
		data.aboutslugs.edges.map(post => {
			if (post !== null && post.node !== null && post.node.slug !== null) {
				const returnedAboutPaths = { params: { slug: post.node.slug } };
				pathsData.push(returnedAboutPaths);
			}
		});

	return {
		paths: pathsData,
		fallback: true
	};
};

*/
