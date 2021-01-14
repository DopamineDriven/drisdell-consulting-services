import {
	NextPage,
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
} from '@_types/graphql-global-types';
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
import AboutPosts from '@components/AboutPosts';

const LoadingDots = dynamic(() => import('@components/UI/LoadingDots'));

const Loading = () => (
	<div className='w-80 h-80 flex items-center text-center justify-center p-3'>
		<LoadingDots />
	</div>
);

const AboutSlugsQueryVars: AboutSlugsVariables = {
	order: OrderEnum.ASC,
	field: PostObjectsConnectionOrderbyEnum.SLUG,
	first: 15
};

const { SLUG } = AboutIdType;

const DynamicAbout: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
	const { query } = useRouter();
	const targetSlug = query.slug as string;
	const slugToMetaTitle = targetSlug.replace('-', ' ');
	console.log('slug to title', slugToMetaTitle);

	const AboutBySlugQueryVars: AboutBySlugVariables = {
		idType: SLUG,
		id: targetSlug
	};

	const { data } = useQuery<AboutBySlug, AboutBySlugVariables>(ABOUT_BY_SLUG, {
		variables: AboutBySlugQueryVars,
		notifyOnNetworkStatusChange: true
	});

	const title =
		data && data.aboutPost !== null && data.aboutPost.title !== null
			? data.aboutPost.title
			: 'Title null';

	console.log(title);

	const router = useRouter();
	return (
		<Layout title={title}>
			{router.isFallback ? (
				<Loading />
			) : (
				<>
					<AboutPosts />
				</>
			)}
		</Layout>
	);
};

export async function getStaticProps(
	ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Params>> {
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
	console.log('aboutPostDynamic: ', data.aboutPost);
	console.log('aboutSlugDynamic: ', data.aboutPost!.slug);
	return addApolloState(apolloClient, {
		props: {
			about: data.aboutPost ?? {},
			path: data.aboutPost!.slug ?? ''
		},
		revalidate: 10
	});
}

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
		fallback: 'blocking'
	};
};

export default DynamicAbout;
