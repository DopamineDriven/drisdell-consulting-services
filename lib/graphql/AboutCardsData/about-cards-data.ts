import { gql, TypedDocumentNode } from '@apollo/client';
import FRAGMENT_ABOUT_FIELDS from '../../fragments/FragmentAbouts';

const ABOUT_CARDS_DATA: TypedDocumentNode = gql`
	${FRAGMENT_ABOUT_FIELDS}
	query AboutCardsData(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
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
