import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type PreviewPageFragment = {
	__typename?: 'Page';
	databaseId: number;
	slug: Types.Maybe<string>;
	status: Types.Maybe<string>;
	uri: string;
};

export const PreviewPageFragmentDoc = gql`
	fragment PreviewPage on Page {
		databaseId
		slug
		status
		uri
	}
`;
