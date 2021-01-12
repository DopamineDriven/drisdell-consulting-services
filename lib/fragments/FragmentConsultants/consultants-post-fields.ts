import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_CONSULTANTS_FIELDS: TypedDocumentNode = gql`
	fragment ConsultantFields on Consultant {
		content
		id
		title
		slug
		modified
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;

export default FRAGMENT_CONSULTANTS_FIELDS;
