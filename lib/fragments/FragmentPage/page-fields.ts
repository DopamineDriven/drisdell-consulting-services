import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_PAGE_FIELDS: TypedDocumentNode = gql`
	fragment PageFragment on Page {
		id
		title
		content
		slug
		uri
	}
`;
export default FRAGMENT_PAGE_FIELDS;
