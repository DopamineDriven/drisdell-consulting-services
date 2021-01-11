import { gql, TypedDocumentNode } from '@apollo/client';
import FRAGMENT_ABOUT_FIELDS from '../../fragments/FragmentAbouts';

const ABOUT_BY_SLUG: TypedDocumentNode = gql`
	${FRAGMENT_ABOUT_FIELDS}
	query AboutBySlug($id: ID!, $idType: AboutIdType!) {
		aboutPost: about(id: $id, idType: $idType) {
			...AboutFields
		}
	}
`;

export default ABOUT_BY_SLUG;
