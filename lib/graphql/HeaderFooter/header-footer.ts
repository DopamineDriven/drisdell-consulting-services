import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_MENU_FIELDS } from '@lib/graphql';

const HEADER_FOOTER: TypedDocumentNode = gql`
	${FRAGMENT_MENU_FIELDS}
	query HeaderFooter {
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
		footerMenu: menuItems(where: { location: FOOTER, parentId: "0" }) {
			edges {
				node {
					...MenuFragment
				}
			}
		}
	}
`;

export default HEADER_FOOTER;
