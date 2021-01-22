import { TypedDocumentNode, gql } from '@apollo/client';
import FRAGMENT_FORM_FIELDS from '../../fragments/FragmentForms/form-fields';

const CONTACT_US_QUERY: TypedDocumentNode = gql`
	${FRAGMENT_FORM_FIELDS}
	query ContactUsQuery($id: ID!, $idTypeForm: FormIdTypeEnum) {
		__typename
		form(idType: $idTypeForm, id: $id) {
			...FormFields
		}
	}
`;

export default CONTACT_US_QUERY;
