import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_ABOUT_FIELDS: TypedDocumentNode = gql`
	fragment AboutFields on About {
		content
		id
		title
		modified
		slug
		polly {
			audio
		}
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;

export default FRAGMENT_ABOUT_FIELDS;
