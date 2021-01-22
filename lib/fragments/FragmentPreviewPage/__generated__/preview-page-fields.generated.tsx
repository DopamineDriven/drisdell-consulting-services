import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type PreviewPageFragment = { __typename?: 'Page' } & Pick<
	Types.Page,
	'databaseId' | 'slug' | 'status' | 'uri'
>;

export const PreviewPageFragmentDoc = gql`
	fragment PreviewPage on Page {
		databaseId
		slug
		status
		uri
	}
`;
