import { useMemo } from 'react';
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
	HttpLink
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import merge from 'deepmerge';
// revisit and update this file

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
	const token = process.env.WORDPRESS_AUTH_REFRESH_TOKEN;
	const authorization = `Bearer ${token}`;
	const headers = {
		'Content-Type': 'application/json',
		Authorization: authorization
	};
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: process.env.WORDPRESS_API_URL,
			credentials: 'same-origin',
			headers: headers
		}),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						allPosts: concatPagination()
					}
				}
			},
			addTypename: true,
			resultCaching: true
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
		const data = merge(initialState, existingCache, { clone: false });
		// Restore the cache with the merged data
		_apolloClient.cache.restore(data);
	}
	// for SSG and SSR ALWAYS create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState: any) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
