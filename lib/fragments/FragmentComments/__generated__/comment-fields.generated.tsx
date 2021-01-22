import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type CommentFieldsFragment = { __typename?: 'Comment' } & Pick<
	Types.Comment,
	'id' | 'date' | 'type' | 'approved' | 'content'
>;

export const CommentFieldsFragmentDoc = gql`
	fragment commentFields on Comment {
		id
		date
		type
		approved
		content
	}
`;
