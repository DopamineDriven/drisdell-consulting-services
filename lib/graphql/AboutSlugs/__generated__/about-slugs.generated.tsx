import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type AboutSlugsQueryVariables = Types.Exact<{
	field: Types.PostObjectsConnectionOrderbyEnum;
	order: Types.OrderEnum;
	first: Types.Scalars['Int'];
}>;

export type AboutSlugsQuery = {
	__typename?: 'RootQuery';
	aboutslugs: Types.Maybe<{
		__typename?: 'RootQueryToAboutConnection';
		edges: Types.Maybe<
			Array<
				Types.Maybe<{
					__typename?: 'RootQueryToAboutConnectionEdge';
					node: Types.Maybe<{
						__typename?: 'About';
						uri: string;
						slug: Types.Maybe<string>;
					}>;
				}>
			>
		>;
	}>;
};

export const AboutSlugsDocument = gql`
	query AboutSlugs(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		aboutslugs: abouts(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				node {
					uri
					slug
				}
			}
		}
	}
`;

/**
 * __useAboutSlugsQuery__
 *
 * To run a query within a React component, call `useAboutSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutSlugsQuery({
 *   variables: {
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAboutSlugsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		AboutSlugsQuery,
		AboutSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<AboutSlugsQuery, AboutSlugsQueryVariables>(
		AboutSlugsDocument,
		baseOptions
	);
}
export function useAboutSlugsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		AboutSlugsQuery,
		AboutSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		AboutSlugsQuery,
		AboutSlugsQueryVariables
	>(AboutSlugsDocument, baseOptions);
}
export type AboutSlugsQueryHookResult = ReturnType<typeof useAboutSlugsQuery>;
export type AboutSlugsLazyQueryHookResult = ReturnType<
	typeof useAboutSlugsLazyQuery
>;
export type AboutSlugsQueryResult = Apollo.QueryResult<
	AboutSlugsQuery,
	AboutSlugsQueryVariables
>;
