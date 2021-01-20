import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ConsultantSlugsQueryVariables = Types.Exact<{
	field: Types.PostObjectsConnectionOrderbyEnum;
	order: Types.OrderEnum;
	first: Types.Scalars['Int'];
}>;

export type ConsultantSlugsQuery = {
	__typename?: 'RootQuery';
	consultantSlugs: Types.Maybe<{
		__typename?: 'RootQueryToConsultantConnection';
		edges: Types.Maybe<
			Array<
				Types.Maybe<{
					__typename?: 'RootQueryToConsultantConnectionEdge';
					node: Types.Maybe<{
						__typename?: 'Consultant';
						uri: string;
						slug: Types.Maybe<string>;
					}>;
				}>
			>
		>;
	}>;
};

export const ConsultantSlugsDocument = gql`
	query ConsultantSlugs(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		consultantSlugs: consultants(
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
 * __useConsultantSlugsQuery__
 *
 * To run a query within a React component, call `useConsultantSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsultantSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsultantSlugsQuery({
 *   variables: {
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useConsultantSlugsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		ConsultantSlugsQuery,
		ConsultantSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		ConsultantSlugsQuery,
		ConsultantSlugsQueryVariables
	>(ConsultantSlugsDocument, baseOptions);
}
export function useConsultantSlugsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ConsultantSlugsQuery,
		ConsultantSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		ConsultantSlugsQuery,
		ConsultantSlugsQueryVariables
	>(ConsultantSlugsDocument, baseOptions);
}
export type ConsultantSlugsQueryHookResult = ReturnType<
	typeof useConsultantSlugsQuery
>;
export type ConsultantSlugsLazyQueryHookResult = ReturnType<
	typeof useConsultantSlugsLazyQuery
>;
export type ConsultantSlugsQueryResult = Apollo.QueryResult<
	ConsultantSlugsQuery,
	ConsultantSlugsQueryVariables
>;
