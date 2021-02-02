import Layout, { HeaderFooterMenuQueryVers } from '@components/Layout/layout';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { GET_PAGE, GET_PAGES, HEADER_FOOTER } from '@lib/graphql';
// import ReactMarkdown from 'react-markdown/with-html';
// import { CodeBlock } from '@components/About/about-card-content';
import {
	GetStaticPaths,
	NextPage,
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
type PathsProps = {
	params: {
		slug: string[];
	};
}[];

interface PathsPropsResult extends GetStaticPaths {
	pathsData: PathsProps;
}

export const getStaticPaths = async (
	props: PathsPropsResult
): Promise<{
	paths: PathsProps;
	fallback: boolean | 'blocking';
}> => {
	const { pathsData = [] } = props;
	const { data } = await apolloClient.query<GetPages, GetPagesVariables>({
		query: GET_PAGES,
		variables: getPagesQueryVars
	});

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
				const returnedData = { params: { slug: [page.slug] } };
				pathsData.push(returnedData);
			}
		});

	return {
		paths: pathsData,
		fallback: false
	};
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
		idPage: params.slug
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
	// const pageDynamic = data && data.page !== null ? data.page : {};
	// const pathDynamic =
	// 	data && data.page !== null && data.page.uri !== null ? data.page.uri : '';

	return addApolloState(apolloClient, {
		props: {
			page: data.page! ?? {},
			path: data.page!.uri ?? params.slug
		},
		revalidate: 10
	});
}

const Dynamic: NextPage &
	InferGetStaticPropsType<typeof getStaticProps> = () => {
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
					className='text-primary-0 py-8 px-20 text-4xl mx-auto text-left'
					dangerouslySetInnerHTML={{ __html: titles }}
				/>
				<section dangerouslySetInnerHTML={{ __html: contents }} />
			</div>
		</Layout>
	);
};

export default Dynamic;
