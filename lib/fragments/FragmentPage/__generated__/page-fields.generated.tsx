import * as Types from '../../../global-types';

import { gql } from '@apollo/client';
export type PageFragmentFragment = {
	__typename?: 'Page';
	id: string;
	title: Types.Maybe<string>;
	content: Types.Maybe<string>;
	slug: Types.Maybe<string>;
	uri: string;
};

export const PageFragmentFragmentDoc = gql`
	fragment PageFragment on Page {
		id
		title
		content
		slug
		uri
	}
`;
