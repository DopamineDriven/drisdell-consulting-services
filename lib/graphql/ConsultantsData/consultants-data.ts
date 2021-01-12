import { gql, TypedDocumentNode } from '@apollo/client';
import {
	FRAGMENT_CONSULTANTS_FIELDS,
	FRAGMENT_CUSTOM_PAGE_FIELDS
} from '@lib/fragments';

const CONSULTANTS_DATA: TypedDocumentNode = gql`
  ${FRAGMENT_CONSULTANTS_FIELDS},
  ${FRAGMENT_CUSTOM_PAGE_FIELDS}
  query ConsultantsData(
		$name: String!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$first: Int!
	) {
		pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
		consultants(where: { orderby: { field: $field, order: $order } }, first: $first) {
			edges {
				node {
					...ConsultantFields
				}
			}
		}
	}
`;

export default CONSULTANTS_DATA;
