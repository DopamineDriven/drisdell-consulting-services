import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_POSITIONS_FIELDS } from '@lib/fragments';

const POSITIONS: TypedDocumentNode = gql`
	${FRAGMENT_POSITIONS_FIELDS}
	query Positions(
		$positionOrder: OrderEnum!
		$positionField: PostObjectsConnectionOrderbyEnum!
		$first: Int!
	) {
		positions(
			first: $first
			where: { orderby: { order: $positionOrder, field: $positionField } }
		) {
			edges {
				node {
					...PositionFields
				}
			}
		}
	}
`;

export default POSITIONS;
