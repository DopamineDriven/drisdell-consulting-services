import * as Types from '../../../global/global-types.generated';

import { FormFieldsFragment } from '../../../fragments/FragmentForms/__generated__/form-fields.generated';
import { gql } from '@apollo/client';
import { FormFieldsFragmentDoc } from '../../../fragments/FragmentForms/__generated__/form-fields.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ContactUsQueryQueryVariables = Types.Exact<{
	id: Types.Scalars['ID'];
	idTypeForm?: Types.Maybe<Types.FormIdTypeEnum>;
}>;

export type ContactUsQueryQuery = { __typename: 'RootQuery' } & {
	form?: Types.Maybe<{ __typename?: 'Form' } & FormFieldsFragment>;
};

export const ContactUsQueryDocument = gql`
	query ContactUsQuery($id: ID!, $idTypeForm: FormIdTypeEnum) {
		__typename
		form(idType: $idTypeForm, id: $id) {
			...FormFields
		}
	}
	${FormFieldsFragmentDoc}
`;

/**
 * __useContactUsQueryQuery__
 *
 * To run a query within a React component, call `useContactUsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactUsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactUsQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idTypeForm: // value for 'idTypeForm'
 *   },
 * });
 */
export function useContactUsQueryQuery(
	baseOptions: ApolloReactHooks.QueryHookOptions<
		ContactUsQueryQuery,
		ContactUsQueryQueryVariables
	>
) {
	return ApolloReactHooks.useQuery<
		ContactUsQueryQuery,
		ContactUsQueryQueryVariables
	>(ContactUsQueryDocument, baseOptions);
}
export function useContactUsQueryLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ContactUsQueryQuery,
		ContactUsQueryQueryVariables
	>
) {
	return ApolloReactHooks.useLazyQuery<
		ContactUsQueryQuery,
		ContactUsQueryQueryVariables
	>(ContactUsQueryDocument, baseOptions);
}
export type ContactUsQueryQueryHookResult = ReturnType<
	typeof useContactUsQueryQuery
>;
export type ContactUsQueryLazyQueryHookResult = ReturnType<
	typeof useContactUsQueryLazyQuery
>;
export type ContactUsQueryQueryResult = Apollo.QueryResult<
	ContactUsQueryQuery,
	ContactUsQueryQueryVariables
>;
