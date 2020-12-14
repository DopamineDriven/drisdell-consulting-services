import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_MENU_FIELDS } from '@lib/graphql';

const HEADER_MENU: TypedDocumentNode = gql`
	${FRAGMENT_MENU_FIELDS}
	query HeaderMenu {
		headerMenu: menuItems(where: { location: PRIMARY, parentId: "0" }) {
			edges {
				node {
					...MenuFragment
					childItems {
						edges {
							node {
								...MenuFragment
							}
						}
					}
				}
			}
		}
	}
`;

export default HEADER_MENU;
