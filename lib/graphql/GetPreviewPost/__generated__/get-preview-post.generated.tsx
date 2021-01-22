import * as Types from '../../../global/global-types.generated';

import { PreviewPostFragment } from '../../../fragments/FragmentPreviewPost/__generated__/preview-post-fields.generated';
import { gql } from '@apollo/client';
import { PreviewPostFragmentDoc } from '../../../fragments/FragmentPreviewPost/__generated__/preview-post-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetPreviewPostQueryVariables = Types.Exact<{
	idPost: Types.Scalars['ID'];
	idTypePost: Types.PostIdType;
}>;

export type GetPreviewPostQuery = { __typename?: 'RootQuery' } & {
	previewPost?: Types.Maybe<{ __typename?: 'Post' } & PreviewPostFragment>;
};

export const GetPreviewPostDocument = gql`
	query GetPreviewPost($idPost: ID!, $idTypePost: PostIdType!) {
		previewPost: post(id: $idPost, idType: $idTypePost) {
			...PreviewPost
		}
	}
	${PreviewPostFragmentDoc}
`;

/**
 * __useGetPreviewPostQuery__
 *
 * To run a query within a React component, call `useGetPreviewPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviewPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviewPostQuery({
 *   variables: {
 *      idPost: // value for 'idPost'
 *      idTypePost: // value for 'idTypePost'
 *   },
 * });
 */
export function useGetPreviewPostQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		GetPreviewPostQuery,
		GetPreviewPostQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		GetPreviewPostQuery,
		GetPreviewPostQueryVariables
	>(GetPreviewPostDocument, baseOptions);
}
export function useGetPreviewPostLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetPreviewPostQuery,
		GetPreviewPostQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		GetPreviewPostQuery,
		GetPreviewPostQueryVariables
	>(GetPreviewPostDocument, baseOptions);
}
export type GetPreviewPostQueryHookResult = ReturnType<
	typeof useGetPreviewPostQuery
>;
export type GetPreviewPostLazyQueryHookResult = ReturnType<
	typeof useGetPreviewPostLazyQuery
>;
export type GetPreviewPostQueryResult = Apollo.QueryResult<
	GetPreviewPostQuery,
	GetPreviewPostQueryVariables
>;
