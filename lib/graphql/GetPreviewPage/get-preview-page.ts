import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_PREVIEW_PAGE } from '@lib/fragments';

const GET_PREVIEW_PAGE: TypedDocumentNode = gql`
	${FRAGMENT_PREVIEW_PAGE}
	query GetPreviewPage($idPage: ID!, $idTypePage: PageIdType!) {
		preview: page(id: $idPage, idType: $idTypePage) {
			...PreviewPage
		}
	}
`;

export default GET_PREVIEW_PAGE;

// id: 'about-us',
// idType: 'URI'
