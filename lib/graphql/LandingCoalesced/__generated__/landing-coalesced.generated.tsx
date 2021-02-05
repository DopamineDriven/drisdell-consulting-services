import * as Types from '../../../global/global-types.generated';

import { CustomPageFieldsFragment } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import { TestimonialFieldsFragment } from '../../../fragments/FragmentTestimonials/__generated__/testimonial-fields.generated';
import { AboutFieldsFragment } from '../../../fragments/FragmentAbouts/__generated__/about-fields.generated';
import { gql } from '@apollo/client';
import { CustomPageFieldsFragmentDoc } from '../../../fragments/FragmentCustomPages/__generated__/custom-page-fields.generated';
import { TestimonialFieldsFragmentDoc } from '../../../fragments/FragmentTestimonials/__generated__/testimonial-fields.generated';
import { AboutFieldsFragmentDoc } from '../../../fragments/FragmentAbouts/__generated__/about-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type LandingCoalescedQueryVariables = Types.Exact<{
	name: Types.Scalars['String'];
	aboutName: Types.Scalars['String'];
	field: Types.PostObjectsConnectionOrderbyEnum;
	order: Types.OrderEnum;
	first: Types.Scalars['Int'];
}>;

export type LandingCoalescedQuery = { __typename?: 'RootQuery' } & {
	landingPage?: Types.Maybe<
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
	clientTestimonials?: Types.Maybe<
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
	aboutPage?: Types.Maybe<
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
	aboutOur?: Types.Maybe<
		{ __typename?: 'RootQueryToAboutConnection' } & {
			edges?: Types.Maybe<
				Array<
					Types.Maybe<
						{ __typename?: 'RootQueryToAboutConnectionEdge' } & {
							node?: Types.Maybe<{ __typename?: 'About' } & AboutFieldsFragment>;
						}
					>
				>
			>;
		}
	>;
};

export const LandingCoalescedDocument = gql`
	query LandingCoalesced(
		$name: String!
		$aboutName: String!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		landingPage: pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
		clientTestimonials: testimonials(
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
		aboutPage: pages(where: { name: $aboutName }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
		aboutOur: abouts(
			first: $first
			where: { orderby: { field: $field, order: $order } }
		) {
			edges {
				node {
					...AboutFields
				}
			}
		}
	}
	${CustomPageFieldsFragmentDoc}
	${TestimonialFieldsFragmentDoc}
	${AboutFieldsFragmentDoc}
`;

/**
 * __useLandingCoalescedQuery__
 *
 * To run a query within a React component, call `useLandingCoalescedQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingCoalescedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingCoalescedQuery({
 *   variables: {
 *      name: // value for 'name'
 *      aboutName: // value for 'aboutName'
 *      field: // value for 'field'
 *      order: // value for 'order'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useLandingCoalescedQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		LandingCoalescedQuery,
		LandingCoalescedQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		LandingCoalescedQuery,
		LandingCoalescedQueryVariables
	>(LandingCoalescedDocument, baseOptions);
}
export function useLandingCoalescedLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		LandingCoalescedQuery,
		LandingCoalescedQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		LandingCoalescedQuery,
		LandingCoalescedQueryVariables
	>(LandingCoalescedDocument, baseOptions);
}
export type LandingCoalescedQueryHookResult = ReturnType<
	typeof useLandingCoalescedQuery
>;
export type LandingCoalescedLazyQueryHookResult = ReturnType<
	typeof useLandingCoalescedLazyQuery
>;
export type LandingCoalescedQueryResult = Apollo.QueryResult<
	LandingCoalescedQuery,
	LandingCoalescedQueryVariables
>;
