import * as Types from '../../../global-types';

import { CustomPageFieldsFragment } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import { gql } from '@apollo/client';
import { CustomPageFieldsFragmentDoc } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type LandingPageQueryVariables = Types.Exact<{
	name: Types.Scalars['String'];
}>;

export type LandingPageQuery = {
	__typename?: 'RootQuery';
	pages: Types.Maybe<{
		__typename?: 'RootQueryToPageConnection';
		edges: Types.Maybe<
			Array<
				Types.Maybe<{
					__typename?: 'RootQueryToPageConnectionEdge';
					node: Types.Maybe<{ __typename?: 'Page' } & CustomPageFieldsFragment>;
				}>
			>
		>;
	}>;
};

export const LandingPageDocument = gql`
	query LandingPage($name: String!) {
		pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
	}
	${CustomPageFieldsFragmentDoc}
`;

/**
 * __useLandingPageQuery__
 *
 * To run a query within a React component, call `useLandingPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingPageQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useLandingPageQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		LandingPageQuery,
		LandingPageQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<LandingPageQuery, LandingPageQueryVariables>(
		LandingPageDocument,
		baseOptions
	);
}
export function useLandingPageLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		LandingPageQuery,
		LandingPageQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		LandingPageQuery,
		LandingPageQueryVariables
	>(LandingPageDocument, baseOptions);
}
export type LandingPageQueryHookResult = ReturnType<typeof useLandingPageQuery>;
export type LandingPageLazyQueryHookResult = ReturnType<
	typeof useLandingPageLazyQuery
>;
export type LandingPageQueryResult = Apollo.QueryResult<
	LandingPageQuery,
	LandingPageQueryVariables
>;
