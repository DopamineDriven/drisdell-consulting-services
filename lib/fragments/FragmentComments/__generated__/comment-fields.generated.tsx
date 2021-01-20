import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type CommentFieldsFragment = {
	__typename?: 'Comment';
	id: string;
	date: Types.Maybe<string>;
	type: Types.Maybe<string>;
	approved: Types.Maybe<boolean>;
	content: Types.Maybe<string>;
};

export const CommentFieldsFragmentDoc = gql`
	fragment commentFields on Comment {
		id
		date
		type
		approved
		content
	}
`;
