import * as Types from '../../../global-types';

import { CustomPageFieldsFragment } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import { ConsultantFieldsFragment } from '../../../fragments/FragmentConsultants/__generated__/consultants-post-fields.generated';
import { gql } from '@apollo/client';
import { CustomPageFieldsFragmentDoc } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import { ConsultantFieldsFragmentDoc } from '../../../fragments/FragmentConsultants/__generated__/consultants-post-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ConsultantsDataQueryVariables = Types.Exact<{
	name: Types.Scalars['String'];
	field: Types.PostObjectsConnectionOrderbyEnum;
	order: Types.OrderEnum;
	first: Types.Scalars['Int'];
}>;

export type ConsultantsDataQuery = {
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
	consultants: Types.Maybe<{
		__typename?: 'RootQueryToConsultantConnection';
		edges: Types.Maybe<
			Array<
				Types.Maybe<{
					__typename?: 'RootQueryToConsultantConnectionEdge';
					node: Types.Maybe<
						{ __typename?: 'Consultant' } & ConsultantFieldsFragment
					>;
				}>
			>
		>;
	}>;
};

export const ConsultantsDataDocument = gql`
	query ConsultantsData(
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
		consultants(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				node {
					...ConsultantFields
				}
			}
		}
	}
	${CustomPageFieldsFragmentDoc}
	${ConsultantFieldsFragmentDoc}
`;

/**
 * __useConsultantsDataQuery__
 *
 * To run a query within a React component, call `useConsultantsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsultantsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsultantsDataQuery({
 *   variables: {
 *      name: // value for 'name'
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useConsultantsDataQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		ConsultantsDataQuery,
		ConsultantsDataQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		ConsultantsDataQuery,
		ConsultantsDataQueryVariables
	>(ConsultantsDataDocument, baseOptions);
}
export function useConsultantsDataLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ConsultantsDataQuery,
		ConsultantsDataQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		ConsultantsDataQuery,
		ConsultantsDataQueryVariables
	>(ConsultantsDataDocument, baseOptions);
}
export type ConsultantsDataQueryHookResult = ReturnType<
	typeof useConsultantsDataQuery
>;
export type ConsultantsDataLazyQueryHookResult = ReturnType<
	typeof useConsultantsDataLazyQuery
>;
export type ConsultantsDataQueryResult = Apollo.QueryResult<
	ConsultantsDataQuery,
	ConsultantsDataQueryVariables
>;
