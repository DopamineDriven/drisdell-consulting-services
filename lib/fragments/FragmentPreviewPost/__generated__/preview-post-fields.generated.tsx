import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type PreviewPostFragment = {
	__typename?: 'Post';
	databaseId: number;
	slug: Types.Maybe<string>;
	status: Types.Maybe<string>;
	uri: string;
};

export const PreviewPostFragmentDoc = gql`
	fragment PreviewPost on Post {
		databaseId
		slug
		status
		uri
	}
`;
