import type {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType
} from 'next';
import { getSlug } from '@lib/index';
import { Layout, Text } from '@components/index';
import {
	GetPages,
	GetPagesVariables
} from '@lib/graphql/GetPages/__generated__/GetPages';
import {
	GetPage,
	GetPageVariables
} from '@lib/graphql/GetPage/__generated__/GetPage';
import { GET_PAGE, GET_PAGES } from '@lib/graphql';
import { initializeApollo, addApolloState } from '@lib/apollo';
// import { Sanitize } from '@lib/index';
// import { defatultPageProps } from '../lib/defaults';
import { customPagesSlugs } from '@lib/custom-page-slugs';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum,
	PageIdType
} from '@_types/graphql-global-types';

const { ASC } = OrderEnum;
const { PARENT } = PostObjectsConnectionOrderbyEnum;
const GetPagesQueryVars: GetPagesVariables = {
	first: 100,
	field: PARENT,
	order: ASC
};
const { URI } = PageIdType;

export async function getStaticProps({
	params
}: GetStaticPropsContext<{
	pages: string[];
}>): Promise<any> {
	const apolloClient = initializeApollo();
	const { data: pages } = await apolloClient.query<GetPages, GetPagesVariables>({
		query: GET_PAGES,
		variables: GetPagesQueryVars
	});

	const pageReturned =
		pages.pages !== null &&
		pages.pages.nodes != null &&
		pages.pages.nodes.length > 0
			? pages.pages.nodes.find(page => {
					return page !== null && page.slug !== null && page.uri
						? getSlug(page.uri) === page.slug
						: false;
			  })
			: ''; /*(pages.pages !== null && pages.pages.nodes !== null && pages.pages.nodes.length > 0 ? pages.pages.nodes?.map(page => {
			// 	return (page && page.uri && page.slug !== null ? getSlug(page.uri) === page.slug : page?.id
			// 	)
			// }) : (console.log(`error returning page`)));
*/
	const { data: page } = await apolloClient.query<GetPage, GetPageVariables>({
		query: GET_PAGE,
		variables: {
			idType: URI,
			id: ''
		}
	});
	const pageItem = page && page.page !== null ? page.page : page?.page;
	const uri =
		pageReturned && pageReturned.uri !== null && pageReturned.id
			? { params: { id: pageReturned.id! } }
			: pageReturned;
	console.log(params?.pages);
	return addApolloState(apolloClient, {
		props: {
			uri: uri || [],
			id: uri,
			preview: false,
			params: uri,
			paths: params?.pages,
			page: pageItem ?? {},
			props: { pages, page }
		},
		revalidate: 10
	});
}

export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<GetPages, GetPagesVariables>({
		query: GET_PAGES,
		variables: GetPagesQueryVars
	});
	// if (page !== null) {
	// 	return page.uri;
	// } else {
	// 	return '';
	// }
	const pathsData: any[] = [];
	const paths =
		data &&
		data.pages !== null &&
		data.pages.nodes !== null &&
		data.pages.nodes.length > 0
			? (data.pages.nodes ?? []).map(page => {
					if (
						page !== null &&
						page.slug !== null &&
						customPagesSlugs.includes(page.slug)
					) {
						return { params: { slug: [page.slug] } };
					}
			  })
			: console.log(`${data?.pages?.nodes?.length} or null`);
	/*
		 		{
          "id": "cG9zdDoyMg==",
          "uri": "/",
          "slug": "drisdell-consulting-services"
        },
	*/
	console.log('pathsData' + pathsData);

	// Fallback shouldn't be enabled here or this route will
	// catch every page, even 404s, which is no bueno
	return addApolloState(apolloClient, {
		paths: paths,
		fallback: false
	});
};

export default function Pages({
	page
}: GetPage & InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		page !== null &&
		page.content !== null && (
			<div className='max-w-2xl mx-auto py-20'>{<Text html={page.content} />}</div>
		)
	);
}

Pages.Layout = Layout;

