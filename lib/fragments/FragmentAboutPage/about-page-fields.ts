import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_ABOUT_PAGE_FIELDS: TypedDocumentNode = gql`
	fragment AboutPageFields on Page {
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

export default FRAGMENT_ABOUT_PAGE_FIELDS;
