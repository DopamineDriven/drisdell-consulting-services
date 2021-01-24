import { useMemo } from 'react';
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
	HttpLink
} from '@apollo/client';
// import { AppInitialProps } from 'next/app';
import { concatPagination } from '@apollo/client/utilities';
// import { SubscriptionClient } from 'subscriptions-transport-ws';
// import { WebSocketLink } from "@apollo/client/link/ws";
// https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/
// import deepmerge from 'deepmerge';
// import dynamic from 'next/dynamic';

// // @ts-ignore
// global.fetch = require('node-fetch');
// global.fetch = dynamic(() => import('node-fetch'));

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined | null;

function createApolloClient(headers = {}) {
	const token = `${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
	const authorization = `Bearer ${token}`;
	const setHeaders = {
		...headers,
		'Content-Type': 'application/json; charset=UTF-8',
		Authorization: authorization
	};
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: process.env.WORDPRESS_API_URL,
			credentials: 'include',
			headers: { ...setHeaders }
		}),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						posts: {
							keyArgs: false,
							// Define how to use args.{where,take,...} to return flexible views of the existing data:
							read(existing, { args }) {
								// console.log('existing', existing);
								console.log('args', args);
								// Note: existing is whatever merge returns, and may be undefined if no data has been written yet.
								return existing;
							},
							merge(existing, incoming, { args }) {
								// console.log('existing', existing);
								// console.log('incoming', incoming);
								console.log('args', args);
								if (existing != null && incoming == existing) {
									return existing;
								}
								return incoming;
							}
						},
						testimonials: {
							keyArgs: false,
							// Define how to use args.{where,take,...} to return flexible views of the existing data:
							read(existing, { args }) {
								// console.log('existing', existing);
								console.log('args', args);
								// Note: existing is whatever merge returns, and may be undefined if no data has been written yet.
								return existing;
							},
							merge(existing, incoming, { args }) {
								// console.log('existing', existing);
								// console.log('incoming', incoming);
								console.log('args', args);
								if (existing != null && incoming == existing) {
									return existing;
								}
								return incoming;
							}
						},
						pages: {
							keyArgs: false,
							// Define how to use args.{where,take,...} to return flexible views of the existing data:
							read(existing, { args }) {
								// console.log('existing', existing);
								console.log('args', args);
								// Note: existing is whatever merge returns, and may be undefined if no data has been written yet.
								return existing;
							},
							merge(existing, incoming, { args }) {
								// console.log('existing', existing);
								// console.log('incoming', incoming);
								console.log('args', args);
								if (existing != null && incoming == existing) {
									return existing;
								}
								return incoming;
							}
						},
						consultants: {
							keyArgs: false,
							// Define how to use args.{where,take,...} to return flexible views of the existing data:
							read(existing, { args }) {
								// console.log('existing', existing);
								console.log('args', args);
								// Note: existing is whatever merge returns, and may be undefined if no data has been written yet.
								return existing;
							},
							merge(existing, incoming, { args }) {
								// console.log('existing', existing);
								// console.log('incoming', incoming);
								console.log('args', args);
								if (existing != null && incoming == existing) {
									return existing;
								}
								return incoming;
							}
						},
						// https://github.com/apollographql/apollo-client/issues/6734
						allPostsFields: concatPagination()
					}
				}
			}
			// addTypename: true,
			// resultCaching: true
		})
	});
}

export function initializeApollo(initialState: any = null) {
	const _apolloClient = apolloClient ?? createApolloClient();
	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();
		// Merge the existing cache into data passed from getStaticProps/getServerSideProps
		// const data = { ...existingCache, ...initialState };
		// const data = deepmerge(initialState, existingCache, { clone: false });
		// Restore the cache with the merged data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}
	// for SSG and SSR ALWAYS create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function addApolloState(client: any, pageProps: any) {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
	}

	return pageProps;
}

export function useApollo(pageProps: any) {
	const state = pageProps[APOLLO_STATE_PROP_NAME];
	const store = useMemo(() => initializeApollo(state), [state]);
	return store;
}

// export function useApollo(initialState: any) {
// 	const store = useMemo(() => initializeApollo(initialState), [initialState]);
// 	return store;
// }
// https://nextjs-graphql-with-prisma-simple.vercel.app/api?
// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// https://www.apollographql.com/docs/react/development-testing/static-typing/
// https://www.apollographql.com/docs/react/data/queries/
// https://www.apollographql.com/docs/react/caching/cache-configuration/
// https://www.apollographql.com/docs/react/caching/cache-configuration/#typepolicy-fields
// https://www.apollographql.com/blog/local-state-management-with-reactive-variables/
