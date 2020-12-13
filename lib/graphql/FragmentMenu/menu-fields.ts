import { gql, TypedDocumentNode } from '@apollo/client';

const FRAGMENT_MENU_FIELDS: TypedDocumentNode = gql`
	fragment MenuFragment on MenuItem {
		id
		label
		url
		path
		childItems {
			edges {
				node {
					id
					label
					url
					path
				}
			}
		}
	}
`;

export default FRAGMENT_MENU_FIELDS;
