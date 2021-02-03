import { gql, TypedDocumentNode } from '@apollo/client';

const POSITION_SLUGS: TypedDocumentNode = gql`
	query PositionSlugs(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		positionSlugs: positions(
			where: { orderby: { field: $field, order: $order } }
			first: $first
		) {
			edges {
				node {
					uri
					slug
				}
			}
		}
	}
`;

export default POSITION_SLUGS;
