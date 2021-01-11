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
import { Params } from 'next/dist/next-server/server/router';
import AboutPosts from '@components/AboutPosts';

type DynamicPaths = {
	params: {
		slug: string;
	};
}[];

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
	const kebabToTitle = targetSlug.replace('-', ' ');
	console.log('kebab to title', kebabToTitle);

	const router = useRouter();
	return (
		<Layout title={kebabToTitle}>
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

	const aboutPostDynamic = data && data.aboutPost !== null ? data.aboutPost : {};
	const aboutSlugDynamic =
		data && data.aboutPost !== null && data.aboutPost.slug !== null
			? data.aboutPost.slug
			: '';

	console.log('aboutPostDynamic: ', aboutPostDynamic);
	console.log('aboutSlugDynamic: ', aboutSlugDynamic);

	return addApolloState(apolloClient, {
		props: {
			post: aboutPostDynamic,
			path: aboutSlugDynamic
		},
		revalidate: 10
	});
}

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
