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
import Image from 'next/image';
import ReactMarkdown from 'react-markdown/with-html';
import cn from 'classnames';

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

const dynamicProps = {
	loading: () => <Loading />
};

const DynamicModified = dynamic(
	() => import('@components/UI/Modified'),
	dynamicProps
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
	const title =
		data && data.consultantPost !== null && data.consultantPost.title !== null
			? data.consultantPost.title
			: 'Title null';

	const content =
		data && data.consultantPost !== null && data.consultantPost.content !== null
			? data.consultantPost.content
			: 'Content null';

	const modified =
		data && data.consultantPost !== null && data.consultantPost.id !== null
			? data.consultantPost.modified
			: '';

	const featuredImage =
		data &&
		data.consultantPost !== null &&
		data.consultantPost.featuredImage !== null &&
		data.consultantPost.featuredImage.node !== null &&
		data.consultantPost.featuredImage.node.sourceUrl !== null
			? data.consultantPost.featuredImage.node.sourceUrl
			: '/error-bot.png';

	const router = useRouter();
	return (
		<Layout title={title}>
			{router.isFallback ? (
				<Loading />
			) : (
				<>
					<article className='font-poppins mx-auto select-none'>
						<div
							className={cn(
								'pt-8 pb-16 prose-xl max-w-2xl text-primary-0 text-left content-center mx-auto flex-row select-none tracking-tight sm:max-w-3xl sm:text-justify md:max-w-5xl lg:max-w-6xl xl:max-w-7xl'
							)}
						>
							<ReactMarkdown
								allowDangerousHtml={true}
								className={cn(
									'text-primary-0 py-8 text-2xl sm:text-3xl md:text-5xl font-extrabold mx-auto text-center tracking-tight pt-8 pb-16 prose-xl max-w-2xl content-center flex-row select-none'
								)}
								children={title}
							/>
							<Image
								src={featuredImage}
								title={title}
								loading='eager'
								quality={80}
								width={800}
								height={400}
								layout='responsive'
								className='object-covershadow-lg max-w-7xl pb-2'
								priority
							/>
						</div>
						<div className='w-full min-w-full max-w-2xl px-5 md:px-2 md:max-w-4xl text-left sm:text-justify'>
							<DynamicModified
								modifiedString={modified}
								root='font-bold prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl sm:prose-2xl tracking-tight text-primary-0 text-left sm:text-justify content-center mx-auto flex'
							/>
							<ReactMarkdown
								allowDangerousHtml={false}
								className={cn(
									' pt-8 pb-16 prose-xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-6xl text-primary-0 text-left sm:text-justify content-center mx-auto flex-row'
								)}
								children={content}
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
