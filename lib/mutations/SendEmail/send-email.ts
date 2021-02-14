import { TypedDocumentNode, gql } from '@apollo/client';

const SEND_EMAIL: TypedDocumentNode = gql`
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

export default SEND_EMAIL;
