import * as Types from '../../../global-types';

import { ConsultantFieldsFragment } from '../../../fragments/FragmentConsultants/__generated__/consultants-post-fields.generated';
import { gql } from '@apollo/client';
import { ConsultantFieldsFragmentDoc } from '../../../fragments/FragmentConsultants/__generated__/consultants-post-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ConsultantBySlugQueryVariables = Types.Exact<{
	id: Types.Scalars['ID'];
	idType: Types.ConsultantIdType;
}>;

export type ConsultantBySlugQuery = {
	__typename?: 'RootQuery';
	consultantPost: Types.Maybe<
		{ __typename?: 'Consultant' } & ConsultantFieldsFragment
	>;
};

export const ConsultantBySlugDocument = gql`
	query ConsultantBySlug($id: ID!, $idType: ConsultantIdType!) {
		consultantPost: consultant(id: $id, idType: $idType) {
			...ConsultantFields
		}
	}
	${ConsultantFieldsFragmentDoc}
`;

/**
 * __useConsultantBySlugQuery__
 *
 * To run a query within a React component, call `useConsultantBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsultantBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsultantBySlugQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idType: // value for 'idType'
 *   },
 * });
 */
export function useConsultantBySlugQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		ConsultantBySlugQuery,
		ConsultantBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		ConsultantBySlugQuery,
		ConsultantBySlugQueryVariables
	>(ConsultantBySlugDocument, baseOptions);
}
export function useConsultantBySlugLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ConsultantBySlugQuery,
		ConsultantBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		ConsultantBySlugQuery,
		ConsultantBySlugQueryVariables
	>(ConsultantBySlugDocument, baseOptions);
}
export type ConsultantBySlugQueryHookResult = ReturnType<
	typeof useConsultantBySlugQuery
>;
export type ConsultantBySlugLazyQueryHookResult = ReturnType<
	typeof useConsultantBySlugLazyQuery
>;
export type ConsultantBySlugQueryResult = Apollo.QueryResult<
	ConsultantBySlugQuery,
	ConsultantBySlugQueryVariables
>;
