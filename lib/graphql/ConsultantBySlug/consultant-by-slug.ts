import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_CONSULTANTS_FIELDS } from '@lib/fragments';

const CONSULTANT_BY_SLUG: TypedDocumentNode = gql`
	${FRAGMENT_CONSULTANTS_FIELDS}
	query ConsultantBySlug($id: ID!, $idType: ConsultantIdType!) {
		consultantPost: consultant(id: $id, idType: $idType) {
			...ConsultantFields
		}
	}
`;

export default CONSULTANT_BY_SLUG;
