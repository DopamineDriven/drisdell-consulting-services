import { TypedDocumentNode, gql } from '@apollo/client';

export const FRAGMENT_CHILD_FORM_FIELDS: TypedDocumentNode = gql`
	fragment ChildFormFields on FormField {
		fieldLabel
		id
		fieldId
		id
		label
		type
	}
`;

const FRAGMENT_FORM_FIELDS: TypedDocumentNode = gql`
	${FRAGMENT_CHILD_FORM_FIELDS}
	fragment FormFields on Form {
		addSubmit
		databaseId
		id
		title
		key
		formId
		uniqueFieldSet {
			uniqueField
		}
		fields {
			edges {
				node {
					...ChildFormFields
				}
			}
		}
	}
`;

export default FRAGMENT_FORM_FIELDS;
