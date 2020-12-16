import { gql } from '@apollo/client';
import { FRAGMENT_MENU_FIELDS } from '@lib/graphql';

const FOOTER_MENU = gql`
	query FooterMenu {
		footerMenu: menuItems(where: { location: FOOTER, parentId: "0" }) {
			edges {
				node {
					...${FRAGMENT_MENU_FIELDS}
				}
			}
		}
	}
`;

export default FOOTER_MENU;
