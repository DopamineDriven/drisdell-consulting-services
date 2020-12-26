import Layout from '@components/Layout';
import { initializeApollo, addApolloState } from '@lib/apollo';
import { GET_PAGE, GET_PAGES } from '@lib/graphql';
// import ReactMarkdown from 'react-markdown/with-html';
// import { CodeBlock } from '@components/About/about-card-content';
import {
	GetStaticPaths,
	GetStaticProps,
	NextPage,
	GetStaticPropsContext
} from 'next';
import {
	GetPage,
	GetPageVariables
} from '@lib/graphql/GetPage/__generated__/GetPage';
import {
	MenuNodeIdTypeEnum,
	OrderEnum,
	PageIdType
} from '@_types/graphql-global-types';

import {
	GetPages,
	GetPagesVariables
} from '../lib/graphql/GetPages/__generated__/GetPages';
import { PostObjectsConnectionOrderbyEnum } from '../_types/graphql-global-types';
import { customPagesSlugs } from '../lib/custom-page-slugs';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { InferGetStaticPropsType } from 'next';

const P: NextPage & InferGetStaticPropsType<typeof getStaticProps> = () => {
	const { query } = useRouter();
	const { NAME } = MenuNodeIdTypeEnum;
	const { URI } = PageIdType;
	const GetPageQueryVars: GetPageVariables = {
		idTypeHead: NAME,
		idHead: 'HEADER',
		idTypeFoot: NAME,
		idFoot: 'Footer',
		idTypePage: URI,
		// @ts-ignore query?.slug[0]
		idPage: query?.slug[0] ?? query.slug
	};
	const { data } = useQuery<GetPage, GetPageVariables>(GET_PAGE, {
		variables: GetPageQueryVars,
		notifyOnNetworkStatusChange: true
	});
	const titles =
		data && data.page !== null && data.page.title !== null
			? data.page.title
			: 'oof';
	const contents =
		data && data.page !== null && data.page.content !== null
			? data.page.content
			: 'oooooof';
	return (
		<Layout title={`${titles}`}>
			<div>
				<h1 dangerouslySetInnerHTML={{ __html: titles }} />
				<section dangerouslySetInnerHTML={{ __html: contents }} />
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({
	params
}: GetStaticPropsContext) => {
	const { NAME } = MenuNodeIdTypeEnum;
	const { URI } = PageIdType;
	const GetPageQueryVars: GetPageVariables = {
		idTypeHead: NAME,
		idHead: 'HEADER',
		idTypeFoot: NAME,
		idFoot: 'Footer',
		idTypePage: URI,
		idPage: `${params?.slug}`
	};
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<GetPage, GetPageVariables>({
		query: GET_PAGE,
		variables: GetPageQueryVars
	});

	return addApolloState(apolloClient, {
		props: {
			page: data.page?.content ?? {},
			path: data.page?.uri ?? ''
		},
		revalidate: 10
	});
};

export const getStaticPaths: GetStaticPaths = async () => {
	const getPagesQueryVars: GetPagesVariables = {
		first: 30,
		order: OrderEnum.ASC,
		field: PostObjectsConnectionOrderbyEnum.PARENT
	};
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query<GetPages, GetPagesVariables>({
		query: GET_PAGES,
		variables: getPagesQueryVars
	});

	const pathsData: any = [];

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
				console.log('page.slug:', page.slug);
				pathsData.push({ params: { slug: [page.slug] } });
			}
		});

	return {
		paths: pathsData,
		fallback: false
	};
};

export default P;
