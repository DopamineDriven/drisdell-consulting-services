import * as Types from '../../../global/global-types.generated';

import { gql } from '@apollo/client';
export type PageFragmentFragment = { __typename?: 'Page' } & Pick<
	Types.Page,
	'id' | 'title' | 'content' | 'slug' | 'uri'
>;

export const PageFragmentFragmentDoc = gql`
	fragment PageFragment on Page {
		id
		title
		content
		slug
		uri
	}
`;
