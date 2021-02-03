import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_POSITIONS_FIELDS: TypedDocumentNode = gql`
	fragment PositionFields on Position {
		content
		id
		title
		modified
		excerpt
		slug
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;

export default FRAGMENT_POSITIONS_FIELDS;
