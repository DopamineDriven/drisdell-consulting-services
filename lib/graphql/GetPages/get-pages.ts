import { gql, TypedDocumentNode } from '@apollo/client';

// fetching all pages for slug and id

const GET_PAGES: TypedDocumentNode = gql`
	query GetPages(
		$first: Int!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
	) {
		pages: pages(
			first: $first
			where: { orderby: { field: $field, order: $order } }
		) {
			nodes {
				id
				slug
				uri
			}
		}
	}
`;

export default GET_PAGES;

// first 100
// field PARENT
// order ASC
