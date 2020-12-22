import { gql, TypedDocumentNode } from '@apollo/client';
import PostInfoFragment from '../../fragments/FragmentPosts';

const POST_BY_SLUG: TypedDocumentNode = gql`
	query GetPostBySlug($id: ID!, $idType: PostIdType!) {
		post(id: $id, idType: $idType) {
			...allPostsFields
		}
	}
	${PostInfoFragment}
`;

export default POST_BY_SLUG;
