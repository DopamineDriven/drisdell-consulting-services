import { gql, TypedDocumentNode } from '@apollo/client';

const ABOUT_CHILDREN: TypedDocumentNode = gql`
	query ABOUT_CHILDREN($parentID: ID!) {
		pages: pages(where: { parent: $parentID }) {
			nodes {
				content(format: RENDERED)
				title
				id
				uri
				databaseId
				slug
				featuredImage {
					node {
						sourceUrl
					}
				}
				parentId
			}
		}
	}
`;

export default ABOUT_CHILDREN;

// id = 17 for about-us
