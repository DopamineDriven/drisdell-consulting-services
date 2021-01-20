import * as Types from '../../../global-types';

import { PageFragmentFragment } from '../../../fragments/FragmentPage/__generated__/page-fields.generated';
import { gql } from '@apollo/client';
import { PageFragmentFragmentDoc } from '../../../fragments/FragmentPage/__generated__/page-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetPagesQueryVariables = Types.Exact<{
	first: Types.Scalars['Int'];
	field: Types.PostObjectsConnectionOrderbyEnum;
	order: Types.OrderEnum;
	parentIn: Types.Maybe<Array<Types.Maybe<Types.Scalars['ID']>>>;
}>;

export type GetPagesQuery = {
	__typename?: 'RootQuery';
	pages: Types.Maybe<{
		__typename?: 'RootQueryToPageConnection';
		nodes: Types.Maybe<
			Array<Types.Maybe<{ __typename?: 'Page' } & PageFragmentFragment>>
		>;
	}>;
};

export const GetPagesDocument = gql`
	query GetPages(
		$first: Int!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$parentIn: [ID]
	) {
		pages: pages(
			first: $first
			where: { parentIn: $parentIn, orderby: { field: $field, order: $order } }
		) {
			nodes {
				...PageFragment
			}
		}
	}
	${PageFragmentFragmentDoc}
`;

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      parentIn: // value for 'parentIn'
 *   },
 * });
 */
export function useGetPagesQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		GetPagesQuery,
		GetPagesQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<GetPagesQuery, GetPagesQueryVariables>(
		GetPagesDocument,
		baseOptions
	);
}
export function useGetPagesLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetPagesQuery,
		GetPagesQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(
		GetPagesDocument,
		baseOptions
	);
}
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<
	typeof useGetPagesLazyQuery
>;
export type GetPagesQueryResult = Apollo.QueryResult<
	GetPagesQuery,
	GetPagesQueryVariables
>;
