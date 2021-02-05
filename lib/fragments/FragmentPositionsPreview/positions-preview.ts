import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_POSITIONS_PREVIEW_FIELD: TypedDocumentNode = gql`
	fragment PositionsPreviewFields on Position {
		id
		slug
		positionDetails {
			dateclosing
			jobtitle
			positiontype
			remotestatus
		}
	}
`;

export default FRAGMENT_POSITIONS_PREVIEW_FIELD;
