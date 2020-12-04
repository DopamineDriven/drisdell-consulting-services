import { gql } from '@apollo/client';

const ABOUT_PAGE = gql`
	query AboutPage(
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

export default ABOUT_PAGE;
