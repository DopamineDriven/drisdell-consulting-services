import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_MENU_FIELDS, FRAGMENT_PAGE_FIELDS } from '@lib/graphql';

const GET_PAGE: TypedDocumentNode = gql`
	${FRAGMENT_MENU_FIELDS},
	${FRAGMENT_PAGE_FIELDS}
	query GetPage($id: ID!, $idType: PageIdType!) {
		headerMenus: menuItems(where: { location: PRIMARY }) {
			edges {
				node {
					...MenuFragment
				}
			}
		}
		footerMenus: menuItems(where: { location: FOOTER }) {
			edges {
				node {
					...MenuFragment
				}
			}
		}
		page: page(id: $id, idType: $idType) {
			...PageFragment
		}
	}
`;

export default GET_PAGE;
