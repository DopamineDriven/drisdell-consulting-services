import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_PREVIEW_PAGE: TypedDocumentNode = gql`
	fragment PreviewPage on Page {
		databaseId
		slug
		status
		uri
	}
`;

export default FRAGMENT_PREVIEW_PAGE;
