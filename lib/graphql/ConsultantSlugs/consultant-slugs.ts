import { gql, TypedDocumentNode } from '@apollo/client';

const CONSULTANT_SLUGS: TypedDocumentNode = gql`
	query ConsultantSlugs(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		consultantSlugs: consultants(
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

export default CONSULTANT_SLUGS;
