import * as Types from '../../../global-types';

import { CustomPageFieldsFragment } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import { AboutFieldsFragment } from '../../../fragments/FragmentAbouts/__generated__/about-fields.generated';
import { gql } from '@apollo/client';
import { CustomPageFieldsFragmentDoc } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import { AboutFieldsFragmentDoc } from '../../../fragments/FragmentAbouts/__generated__/about-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type AboutCardsDataQueryVariables = Types.Exact<{
	name: Types.Scalars['String'];
	field: Types.PostObjectsConnectionOrderbyEnum;
	order: Types.OrderEnum;
	first: Types.Scalars['Int'];
}>;

export type AboutCardsDataQuery = {
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
	abouts: Types.Maybe<{
		__typename?: 'RootQueryToAboutConnection';
		edges: Types.Maybe<
			Array<
				Types.Maybe<{
					__typename?: 'RootQueryToAboutConnectionEdge';
					node: Types.Maybe<{ __typename?: 'About' } & AboutFieldsFragment>;
				}>
			>
		>;
	}>;
};

export const AboutCardsDataDocument = gql`
	query AboutCardsData(
		$name: String!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
		abouts(where: { orderby: { field: $field, order: $order } }, first: $first) {
			edges {
				node {
					...AboutFields
				}
			}
		}
	}
	${CustomPageFieldsFragmentDoc}
	${AboutFieldsFragmentDoc}
`;

/**
 * __useAboutCardsDataQuery__
 *
 * To run a query within a React component, call `useAboutCardsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutCardsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutCardsDataQuery({
 *   variables: {
 *      name: // value for 'name'
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAboutCardsDataQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		AboutCardsDataQuery,
		AboutCardsDataQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		AboutCardsDataQuery,
		AboutCardsDataQueryVariables
	>(AboutCardsDataDocument, baseOptions);
}
export function useAboutCardsDataLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		AboutCardsDataQuery,
		AboutCardsDataQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		AboutCardsDataQuery,
		AboutCardsDataQueryVariables
	>(AboutCardsDataDocument, baseOptions);
}
export type AboutCardsDataQueryHookResult = ReturnType<
	typeof useAboutCardsDataQuery
>;
export type AboutCardsDataLazyQueryHookResult = ReturnType<
	typeof useAboutCardsDataLazyQuery
>;
export type AboutCardsDataQueryResult = Apollo.QueryResult<
	AboutCardsDataQuery,
	AboutCardsDataQueryVariables
>;
