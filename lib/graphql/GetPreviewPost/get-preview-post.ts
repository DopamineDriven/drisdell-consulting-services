import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_PREVIEW_POST } from '@lib/fragments';

const GET_PREVIEW_POST: TypedDocumentNode = gql`
	${FRAGMENT_PREVIEW_POST}
	query GetPreviewPost($idPost: ID!, $idTypePost: PostIdType!) {
		previewPost: post(id: $idPost, idType: $idTypePost) {
			...PreviewPost
		}
	}
`;

export default GET_PREVIEW_POST;
