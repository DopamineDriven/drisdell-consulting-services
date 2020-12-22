import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_PREVIEW_POST: TypedDocumentNode = gql`
	fragment PreviewPost on Post {
		databaseId
		slug
		status
		uri
	}
`;

export default FRAGMENT_PREVIEW_POST;
