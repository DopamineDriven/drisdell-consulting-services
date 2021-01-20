import * as Types from '../../../global-types';

import { AboutFieldsFragment } from '../../../fragments/FragmentAbouts/__generated__/about-fields.generated';
import { gql } from '@apollo/client';
import { AboutFieldsFragmentDoc } from '../../../fragments/FragmentAbouts/__generated__/about-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type AboutBySlugQueryVariables = Types.Exact<{
	id: Types.Scalars['ID'];
	idType: Types.AboutIdType;
}>;

export type AboutBySlugQuery = {
	__typename?: 'RootQuery';
	aboutPost: Types.Maybe<{ __typename?: 'About' } & AboutFieldsFragment>;
};

export const AboutBySlugDocument = gql`
	query AboutBySlug($id: ID!, $idType: AboutIdType!) {
		aboutPost: about(id: $id, idType: $idType) {
			...AboutFields
		}
	}
	${AboutFieldsFragmentDoc}
`;

/**
 * __useAboutBySlugQuery__
 *
 * To run a query within a React component, call `useAboutBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutBySlugQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idType: // value for 'idType'
 *   },
 * });
 */
export function useAboutBySlugQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		AboutBySlugQuery,
		AboutBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<AboutBySlugQuery, AboutBySlugQueryVariables>(
		AboutBySlugDocument,
		baseOptions
	);
}
export function useAboutBySlugLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		AboutBySlugQuery,
		AboutBySlugQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		AboutBySlugQuery,
		AboutBySlugQueryVariables
	>(AboutBySlugDocument, baseOptions);
}
export type AboutBySlugQueryHookResult = ReturnType<typeof useAboutBySlugQuery>;
export type AboutBySlugLazyQueryHookResult = ReturnType<
	typeof useAboutBySlugLazyQuery
>;
export type AboutBySlugQueryResult = Apollo.QueryResult<
	AboutBySlugQuery,
	AboutBySlugQueryVariables
>;
