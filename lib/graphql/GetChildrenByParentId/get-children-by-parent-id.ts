import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_CHILDREN_PAGES } from '@lib/fragments';

const GET_CHILDREN_BY_PARENT_ID: TypedDocumentNode = gql`
	${FRAGMENT_CHILDREN_PAGES}
	query GetChildrenByParentID($parentID: ID!) {
		pages: pages(where: { parent: $parentID }) {
			nodes {
				...ChildrenPages
			}
		}
	}
`;

export default GET_CHILDREN_BY_PARENT_ID;
