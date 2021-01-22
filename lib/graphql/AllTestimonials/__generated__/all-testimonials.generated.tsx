import * as Types from '../../../global/global-types.generated';

import { TestimonialFieldsFragment } from '../../../fragments/FragmentTestimonials/__generated__/testimonial-fields.generated';
import { gql } from '@apollo/client';
import { TestimonialFieldsFragmentDoc } from '../../../fragments/FragmentTestimonials/__generated__/testimonial-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type AllTestimonialsQueryVariables = Types.Exact<{
	field: Types.PostObjectsConnectionOrderbyEnum;
	order: Types.OrderEnum;
	first: Types.Scalars['Int'];
}>;

export type AllTestimonialsQuery = { __typename?: 'RootQuery' } & {
	testimonials?: Types.Maybe<
		{ __typename?: 'RootQueryToTestimonialConnection' } & {
			edges?: Types.Maybe<
				Array<
					Types.Maybe<
						{ __typename?: 'RootQueryToTestimonialConnectionEdge' } & Pick<
							Types.RootQueryToTestimonialConnectionEdge,
							'cursor'
						> & {
								node?: Types.Maybe<
									{ __typename?: 'Testimonial' } & TestimonialFieldsFragment
								>;
							}
					>
				>
			>;
		}
	>;
};

export const AllTestimonialsDocument = gql`
	query AllTestimonials(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		testimonials(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				cursor
				node {
					...TestimonialFields
				}
			}
		}
	}
	${TestimonialFieldsFragmentDoc}
`;

/**
 * __useAllTestimonialsQuery__
 *
 * To run a query within a React component, call `useAllTestimonialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTestimonialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTestimonialsQuery({
 *   variables: {
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllTestimonialsQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		AllTestimonialsQuery,
		AllTestimonialsQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		AllTestimonialsQuery,
		AllTestimonialsQueryVariables
	>(AllTestimonialsDocument, baseOptions);
}
export function useAllTestimonialsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		AllTestimonialsQuery,
		AllTestimonialsQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		AllTestimonialsQuery,
		AllTestimonialsQueryVariables
	>(AllTestimonialsDocument, baseOptions);
}
export type AllTestimonialsQueryHookResult = ReturnType<
	typeof useAllTestimonialsQuery
>;
export type AllTestimonialsLazyQueryHookResult = ReturnType<
	typeof useAllTestimonialsLazyQuery
>;
export type AllTestimonialsQueryResult = Apollo.QueryResult<
	AllTestimonialsQuery,
	AllTestimonialsQueryVariables
>;
