import * as Types from '../../../global/global-types.generated';

import { ConsultantFieldsFragment } from '../../../fragments/FragmentConsultants/__generated__/consultants-post-fields.generated';
import { PositionsPreviewFieldsFragment } from '../../../fragments/FragmentPositionsPreview/__generated__/positions-preview.generated';
import { gql } from '@apollo/client';
import { ConsultantFieldsFragmentDoc } from '../../../fragments/FragmentConsultants/__generated__/consultants-post-fields.generated';
import { PositionsPreviewFieldsFragmentDoc } from '../../../fragments/FragmentPositionsPreview/__generated__/positions-preview.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type CustomConsultantPageQueryVariables = Types.Exact<{
	id: Types.Scalars['ID'];
	idType: Types.ConsultantIdType;
}>;

export type CustomConsultantPageQuery = { __typename?: 'RootQuery' } & {
	consultantSlug?: Types.Maybe<
		{ __typename?: 'Consultant' } & ConsultantFieldsFragment
	>;
	positionsPreview?: Types.Maybe<
		{ __typename?: 'RootQueryToPositionConnection' } & {
			edges?: Types.Maybe<
				Array<
					Types.Maybe<
						{ __typename?: 'RootQueryToPositionConnectionEdge' } & {
							node?: Types.Maybe<
								{ __typename?: 'Position' } & PositionsPreviewFieldsFragment
							>;
						}
					>
				>
			>;
		}
	>;
};

export const CustomConsultantPageDocument = gql`
	query CustomConsultantPage($id: ID!, $idType: ConsultantIdType!) {
		consultantSlug: consultant(id: $id, idType: $idType) {
			...ConsultantFields
		}
		positionsPreview: positions {
			edges {
				node {
					...PositionsPreviewFields
				}
			}
		}
	}
	${ConsultantFieldsFragmentDoc}
	${PositionsPreviewFieldsFragmentDoc}
`;

/**
 * __useCustomConsultantPageQuery__
 *
 * To run a query within a React component, call `useCustomConsultantPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomConsultantPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomConsultantPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idType: // value for 'idType'
 *   },
 * });
 */
export function useCustomConsultantPageQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		CustomConsultantPageQuery,
		CustomConsultantPageQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		CustomConsultantPageQuery,
		CustomConsultantPageQueryVariables
	>(CustomConsultantPageDocument, baseOptions);
}
export function useCustomConsultantPageLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		CustomConsultantPageQuery,
		CustomConsultantPageQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		CustomConsultantPageQuery,
		CustomConsultantPageQueryVariables
	>(CustomConsultantPageDocument, baseOptions);
}
export type CustomConsultantPageQueryHookResult = ReturnType<
	typeof useCustomConsultantPageQuery
>;
export type CustomConsultantPageLazyQueryHookResult = ReturnType<
	typeof useCustomConsultantPageLazyQuery
>;
export type CustomConsultantPageQueryResult = Apollo.QueryResult<
	CustomConsultantPageQuery,
	CustomConsultantPageQueryVariables
>;
