import { gql, TypedDocumentNode } from '@apollo/client';
import {
	FRAGMENT_ABOUT_FIELDS,
	FRAGMENT_ABOUT_PAGE_FIELDS
} from '@lib/fragments';

const ABOUT_CARDS_DATA: TypedDocumentNode = gql`
	${FRAGMENT_ABOUT_FIELDS},
	${FRAGMENT_ABOUT_PAGE_FIELDS}
	query AboutCardsData(
		$name: String!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		pages(where: { name: $name }) {
			edges {
				node {
					...AboutPageFields
				}
			}
		}
		abouts(where: { orderby: { field: $field, order: $order } }, first: $first) {
			edges {
				node {
					...AboutFields
				}
			}
		}
	}
`;

export default ABOUT_CARDS_DATA;
