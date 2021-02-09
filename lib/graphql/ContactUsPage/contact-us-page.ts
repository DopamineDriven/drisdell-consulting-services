import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_CUSTOM_PAGE_FIELDS } from '@lib/fragments';

const CONTACT_US_PAGE: TypedDocumentNode = gql`
	${FRAGMENT_CUSTOM_PAGE_FIELDS}
	query ContactUsPage($name: String!) {
		pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
	}
`;

export default CONTACT_US_PAGE;
