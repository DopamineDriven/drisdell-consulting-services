import * as Types from '../../../global/global-types.generated';

import { CustomPageFieldsFragment } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import { gql } from '@apollo/client';
import { CustomPageFieldsFragmentDoc } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ContactUsPageQueryVariables = Types.Exact<{
	name: Types.Scalars['String'];
}>;

export type ContactUsPageQuery = { __typename?: 'RootQuery' } & {
	pages?: Types.Maybe<
		{ __typename?: 'RootQueryToPageConnection' } & {
			edges?: Types.Maybe<
				Array<
					Types.Maybe<
						{ __typename?: 'RootQueryToPageConnectionEdge' } & {
							node?: Types.Maybe<{ __typename?: 'Page' } & CustomPageFieldsFragment>;
						}
					>
				>
			>;
		}
	>;
};

export const ContactUsPageDocument = gql`
	query ContactUsPage($name: String!) {
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
 * __useContactUsPageQuery__
 *
 * To run a query within a React component, call `useContactUsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactUsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactUsPageQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useContactUsPageQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		ContactUsPageQuery,
		ContactUsPageQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		ContactUsPageQuery,
		ContactUsPageQueryVariables
	>(ContactUsPageDocument, baseOptions);
}
export function useContactUsPageLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ContactUsPageQuery,
		ContactUsPageQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		ContactUsPageQuery,
		ContactUsPageQueryVariables
	>(ContactUsPageDocument, baseOptions);
}
export type ContactUsPageQueryHookResult = ReturnType<
	typeof useContactUsPageQuery
>;
export type ContactUsPageLazyQueryHookResult = ReturnType<
	typeof useContactUsPageLazyQuery
>;
export type ContactUsPageQueryResult = Apollo.QueryResult<
	ContactUsPageQuery,
	ContactUsPageQueryVariables
>;
