import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_POSITIONS_FIELDS } from '@lib/fragments';

const POSITION_BY_SLUG: TypedDocumentNode = gql`
	query PositionBySlug($id: ID!, $idType: PositionIdType!) {
    ${FRAGMENT_POSITIONS_FIELDS}
		positionBySlug: position(id: $id, idType: $idType) {
			...PositionFields
		}
	}
`;

export default POSITION_BY_SLUG;
