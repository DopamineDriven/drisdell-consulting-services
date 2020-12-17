import { gql } from '@apollo/client';
import { FRAGMENT_MENU_FIELDS } from '@lib/graphql';

const FOOTER_MENU = gql`
	${FRAGMENT_MENU_FIELDS}
	query FooterMenu {
		footerMenu: menuItems(where: { location: FOOTER, parentId: "0" }) {
			edges {
				node {
					...MenuFragment
				}
			}
		}
	}
`;

export default FOOTER_MENU;
