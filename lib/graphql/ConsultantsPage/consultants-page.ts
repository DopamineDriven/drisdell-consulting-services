import { gql, TypedDocumentNode } from '@apollo/client';

const CONSULTANTS_PAGE: TypedDocumentNode = gql`
	query ConsultantsPage(
		$name: String!
		$order: OrderEnum!
		$field: PostObjectsConnectionOrderbyEnum!
	) {
		pages(where: { name: $name }) {
			edges {
				node {
					featuredImage {
						node {
							sourceUrl
						}
					}
					title
					content
					children(where: { orderby: { field: $field, order: $order } }) {
						nodes {
							slug
							... on Page {
								id
								title
							}
						}
					}
				}
			}
		}
	}
`;

export default CONSULTANTS_PAGE;

/*
const CONSULTANTS_PAGE: TypedDocumentNode = gql`
	query ConsultantsPage(
		$name: String!
		$order: OrderEnum!
		$field: PostObjectsConnectionOrderbyEnum!
	) {
		pages(where: { name: $name }) {
			edges {
				node {
					featuredImage {
						node {
							sourceUrl
						}
					}
					title
					content
					children(where: { orderby: { field: $field, order: $order } }) {
						nodes {
							slug
							... on Page {
								id
								title
							}
						}
					}
				}
			}
		}
	}
`;
*/
