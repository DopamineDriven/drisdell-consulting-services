import * as Types from '../../../global/global-types.generated';

import { PositionFieldsFragment } from '../../../fragments/FragmentPositions/__generated__/fragment-positions.generated';
import { gql } from '@apollo/client';
import { PositionFieldsFragmentDoc } from '../../../fragments/FragmentPositions/__generated__/fragment-positions.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type PositionsQueryVariables = Types.Exact<{
	positionOrder: Types.OrderEnum;
	positionField: Types.PostObjectsConnectionOrderbyEnum;
	first: Types.Scalars['Int'];
}>;

export type PositionsQuery = { __typename?: 'RootQuery' } & {
	positions?: Types.Maybe<
		{ __typename?: 'RootQueryToPositionConnection' } & {
			edges?: Types.Maybe<
				Array<
					Types.Maybe<
						{ __typename?: 'RootQueryToPositionConnectionEdge' } & {
							node?: Types.Maybe<{ __typename?: 'Position' } & PositionFieldsFragment>;
						}
					>
				>
			>;
		}
	>;
};

export const PositionsDocument = gql`
	query Positions(
		$positionOrder: OrderEnum!
		$positionField: PostObjectsConnectionOrderbyEnum!
		$first: Int!
	) {
		positions(
			first: $first
			where: { orderby: { order: $positionOrder, field: $positionField } }
		) {
			edges {
				node {
					...PositionFields
				}
			}
		}
	}
	${PositionFieldsFragmentDoc}
`;

/**
 * __usePositionsQuery__
 *
 * To run a query within a React component, call `usePositionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionsQuery({
 *   variables: {
 *      positionOrder: // value for 'positionOrder'
 *      positionField: // value for 'positionField'
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePositionsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		PositionsQuery,
		PositionsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<PositionsQuery, PositionsQueryVariables>(
		PositionsDocument,
		baseOptions
	);
}
export function usePositionsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		PositionsQuery,
		PositionsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<PositionsQuery, PositionsQueryVariables>(
		PositionsDocument,
		baseOptions
	);
}
export type PositionsQueryHookResult = ReturnType<typeof usePositionsQuery>;
export type PositionsLazyQueryHookResult = ReturnType<
	typeof usePositionsLazyQuery
>;
export type PositionsQueryResult = Apollo.QueryResult<
	PositionsQuery,
	PositionsQueryVariables
>;