/*
import type {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType
} from 'next';
import { getSlug } from '@lib/index';
import { Layout, Text } from '@components/index';
import {
	GetPages,
	GetPagesVariables
} from '@lib/graphql/GetPages/__generated__/GetPages';
import {
	GetPage,
	GetPageVariables
} from '@lib/graphql/GetPage/__generated__/GetPage';
import { GET_PAGE, GET_PAGES } from '@lib/graphql';
import { initializeApollo, addApolloState } from '@lib/apollo';
// import { Sanitize } from '@lib/index';
// import { defatultPageProps } from '../lib/defaults';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum,
	PageIdType
} from '@_types/graphql-global-types';

const { ASC } = OrderEnum;
const { PARENT } = PostObjectsConnectionOrderbyEnum;
const GetPagesQueryVars: GetPagesVariables = {
	first: 100,
	field: PARENT,
	order: ASC
};
const { URI } = PageIdType;

export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<GetPages, GetPagesVariables>({
		query: GET_PAGES,
		variables: GetPagesQueryVars
	});
	// const pathsData = [''];
	const paths =
		data &&
		data.pages !== null &&
		data.pages.nodes !== null &&
		data.pages.nodes.length > 0
			? data.pages.nodes.map(page => {
					if (page !== null) {
						return page.uri;
					} else {
						return '';
					}
			  })
			: console.log(`${data?.pages?.nodes?.length} or null`);
	/*
		if ( page?.slug && !customPagesSlugs.includes(page?.slug)) {
			pathsData.push({ params: { slug: [page?.slug] } })
		}

		 		{
          "id": "cG9zdDoyMg==",
          "uri": "/",
          "slug": "drisdell-consulting-services"
        },

	console.log('paths:' + paths);

	// Fallback shouldn't be enabled here or this route will
	// catch every page, even 404s, which is no bueno
	return addApolloState(apolloClient, {
		paths: paths,
		fallback: false
	});
};

export async function getStaticProps({
	params
}: GetStaticPropsContext<{
	pages: string[];
}>): Promise<any> {
	const apolloClient = initializeApollo();
	const { data: pages } = await apolloClient.query<GetPages, GetPagesVariables>({
		query: GET_PAGES,
		variables: GetPagesQueryVars
	});

	const pageReturned =
		pages.pages !== null &&
		pages.pages.nodes != null &&
		pages.pages.nodes.length > 0
			? pages.pages.nodes.find(page => {
					return page !== null && page.slug !== null && page.uri
						? getSlug(page.uri) === page.slug
						: false;
			  })
			: ''; (pages.pages !== null && pages.pages.nodes !== null && pages.pages.nodes.length > 0 ? pages.pages.nodes?.map(page => {
			// 	return (page && page.uri && page.slug !== null ? getSlug(page.uri) === page.slug : page?.id
			// 	)
			// }) : (console.log(`error returning page`)));

	const { data: page } = await apolloClient.query<GetPage, GetPageVariables>({
		query: GET_PAGE,
		variables: {
			idType: URI,
			id: ''
		}
	});
	const pageItem = page && page.page !== null ? page.page : page?.page;
	const uri =
		pageReturned && pageReturned.uri !== null && pageReturned.id
			? { params: { id: pageReturned.id! } }
			: pageReturned;
	console.log(params?.pages);
	return addApolloState(apolloClient, {
		props: {
			uri: uri || [],
			id: uri,
			preview: false,
			params: uri,
			paths: params?.pages,
			page: pageItem ?? {},
			props: { pages, page }
		},
		revalidate: 10
	});
}

export default function Pages({
	page
}: GetPage & InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		page !== null &&
		page.content !== null && (
			<div className='max-w-2xl mx-auto py-20'>{<Text html={page.content} />}</div>
		)
	);
}

Pages.Layout = Layout;


	const pathsData = [];
	const paths =
		data &&
		data.pages !== null &&
		data.pages.nodes !== null &&
		data?.pages?.nodes.length > 0
			? data.pages.nodes
					.map(page => page !==null ? page.uri : '')
					.filter(uri => {
						return pathsData.push(uri);
					})
			: console.error('error');

	console.log(pathsData.length);
*/

/**
*
* export type GetStaticPathsContext = {
* locales?: string[]
* defaultLocale?: string
*}
*
*export type GetStaticPathsResult<P extends ParsedUrlQuery = ParsedUrlQuery> = {
*  paths: Array<string | { params: P; locale?: string }>
*  fallback: boolean | 'blocking'
}

export type GetStaticPaths<P extends ParsedUrlQuery = ParsedUrlQuery> = (
  context: GetStaticPathsContext
) => Promise<GetStaticPathsResult<P>>
*/

/**
*
* export type GetStaticPathsContext = {
* locales?: string[]
* defaultLocale?: string
*}
*
*export type GetStaticPathsResult<P extends ParsedUrlQuery = ParsedUrlQuery> = {
*  paths: Array<string | { params: P; locale?: string }>
*  fallback: boolean | 'blocking'
}

export type GetStaticPaths<P extends ParsedUrlQuery = ParsedUrlQuery> = (
  context: GetStaticPathsContext
) => Promise<GetStaticPathsResult<P>>
*/
