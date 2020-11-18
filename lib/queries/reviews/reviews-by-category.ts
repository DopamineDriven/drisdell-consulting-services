import { gql } from '@apollo/client';

const REVIEWS_BY_CATEGORY = gql`
	query ReviewPostsByCategory($first: Int!) {
		posts(where: { categoryName: "reviews" }, first: $first) {
			edges {
				node {
					author {
						node {
							avatar {
								url
							}
							firstName
							lastName
							name
						}
					}
					date
					slug
					title
					content
				}
			}
		}
	}
`;

export default REVIEWS_BY_CATEGORY;
