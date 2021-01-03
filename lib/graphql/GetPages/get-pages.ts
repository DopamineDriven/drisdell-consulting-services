import { gql, TypedDocumentNode } from '@apollo/client';

// fetching all pages for slug and id

const GET_PAGES: TypedDocumentNode = gql`
	query GetPages(
		$first: Int!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$parentIn: [ID]
	) {
		pages: pages(
			first: $first
			where: { parentIn: $parentIn, orderby: { field: $field, order: $order } }
		) {
			nodes {
				id
				uri
				slug
			}
		}
	}
`;

export default GET_PAGES;

// first 100
// field PARENT     cG9zdDoxNw==   17
// order ASC
