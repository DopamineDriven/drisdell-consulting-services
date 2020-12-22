import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_CHILDREN_PAGES: TypedDocumentNode = gql`
	fragment ChildrenPages on Page {
		content
		title
		id
		uri
		databaseId
		slug
		featuredImage {
			node {
				sourceUrl
			}
		}
		parentId
	}
`;

export default FRAGMENT_CHILDREN_PAGES;
