import * as Types from '../../../global/global-types.generated';

import { ConsultantFieldsFragment } from '../../../fragments/FragmentConsultants/__generated__/consultants-post-fields.generated';
import { PositionsPreviewFieldsFragment } from '../../../fragments/FragmentPositionsPreview/__generated__/positions-preview.generated';
import { gql } from '@apollo/client';
import { ConsultantFieldsFragmentDoc } from '../../../fragments/FragmentConsultants/__generated__/consultants-post-fields.generated';
import { PositionsPreviewFieldsFragmentDoc } from '../../../fragments/FragmentPositionsPreview/__generated__/positions-preview.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type SkillsAndPositionsQueryVariables = Types.Exact<{
	id: Types.Scalars['ID'];
	idType: Types.ConsultantIdType;
}>;

export type SkillsAndPositionsQuery = { __typename?: 'RootQuery' } & {
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

export const SkillsAndPositionsDocument = gql`
	query SkillsAndPositions($id: ID!, $idType: ConsultantIdType!) {
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
 * __useSkillsAndPositionsQuery__
 *
 * To run a query within a React component, call `useSkillsAndPositionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillsAndPositionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillsAndPositionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idType: // value for 'idType'
 *   },
 * });
 */
export function useSkillsAndPositionsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		SkillsAndPositionsQuery,
		SkillsAndPositionsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		SkillsAndPositionsQuery,
		SkillsAndPositionsQueryVariables
	>(SkillsAndPositionsDocument, baseOptions);
}
export function useSkillsAndPositionsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		SkillsAndPositionsQuery,
		SkillsAndPositionsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		SkillsAndPositionsQuery,
		SkillsAndPositionsQueryVariables
	>(SkillsAndPositionsDocument, baseOptions);
}
export type SkillsAndPositionsQueryHookResult = ReturnType<
	typeof useSkillsAndPositionsQuery
>;
export type SkillsAndPositionsLazyQueryHookResult = ReturnType<
	typeof useSkillsAndPositionsLazyQuery
>;
export type SkillsAndPositionsQueryResult = Apollo.QueryResult<
	SkillsAndPositionsQuery,
	SkillsAndPositionsQueryVariables
>;
