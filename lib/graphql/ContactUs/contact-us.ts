import { gql, TypedDocumentNode } from '@apollo/client';

const CONTACT_US: TypedDocumentNode = gql`
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

export default CONTACT_US;
