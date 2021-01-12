import { gql, TypedDocumentNode } from '@apollo/client';
import FRAGMENT_CUSTOM_PAGE_FIELDS from '@lib/fragments/FragmentCustomPages';

const LANDING_PAGE: TypedDocumentNode = gql`
	${FRAGMENT_CUSTOM_PAGE_FIELDS}
	query LandingPage($name: String!) {
		pages(where: { name: $name }) {
			edges {
				node {
					...CustomPageFields
				}
			}
		}
	}
`;

export default LANDING_PAGE;
