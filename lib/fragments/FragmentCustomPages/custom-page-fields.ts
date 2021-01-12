import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_CUSTOM_PAGE_FIELDS: TypedDocumentNode = gql`
	fragment CustomPageFields on Page {
		title
		content
		id
		slug
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;

export default FRAGMENT_CUSTOM_PAGE_FIELDS;
