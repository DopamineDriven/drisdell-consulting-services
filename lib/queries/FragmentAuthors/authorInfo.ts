import { gql } from '@apollo/client';

const FRAGMENT_AUTHOR_FIELDS = gql`
	fragment authorFields on User {
		name
		firstName
		lastName
		avatar {
			url
			size
			height
			width
		}
	}
`;

export default FRAGMENT_AUTHOR_FIELDS;
