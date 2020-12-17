import { gql } from '@apollo/client';

const FRAGMENT_MENU_FIELDS_CONDENSED = gql`
	fragment MenuFragmentCondensed on MenuItem {
		id
		label
		url
		path
	}
`;

export default FRAGMENT_MENU_FIELDS_CONDENSED;
