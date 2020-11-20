import { gql } from '@apollo/client';
import FRAGMENT_AUTHOR_FIELDS from '../FragmentAuthors';

const FRAGMENT_ALL_POSTS_FIELDS = gql`
	fragment allPostsFields on Post {
		author {
			node {
				...authorFields
			}
		}
		title
		slug
		content
		categories {
			edges {
				node {
					id
					name
				}
			}
		}
	}
	${FRAGMENT_AUTHOR_FIELDS}
`;

export default FRAGMENT_ALL_POSTS_FIELDS;
