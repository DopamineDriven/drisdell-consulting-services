import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_MENU_FIELDS } from '@lib/fragments';

const HEADER_FOOTER: TypedDocumentNode = gql`
	${FRAGMENT_MENU_FIELDS}
	query HeaderFooter(
		$idHead: ID!
		$idTypeHead: MenuNodeIdTypeEnum!
		$idFoot: ID!
		$idTypeFoot: MenuNodeIdTypeEnum!
	) {
		headerDynamic: menu(id: $idHead, idType: $idTypeHead) {
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
		footerDynamic: menu(id: $idFoot, idType: $idTypeFoot) {
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
	}
`;

export default HEADER_FOOTER;

// Footer
// HEADER
