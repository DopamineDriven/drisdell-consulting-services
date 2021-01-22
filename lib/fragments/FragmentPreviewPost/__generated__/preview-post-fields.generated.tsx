import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type PreviewPostFragment = { __typename?: 'Post' } & Pick<
	Types.Post,
	'databaseId' | 'slug' | 'status' | 'uri'
>;

export const PreviewPostFragmentDoc = gql`
	fragment PreviewPost on Post {
		databaseId
		slug
		status
		uri
	}
`;
