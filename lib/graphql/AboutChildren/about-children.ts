import { gql } from '@apollo/client';

const ABOUT_CHILDREN = gql`
	query AboutChildren(
		$nameIn: [String]
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
	) {
		pages(where: { nameIn: $nameIn, orderby: { field: $field, order: $order } }) {
			edges {
				node {
					slug
					title
					content
					id
				}
			}
		}
	}
`;

export default ABOUT_CHILDREN;
