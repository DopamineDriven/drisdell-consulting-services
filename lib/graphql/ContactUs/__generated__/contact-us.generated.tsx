import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ContactUsMutationMutationVariables = Types.Exact<{
	formId?: Types.Maybe<Types.Scalars['Int']>;
	data?: Types.Maybe<Array<Types.Maybe<Types.InputField>>>;
}>;

export type ContactUsMutationMutation = { __typename: 'RootMutation' } & {
	submitForm?: Types.Maybe<
		{ __typename?: 'SubmitFormPayload' } & Pick<
			Types.SubmitFormPayload,
			'message' | 'success'
		> & {
				errors?: Types.Maybe<
					Array<
						Types.Maybe<
							{ __typename?: 'FieldError' } & Pick<
								Types.FieldError,
								'fieldId' | 'message'
							>
						>
					>
				>;
			}
	>;
};

export const ContactUsMutationDocument = gql`
	mutation ContactUsMutation($formId: Int, $data: [InputField]) {
		__typename
		submitForm(input: { formId: $formId, data: $data }) {
			errors {
				fieldId
				message
			}
			message
			success
		}
	}
`;
export type ContactUsMutationMutationFn = Apollo.MutationFunction<
	ContactUsMutationMutation,
	ContactUsMutationMutationVariables
>;

/**
 * __useContactUsMutationMutation__
 *
 * To run a mutation, you first call `useContactUsMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUsMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUsMutationMutation, { data, loading, error }] = useContactUsMutationMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useContactUsMutationMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		ContactUsMutationMutation,
		ContactUsMutationMutationVariables
	>
) {
	return ApolloReactHooks.useMutation<
		ContactUsMutationMutation,
		ContactUsMutationMutationVariables
	>(ContactUsMutationDocument, baseOptions);
}
export type ContactUsMutationMutationHookResult = ReturnType<
	typeof useContactUsMutationMutation
>;
export type ContactUsMutationMutationResult = Apollo.MutationResult<ContactUsMutationMutation>;
export type ContactUsMutationMutationOptions = Apollo.BaseMutationOptions<
	ContactUsMutationMutation,
	ContactUsMutationMutationVariables
>;
