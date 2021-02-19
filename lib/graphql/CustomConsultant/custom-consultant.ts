import { gql, TypedDocumentNode } from '@apollo/client';
import {
	FRAGMENT_CONSULTANTS_FIELDS,
	FRAGMENT_POSITIONS_PREVIEW_FIELD
} from '@lib/fragments';

const CUSTOM_CONSULTANT: TypedDocumentNode = gql`
  ${FRAGMENT_CONSULTANTS_FIELDS},
	${FRAGMENT_POSITIONS_PREVIEW_FIELD}
  query CustomConsultantPage($id: ID!, $idType: ConsultantIdType!) {
  consultantSlug: consultant(id: $id, idType: $idType) {
    ...ConsultantFields
  }
  positionsPreview: positions {
    edges {
      node {
        ...PositionsPreviewFields
      }
    }
  }
}
`;

export default CUSTOM_CONSULTANT;
