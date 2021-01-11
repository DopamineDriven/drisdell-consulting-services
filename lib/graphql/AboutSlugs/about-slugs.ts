import { gql, TypedDocumentNode } from '@apollo/client';

const ABOUT_SLUGS: TypedDocumentNode = gql`
	query AboutSlugs(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		aboutslugs: abouts(
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

export default ABOUT_SLUGS;
