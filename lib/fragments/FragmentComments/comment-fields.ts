import { gql } from '@apollo/client';

const FRAGMENT_COMMENT_FIELDS = gql`
	fragment commentFields on Comment {
		id
		date
		type
		approved
		content
	}
`;

export default FRAGMENT_COMMENT_FIELDS;
