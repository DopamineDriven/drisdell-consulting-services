import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type PositionSlugsQueryVariables = Types.Exact<{
	field: Types.PostObjectsConnectionOrderbyEnum;
	order: Types.OrderEnum;
	first: Types.Scalars['Int'];
}>;

export type PositionSlugsQuery = { __typename?: 'RootQuery' } & {
	positionSlugs?: Types.Maybe<
		{ __typename?: 'RootQueryToPositionConnection' } & {
			edges?: Types.Maybe<
				Array<
					Types.Maybe<
						{ __typename?: 'RootQueryToPositionConnectionEdge' } & {
							node?: Types.Maybe<
								{ __typename?: 'Position' } & Pick<Types.Position, 'uri' | 'slug'>
							>;
						}
					>
				>
			>;
		}
	>;
};

export const PositionSlugsDocument = gql`
	query PositionSlugs(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		positionSlugs: positions(
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
 * __usePositionSlugsQuery__
 *
 * To run a query within a React component, call `usePositionSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionSlugsQuery({
 *   variables: {
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePositionSlugsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		PositionSlugsQuery,
		PositionSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		PositionSlugsQuery,
		PositionSlugsQueryVariables
	>(PositionSlugsDocument, baseOptions);
}
export function usePositionSlugsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		PositionSlugsQuery,
		PositionSlugsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		PositionSlugsQuery,
		PositionSlugsQueryVariables
	>(PositionSlugsDocument, baseOptions);
}
export type PositionSlugsQueryHookResult = ReturnType<
	typeof usePositionSlugsQuery
>;
export type PositionSlugsLazyQueryHookResult = ReturnType<
	typeof usePositionSlugsLazyQuery
>;
export type PositionSlugsQueryResult = Apollo.QueryResult<
	PositionSlugsQuery,
	PositionSlugsQueryVariables
>;
