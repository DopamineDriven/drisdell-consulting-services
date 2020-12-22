import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_MENU_FIELDS } from '@lib/fragments';

const HEADER_MENU: TypedDocumentNode = gql`
	${FRAGMENT_MENU_FIELDS}
	query HeaderMenu {
		menuItems(where: { location: PRIMARY, parentId: "0" }) {
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
