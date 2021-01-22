import * as Types from '../../../global/global-types.generated';

import { PreviewPageFragment } from '../../../fragments/FragmentPreviewPage/__generated__/preview-page-fields.generated';
import { gql } from '@apollo/client';
import { PreviewPageFragmentDoc } from '../../../fragments/FragmentPreviewPage/__generated__/preview-page-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetPreviewPageQueryVariables = Types.Exact<{
	idPage: Types.Scalars['ID'];
	idTypePage: Types.PageIdType;
}>;

export type GetPreviewPageQuery = { __typename?: 'RootQuery' } & {
	preview?: Types.Maybe<{ __typename?: 'Page' } & PreviewPageFragment>;
};

export const GetPreviewPageDocument = gql`
	query GetPreviewPage($idPage: ID!, $idTypePage: PageIdType!) {
		preview: page(id: $idPage, idType: $idTypePage) {
			...PreviewPage
		}
	}
	${PreviewPageFragmentDoc}
`;

/**
 * __useGetPreviewPageQuery__
 *
 * To run a query within a React component, call `useGetPreviewPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviewPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviewPageQuery({
 *   variables: {
 *      idPage: // value for 'idPage'
 *      idTypePage: // value for 'idTypePage'
 *   },
 * });
 */
export function useGetPreviewPageQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		GetPreviewPageQuery,
		GetPreviewPageQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		GetPreviewPageQuery,
		GetPreviewPageQueryVariables
	>(GetPreviewPageDocument, baseOptions);
}
export function useGetPreviewPageLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetPreviewPageQuery,
		GetPreviewPageQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		GetPreviewPageQuery,
		GetPreviewPageQueryVariables
	>(GetPreviewPageDocument, baseOptions);
}
export type GetPreviewPageQueryHookResult = ReturnType<
	typeof useGetPreviewPageQuery
>;
export type GetPreviewPageLazyQueryHookResult = ReturnType<
	typeof useGetPreviewPageLazyQuery
>;
export type GetPreviewPageQueryResult = Apollo.QueryResult<
	GetPreviewPageQuery,
	GetPreviewPageQueryVariables
>;
