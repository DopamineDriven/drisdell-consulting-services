import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { GET_PAGE, GET_PAGES, HEADER_FOOTER } from '@lib/graphql';
// import ReactMarkdown from 'react-markdown/with-html';
// import { CodeBlock } from '@components/About/about-card-content';
import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
	GetStaticPropsResult
} from 'next';
import {
	GetPage,
	GetPageVariables
} from '@lib/graphql/GetPage/__generated__/GetPage';
import {
	MenuNodeIdTypeEnum,
	OrderEnum,
	PageIdType,
	PostObjectsConnectionOrderbyEnum
} from '@lib/graphql-global-types';
import {
	GetPages,
	GetPagesVariables
} from '@lib/graphql/GetPages/__generated__/GetPages';
import { customPagesSlugs } from '@lib/custom-page-slugs';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Params } from 'next/dist/next-server/server/router';
import {
	HeaderFooter,
	HeaderFooterVariables
} from '@lib/graphql/HeaderFooter/__generated__/HeaderFooter';

const apolloClient = initializeApollo();

const getPagesQueryVars: GetPagesVariables = {
	first: 30,
	order: OrderEnum.ASC,
	parentIn: [null],
	field: PostObjectsConnectionOrderbyEnum.PARENT
};

export async function getStaticProps(
	ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<Params>> {
	// type assertion
	const params = ctx.params as Params;
	const { NAME } = MenuNodeIdTypeEnum;
	const { URI } = PageIdType;
	const GetPageQueryVars: GetPageVariables = {
		idTypeHead: NAME,
		idHead: 'HEADER',
		idTypeFoot: NAME,
		idFoot: 'Footer',
		idTypePage: URI,
		idPage: params.slug[0]
	};
	await apolloClient.query<HeaderFooter, HeaderFooterVariables>({
		query: HEADER_FOOTER,
		variables: HeaderFooterMenuQueryVers
	});
	await apolloClient.query<GetPages, GetPagesVariables>({
		query: GET_PAGES,
		variables: getPagesQueryVars
	});
	const { data } = await apolloClient.query<GetPage, GetPageVariables>({
		query: GET_PAGE,
		variables: GetPageQueryVars
	});
	const page = data.page!;

	return addApolloState(apolloClient, {
		props: {
			page,
			path: data.page!.uri ?? params.slug
		},
		revalidate: 10
	});
}

type StaticPathsShape = {
	params: {
		slug: string[];
	};
}[];

export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<GetPages, GetPagesVariables>({
		query: GET_PAGES,
		variables: getPagesQueryVars
	});

	const paths: StaticPathsShape = [];

	if (
		data &&
		data.pages !== null &&
		data.pages.nodes !== null &&
		data.pages.nodes.length > 0
	)
		data.pages.nodes.map(page => {
			if (
				page !== null &&
				page.slug !== null &&
				!customPagesSlugs.includes(page.slug)
			) {
				paths.push({ params: { slug: [page.slug] } });
			}
		});

	return {
		paths,
		fallback: false
	};
};

export default function Dynamic({
	page
}: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log('inferred page', page, typeof page);
	console.log('inferred page.body ', page.body);
	const { query } = useRouter();
	const targetSlug = query.slug as string[];
	const { NAME } = MenuNodeIdTypeEnum;
	const { URI } = PageIdType;
	const GetPageQueryVars: GetPageVariables = {
		idTypeHead: NAME,
		idHead: 'HEADER',
		idTypeFoot: NAME,
		idFoot: 'Footer',
		idTypePage: URI,
		idPage: targetSlug[0]
	};
	const { data } = useQuery<GetPage, GetPageVariables>(GET_PAGE, {
		variables: GetPageQueryVars,
		notifyOnNetworkStatusChange: true
	});
	const titles =
		data && data.page !== null && data.page.title !== null
			? data.page.title
			: 'Title Null';
	const contents =
		data && data.page !== null && data.page.content !== null
			? data.page.content
			: 'Content Null';
	return (
		<Layout title={`${titles}`}>
			<div>
				<h1
					className='text-primary-0 py-8 text-4xl max-w-6xl mx-auto text-left'
					dangerouslySetInnerHTML={{ __html: titles }}
				/>
				<section
					className='mx-auto max-w-6xl flex-col'
					dangerouslySetInnerHTML={{ __html: contents }}
				/>
			</div>
		</Layout>
	);
}

// Dynamic.Layout = Layout;
