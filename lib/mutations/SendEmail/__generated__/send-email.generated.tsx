import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type SendEmailMutationVariables = Types.Exact<{
	body?: Types.Maybe<Types.Scalars['String']>;
	clientMutationId?: Types.Maybe<Types.Scalars['String']>;
	from?: Types.Maybe<Types.Scalars['String']>;
	replyTo?: Types.Maybe<Types.Scalars['String']>;
	subject?: Types.Maybe<Types.Scalars['String']>;
	to?: Types.Maybe<Types.Scalars['String']>;
}>;

export type SendEmailMutation = { __typename?: 'RootMutation' } & {
	sendEmail?: Types.Maybe<
		{ __typename?: 'SendEmailPayload' } & Pick<
			Types.SendEmailPayload,
			'clientMutationId' | 'message' | 'origin' | 'replyTo' | 'to' | 'sent'
		>
	>;
};

export const SendEmailDocument = gql`
	mutation SendEmail(
		$body: String
		$clientMutationId: String
		$from: String
		$replyTo: String
		$subject: String
		$to: String
	) {
		sendEmail(
			input: {
				body: $body
				clientMutationId: $clientMutationId
				from: $from
				subject: $subject
				to: $to
				replyTo: $replyTo
			}
		) {
			clientMutationId
			message
			origin
			replyTo
			to
			sent
		}
	}
`;
export type SendEmailMutationFn = Apollo.MutationFunction<
	SendEmailMutation,
	SendEmailMutationVariables
>;

/**
 * __useSendEmailMutation__
 *
 * To run a mutation, you first call `useSendEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailMutation, { data, loading, error }] = useSendEmailMutation({
 *   variables: {
 *      body: // value for 'body'
 *      clientMutationId: // value for 'clientMutationId'
 *      from: // value for 'from'
 *      replyTo: // value for 'replyTo'
 *      subject: // value for 'subject'
 *      to: // value for 'to'
 *   },
 * });
 */
export function useSendEmailMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<
		SendEmailMutation,
		SendEmailMutationVariables
	>
) {
	return ApolloReactHooks.useMutation<
		SendEmailMutation,
		SendEmailMutationVariables
	>(SendEmailDocument, baseOptions);
}
export type SendEmailMutationHookResult = ReturnType<
	typeof useSendEmailMutation
>;
export type SendEmailMutationResult = Apollo.MutationResult<SendEmailMutation>;
export type SendEmailMutationOptions = Apollo.BaseMutationOptions<
	SendEmailMutation,
	SendEmailMutationVariables
>;
