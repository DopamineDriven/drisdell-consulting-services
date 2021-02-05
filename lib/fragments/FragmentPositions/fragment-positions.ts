import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_POSITIONS_FIELDS: TypedDocumentNode = gql`
	fragment PositionFields on Position {
		content
		id
		title
		date
		modified
		excerpt
		slug
		positionDetails {
			dateclosing
			jobtitle
			positiontype
			remotestatus
		}
		featuredImage {
			node {
				sourceUrl
			}
		}
	}
`;

export default FRAGMENT_POSITIONS_FIELDS;
