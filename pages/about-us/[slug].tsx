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

const dynamicProps = {
	loading: () => <Loading />
};

const DynamicImage = dynamic(() => import('next/image'), dynamicProps);

const DynamicModified = dynamic(
	() => import('@components/UI/Modified'),
	dynamicProps
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

	const content =
		data && data.aboutPost !== null && data.aboutPost.content !== null
			? data.aboutPost.content
			: 'Content null';

	const modified =
		data && data.aboutPost !== null && data.aboutPost.id !== null
			? data.aboutPost.modified
			: '';
	const featuredImage =
		data &&
		data.aboutPost !== null &&
		data.aboutPost.featuredImage !== null &&
		data.aboutPost.featuredImage.node !== null &&
		data.aboutPost.featuredImage.node.sourceUrl !== null
			? data.aboutPost.featuredImage.node.sourceUrl
			: '/error-bot.png';

	const router = useRouter();
	return (
		<Layout title={title}>
			{router.isFallback ? (
				<Loading />
			) : (
				<>
					<article className='font-poppins mx-auto select-none'>
						<div className='max-w-7xl block mx-auto pt-10'>
							<h1
								className='text-primary-0 py-8 text-2xl sm:text-3xl md:text-5xl font-extrabold mx-auto text-center'
								dangerouslySetInnerHTML={{ __html: title }}
							/>
							<DynamicImage
								src={featuredImage}
								title={title}
								loading='eager'
								quality={80}
								width={800}
								height={500}
								layout='responsive'
								className='object-covershadow-lg w-7xl pb-10'
								priority
							/>
						</div>
						<div className='w-full min-w-full'>
							<DynamicModified
								modifiedString={modified}
								root='font-bold prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl text-primary-0 text-left sm:text-justify content-center mx-auto flex'
							/>
							<div
								className='pt-8 pb-16 prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl text-primary-0 text-left sm:text-justify content-center mx-auto flex'
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						</div>
					</article>
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
