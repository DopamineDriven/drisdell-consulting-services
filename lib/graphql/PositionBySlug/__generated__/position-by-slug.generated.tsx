import * as Types from '../../../global/global-types.generated';

import { PositionFieldsFragment } from '../../../fragments/FragmentPositions/__generated__/fragment-positions.generated';
import { gql } from '@apollo/client';
import { PositionFieldsFragmentDoc } from '../../../fragments/FragmentPositions/__generated__/fragment-positions.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type PositionBySlugQueryVariables = Types.Exact<{
	id: Types.Scalars['ID'];
	idType: Types.PositionIdType;
}>;

export type PositionBySlugQuery = { __typename?: 'RootQuery' } & {
	positionBySlug?: Types.Maybe<
		{ __typename?: 'Position' } & PositionFieldsFragment
	>;
};

export const PositionBySlugDocument = gql`
	query PositionBySlug($id: ID!, $idType: PositionIdType!) {
		positionBySlug: position(id: $id, idType: $idType) {
			...PositionFields
		}
	}
	${PositionFieldsFragmentDoc}
`;

/**
 * __usePositionBySlugQuery__
 *
 * To run a query within a React component, call `usePositionBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionBySlugQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idType: // value for 'idType'
 *   },
 * });
 */
export function usePositionBySlugQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		PositionBySlugQuery,
		PositionBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		PositionBySlugQuery,
		PositionBySlugQueryVariables
	>(PositionBySlugDocument, baseOptions);
}
export function usePositionBySlugLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		PositionBySlugQuery,
		PositionBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		PositionBySlugQuery,
		PositionBySlugQueryVariables
	>(PositionBySlugDocument, baseOptions);
}
export type PositionBySlugQueryHookResult = ReturnType<
	typeof usePositionBySlugQuery
>;
export type PositionBySlugLazyQueryHookResult = ReturnType<
	typeof usePositionBySlugLazyQuery
>;
export type PositionBySlugQueryResult = Apollo.QueryResult<
	PositionBySlugQuery,
	PositionBySlugQueryVariables
>;
