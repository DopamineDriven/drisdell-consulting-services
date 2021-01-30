import { useMemo } from 'react';
import {
	ApolloClient,
	// ServerError,
	InMemoryCache,
	NormalizedCacheObject,
	HttpLink
	// from
} from '@apollo/client';
// import { RetryLink } from '@apollo/client/link/retry';
import { AllTestimonials } from './graphql/AllTestimonials/__generated__/AllTestimonials';
import { offsetLimitPaginatedField } from './apollo-helper';
import { GetPages } from './graphql/GetPages/__generated__/GetPages';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
	const httpLink = new HttpLink({
		uri: process.env.WORDPRESS_API_URL,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
		},
		credentials: 'same-origin',
		...(typeof window !== undefined && { fetch })
	});
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: httpLink,
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						allTestimonials: offsetLimitPaginatedField<AllTestimonials>(),
						getPages: offsetLimitPaginatedField<GetPages>()
						// https://github.com/apollographql/apollo-client/issues/6734
						// https://www.apollographql.com/docs/link/links/http/
					}
				}
			}
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
		const data = { ...existingCache, ...initialState };
		// const data = deepmerge(initialState, existingCache, { clone: false });
		// Restore the cache with the merged data
		_apolloClient.cache.restore(data);
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

// https://nextjs-graphql-with-prisma-simple.vercel.app/api?
// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// https://www.apollographql.com/docs/react/development-testing/static-typing/
// https://www.apollographql.com/docs/react/data/queries/
// https://www.apollographql.com/docs/react/caching/cache-configuration/
// https://www.apollographql.com/docs/react/caching/cache-configuration/#typepolicy-fields
// https://www.apollographql.com/blog/local-state-management-with-reactive-variables/
// posts: {
// 	// Define how to use args.{where,take,...} to return flexible views of the existing data:
// 	read(existing, { args }) {
// 		console.log('existing', existing);
// 		console.log('args', args);
// 		// Note: existing is whatever merge returns, and may be undefined if no data has been written yet.
// 		return existing;
// 	},
// 	merge(existing, incoming, { args }) {
// 		console.log('existing', existing);
// 		console.log('incoming', incoming);
// 		console.log('args', args);
// 		if (existing != null && incoming == existing) {
// 			return existing;
// 		}
// 		return incoming;
// 	}
// },
// const links = [httpLink, retryLink];
// console.log(errorLink);
// const retryIf = (error: ServerError) => {
// 	const doNotRetryCodes = [500, 400];
// 	return !!error && !doNotRetryCodes.includes(error.statusCode);
// };

// const retryLink = new RetryLink({
// 	delay: {
// 		initial: 100,
// 		max: 2000,
// 		jitter: true
// 	},
// 	attempts: {
// 		max: 5,
// 		retryIf
// 	}
// });

// const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
// 	if (graphQLErrors) {
// 		graphQLErrors.map(({ message }) => console.log(`GraphQL Error: ${message}`));
// 	}
// 	if (networkError) {
// 		console.log(`Network Error: ${networkError.message}`);
// 	}
// });
