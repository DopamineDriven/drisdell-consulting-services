import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_MENU_FIELDS, FRAGMENT_PAGE_FIELDS } from '@lib/fragments';

const GET_PAGE: TypedDocumentNode = gql`
	${FRAGMENT_MENU_FIELDS},
	${FRAGMENT_PAGE_FIELDS}
	query GetPage(
		$idPage: ID!, 
		$idTypePage: PageIdType!
		$idHead: ID!
		$idTypeHead: MenuNodeIdTypeEnum!
		$idFoot: ID!
		$idTypeFoot: MenuNodeIdTypeEnum!
	) {
headerMenus: menu(id: $idHead, idType: $idTypeHead) {
			menuItems(where: { parentId: 0 }) {
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
		footerMenus: menu(id: $idFoot, idType: $idTypeFoot) {
			menuItems(where: { parentId: 0 }) {
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
		page: page(id: $idPage, idType: $idTypePage) {
			...PageFragment
		}
	}
`;

export default GET_PAGE;
